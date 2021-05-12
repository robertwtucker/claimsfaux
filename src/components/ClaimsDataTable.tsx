/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useHistory } from 'react-router-dom'
import { ColumnConfig, DataTable } from 'grommet'

const Claims: React.FC = () => {
  const history = useHistory()

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

interface ClaimsDataRowType {
  claimNumber: string
  policyNumber: string
  claimant: string
  lossDate: string
  claimHandler: string
  status: string
  reserves: number
}

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

const data: ClaimsDataRowType[] = [
  {
    claimNumber: '333-222-234',
    policyNumber: '353-53-354869',
    claimant: 'John Smith',
    lossDate: '2017-03-30',
    claimHandler: 'Kevin Edwards',
    status: 'Pending',
    reserves: 5000,
  },
  {
    claimNumber: '333-223-211',
    policyNumber: '353-65-785694',
    claimant: 'Esmeralda Rodriguez',
    lossDate: '2017-02-10',
    claimHandler: 'Kevin Edwards',
    status: 'Investigation',
    reserves: 3500,
  },
  {
    claimNumber: '333-222-201',
    policyNumber: '362-46-978214',
    claimant: 'Vanda Schmidt',
    lossDate: '2017-01-15',
    claimHandler: 'Kevin Edwards',
    status: 'Review',
    reserves: 1000,
  },
  {
    claimNumber: '332-221-202',
    policyNumber: '565-65-742638',
    claimant: 'Keith Bates',
    lossDate: '2017-01-09',
    claimHandler: 'Kevin Edwards',
    status: 'Closed',
    reserves: 0,
  },
  {
    claimNumber: '331-543-101',
    policyNumber: '548-41-657569',
    claimant: 'John Wang',
    lossDate: '2017-01-02',
    claimHandler: 'Kevin Edwards',
    status: 'Closed',
    reserves: 0,
  },
]

export default Claims