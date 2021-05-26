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

const App: React.FC = () => {
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

export default App
