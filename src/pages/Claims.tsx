/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { Box, Button, Header, Main, Text } from 'grommet'
import { Add } from 'grommet-icons'
import TopSidebar from '../components/TopSidebar'
import ClaimsDataTable from '../components/ClaimsDataTable'

const Claims: React.FC = () => {
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
          <ClaimsDataTable />
        </Box>
      </Main>
    </Box>
  )
}

export default Claims
