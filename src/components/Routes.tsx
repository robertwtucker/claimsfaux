/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import Claims from '../pages/Claims'
import ClaimSummary from '../pages/ClaimSummary'
import ClaimData from '../pages/ClaimData'
import Settings from '../pages/Settings'

const Routes: React.FC = () => {
  const location = useLocation()

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: '/claims', state: { from: location } }} />
      </Route>
      <Route path="/claims/:id/data" component={ClaimData} />
      <Route path="/claims/:id" component={ClaimSummary} />
      <Route path="/claims" component={Claims} />
      <Route path="/settings" component={Settings} />
    </Switch>
  )
}

export default Routes
