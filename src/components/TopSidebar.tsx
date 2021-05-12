/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React, { MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Button, Sidebar, Text } from 'grommet'

const TopSidebar: React.FC = () => {
  const history = useHistory()

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    switch (event.currentTarget.id) {
      case 'Claims':
        history.push(`/claims`)
        break
      default:
      //no op
    }
  }

  return (
    <Sidebar width="180px" background="light-1">
      {[
        'Claims',
        'Policies',
        'Activities',
        'Contacts',
        'Notifications',
        'Documents',
        'Templates',
        'Archive',
      ].map((key) => (
        <Box key={key} pad="small">
          <Button plain id={key} onClick={handleClick}>
            <Text>{key}</Text>
          </Button>
        </Box>
      ))}
    </Sidebar>
  )
}

export default TopSidebar
