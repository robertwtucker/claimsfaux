/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import axios from 'axios'
import { ColumnConfig, DataTable } from 'grommet'

export interface IInteractiveProcessTicketListResponse {
  items?: IInteractiveProcessTicketItem[]
  totalCount?: number
}

export interface IInteractiveProcessTicketItem {
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
  systemVariables?: IInteractiveProcessTicketSystemVariables
}

export interface IInteractiveProcessTicketSystemVariables {
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
  tickets?: IInteractiveProcessTicketItem[]
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
      payload: IInteractiveProcessTicketItem[]
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

interface IProps {
  id: string
}

const ClaimProcessTickets: React.FC<IProps> = ({ id }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    const getTicketsForClaim = async () => {
      // TODO: Externalize URLs, keys and user auth
      try {
        const tokenUrl =
          'https://inspiredemo.sptcloud.com/interactive/api/v1/access-token'
        const authParams = new URLSearchParams()
        authParams.append(
          'apiKey',
          'KN0gla8.ANxI0Z82f38PCNGhZOrqIJWjBOjOc2jzXt0'
        )
        authParams.append('userName', 'writer')
        const authConfig = {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
        const authResponse = await axios.post(tokenUrl, authParams, authConfig)

        const url =
          'https://inspiredemo.sptcloud.com/interactive/api/v1/interactive-process-ticket/list'
        const config = {
          headers: {
            Authorization: `Bearer ${authResponse.data}`,
          },
        }
        const listResponse =
          await axios.get<IInteractiveProcessTicketListResponse>(url, config)

        // console.log('list', listResponse.data)
        const items = listResponse.data.items as IInteractiveProcessTicketItem[]
        const tickets = items.filter(
          (item) => item.contractId && item.contractId === id
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
  }, [state.loading, id])

  const handleClick = (item: IInteractiveProcessTicketItem) => {
    if (item && item.guid) {
      const url = `https://inspiredemo.sptcloud.com/interactive/?interactive-process-ticket-id=${item.guid}`
      window.open(url, '_blank', 'noopener')
    }
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

const columns: ColumnConfig<IInteractiveProcessTicketItem>[] = [
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
