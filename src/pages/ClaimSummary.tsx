/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Card, Header, Main, Meter, Paragraph, Stack, Text } from 'grommet'
import ClaimSidebar from '../components/ClaimSidebar'
import { ClaimDataRow, ClientsEntity } from '../components/ClaimsData'

type State = {
  claimData?: ClientsEntity
  loading: boolean
  error?: any
}

enum ActionKind {
  Initialized = 'INITIALIZED',
  Error = 'ERROR',
}

type Action =
  | { type: ActionKind.Initialized; payload: ClientsEntity }
  | { type: ActionKind.Error; payload: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionKind.Initialized:
      return {
        ...state,
        claimData: action.payload,
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
  claimData: undefined,
  loading: true,
  error: undefined,
}

const ClaimSummary: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [state, dispatch] = React.useReducer(reducer, initialState)

  React.useEffect(() => {
    if (state.loading) {
      dispatch({
        type: ActionKind.Initialized,
        payload: ClaimDataRow as ClientsEntity,
      })
    }
  }, [state.loading])

  return (
    <Box direction="row" fill flex>
      <ClaimSidebar id={id} />
      <Main pad="small">
        <Header>
          <Text size="xlarge">Claim Summary</Text>
        </Header>
        <Box direction="row-responsive" pad="small" gap="medium">
          <Box gap="medium">
            <Card>
              <Header pad="small" background="brand">
                <Text weight="bold" color="white">
                  Basic Information
                </Text>
              </Header>
              <Box direction="row" pad="small" gap="medium">
                <Box>
                  <Box
                    direction="row"
                    justify="start"
                    align="baseline"
                    gap="xsmall"
                  >
                    <Text size="small">Claim #:</Text>
                    <Text weight="bold">{state.claimData?.Claim.Number}</Text>
                  </Box>
                  <Box
                    direction="row"
                    justify="start"
                    align="baseline"
                    gap="xsmall"
                  >
                    <Text size="small">Policy #:</Text>
                    <Text weight="bold">
                      {state.claimData?.Policy.PolicyNumber}
                    </Text>
                  </Box>
                  <Box
                    direction="row"
                    justify="start"
                    align="baseline"
                    gap="xsmall"
                  >
                    <Text size="small">{state.claimData?.Role}:</Text>
                    <Text weight="bold">
                      {`${state.claimData?.FirstName} ${state.claimData?.LastName}`}
                    </Text>
                  </Box>
                  <Box
                    direction="row"
                    justify="start"
                    align="baseline"
                    gap="xsmall"
                  >
                    <Text size="small">Date of Loss:</Text>
                    <Text weight="bold">
                      {state.claimData?.Claim.DateOfLoss}
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Box
                    direction="row"
                    justify="start"
                    align="baseline"
                    gap="xsmall"
                  >
                    <Text size="small">Claim Representative:</Text>
                    <Text weight="bold">
                      {`${state.claimData?.ClaimsRepresentative.FirstName} ${state.claimData?.ClaimsRepresentative.LastName}`}
                    </Text>
                  </Box>
                  <Box
                    direction="row"
                    justify="start"
                    align="baseline"
                    gap="xsmall"
                  >
                    <Text size="small">Fraud Indicator:</Text>
                    <Text weight="bold">{state.claimData?.FraudIndicator}</Text>
                  </Box>
                  <Box
                    direction="row"
                    justify="start"
                    align="baseline"
                    gap="xsmall"
                  >
                    <Text size="small">Reserves:</Text>
                    <Text weight="bold">
                      {state.claimData?.Claim.AmountDemanded}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card>
              <Header pad="small" background="brand">
                <Text weight="bold" color="white">
                  Loss Description
                </Text>
              </Header>
              <Box pad={{ horizontal: 'small' }}>
                <Paragraph>{state.claimData?.Claim.LossDescription}</Paragraph>
              </Box>
            </Card>
            <Card>
              <Header pad="small" background="brand">
                <Text weight="bold" color="white">
                  Correspondence
                </Text>
              </Header>
              <Box pad="xlarge">
                <Text>Document stuff goes here</Text>
              </Box>
            </Card>
          </Box>
          <Box gap="medium">
            <Card>
              <Header pad="small" background="brand">
                <Text weight="bold" color="white">
                  Additional Data
                </Text>
              </Header>
              <Box>
                <Box direction="row" align="center" pad="small" gap="xsmall">
                  <Text size="small">Opened:</Text>
                  <Meter
                    type="bar"
                    size="small"
                    thickness="xsmall"
                    background="light-2"
                    value={(23 / 60) * 100}
                  />
                  <Text size="small">23 days (target 60)</Text>
                </Box>
                <Box border="bottom" />
                <Box pad="small" gap="small">
                  <Text size="small">Reserves Spent:</Text>
                  <Stack anchor="center">
                    <Meter
                      type="circle"
                      background="light-2"
                      thickness="small"
                      size="xsmall"
                      value={(20455 / 100000) * 100}
                    />
                  </Stack>
                </Box>
              </Box>
            </Card>
            <Card>
              <Header pad="small" background="brand">
                <Text weight="bold" color="white">
                  Latest Notes
                </Text>
              </Header>
              <Box pad="small">
                <Box>
                  <Text weight="bold" size="medium">
                    First payment
                  </Text>
                  <Paragraph size="medium">
                    The first invoice in the amount of $2,940 has been paid.
                  </Paragraph>
                </Box>
                <Box>
                  <Text weight="bold" size="medium">
                    Claim verification and settlement amount
                  </Text>
                  <Paragraph size="medium">
                    The claims adjuster determined that the claim is valid. The
                    damage involves 360 damaged roof shingles that need to be
                    replaced. The total damage was estimated at $5,200.
                  </Paragraph>
                </Box>
                <Box>
                  <Text weight="bold" size="medium">
                    Initial contact
                  </Text>
                  <Paragraph size="medium">
                    The initial interview with the claimant was carried out on
                    1/15/2017. Mr Smith said that on the night of 1/14/2017 the
                    roof of his house was damaged by hail. Mr Smith estimated
                    that approximately 10% of the roof’s area was damaged. He
                    took photo evidence, which he will send in an email.
                  </Paragraph>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Main>
    </Box>
  )
}

export default ClaimSummary
