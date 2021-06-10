/**
 * Copyright (c) 2021 Quadient Group AG
 */
import jsonObject from './customer.json'

// To parse this data:
//
//   import { Convert, ClaimsDataModel } from "./file";
//
//   const claimsDataModel = Convert.toClaimsDataModel(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ClaimsDataModel {
  Clients: Client[]
}

export interface Client {
  ClientID: string
  MailFrom: string
  TicketAsignee: string
  FirstName: string
  Midname: string
  LastName: string
  Gender: string
  Title: string
  Salutation: string
  Language: string
  AddressSalutation: string
  AddressLines: AddressLine[]
  City: string
  Zip: string
  State: string
  StateAbbreviation: string
  Country: string
  Email: string
  PolicyType: string
  Role: string
  Age: string
  DateOfBirth: string
  SocialSecurityNumber: string
  PhoneNumber: string
  CellNumber: string
  DriversLicenseNumber: string
  FraudIndicator: string
  ChannelPreference: string
  Subject: string
  FollowUpDate: string
  Template: string
  FreeFormVariable1: string
  FreeFormVariable2: string
  FreeFormVariable3: string
  FreeFormVariable4: string
  FreeFormVariable5: string
  FreeFormVariable6: string
  FreeFormVariable7: string
  FreeFormVariable8: string
  FreeFormVariable9: string
  FreeFormVariable10: string
  ClaimsRepresentative: ClaimsRepresentative
  Claim: Claim
  Author: Author
  Party: Party
  Dependents: Dependents
  Policy: Policy
  Policies: Policies
  Others: Others
}

export interface AddressLine {
  AddressLine: string
}

export interface Author {
  FirstName: string
  Midname: string
  LastName: string
  Email: string
  PhoneNumber: string
  PhoneNumberExt: string
  CellNumber: string
  Job: string
  Image: string
  Signature: string
}

export interface Claim {
  Number: string
  Date: string
  DateOfLoss: string
  TimeOfLoss: string
  AmountDemanded: string
  Location: string
  State: string
  LossDescription: string
  InjuryDescription: string
  SpouseName: string
  NumberOfDependents: string
  DeathDate: string
  SubrogationAmount: string
  SalvageAmount: string
  PaidClaimAmount: string
  VehicleActualCashValue: string
  ArbitrationDate: string
  SettlementAmount: string
  LetterReceivedDate: string
  ClaimantCompanyName: string
  CaseDescription: string
  CaseDateFiled: string
  CaseNumber: string
  AutoInsurance: ClaimAutoInsurance
}

export interface ClaimAutoInsurance {
  PreApprovalDate: string
  InsuredSince: string
  VehicleYear: string
  VehicleMake: string
  VehicleModel: string
  VIN: string
  VehicleDamage: string
  VehicleLicenseNumber: string
  Mileage: string
  PreviousPremium: string
  NewPremium: string
}

export interface ClaimsRepresentative {
  FirstName: string
  LastName: string
  AddressLines: AddressLine[]
  City: string
  State: string
  Zip: string
  PhoneNumber: string
  Email: string
  CellNumber: string
}

export interface Dependents {
  Data: Datum[]
}

export interface Datum {
  Name: string
  Midname: string
  Surname: string
  Gender: string
  Email: string
  MedicalProvider: MedicalProvider
}

export interface MedicalProvider {
  Name: string
  AddressLines: AddressLine[]
  City: string
  Zip: string
  State: string
}

export interface Others {
  Key: string
  Value: string
}

export interface Party {
  Data: PartyData
}

export interface PartyData {
  Name: string
  Midname: string
  Surname: string
  Title: string
  Company: string
  AddressLines: AddressLine[]
  City: string
  Zip: string
  State: string
  Role: string
  WebSite: string
  Email: string
  ProviderTINnumber: string
}

export interface Policies {
  Data: PoliciesData
}

export interface PoliciesData {
  PolicyHolder: PolicyHolder
  AutoInsurance: DataAutoInsurance
  PolicyNumber: string
  PolicyEffectiveDate: string
  PolicyCoverageDescription: string
  CoverageLimit: string
  CoverageDeductible: string
  Company: Company
  LogoFileName: string
}

