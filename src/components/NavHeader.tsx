/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Header, Box, Text, Nav, Menu } from 'grommet'
import { Notification, User, FormDown, CircleQuestion } from 'grommet-icons'
import Logo from './Logo'
import { AnchorLink } from './AnchorLink'

const NavHeader: React.FC = () => {
  const history = useHistory()

  return (
    <Header
      background="light-4"
      direction="row-responsive"
      justify="start"
      align="center"
    >
      <Logo />
      <Box fill="horizontal" direction="row" align="center" justify="between">
        <Nav direction="row" align="center" justify="start">
          <AnchorLink to="/claims" label="Claims" />
        </Nav>
        <Box
          direction="row"
          align="center"
          justify="center"
          gap="medium"
          pad={{ horizontal: 'small' }}
        >
          <Notification />
          <CircleQuestion />
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
    </Header>
  )
}

export default NavHeader
