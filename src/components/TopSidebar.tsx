/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React, { MouseEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Text } from 'grommet'

export interface TopSidebarProps {}

export default function TopSidebar(_props: TopSidebarProps) {
  const history = useHistory()

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (event && event.currentTarget) {
      switch (event.currentTarget.id) {
        case 'Claims':
          history.push(`/claims`)
          break
        default:
        //no op
      }
    }
  }

  return (
    <Box width="small" background="light-2">
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
