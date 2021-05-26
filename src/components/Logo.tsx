/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Text } from 'grommet'
import { Compliance } from 'grommet-icons'

export interface LogoProps {}

export default function Logo(_props: LogoProps) {
  const history = useHistory()

  return (
    <Box
      direction="row"
      background="brand"
      align="center"
      justify="center"
      gap="small"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      width="small"
      onClick={() => history.push('/claims')}
      focusIndicator={false}
    >
      <Compliance color="white" />
      <Text weight="bold" color="white">
        ClaimsFaux
      </Text>
    </Box>
  )
}
