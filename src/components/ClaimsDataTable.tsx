/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ColumnConfig, DataTable } from 'grommet'
import { ClientsEntity } from '../data/Claims'

export interface ClaimsDataTableProps {
  claims: ClientsEntity[]
}

export interface ClaimsDataRowType {
  claimNumber: string
  policyNumber: string
  claimant: string
  lossDate: string
  claimHandler: string
  status: string
  reserves: number
}

const initialDataRowState: ClaimsDataRowType[] = [
  {
    claimNumber: '',
    policyNumber: '',
    claimant: '',
    lossDate: '',
    claimHandler: '',
    status: '',
    reserves: 0,
  },
]

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

const columns: ColumnConfig<ClaimsDataRowType>[] = [
  {
    property: 'claimNumber',
    header: 'Claim Number',
  },
  {
    property: 'policyNumber',
    header: 'PolicyNumber',
  },
  {
    property: 'claimant',
    header: 'Claimant',
  },
  {
    property: 'lossDate',
    header: 'Loss Date',
    render: (datum) =>
      datum.lossDate && new Date(datum.lossDate).toLocaleDateString('en-US'),
    align: 'end',
  },
  {
    property: 'claimHandler',
    header: 'Claim Handler',
  },
  {
    property: 'status',
    header: 'Status',
  },
  {
    property: 'reserves',
    header: 'Reserves',
    render: (datum) => amountFormatter.format(datum.reserves),
    align: 'end',
  },
]

export default function ClaimsDataTable(props: ClaimsDataTableProps) {
  const { claims } = props
  const [data, setData] = React.useState(initialDataRowState)
  const history = useHistory()

  React.useEffect(() => {
    if (claims.length > 0) {
      const list: ClaimsDataRowType[] = claims.flatMap((claim) => {
        return {
          claimNumber: claim.Claim.Number,
          policyNumber: claim.Policy.PolicyNumber,
          claimant: `${claim.FirstName} ${claim.LastName}`,
          lossDate: claim.Claim.DateOfLoss,
          claimHandler: `${claim.ClaimsRepresentative.FirstName} ${claim.ClaimsRepresentative.LastName}`,
          status: claim.ClientID,
          reserves: Number.parseFloat(claim.Claim.AmountDemanded),
        }
      })
      setData(list)
    }
  }, [claims])

  const handleClick = (item: ClaimsDataRowType) => {
    if (item.claimNumber) {
      history.push(`/claims/${item.claimNumber}`)
    }
  }

  return (
    <DataTable
      columns={columns}
      data={data}
      onClickRow={(event) => handleClick(event.datum)}
    />
  )
}
