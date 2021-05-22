/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ColumnConfig, DataTable } from 'grommet'
import { ClientsEntity } from '../data/Claims'

interface IClaimsDataTable {
  claims: ClientsEntity[]
}

interface IClaimsDataRow {
  claimNumber: string
  policyNumber: string
  claimant: string
  lossDate: string
  claimHandler: string
  status: string
  reserves: number
}

const initialDataRowState: IClaimsDataRow[] = [
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

const ClaimsDataTable: React.FC<IClaimsDataTable> = ({ claims }) => {
  const [data, setData] = React.useState(initialDataRowState)
  const history = useHistory()

  React.useEffect(() => {
    if (claims.length > 0) {
      const list: IClaimsDataRow[] = claims.flatMap((claim) => {
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

  const handleClick = (item: IClaimsDataRow) => {
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

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

const columns: ColumnConfig<IClaimsDataRow>[] = [
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

export default ClaimsDataTable
