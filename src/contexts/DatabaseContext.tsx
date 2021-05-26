/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import loki from 'lokijs'
import { ClaimsData } from '../data/Claims'

interface IDatabaseContext {
  database: LokiConstructor | undefined
}

export const DatabaseContext = React.createContext<IDatabaseContext>({
  database: undefined,
})

export const DatabaseProvider: React.FC = ({ children }) => {
  const [database, setDatabase] = React.useState({} as LokiConstructor)

  React.useEffect(() => {
    const db = new loki('app.db')
    let claims = db.getCollection('claims')

    if (db && claims === null) {
      claims = db.addCollection('claims')
      claims.insert(ClaimsData!.Clients)
    }

    setDatabase(db)
  }, [])

  const values = React.useMemo(() => ({ database }), [database])

  return (
    <DatabaseContext.Provider value={values}>
      {children}
    </DatabaseContext.Provider>
  )
}

export const useDatabase = () => {
  const context = React.useContext(DatabaseContext)

  if (context === undefined) {
    throw new Error(
      `The 'useDatabase' hook must be used with a 'DatabaseProvider' component.`
    )
  }

  return context.database
}