export interface DataAutoInsurance {
  VehicleYear: string
  VehicleMake: string
  VehicleModel: string
  VIN: string
  DriversLicense: string
}

export interface Company {
  Code: string
  Name: string
  AddressLines: AddressLine[]
  City: string
  Zip: string
  State: string
  PhoneNumber: string
  Website: string
}

export interface PolicyHolder {
  Name: string
  Midname: string
  Surname: string
  AddressLines: AddressLine[]
  City: string
  Zip: string
  State: string
  Email: string
  Birthdate: string
  PhoneNumber: string
  CellNumber: string
  SocialSecurityNumber: string
  Role: string
}

export interface Policy {
  CoverageDeductible: string
  CoverageLimit: string
  DriversLicense: string
  LogoFileName: string
  PolicyCompanyAddressLine1: string
  PolicyCompanyAddressLine2: string
  PolicyCompanyAddressLine3: string
  PolicyCompanyCode: PolicyCompanyCode[]
  PolicyCompanyName: string
  PolicyCompanyPhoneNumber: string
  PolicyCompanyState: string
  PolicyCompanyWebsite: string
  PolicyCompanyZip: string
  PolicyCoverageDescription: string
  PolicyEffectiveDate: string
  PolicyHolderAddressLine1: string
  PolicyHolderBirthdate: string
  PolicyHolderCellNumber: string
  PolicyHolderCity: string
  PolicyHolderEmail: string
  PolicyHolderMidname: string
  PolicyHolderName: string
  PolicyHolderPhoneNumber: string
  PolicyHolderRole: string
  PolicyHolderSocialSecurityNumber: string
  PolicyHolderState: string
  PolicyHolderSurname: string
  PolicyHolderZip: string
  PolicyNumber: string
  VIN: string
  VehicleMake: string
  VehicleModel: string
  VehicleYear: string
}

export interface PolicyCompanyCode {
  PCData: string
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toClaimsDataModel(json: string): ClaimsDataModel {
    return cast(JSON.parse(json), r('ClaimsDataModel'))
  }

