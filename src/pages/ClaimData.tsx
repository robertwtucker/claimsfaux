/**
 * Copyright (c) 2021 Quadient Group AG
 */
import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Button,
  Card,
  Form,
  FormField,
  Header,
  Main,
  Select,
  Text,
  TextInput,
} from 'grommet'
import { Certificate, Home, UserManager } from 'grommet-icons'
import ClaimSidebar from '../components/ClaimSidebar'
import { ClaimDataRow, ClientsEntity } from '../components/ClaimsData'

export interface IDCFormData {
  IsInteractiveFormValid?: boolean
  IsInteractiveReadOnly?: boolean
  Gender?: string
  Name?: string
  Surname?: string
  City?: string
  State?: string
  Zip?: string
  ClaimID?: string
  Mileage?: string
  EstMarketValue?: string
  MileageDeduction?: string
  PriorDamageDeduction?: string
  Deduction?: string
  Payout?: string
  AddressSalutation?: string
  IncidentDate?: string
}

type State = {
  dcFormData: IDCFormData
  dcFormDataSaved: IDCFormData
  loading: boolean
  error?: any
  isFormDirty: boolean
}

enum ActionKind {
  DataChanged = 'DATA_CHANGED',
  DataReset = 'DATA_RESET',
  Initialized = 'INITIALIZED',
  Error = 'ERROR',
}

type Action =
  | { type: ActionKind.DataChanged; payload: IDCFormData }
  | { type: ActionKind.DataReset }
  | { type: ActionKind.Initialized; payload: IDCFormData }
  | { type: ActionKind.Error; payload: string }

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionKind.DataChanged:
      return {
        ...state,
        dcFormData: action.payload,
        isFormDirty: true,
      }
    case ActionKind.DataReset:
      return {
        ...state,
        dcFormData: state.dcFormDataSaved,
        isFormDirty: false,
      }
    case ActionKind.Initialized:
      return {
        ...state,
        dcFormData: action.payload,
        dcFormDataSaved: action.payload,
        loading: false,
        isFormDirty: false,
      }
    case ActionKind.Error:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
  }
}

const initialDCFormData = {
  IsInteractiveFormValid: false,
  IsInteractiveReadOnly: false,
  Gender: '',
  Name: '',
  Surname: '',
  City: '',
  State: '',
  Zip: '',
  ClaimID: '',
  Mileage: '',
  EstMarketValue: '',
  MileageDeduction: '',
  PriorDamageDeduction: '',
  Deduction: '',
  Payout: '',
  AddressSalutation: '',
  IncidentDate: '',
}

const initialState: State = {
  dcFormData: initialDCFormData,
  dcFormDataSaved: initialDCFormData,
  loading: true,
  error: undefined,
  isFormDirty: false,
}

const ClaimData: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const salutationOptions = [
    'Mr.',
    'Mrs.',
    'Miss',
    'Ms.',
    'Dr.',
    'Prof.',
    'Rev.',
    'Other',
  ]
  const genderOptions = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
    { label: 'Non-Binary', value: 'N' },
    { label: 'Other', value: 'O' },
  ]

  React.useEffect(() => {
    if (state.loading) {
      dispatch({
        type: ActionKind.Initialized,
        payload: getDCFormDataFromClaim(ClaimDataRow as ClientsEntity),
      })
    }
  }, [state.loading])

  const getDCFormDataFromClaim = (claimData: ClientsEntity) => {
    return {
      Gender: claimData.Gender,
      Name: claimData.FirstName,
      Surname: claimData.LastName,
      City: claimData.City,
      State: claimData.State,
      Zip: claimData.Zip,
      ClaimID: claimData.Claim.Number,
      Mileage: claimData.Claim.AutoInsurance.Mileage,
      EstMarketValue: claimData.Claim.VehicleActualCashValue,
      Deduction: claimData.Policy.CoverageDeductible,
      AddressSalutation: claimData.Salutation,
      IncidentDate: claimData.Claim.DateOfLoss,
    }
  }

  const handleSubmit = (form: IDCFormData) => {
    // TODO: Persist changes
    console.log(form)
  }

  return (
    <Box direction="row" background="light-1" fill flex>
      <ClaimSidebar id={id} />
      <Main pad="small">
        <Header>
          <Text size="xlarge">Claim Data</Text>
        </Header>
        <Form
          value={state.dcFormData}
          onChange={(nextValue) =>
            dispatch({ type: ActionKind.DataChanged, payload: nextValue })
          }
          onSubmit={(event) => {
            event.preventDefault()
            event.stopPropagation()
            handleSubmit(event.value)
          }}
        >
          <Box direction="row-responsive" pad="small" gap="medium">
            <Card>
              <Header pad="small" background="brand">
                <Text size="large" color="white">
                  Claimant
                </Text>
              </Header>
              <Box pad="small" gap="small">
                <Box
                  border={{ color: 'light-4', size: 'small' }}
                  direction="row"
                  pad="small"
                  gap="medium"
                >
                  <UserManager size="large" />
                  <Box>
                    <FormField label="Salutation" name="AddressSalutation">
                      <Select
                        name="AddressSalutation"
                        placeholder="Select"
                        options={salutationOptions}
                      />
                    </FormField>
                    <FormField label="First Name" name="Name">
                      <TextInput name="Name" />
                    </FormField>
                    <FormField label="Last Name" name="Surname">
                      <TextInput name="Surname" />
                    </FormField>
                    <FormField label="Gender" name="Gender">
                      <Select
                        name="Gender"
                        labelKey="label"
                        valueKey={{ key: 'value', reduce: true }}
                        options={genderOptions}
                      />
                    </FormField>
                  </Box>
                </Box>
                <Box
                  border={{ color: 'light-4', size: 'small' }}
                  direction="row"
                  pad="small"
                  gap="medium"
                >
                  <Home size="large" />
                  <Box>
                    <FormField label="City" name="City">
                      <TextInput name="City" />
                    </FormField>
                    <FormField label="State" name="State">
                      <TextInput name="State" />
                    </FormField>
                    <FormField label="Zip" name="Zip">
                      <TextInput name="Zip" />
                    </FormField>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Card>
              <Header pad="small" background="brand">
                <Text size="large" color="white">
                  Loss Details
                </Text>
              </Header>
              <Box pad="small" gap="small">
                <Box
                  border={{ color: 'light-4', size: 'small' }}
                  direction="row"
                  pad="small"
                  gap="medium"
                >
                  <Certificate size="large" />
                  <Box>
                    <FormField label="Claim Number" name="ClaimID">
                      <TextInput name="ClaimID" />
                    </FormField>
                    <FormField label="Date of Loss" name="IncidentDate">
                      <TextInput name="IncidentDate" />
                    </FormField>
                    <FormField label="Mileage" name="Mileage">
                      <TextInput name="Mileage" />
                    </FormField>
                    <FormField
                      label="Estimated Market Value"
                      name="EstMarketValue"
                    >
                      <TextInput name="EstMarketValue" />
                    </FormField>
                    <FormField label="Deductible" name="Deduction">
                      <TextInput name="Deduction" />
                    </FormField>
                  </Box>
                </Box>
              </Box>
            </Card>
            <Box pad="small" gap="small" justify="start" align="center">
              <Button
                primary
                type="submit"
                label="Save"
                disabled={!state.isFormDirty}
              />
              <Button
                label="Reset"
                disabled={!state.isFormDirty}
                onClick={() => {
                  dispatch({ type: ActionKind.DataReset })
                }}
              />
            </Box>
          </Box>
        </Form>
      </Main>
    </Box>
  )
}

export default ClaimData
