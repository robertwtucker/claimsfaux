/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React, { MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, Sidebar, Text } from 'grommet'

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

interface IProps {
  id: string
}

const ClaimSidebar: React.FC<IProps> = ({ id }) => {
  const history = useHistory()

  const handleSidebarClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (event && event.currentTarget) {
      switch (event.currentTarget.id) {
        case 'Summary':
          history.push(`/claims/${id}`)
          break
        case 'Claim data':
          history.push(`/claims/${id}/data`)
          break
        default:
        //no op
      }
    }
  }

  return (
    <Sidebar width="180px" background="light-1">
      {[
        'Summary',
        'Claim data',
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
        <Box key={key} pad="small">
          <Button plain id={key} onClick={handleSidebarClick}>
            <Text>{key}</Text>
          </Button>
        </Box>
      ))}
    </Sidebar>
  )
}

export default ClaimSidebar
