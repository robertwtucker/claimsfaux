/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import qs from 'qs'
import axios from 'axios'
import { ColumnConfig, DataTable, Text } from 'grommet'

interface ClaimProcessTicketsProps {
  claimId: string
}

export interface InteractiveProcessTicketListResponse {
  items?: InteractiveProcessTicketListItem[]
  totalCount?: number
}

export interface InteractiveProcessTicketListItem {
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
  systemVariables?: InteractiveProcessTicketListItemSystemVariables
}

export interface InteractiveProcessTicketListItemSystemVariables {
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
  tickets?: InteractiveProcessTicketListItem[]
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
      payload: InteractiveProcessTicketListItem[]
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

export default function ClaimProcessTickets(props: ClaimProcessTicketsProps) {
  const { claimId } = props
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    const getTicketsForClaim = async () => {
      // TODO: Externalize URLs, keys and user auth
      const authParams = qs.stringify({
        apiKey: '<api-key>',
        userName: 'writer',
      })

      try {
        const authResponse = await axios({
          method: 'POST',
          url: 'https://interactive-server/interactive/api/v1/access-token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: authParams,
        })

        const listResponse =
          await axios.request<InteractiveProcessTicketListResponse>({
            method: 'GET',
            url: 'https://interactive-server/interactive/api/v1/interactive-process-ticket/list',
            headers: {
              Authorization: `Bearer ${authResponse.data}`,
            },
          })

        // console.log('list', listResponse.data)
        const items = listResponse.data
          .items as InteractiveProcessTicketListItem[]
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

  const handleClick = (item: InteractiveProcessTicketListItem) => {
    if (item && item.guid) {
      const url = `https://interactive-server/interactive/?interactive-process-ticket-id=${item.guid}`
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

const columns: ColumnConfig<InteractiveProcessTicketListItem>[] = [
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
