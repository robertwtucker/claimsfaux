/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { Box, Button, Header, Main, Text } from 'grommet'
import { Add } from 'grommet-icons'
import TopSidebar from '../components/TopSidebar'
import { useDatabase } from '../contexts/DatabaseContext'
import ClaimsDataTable from '../components/ClaimsDataTable'
import { ClientsEntity } from '../data/Claims'

export interface ClaimsPageProps {}

type State = {
  claims: ClientsEntity[]
  loading: boolean
  error?: any
}

enum ActionKind {
  Initialized = 'INITIALIZED',
  Error = 'ERROR',
}

type Action =
  | { type: ActionKind.Initialized; payload: ClientsEntity[] }
  | { type: ActionKind.Error; payload: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionKind.Initialized:
      return {
        ...state,
        claims: action.payload,
        loading: false,
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
  claims: [] as ClientsEntity[],
  loading: true,
  error: undefined,
}

export default function ClaimsPage(_props: ClaimsPageProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const db = useDatabase()

  React.useEffect(() => {
    if (db && Boolean(Object.keys(db).length > 0)) {
      const collection = db.getCollection('claims')
      if (collection) {
        const results = collection.chain().data()
        dispatch({ type: ActionKind.Initialized, payload: results })
      } else {
        const message = 'No claims found in the database.'
        console.warn(message)
        dispatch({ type: ActionKind.Error, payload: message })
      }
    }
  }, [db])

  return (
    <Box direction="row" fill flex>
      <TopSidebar />
      <Main pad="small">
        <Header>
          <Text size="xlarge">Claims</Text>
        </Header>
        <Box align="start" pad={{ vertical: 'medium' }} gap="small">
          <Button key="new" plain primary>
            <Box direction="row" align="center" pad="xsmall" gap="xsmall">
              <Add color="white" />
              <Text size="small" weight="bold" color="white">
                New Claim
              </Text>
            </Box>
          </Button>
          <ClaimsDataTable claims={state.claims} />
        </Box>
      </Main>
    </Box>
  )
}
