/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Header, Text } from 'grommet'
import ClaimContent from '../components/ClaimContent'
import { Client } from '../data/Claims'
import { useDatabase } from '../contexts/DatabaseContext'

export interface ClaimDocumentsProps {}

type State = {
  claimData?: Client
  loading: boolean
  error?: any
  isFormDirty: boolean
}

enum ActionKind {
  DataChanged = 'DATA_CHANGED',
  DataReset = 'DATA_RESET',
  DataSaved = 'DATA_SAVED',
  Initialized = 'INITIALIZED',
  Error = 'ERROR',
}

type Action =
  | { type: ActionKind.Initialized; payload: Client }
  | { type: ActionKind.Error; payload: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionKind.Initialized:
      return {
        ...state,
        claimData: action.payload,
        loading: false,
        isFormDirty: false,
      }
    case ActionKind.Error:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
  }
}

const initialState: State = {
  claimData: undefined,
  loading: true,
  error: undefined,
  isFormDirty: false,
}

export default function ClaimDocumentsPage(_props: ClaimDocumentsProps) {
  const { id } = useParams<{ id: string }>()
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const db = useDatabase()

  React.useEffect(() => {
    if (db && Boolean(Object.keys(db).length > 0)) {
      const claims = db.getCollection('claims')
      const claim = claims.findOne({ 'Claim.Number': { $eq: id } })
      if (claim) {
        dispatch({
          type: ActionKind.Initialized,
          payload: claim,
        })
      } else {
        const message = `Claim '${id}' was not found in the database.`
        console.error(message)
        dispatch({
          type: ActionKind.Error,
          payload: message,
        })
      }
    }
  }, [db, id])

  if (state.loading) {
    return <Text>Loading...</Text>
  } else if (state.error) {
    return <Text color="red">{state.error}</Text>
  }

  return (
    <ClaimContent claimId={id}>
      <Header>
        <Text size="xlarge">Documents</Text>
      </Header>
      <Box>
        <Text size="small">Claim: {state.claimData!.Claim.Number}</Text>
      </Box>
    </ClaimContent>
  )
}
