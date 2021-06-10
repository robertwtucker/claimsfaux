/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import qs from 'qs'
import axios from 'axios'
import {
  Box,
  Button,
  ColumnConfig,
  DataTable,
  Header,
  Layer,
  Text,
} from 'grommet'
import { Client } from '../data/Claims'

export interface CreateProcessTicketProps {
  claim: Client
  isModal: boolean
  hideCallback: () => void
}

export type InteractiveProcessListResponseType = {
  items?: InteractiveProcessListItemType[]
  totalCount?: number
}

export type InteractiveProcessListItemType = {
  type?: string
  fileName?: string
  folder?: string
  name?: string
  ticketTitle?: string
  ticketDescription?: string
}

export type ExecuteInteractiveProcessResponseType = {
  guid: string
}

export type FormDataPropsType = {
  Name: string
  Surname: string
  Gender: string
  AddressSalutation: string
  City: string
  Zip: string
  State: string
  ClaimID: string
  IncidentDate: string
  EstMarketValue: string
  Mileage: string
  MileageDeduction: string
  PriorDamageDeduction: string
  Deduction: string
  Payout: string
}

type State = {
  items?: InteractiveProcessListItemType[]
  loading: boolean
  error?: any
}

enum ActionKind {
  ApiCallSuccess = 'SUCCESS',
  ApiCallError = 'ERROR',
}

type Action =
  | {
      type: ActionKind.ApiCallSuccess
      payload: InteractiveProcessListItemType[]
    }
  | { type: ActionKind.ApiCallError; payload: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionKind.ApiCallSuccess:
      return {
        ...state,
        items: action.payload,
        loading: false,
      }
    case ActionKind.ApiCallError:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
  }
}

const initialState = {
  items: undefined,
  loading: true,
  error: undefined,
}

const columns: ColumnConfig<InteractiveProcessListItemType>[] = [
  {
    property: 'name',
    header: 'Name',
  },
  {
    property: 'ticketTitle',
    header: 'Title',
  },
  {
    property: 'ticketDescription',
    header: 'Description',
  },
]

export default function CreateProcessTicket(props: CreateProcessTicketProps) {
  const { claim, hideCallback, isModal } = props
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    const getInteractiveProcesses = async () => {
      // TODO: Externalize URLs, keys and user auth
      const authParams = qs.stringify({
        apiKey: 'KN0gla8.ANxI0Z82f38PCNGhZOrqIJWjBOjOc2jzXt0',
        userName: 'writer',
      })

      try {
        const authResponse = await axios({
          method: 'POST',
          url: 'https://inspiredemo.sptcloud.com/interactive/api/v1/access-token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: authParams,
        })

        const listResponse =
          await axios.request<InteractiveProcessListResponseType>({
            method: 'GET',
            url: 'https://inspiredemo.sptcloud.com/interactive/api/v1/interactive-process/list',
            headers: {
              Authorization: `Bearer ${authResponse.data}`,
            },
          })

        // console.log('list', listResponse.data)
        const items = listResponse.data
          .items as InteractiveProcessListItemType[]
        // console.log('items', items)
        dispatch({
          type: ActionKind.ApiCallSuccess,
          payload: items,
        })
      } catch (error) {
        const message = `An error occurred fetching proceses: ${error.message}`
        console.error(message)
        dispatch({ type: ActionKind.ApiCallError, payload: message })
      }
    }

    getInteractiveProcesses()
  }, [])

  const handleClick = async (item: InteractiveProcessListItemType) => {
    // TODO: Externalize URLs, keys and user auth
    const authParams = qs.stringify({
      apiKey: 'KN0gla8.ANxI0Z82f38PCNGhZOrqIJWjBOjOc2jzXt0',
      userName: 'writer',
    })

    try {
      const authResponse = await axios({
        method: 'POST',
        url: 'https://inspiredemo.sptcloud.com/interactive/api/v1/access-token',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: authParams,
      })

      var processParams = qs.stringify({
        fileName: 'Vital_Claim.json',
        contractId: claim.Claim.Number,
      })
      const executeResponse =
        await axios.request<ExecuteInteractiveProcessResponseType>({
          method: 'POST',
          url: 'https://inspiredemo.sptcloud.com/interactive/api/v1/interactive-process/execute',
          headers: {
            Authorization: `Bearer ${authResponse.data}`,
          },
          data: processParams,
        })

      // console.log('guid', executeResponse.data.guid)
      const guid = executeResponse.data.guid

      const formDataResponse = await axios.request<FormDataPropsType>({
        method: 'GET',
        url: `https://inspiredemo.sptcloud.com/interactive/api/v1/interactive-process-ticket/${guid}/dc-form/data`,
        headers: {
          Authorization: `Bearer ${authResponse.data}`,
        },
      })

      // console.log('form data', formDataResponse.data)
      const formData = formDataResponse.data

      if (formData) {
        formData.Name = claim.FirstName
        formData.Surname = claim.LastName
        formData.Gender = claim.Gender
        formData.AddressSalutation = claim.AddressSalutation
        formData.ClaimID = claim.Claim.Number
        formData.IncidentDate = claim.Claim.DateOfLoss
        formData.EstMarketValue = claim.Claim.VehicleActualCashValue
        formData.Mileage = claim.Claim.AutoInsurance.Mileage
        formData.Deduction = claim.Policy.CoverageDeductible

        await axios({
          method: 'PUT',
          url: `https://inspiredemo.sptcloud.com/interactive/api/v1/interactive-process-ticket/${guid}/dc-form/data`,
          headers: {
            Authorization: `Bearer ${authResponse.data}`,
            'Content-Type': 'application/json;charset=UTF-8',
          },
          data: formData,
        })
      }

      hideCallback()
    } catch (error) {
      const message = `An error occurred executing the process: ${error.message}`
      console.error(message)
      dispatch({ type: ActionKind.ApiCallError, payload: message })
    }
  }

  return (
    <Layer
      onEsc={hideCallback}
      onClickOutside={isModal ? () => {} : hideCallback}
    >
      <Header pad="small">
        <Text size="large" weight="bold">
          Interactive Processes Available
        </Text>
      </Header>
      <Box pad="small" gap="medium">
        <DataTable
          columns={columns}
          data={state.items}
          onClickRow={(event) => {
            event.preventDefault()
            handleClick(event.datum)
          }}
        />
        <Box direction="row" align="center" justify="center">
          <Button label="Cancel" onClick={hideCallback} />
        </Box>
      </Box>
    </Layer>
  )
}
