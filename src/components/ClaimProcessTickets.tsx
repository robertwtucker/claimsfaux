/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import qs from 'qs'
import axios from 'axios'
import { ColumnConfig, DataTable, Text } from 'grommet'

export interface IInteractiveProcessTicketListResponse {
  items?: IInteractiveProcessTicketListItem[]
  totalCount?: number
}

export interface IInteractiveProcessTicketListItem {
  id?: number
  guid?: string
  name?: string
  title?: string
  stateId?: string
  stateName?: string
  contractId?: null
  contractName?: null
  ticketIcon?: string
  created?: number
  changed?: number
  moduleType?: string
  systemVariables?: IInteractiveProcessTicketListItemSystemVariables
}

export interface IInteractiveProcessTicketListItemSystemVariables {
  Multiapprove_Users?: string
  Created_User?: string
  'alternatives ID'?: string
  IsInInteractiveProcess?: string
  TestRun_User?: string
  InteractiveCurrentUser?: string
  Assigned_User?: string
  InteractiveCurrentUserLanguage?: string
  Assigned_User_Email?: string
  archive?: string
  'Inspire Scaler'?: string
  print?: string
  'iiaoutput Channels'?: string
  Multiapprove_Reject?: string
  IsDirty?: string
  email?: string
}

type State = {
  tickets?: IInteractiveProcessTicketListItem[]
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
      payload: IInteractiveProcessTicketListItem[]
    }
  | { type: ActionKind.ApiCallError; payload: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionKind.ApiCallSuccess:
      return {
        ...state,
        tickets: action.payload,
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

const initialState: State = {
  tickets: undefined,
  loading: true,
  error: undefined,
}

interface IClaimProcessTicketsProps {
  claimId: string
}

const ClaimProcessTickets: React.FC<IClaimProcessTicketsProps> = ({
  claimId,
}) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    const getTicketsForClaim = async () => {
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
          await axios.request<IInteractiveProcessTicketListResponse>({
            method: 'GET',
            url: 'https://inspiredemo.sptcloud.com/interactive/api/v1/interactive-process-ticket/list',
            headers: {
              Authorization: `Bearer ${authResponse.data}`,
            },
          })

        // console.log('list', listResponse.data)
        const items = listResponse.data
          .items as IInteractiveProcessTicketListItem[]
        const tickets = items.filter(
          (item) => item.contractId && item.contractId === claimId
        )
        // console.log('tickets', tickets)
        dispatch({
          type: ActionKind.ApiCallSuccess,
          payload: tickets,
        })
      } catch (error) {
        const message = `An error occurred fetching process tickets: ${error.message}`
        console.error(message)
        dispatch({ type: ActionKind.ApiCallError, payload: message })
      }
    }

    if (state.loading) {
      getTicketsForClaim()
    }
  }, [state.loading, claimId])

  const handleClick = (item: IInteractiveProcessTicketListItem) => {
    if (item && item.guid) {
      const url = `https://inspiredemo.sptcloud.com/interactive/?interactive-process-ticket-id=${item.guid}`
      window.open(url, '_blank', 'noopener')
    }
  }

  if (state.loading) {
    return <Text>Loading...</Text>
  } else if (state.error) {
    return <Text>{state.error}</Text>
  }

  return (
    <DataTable
      columns={columns}
      data={state.tickets}
      onClickRow={(event) => {
        event.preventDefault()
        handleClick(event.datum)
      }}
    />
  )
}

const columns: ColumnConfig<IInteractiveProcessTicketListItem>[] = [
  {
    property: 'id',
    header: 'ID',
  },
  {
    property: 'title',
    header: 'Title',
  },
  {
    property: 'stateName',
    header: 'State',
  },
  {
    property: 'createdDate',
    header: 'Created',
    render: (datum) =>
      datum.created && new Date(datum.created).toLocaleDateString('en-US'),
    align: 'end',
  },
]

export default ClaimProcessTickets
