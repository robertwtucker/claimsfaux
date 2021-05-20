/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { Box, Main } from 'grommet'
import ClaimSidebar from '../components/ClaimSidebar'

export interface IClaimContentProps {
  claimId: string
}

const ClaimContent: React.FC<IClaimContentProps> = ({ claimId, children }) => {
  return (
    <Box direction="row" background="light-1" fill flex>
      <ClaimSidebar claimId={claimId} />
      <Main pad="small">{children}</Main>
    </Box>
  )
}

export default ClaimContent
