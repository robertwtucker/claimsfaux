/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { Box, Main } from 'grommet'
import ClaimSidebar from '../components/ClaimSidebar'

export interface ClaimContentProps {
  claimId: string
  children: React.ReactNode
}

export default function ClaimContent(props: ClaimContentProps) {
  const { claimId, children } = props

  return (
    <Box direction="row" background="light-1" fill flex>
      <ClaimSidebar claimId={claimId} />
      <Main pad="small">{children}</Main>
    </Box>
  )
}
