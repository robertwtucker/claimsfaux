/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Menu, Text } from 'grommet'
import { CircleQuestion, FormDown, Notification, User } from 'grommet-icons'
import Logo from './Logo'

const NavHeader: React.FC = () => {
  const history = useHistory()

  return (
    <Box
      background="dark-1"
      direction="row-responsive"
      fill="horizontal"
      justify="between"
      align="center"
    >
      <Logo />
      <Box direction="row" align="center">
        <Box
          direction="row"
          align="center"
          justify="center"
          gap="medium"
          pad={{ horizontal: 'small' }}
        >
          <Box border="right">
            <Notification />
          </Box>
          <Box>
            <CircleQuestion />
          </Box>
          <Menu
            items={[
              { label: 'user@domain.com', disabled: true },
              {
                label: 'Settings',
                onClick: () => history.push('/settings'),
              },
            ]}
          >
            <Box direction="row" align="center" justify="start" gap="xxsmall">
              <User />
              <Text>Kevin Edwards</Text>
              <FormDown />
            </Box>
          </Menu>
        </Box>
      </Box>
    </Box>
  )
}

export default NavHeader