  public static claimsDataModelToJson(value: ClaimsDataModel): string {
    return JSON.stringify(uncast(value, r('ClaimsDataModel')), null, 2)
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    )
  }
  throw Error(
    `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
  )
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }))
    typ.jsonToJS = map
  }
  return typ.jsonToJS
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {}
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }))
    typ.jsToJSON = map
  }
  return typ.jsToJSON
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val
    return invalidValue(typ, val, key)
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length
    for (let i = 0; i < l; i++) {
      const typ = typs[i]
      try {
        return transform(val, typ, getProps)
      } catch (_) {}
    }
    return invalidValue(typs, val)
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val
    return invalidValue(cases, val)
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val)
    return val.map((el) => transform(el, typ, getProps))
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null
    }
    const d = new Date(val)
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val)
    }
    return d
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val)
    }
    const result: any = {}
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key]
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined
      result[prop.key] = transform(v, prop.typ, getProps, prop.key)
    })
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key)
      }
    })
    return result
  }

  if (typ === 'any') return val
  if (typ === null) {
    if (val === null) return val
    return invalidValue(typ, val)
  }
  if (typ === false) return invalidValue(typ, val)
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref]
  }
  if (Array.isArray(typ)) return transformEnum(typ, val)
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val)
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val)
  return transformPrimitive(typ, val)
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps)
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps)
}

function a(typ: any) {
  return { arrayItems: typ }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function u(...typs: any[]) {
  return { unionMembers: typs }
}

function o(props: any[], additional: any) {
  return { props, additional }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function m(additional: any) {
  return { props: [], additional }
}

function r(name: string) {
  return { ref: name }
}

const typeMap: any = {
  ClaimsDataModel: o(
    [{ json: 'Clients', js: 'Clients', typ: a(r('Client')) }],
    false
  ),
  Client: o(
    [
      { json: 'ClientID', js: 'ClientID', typ: '' },
      { json: 'MailFrom', js: 'MailFrom', typ: '' },
      { json: 'TicketAsignee', js: 'TicketAsignee', typ: '' },
      { json: 'FirstName', js: 'FirstName', typ: '' },
      { json: 'Midname', js: 'Midname', typ: '' },
      { json: 'LastName', js: 'LastName', typ: '' },
      { json: 'Gender', js: 'Gender', typ: '' },
      { json: 'Title', js: 'Title', typ: '' },
      { json: 'Salutation', js: 'Salutation', typ: '' },
      { json: 'Language', js: 'Language', typ: '' },
      { json: 'AddressSalutation', js: 'AddressSalutation', typ: '' },
      { json: 'AddressLines', js: 'AddressLines', typ: a(r('AddressLine')) },
      { json: 'City', js: 'City', typ: '' },
      { json: 'Zip', js: 'Zip', typ: '' },
      { json: 'State', js: 'State', typ: '' },
      { json: 'StateAbbreviation', js: 'StateAbbreviation', typ: '' },
      { json: 'Country', js: 'Country', typ: '' },
      { json: 'Email', js: 'Email', typ: '' },
      { json: 'PolicyType', js: 'PolicyType', typ: '' },
      { json: 'Role', js: 'Role', typ: '' },
      { json: 'Age', js: 'Age', typ: '' },
      { json: 'DateOfBirth', js: 'DateOfBirth', typ: '' },
      { json: 'SocialSecurityNumber', js: 'SocialSecurityNumber', typ: '' },
      { json: 'PhoneNumber', js: 'PhoneNumber', typ: '' },
      { json: 'CellNumber', js: 'CellNumber', typ: '' },
      { json: 'DriversLicenseNumber', js: 'DriversLicenseNumber', typ: '' },
      { json: 'FraudIndicator', js: 'FraudIndicator', typ: '' },
      { json: 'ChannelPreference', js: 'ChannelPreference', typ: '' },
      { json: 'Subject', js: 'Subject', typ: '' },
      { json: 'FollowUpDate', js: 'FollowUpDate', typ: '' },
      { json: 'Template', js: 'Template', typ: '' },
      { json: 'FreeFormVariable1', js: 'FreeFormVariable1', typ: '' },
      { json: 'FreeFormVariable2', js: 'FreeFormVariable2', typ: '' },
      { json: 'FreeFormVariable3', js: 'FreeFormVariable3', typ: '' },
      { json: 'FreeFormVariable4', js: 'FreeFormVariable4', typ: '' },
      { json: 'FreeFormVariable5', js: 'FreeFormVariable5', typ: '' },
      { json: 'FreeFormVariable6', js: 'FreeFormVariable6', typ: '' },
      { json: 'FreeFormVariable7', js: 'FreeFormVariable7', typ: '' },
      { json: 'FreeFormVariable8', js: 'FreeFormVariable8', typ: '' },
      { json: 'FreeFormVariable9', js: 'FreeFormVariable9', typ: '' },
      { json: 'FreeFormVariable10', js: 'FreeFormVariable10', typ: '' },
      {
        json: 'ClaimsRepresentative',
        js: 'ClaimsRepresentative',
        typ: r('ClaimsRepresentative'),
      },
      { json: 'Claim', js: 'Claim', typ: r('Claim') },
      { json: 'Author', js: 'Author', typ: r('Author') },
      { json: 'Party', js: 'Party', typ: r('Party') },
      { json: 'Dependents', js: 'Dependents', typ: r('Dependents') },
      { json: 'Policy', js: 'Policy', typ: r('Policy') },
      { json: 'Policies', js: 'Policies', typ: r('Policies') },
      { json: 'Others', js: 'Others', typ: r('Others') },
    ],
    false
  ),
  AddressLine: o([{ json: 'AddressLine', js: 'AddressLine', typ: '' }], false),
  Author: o(
    [
      { json: 'FirstName', js: 'FirstName', typ: '' },
      { json: 'Midname', js: 'Midname', typ: '' },
      { json: 'LastName', js: 'LastName', typ: '' },
      { json: 'Email', js: 'Email', typ: '' },
      { json: 'PhoneNumber', js: 'PhoneNumber', typ: '' },
      { json: 'PhoneNumberExt', js: 'PhoneNumberExt', typ: '' },
      { json: 'CellNumber', js: 'CellNumber', typ: '' },
      { json: 'Job', js: 'Job', typ: '' },
      { json: 'Image', js: 'Image', typ: '' },
      { json: 'Signature', js: 'Signature', typ: '' },
    ],
    false
  ),
  Claim: o(
    [
      { json: 'Number', js: 'Number', typ: '' },
      { json: 'Date', js: 'Date', typ: '' },
      { json: 'DateOfLoss', js: 'DateOfLoss', typ: '' },
      { json: 'TimeOfLoss', js: 'TimeOfLoss', typ: '' },
      { json: 'AmountDemanded', js: 'AmountDemanded', typ: '' },
      { json: 'Location', js: 'Location', typ: '' },
      { json: 'State', js: 'State', typ: '' },
      { json: 'LossDescription', js: 'LossDescription', typ: '' },
      { json: 'InjuryDescription', js: 'InjuryDescription', typ: '' },
      { json: 'SpouseName', js: 'SpouseName', typ: '' },
      { json: 'NumberOfDependents', js: 'NumberOfDependents', typ: '' },
      { json: 'DeathDate', js: 'DeathDate', typ: '' },
      { json: 'SubrogationAmount', js: 'SubrogationAmount', typ: '' },
      { json: 'SalvageAmount', js: 'SalvageAmount', typ: '' },
      { json: 'PaidClaimAmount', js: 'PaidClaimAmount', typ: '' },
      { json: 'VehicleActualCashValue', js: 'VehicleActualCashValue', typ: '' },
      { json: 'ArbitrationDate', js: 'ArbitrationDate', typ: '' },
      { json: 'SettlementAmount', js: 'SettlementAmount', typ: '' },
      { json: 'LetterReceivedDate', js: 'LetterReceivedDate', typ: '' },
      { json: 'ClaimantCompanyName', js: 'ClaimantCompanyName', typ: '' },
      { json: 'CaseDescription', js: 'CaseDescription', typ: '' },
      { json: 'CaseDateFiled', js: 'CaseDateFiled', typ: '' },
      { json: 'CaseNumber', js: 'CaseNumber', typ: '' },
      {
        json: 'AutoInsurance',
        js: 'AutoInsurance',
        typ: r('ClaimAutoInsurance'),
      },
    ],
    false
  ),
  ClaimAutoInsurance: o(
    [
      { json: 'PreApprovalDate', js: 'PreApprovalDate', typ: '' },
      { json: 'InsuredSince', js: 'InsuredSince', typ: '' },
      { json: 'VehicleYear', js: 'VehicleYear', typ: '' },
      { json: 'VehicleMake', js: 'VehicleMake', typ: '' },
      { json: 'VehicleModel', js: 'VehicleModel', typ: '' },
      { json: 'VIN', js: 'VIN', typ: '' },
      { json: 'VehicleDamage', js: 'VehicleDamage', typ: '' },
      { json: 'VehicleLicenseNumber', js: 'VehicleLicenseNumber', typ: '' },
      { json: 'Mileage', js: 'Mileage', typ: '' },
      { json: 'PreviousPremium', js: 'PreviousPremium', typ: '' },
      { json: 'NewPremium', js: 'NewPremium', typ: '' },
    ],
    false
  ),
  ClaimsRepresentative: o(
    [
      { json: 'FirstName', js: 'FirstName', typ: '' },
      { json: 'LastName', js: 'LastName', typ: '' },
      { json: 'AddressLines', js: 'AddressLines', typ: a(r('AddressLine')) },
      { json: 'City', js: 'City', typ: '' },
      { json: 'State', js: 'State', typ: '' },
      { json: 'Zip', js: 'Zip', typ: '' },
      { json: 'PhoneNumber', js: 'PhoneNumber', typ: '' },
      { json: 'Email', js: 'Email', typ: '' },
      { json: 'CellNumber', js: 'CellNumber', typ: '' },
    ],
    false
  ),
  Dependents: o([{ json: 'Data', js: 'Data', typ: a(r('Datum')) }], false),
  Datum: o(
    [
      { json: 'Name', js: 'Name', typ: '' },
      { json: 'Midname', js: 'Midname', typ: '' },
      { json: 'Surname', js: 'Surname', typ: '' },
      { json: 'Gender', js: 'Gender', typ: '' },
      { json: 'Email', js: 'Email', typ: '' },
      {
        json: 'MedicalProvider',
        js: 'MedicalProvider',
        typ: r('MedicalProvider'),
      },
    ],
    false
  ),
  MedicalProvider: o(
    [
      { json: 'Name', js: 'Name', typ: '' },
      { json: 'AddressLines', js: 'AddressLines', typ: a(r('AddressLine')) },
      { json: 'City', js: 'City', typ: '' },
      { json: 'Zip', js: 'Zip', typ: '' },
      { json: 'State', js: 'State', typ: '' },
    ],
    false
  ),
  Others: o(
    [
      { json: 'Key', js: 'Key', typ: '' },
      { json: 'Value', js: 'Value', typ: '' },
    ],
    false
  ),
  Party: o([{ json: 'Data', js: 'Data', typ: r('PartyData') }], false),
  PartyData: o(
    [
      { json: 'Name', js: 'Name', typ: '' },
      { json: 'Midname', js: 'Midname', typ: '' },
      { json: 'Surname', js: 'Surname', typ: '' },
      { json: 'Title', js: 'Title', typ: '' },
      { json: 'Company', js: 'Company', typ: '' },
      { json: 'AddressLines', js: 'AddressLines', typ: a(r('AddressLine')) },
      { json: 'City', js: 'City', typ: '' },
      { json: 'Zip', js: 'Zip', typ: '' },
      { json: 'State', js: 'State', typ: '' },
      { json: 'Role', js: 'Role', typ: '' },
      { json: 'WebSite', js: 'WebSite', typ: '' },
      { json: 'Email', js: 'Email', typ: '' },
      { json: 'ProviderTINnumber', js: 'ProviderTINnumber', typ: '' },
    ],
    false
  ),
  Policies: o([{ json: 'Data', js: 'Data', typ: r('PoliciesData') }], false),
  PoliciesData: o(
    [
      { json: 'PolicyHolder', js: 'PolicyHolder', typ: r('PolicyHolder') },
      {
        json: 'AutoInsurance',
        js: 'AutoInsurance',
        typ: r('DataAutoInsurance'),
      },
      { json: 'PolicyNumber', js: 'PolicyNumber', typ: '' },
      { json: 'PolicyEffectiveDate', js: 'PolicyEffectiveDate', typ: '' },
      {
        json: 'PolicyCoverageDescription',
        js: 'PolicyCoverageDescription',
        typ: '',
      },
      { json: 'CoverageLimit', js: 'CoverageLimit', typ: '' },
      { json: 'CoverageDeductible', js: 'CoverageDeductible', typ: '' },
      { json: 'Company', js: 'Company', typ: r('Company') },
      { json: 'LogoFileName', js: 'LogoFileName', typ: '' },
    ],
    false
  ),
  DataAutoInsurance: o(
    [
      { json: 'VehicleYear', js: 'VehicleYear', typ: '' },
      { json: 'VehicleMake', js: 'VehicleMake', typ: '' },
      { json: 'VehicleModel', js: 'VehicleModel', typ: '' },
      { json: 'VIN', js: 'VIN', typ: '' },
      { json: 'DriversLicense', js: 'DriversLicense', typ: '' },
    ],
    false
  ),
  Company: o(
    [
      { json: 'Code', js: 'Code', typ: '' },
      { json: 'Name', js: 'Name', typ: '' },
      { json: 'AddressLines', js: 'AddressLines', typ: a(r('AddressLine')) },
      { json: 'City', js: 'City', typ: '' },
      { json: 'Zip', js: 'Zip', typ: '' },
      { json: 'State', js: 'State', typ: '' },
      { json: 'PhoneNumber', js: 'PhoneNumber', typ: '' },
      { json: 'Website', js: 'Website', typ: '' },
    ],
    false
  ),
  PolicyHolder: o(
    [
      { json: 'Name', js: 'Name', typ: '' },
      { json: 'Midname', js: 'Midname', typ: '' },
      { json: 'Surname', js: 'Surname', typ: '' },
      { json: 'AddressLines', js: 'AddressLines', typ: a(r('AddressLine')) },
      { json: 'City', js: 'City', typ: '' },
      { json: 'Zip', js: 'Zip', typ: '' },
      { json: 'State', js: 'State', typ: '' },
      { json: 'Email', js: 'Email', typ: '' },
      { json: 'Birthdate', js: 'Birthdate', typ: '' },
      { json: 'PhoneNumber', js: 'PhoneNumber', typ: '' },
      { json: 'CellNumber', js: 'CellNumber', typ: '' },
      { json: 'SocialSecurityNumber', js: 'SocialSecurityNumber', typ: '' },
      { json: 'Role', js: 'Role', typ: '' },
    ],
    false
  ),
  Policy: o(
    [
      { json: 'CoverageDeductible', js: 'CoverageDeductible', typ: '' },
      { json: 'CoverageLimit', js: 'CoverageLimit', typ: '' },
      { json: 'DriversLicense', js: 'DriversLicense', typ: '' },
      { json: 'LogoFileName', js: 'LogoFileName', typ: '' },
      {
        json: 'PolicyCompanyAddressLine1',
        js: 'PolicyCompanyAddressLine1',
        typ: '',
      },
      {
        json: 'PolicyCompanyAddressLine2',
        js: 'PolicyCompanyAddressLine2',
        typ: '',
      },
      {
        json: 'PolicyCompanyAddressLine3',
        js: 'PolicyCompanyAddressLine3',
        typ: '',
      },
      {
        json: 'PolicyCompanyCode',
        js: 'PolicyCompanyCode',
        typ: a(r('PolicyCompanyCode')),
      },
      { json: 'PolicyCompanyName', js: 'PolicyCompanyName', typ: '' },
      {
        json: 'PolicyCompanyPhoneNumber',
        js: 'PolicyCompanyPhoneNumber',
        typ: '',
      },
      { json: 'PolicyCompanyState', js: 'PolicyCompanyState', typ: '' },
      { json: 'PolicyCompanyWebsite', js: 'PolicyCompanyWebsite', typ: '' },
      { json: 'PolicyCompanyZip', js: 'PolicyCompanyZip', typ: '' },
      {
        json: 'PolicyCoverageDescription',
        js: 'PolicyCoverageDescription',
        typ: '',
      },
      { json: 'PolicyEffectiveDate', js: 'PolicyEffectiveDate', typ: '' },
      {
        json: 'PolicyHolderAddressLine1',
        js: 'PolicyHolderAddressLine1',
        typ: '',
      },
      { json: 'PolicyHolderBirthdate', js: 'PolicyHolderBirthdate', typ: '' },
      { json: 'PolicyHolderCellNumber', js: 'PolicyHolderCellNumber', typ: '' },
      { json: 'PolicyHolderCity', js: 'PolicyHolderCity', typ: '' },
      { json: 'PolicyHolderEmail', js: 'PolicyHolderEmail', typ: '' },
      { json: 'PolicyHolderMidname', js: 'PolicyHolderMidname', typ: '' },
      { json: 'PolicyHolderName', js: 'PolicyHolderName', typ: '' },
      {
        json: 'PolicyHolderPhoneNumber',
        js: 'PolicyHolderPhoneNumber',
        typ: '',
      },
      { json: 'PolicyHolderRole', js: 'PolicyHolderRole', typ: '' },
      {
        json: 'PolicyHolderSocialSecurityNumber',
        js: 'PolicyHolderSocialSecurityNumber',
        typ: '',
      },
      { json: 'PolicyHolderState', js: 'PolicyHolderState', typ: '' },
      { json: 'PolicyHolderSurname', js: 'PolicyHolderSurname', typ: '' },
      { json: 'PolicyHolderZip', js: 'PolicyHolderZip', typ: '' },
      { json: 'PolicyNumber', js: 'PolicyNumber', typ: '' },
      { json: 'VIN', js: 'VIN', typ: '' },
      { json: 'VehicleMake', js: 'VehicleMake', typ: '' },
      { json: 'VehicleModel', js: 'VehicleModel', typ: '' },
      { json: 'VehicleYear', js: 'VehicleYear', typ: '' },
    ],
    false
  ),
  PolicyCompanyCode: o([{ json: 'PCData', js: 'PCData', typ: '' }], false),
}

export const ClaimsData = Convert.toClaimsDataModel(JSON.stringify(jsonObject))
