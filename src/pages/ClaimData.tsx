/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Header, Main, Text } from 'grommet'
import ClaimSidebar from '../components/ClaimSidebar'

const ClaimData: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <Box direction="row" fill flex>
      <ClaimSidebar id={id} />
      <Main pad="small">
        <Header>
          <Text size="xlarge">Claim Data - {id}</Text>
        </Header>
        <Box align="start" pad={{ vertical: 'medium' }} gap="small"></Box>
      </Main>
    </Box>
  )
}

export default ClaimData
