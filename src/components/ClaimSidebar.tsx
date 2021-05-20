/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React, { MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Text } from 'grommet'

// enum SidebarOptions {
//   SUMMARY = 'Summary',
//   DATA = 'Claim data',
//   WORKPLAN = 'Workplan',
//   EXPOSURES = 'Exposures',
//   PARTIES = 'Parties involved',
//   POLICY = 'Policy',
//   FINANCIALS = 'Financials',
//   NOTES = 'Notes',
//   DOCUMENTS = 'Documents',
//   SERVICES = 'Services',
//   HISTORY = 'History',
//   CALENDAR = 'Calendar',
// }

interface IClaimSidebarProps {
  claimId: string
}

const ClaimSidebar: React.FC<IClaimSidebarProps> = ({ claimId }) => {
  const history = useHistory()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (event && event.currentTarget) {
      switch (event.currentTarget.id) {
        case 'Summary':
          history.push(`/claims/${claimId}`)
          break
        case 'Claim Data':
          history.push(`/claims/${claimId}/data`)
          break
        default:
        //no op
      }
    }
  }

  return (
    <Box width="small" background="light-2">
      {[
        'Summary',
        'Claim Data',
        'Workplan',
        'Exposures',
        'Policy',
        'Financials',
        'Notes',
        'Documents',
        'Services',
        'History',
        'Calendar',
      ].map((key) => (
        <Box
          id={key}
          key={key}
          pad="small"
          border="bottom"
          focusIndicator={false}
          onClick={handleClick}
          hoverIndicator={{
            background: 'background-contrast',
            elevation: 'small',
          }}
        >
          <Text>{key}</Text>
        </Box>
      ))}
    </Box>
  )
}

export default ClaimSidebar
