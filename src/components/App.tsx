/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Grommet, Box } from 'grommet'
import { DatabaseProvider } from '../contexts/DatabaseContext'
import Theme from './Theme'
import NavHeader from './NavHeader'
import Routes from './Routes'

export interface AppProps {}

export default function App(_props: AppProps) {
  return (
    <BrowserRouter>
      <Grommet theme={Theme}>
        <DatabaseProvider>
          <NavHeader />
          <Box overflow="auto" flex>
            <Routes />
          </Box>
        </DatabaseProvider>
      </Grommet>
    </BrowserRouter>
  )
}
