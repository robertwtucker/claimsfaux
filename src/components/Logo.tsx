/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { Box, Text } from 'grommet'
import { Compliance } from 'grommet-icons'

const Logo: React.FC = () => {
  return (
    <Box
      direction="row"
      background="brand"
      align="center"
      justify="center"
      gap="small"
      pad={{ horizontal: 'medium', vertical: 'small' }}
      width="200px"
    >
      <Compliance color="white" />
      <Text weight="bold" color="white">
        ClaimsFaux
      </Text>
    </Box>
  )
}

export default Logo
