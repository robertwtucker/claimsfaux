/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { Header, Box, Text, Nav } from 'grommet'
import { Notification, User, CaretDown, CircleQuestion } from 'grommet-icons'
import Logo from './Logo'
import { AnchorLink } from './AnchorLink'

const NavHeader: React.FC = () => {
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
          <AnchorLink to="/settings" label="Settings" />
        </Nav>
        <Box direction="row" align="center" justify="center" gap="small">
          <Notification />
          <CircleQuestion />
          <Box direction="row" align="center" justify="start" gap="xxsmall">
            <User size="small" />
            <Text size="small">Kevin Edwards</Text>
            <CaretDown size="small" />
          </Box>
        </Box>
      </Box>
    </Header>
  )
}

export default NavHeader
