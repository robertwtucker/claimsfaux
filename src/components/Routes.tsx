/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import ClaimsPage from '../pages/ClaimsPage'
import ClaimSummaryPage from '../pages/ClaimSummaryPage'
import ClaimDataPage from '../pages/ClaimDataPage'
import ClaimDocumentsPage from '../pages/ClaimDocumentsPage'
import SettingsPage from '../pages/SettingsPage'

export interface RoutesProps {}

export default function Routes(_props: RoutesProps) {
  const location = useLocation()

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={{ pathname: '/claims', state: { from: location } }} />
      </Route>
      <Route path="/claims/:id/documents" component={ClaimDocumentsPage} />
      <Route path="/claims/:id/data" component={ClaimDataPage} />
      <Route path="/claims/:id" component={ClaimSummaryPage} />
      <Route path="/claims" component={ClaimsPage} />
      <Route path="/settings" component={SettingsPage} />
    </Switch>
  )
}
