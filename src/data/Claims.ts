/**
 * Copyright (c) 2021 Quadient Group AG
 */
import jsonObject from './customer.json'

export interface ClaimsDataModel {
  Clients?: ClientsEntity[] | null
}

export interface ClientsEntity {
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
  AddressLines?: AddressLinesEntity[] | null
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

export interface AddressLinesEntity {
  AddressLine: string
}

export interface ClaimsRepresentative {
  FirstName: string
  LastName: string
  AddressLines?: AddressLinesEntity[] | null
  City: string
  State: string
  Zip: string
  PhoneNumber: string
  Email: string
  CellNumber: string
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
  AutoInsurance: AutoInsurance
}

export interface AutoInsurance {
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

export interface Party {
  Data: Data
}

export interface Data {
  Name: string
  Midname: string
  Surname: string
  Title: string
  Company: string
  AddressLines?: AddressLinesEntity[] | null
  City: string
  Zip: string
  State: string
  Role: string
  WebSite: string
  Email: string
  ProviderTINnumber: string
}

export interface Dependents {
  Data?: DataEntity[] | null
}

export interface DataEntity {
  Name: string
  Midname: string
  Surname: string
  Gender: string
  Email: string
  MedicalProvider: MedicalProvider
}

export interface MedicalProvider {
  Name: string
  AddressLines?: AddressLinesEntity[] | null
  City: string
  Zip: string
  State: string
}

export interface Policy {
  CoverageDeductible: string
  CoverageLimit: string
  DriversLicense: string
  LogoFileName: string
  PolicyCompanyAddressLine1: string
  PolicyCompanyAddressLine2: string
  PolicyCompanyAddressLine3: string
  PolicyCompanyCode?: PolicyCompanyCodeEntity[] | null
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

export interface PolicyCompanyCodeEntity {
  PCData: string
}

export interface Policies {
  Data: Data1
}

export interface Data1 {
  PolicyHolder: PolicyHolder
  AutoInsurance: AutoInsurance1
  PolicyNumber: string
  PolicyEffectiveDate: string
  PolicyCoverageDescription: string
  CoverageLimit: string
  CoverageDeductible: string
  Company: Company
  LogoFileName: string
}

export interface PolicyHolder {
  Name: string
  Midname: string
  Surname: string
  AddressLines?: AddressLinesEntity[] | null
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

export interface AutoInsurance1 {
  VehicleYear: string
  VehicleMake: string
  VehicleModel: string
  VIN: string
  DriversLicense: string
}

export interface Company {
  Code: string
  Name: string
  AddressLines?: AddressLinesEntity[] | null
  City: string
  Zip: string
  State: string
  PhoneNumber: string
  Website: string
}

export interface Others {
  Key: string
  Value: string
}

// Stores the currently-being-typechecked object for error messages.
let obj: any = null
export class ClaimsDataProxy {
  public readonly Clients: ClientsEntityProxy[] | null
  public static Parse(d: string): ClaimsDataProxy {
    return ClaimsDataProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): ClaimsDataProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkArray(d.Clients, field + '.Clients')
    if (d.Clients) {
      for (let i = 0; i < d.Clients.length; i++) {
        d.Clients[i] = ClientsEntityProxy.Create(
          d.Clients[i],
          field + '.Clients[' + i + ']'
        )
      }
    }
    if (d.Clients === undefined) {
      d.Clients = null
    }
    return new ClaimsDataProxy(d)
  }
  private constructor(d: any) {
    this.Clients = d.Clients
  }
}

export class ClientsEntityProxy {
  public readonly ClientID: string
  public readonly MailFrom: string
  public readonly TicketAsignee: string
  public readonly FirstName: string
  public readonly Midname: string
  public readonly LastName: string
  public readonly Gender: string
  public readonly Title: string
  public readonly Salutation: string
  public readonly Language: string
  public readonly AddressSalutation: string
  public readonly AddressLines: AddressLinesEntityProxy[] | null
  public readonly City: string
  public readonly Zip: string
  public readonly State: string
  public readonly StateAbbreviation: string
  public readonly Country: string
  public readonly Email: string
  public readonly PolicyType: string
  public readonly Role: string
  public readonly Age: string
  public readonly DateOfBirth: string
  public readonly SocialSecurityNumber: string
  public readonly PhoneNumber: string
  public readonly CellNumber: string
  public readonly DriversLicenseNumber: string
  public readonly FraudIndicator: string
  public readonly ChannelPreference: string
  public readonly Subject: string
  public readonly FollowUpDate: string
  public readonly Template: string
  public readonly FreeFormVariable1: string
  public readonly FreeFormVariable2: string
  public readonly FreeFormVariable3: string
  public readonly FreeFormVariable4: string
  public readonly FreeFormVariable5: string
  public readonly FreeFormVariable6: string
  public readonly FreeFormVariable7: string
  public readonly FreeFormVariable8: string
  public readonly FreeFormVariable9: string
  public readonly FreeFormVariable10: string
  public readonly ClaimsRepresentative: ClaimsRepresentativeProxy
  public readonly Claim: ClaimProxy
  public readonly Author: AuthorProxy
  public readonly Party: PartyProxy
  public readonly Dependents: DependentsProxy
  public readonly Policy: PolicyProxy
  public readonly Policies: PoliciesProxy
  public readonly Others: OthersProxy
  public static Parse(d: string): ClientsEntityProxy {
    return ClientsEntityProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): ClientsEntityProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.ClientID, false, field + '.ClientID')
    checkString(d.MailFrom, false, field + '.MailFrom')
    checkString(d.TicketAsignee, false, field + '.TicketAsignee')
    checkString(d.FirstName, false, field + '.FirstName')
    checkString(d.Midname, false, field + '.Midname')
    checkString(d.LastName, false, field + '.LastName')
    checkString(d.Gender, false, field + '.Gender')
    checkString(d.Title, false, field + '.Title')
    checkString(d.Salutation, false, field + '.Salutation')
    checkString(d.Language, false, field + '.Language')
    checkString(d.AddressSalutation, false, field + '.AddressSalutation')
    checkArray(d.AddressLines, field + '.AddressLines')
    if (d.AddressLines) {
      for (let i = 0; i < d.AddressLines.length; i++) {
        d.AddressLines[i] = AddressLinesEntityProxy.Create(
          d.AddressLines[i],
          field + '.AddressLines[' + i + ']'
        )
      }
    }
    if (d.AddressLines === undefined) {
      d.AddressLines = null
    }
    checkString(d.City, false, field + '.City')
    checkString(d.Zip, false, field + '.Zip')
    checkString(d.State, false, field + '.State')
    checkString(d.StateAbbreviation, false, field + '.StateAbbreviation')
    checkString(d.Country, false, field + '.Country')
    checkString(d.Email, false, field + '.Email')
    checkString(d.PolicyType, false, field + '.PolicyType')
    checkString(d.Role, false, field + '.Role')
    checkString(d.Age, false, field + '.Age')
    checkString(d.DateOfBirth, false, field + '.DateOfBirth')
    checkString(d.SocialSecurityNumber, false, field + '.SocialSecurityNumber')
    checkString(d.PhoneNumber, false, field + '.PhoneNumber')
    checkString(d.CellNumber, false, field + '.CellNumber')
    checkString(d.DriversLicenseNumber, false, field + '.DriversLicenseNumber')
    checkString(d.FraudIndicator, false, field + '.FraudIndicator')
    checkString(d.ChannelPreference, false, field + '.ChannelPreference')
    checkString(d.Subject, false, field + '.Subject')
    checkString(d.FollowUpDate, false, field + '.FollowUpDate')
    checkString(d.Template, false, field + '.Template')
    checkString(d.FreeFormVariable1, false, field + '.FreeFormVariable1')
    checkString(d.FreeFormVariable2, false, field + '.FreeFormVariable2')
    checkString(d.FreeFormVariable3, false, field + '.FreeFormVariable3')
    checkString(d.FreeFormVariable4, false, field + '.FreeFormVariable4')
    checkString(d.FreeFormVariable5, false, field + '.FreeFormVariable5')
    checkString(d.FreeFormVariable6, false, field + '.FreeFormVariable6')
    checkString(d.FreeFormVariable7, false, field + '.FreeFormVariable7')
    checkString(d.FreeFormVariable8, false, field + '.FreeFormVariable8')
    checkString(d.FreeFormVariable9, false, field + '.FreeFormVariable9')
    checkString(d.FreeFormVariable10, false, field + '.FreeFormVariable10')
    d.ClaimsRepresentative = ClaimsRepresentativeProxy.Create(
      d.ClaimsRepresentative,
      field + '.ClaimsRepresentative'
    )
    d.Claim = ClaimProxy.Create(d.Claim, field + '.Claim')
    d.Author = AuthorProxy.Create(d.Author, field + '.Author')
    d.Party = PartyProxy.Create(d.Party, field + '.Party')
    d.Dependents = DependentsProxy.Create(d.Dependents, field + '.Dependents')
    d.Policy = PolicyProxy.Create(d.Policy, field + '.Policy')
    d.Policies = PoliciesProxy.Create(d.Policies, field + '.Policies')
    d.Others = OthersProxy.Create(d.Others, field + '.Others')
    return new ClientsEntityProxy(d)
  }
  private constructor(d: any) {
    this.ClientID = d.ClientID
    this.MailFrom = d.MailFrom
    this.TicketAsignee = d.TicketAsignee
    this.FirstName = d.FirstName
    this.Midname = d.Midname
    this.LastName = d.LastName
    this.Gender = d.Gender
    this.Title = d.Title
    this.Salutation = d.Salutation
    this.Language = d.Language
    this.AddressSalutation = d.AddressSalutation
    this.AddressLines = d.AddressLines
    this.City = d.City
    this.Zip = d.Zip
    this.State = d.State
    this.StateAbbreviation = d.StateAbbreviation
    this.Country = d.Country
    this.Email = d.Email
    this.PolicyType = d.PolicyType
    this.Role = d.Role
    this.Age = d.Age
    this.DateOfBirth = d.DateOfBirth
    this.SocialSecurityNumber = d.SocialSecurityNumber
    this.PhoneNumber = d.PhoneNumber
    this.CellNumber = d.CellNumber
    this.DriversLicenseNumber = d.DriversLicenseNumber
    this.FraudIndicator = d.FraudIndicator
    this.ChannelPreference = d.ChannelPreference
    this.Subject = d.Subject
    this.FollowUpDate = d.FollowUpDate
    this.Template = d.Template
    this.FreeFormVariable1 = d.FreeFormVariable1
    this.FreeFormVariable2 = d.FreeFormVariable2
    this.FreeFormVariable3 = d.FreeFormVariable3
    this.FreeFormVariable4 = d.FreeFormVariable4
    this.FreeFormVariable5 = d.FreeFormVariable5
    this.FreeFormVariable6 = d.FreeFormVariable6
    this.FreeFormVariable7 = d.FreeFormVariable7
    this.FreeFormVariable8 = d.FreeFormVariable8
    this.FreeFormVariable9 = d.FreeFormVariable9
    this.FreeFormVariable10 = d.FreeFormVariable10
    this.ClaimsRepresentative = d.ClaimsRepresentative
    this.Claim = d.Claim
    this.Author = d.Author
    this.Party = d.Party
    this.Dependents = d.Dependents
    this.Policy = d.Policy
    this.Policies = d.Policies
    this.Others = d.Others
  }
}

export class AddressLinesEntityProxy {
  public readonly AddressLine: string
  public static Parse(d: string): AddressLinesEntityProxy {
    return AddressLinesEntityProxy.Create(JSON.parse(d))
  }
  public static Create(
    d: any,
    field: string = 'root'
  ): AddressLinesEntityProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.AddressLine, false, field + '.AddressLine')
    return new AddressLinesEntityProxy(d)
  }
  private constructor(d: any) {
    this.AddressLine = d.AddressLine
  }
}

export class ClaimsRepresentativeProxy {
  public readonly FirstName: string
  public readonly LastName: string
  public readonly AddressLines: AddressLinesEntityProxy[] | null
  public readonly City: string
  public readonly State: string
  public readonly Zip: string
  public readonly PhoneNumber: string
  public readonly Email: string
  public readonly CellNumber: string
  public static Parse(d: string): ClaimsRepresentativeProxy {
    return ClaimsRepresentativeProxy.Create(JSON.parse(d))
  }
  public static Create(
    d: any,
    field: string = 'root'
  ): ClaimsRepresentativeProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.FirstName, false, field + '.FirstName')
    checkString(d.LastName, false, field + '.LastName')
    checkArray(d.AddressLines, field + '.AddressLines')
    if (d.AddressLines) {
      for (let i = 0; i < d.AddressLines.length; i++) {
        d.AddressLines[i] = AddressLinesEntityProxy.Create(
          d.AddressLines[i],
          field + '.AddressLines[' + i + ']'
        )
      }
    }
    if (d.AddressLines === undefined) {
      d.AddressLines = null
    }
    checkString(d.City, false, field + '.City')
    checkString(d.State, false, field + '.State')
    checkString(d.Zip, false, field + '.Zip')
    checkString(d.PhoneNumber, false, field + '.PhoneNumber')
    checkString(d.Email, false, field + '.Email')
    checkString(d.CellNumber, false, field + '.CellNumber')
    return new ClaimsRepresentativeProxy(d)
  }
  private constructor(d: any) {
    this.FirstName = d.FirstName
    this.LastName = d.LastName
    this.AddressLines = d.AddressLines
    this.City = d.City
    this.State = d.State
    this.Zip = d.Zip
    this.PhoneNumber = d.PhoneNumber
    this.Email = d.Email
    this.CellNumber = d.CellNumber
  }
}

export class ClaimProxy {
  public readonly Number: string
  public readonly Date: string
  public readonly DateOfLoss: string
  public readonly TimeOfLoss: string
  public readonly AmountDemanded: string
  public readonly Location: string
  public readonly State: string
  public readonly LossDescription: string
  public readonly InjuryDescription: string
  public readonly SpouseName: string
  public readonly NumberOfDependents: string
  public readonly DeathDate: string
  public readonly SubrogationAmount: string
  public readonly SalvageAmount: string
  public readonly PaidClaimAmount: string
  public readonly VehicleActualCashValue: string
  public readonly ArbitrationDate: string
  public readonly SettlementAmount: string
  public readonly LetterReceivedDate: string
  public readonly ClaimantCompanyName: string
  public readonly CaseDescription: string
  public readonly CaseDateFiled: string
  public readonly CaseNumber: string
  public readonly AutoInsurance: AutoInsuranceProxy
  public static Parse(d: string): ClaimProxy {
    return ClaimProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): ClaimProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.Number, false, field + '.Number')
    checkString(d.Date, false, field + '.Date')
    checkString(d.DateOfLoss, false, field + '.DateOfLoss')
    checkString(d.TimeOfLoss, false, field + '.TimeOfLoss')
    checkString(d.AmountDemanded, false, field + '.AmountDemanded')
    checkString(d.Location, false, field + '.Location')
    checkString(d.State, false, field + '.State')
    checkString(d.LossDescription, false, field + '.LossDescription')
    checkString(d.InjuryDescription, false, field + '.InjuryDescription')
    checkString(d.SpouseName, false, field + '.SpouseName')
    checkString(d.NumberOfDependents, false, field + '.NumberOfDependents')
    checkString(d.DeathDate, false, field + '.DeathDate')
    checkString(d.SubrogationAmount, false, field + '.SubrogationAmount')
    checkString(d.SalvageAmount, false, field + '.SalvageAmount')
    checkString(d.PaidClaimAmount, false, field + '.PaidClaimAmount')
    checkString(
      d.VehicleActualCashValue,
      false,
      field + '.VehicleActualCashValue'
    )
    checkString(d.ArbitrationDate, false, field + '.ArbitrationDate')
    checkString(d.SettlementAmount, false, field + '.SettlementAmount')
    checkString(d.LetterReceivedDate, false, field + '.LetterReceivedDate')
    checkString(d.ClaimantCompanyName, false, field + '.ClaimantCompanyName')
    checkString(d.CaseDescription, false, field + '.CaseDescription')
    checkString(d.CaseDateFiled, false, field + '.CaseDateFiled')
    checkString(d.CaseNumber, false, field + '.CaseNumber')
    d.AutoInsurance = AutoInsuranceProxy.Create(
      d.AutoInsurance,
      field + '.AutoInsurance'
    )
    return new ClaimProxy(d)
  }
  private constructor(d: any) {
    this.Number = d.Number
    this.Date = d.Date
    this.DateOfLoss = d.DateOfLoss
    this.TimeOfLoss = d.TimeOfLoss
    this.AmountDemanded = d.AmountDemanded
    this.Location = d.Location
    this.State = d.State
    this.LossDescription = d.LossDescription
    this.InjuryDescription = d.InjuryDescription
    this.SpouseName = d.SpouseName
    this.NumberOfDependents = d.NumberOfDependents
    this.DeathDate = d.DeathDate
    this.SubrogationAmount = d.SubrogationAmount
    this.SalvageAmount = d.SalvageAmount
    this.PaidClaimAmount = d.PaidClaimAmount
    this.VehicleActualCashValue = d.VehicleActualCashValue
    this.ArbitrationDate = d.ArbitrationDate
    this.SettlementAmount = d.SettlementAmount
    this.LetterReceivedDate = d.LetterReceivedDate
    this.ClaimantCompanyName = d.ClaimantCompanyName
    this.CaseDescription = d.CaseDescription
    this.CaseDateFiled = d.CaseDateFiled
    this.CaseNumber = d.CaseNumber
    this.AutoInsurance = d.AutoInsurance
  }
}

export class AutoInsuranceProxy {
  public readonly PreApprovalDate: string
  public readonly InsuredSince: string
  public readonly VehicleYear: string
  public readonly VehicleMake: string
  public readonly VehicleModel: string
  public readonly VIN: string
  public readonly VehicleDamage: string
  public readonly VehicleLicenseNumber: string
  public readonly Mileage: string
  public readonly PreviousPremium: string
  public readonly NewPremium: string
  public static Parse(d: string): AutoInsuranceProxy {
    return AutoInsuranceProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): AutoInsuranceProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.PreApprovalDate, false, field + '.PreApprovalDate')
    checkString(d.InsuredSince, false, field + '.InsuredSince')
    checkString(d.VehicleYear, false, field + '.VehicleYear')
    checkString(d.VehicleMake, false, field + '.VehicleMake')
    checkString(d.VehicleModel, false, field + '.VehicleModel')
    checkString(d.VIN, false, field + '.VIN')
    checkString(d.VehicleDamage, false, field + '.VehicleDamage')
    checkString(d.VehicleLicenseNumber, false, field + '.VehicleLicenseNumber')
    checkString(d.Mileage, false, field + '.Mileage')
    checkString(d.PreviousPremium, false, field + '.PreviousPremium')
    checkString(d.NewPremium, false, field + '.NewPremium')
    return new AutoInsuranceProxy(d)
  }
  private constructor(d: any) {
    this.PreApprovalDate = d.PreApprovalDate
    this.InsuredSince = d.InsuredSince
    this.VehicleYear = d.VehicleYear
    this.VehicleMake = d.VehicleMake
    this.VehicleModel = d.VehicleModel
    this.VIN = d.VIN
    this.VehicleDamage = d.VehicleDamage
    this.VehicleLicenseNumber = d.VehicleLicenseNumber
    this.Mileage = d.Mileage
    this.PreviousPremium = d.PreviousPremium
    this.NewPremium = d.NewPremium
  }
}

export class AuthorProxy {
  public readonly FirstName: string
  public readonly Midname: string
  public readonly LastName: string
  public readonly Email: string
  public readonly PhoneNumber: string
  public readonly PhoneNumberExt: string
  public readonly CellNumber: string
  public readonly Job: string
  public readonly Image: string
  public readonly Signature: string
  public static Parse(d: string): AuthorProxy {
    return AuthorProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): AuthorProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.FirstName, false, field + '.FirstName')
    checkString(d.Midname, false, field + '.Midname')
    checkString(d.LastName, false, field + '.LastName')
    checkString(d.Email, false, field + '.Email')
    checkString(d.PhoneNumber, false, field + '.PhoneNumber')
    checkString(d.PhoneNumberExt, false, field + '.PhoneNumberExt')
    checkString(d.CellNumber, false, field + '.CellNumber')
    checkString(d.Job, false, field + '.Job')
    checkString(d.Image, false, field + '.Image')
    checkString(d.Signature, false, field + '.Signature')
    return new AuthorProxy(d)
  }
  private constructor(d: any) {
    this.FirstName = d.FirstName
    this.Midname = d.Midname
    this.LastName = d.LastName
    this.Email = d.Email
    this.PhoneNumber = d.PhoneNumber
    this.PhoneNumberExt = d.PhoneNumberExt
    this.CellNumber = d.CellNumber
    this.Job = d.Job
    this.Image = d.Image
    this.Signature = d.Signature
  }
}

export class PartyProxy {
  public readonly Data: DataProxy
  public static Parse(d: string): PartyProxy {
    return PartyProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): PartyProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    d.Data = DataProxy.Create(d.Data, field + '.Data')
    return new PartyProxy(d)
  }
  private constructor(d: any) {
    this.Data = d.Data
  }
}

export class DataProxy {
  public readonly Name: string
  public readonly Midname: string
  public readonly Surname: string
  public readonly Title: string
  public readonly Company: string
  public readonly AddressLines: AddressLinesEntityProxy[] | null
  public readonly City: string
  public readonly Zip: string
  public readonly State: string
  public readonly Role: string
  public readonly WebSite: string
  public readonly Email: string
  public readonly ProviderTINnumber: string
  public static Parse(d: string): DataProxy {
    return DataProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): DataProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.Name, false, field + '.Name')
    checkString(d.Midname, false, field + '.Midname')
    checkString(d.Surname, false, field + '.Surname')
    checkString(d.Title, false, field + '.Title')
    checkString(d.Company, false, field + '.Company')
    checkArray(d.AddressLines, field + '.AddressLines')
    if (d.AddressLines) {
      for (let i = 0; i < d.AddressLines.length; i++) {
        d.AddressLines[i] = AddressLinesEntityProxy.Create(
          d.AddressLines[i],
          field + '.AddressLines[' + i + ']'
        )
      }
    }
    if (d.AddressLines === undefined) {
      d.AddressLines = null
    }
    checkString(d.City, false, field + '.City')
    checkString(d.Zip, false, field + '.Zip')
    checkString(d.State, false, field + '.State')
    checkString(d.Role, false, field + '.Role')
    checkString(d.WebSite, false, field + '.WebSite')
    checkString(d.Email, false, field + '.Email')
    checkString(d.ProviderTINnumber, false, field + '.ProviderTINnumber')
    return new DataProxy(d)
  }
  private constructor(d: any) {
    this.Name = d.Name
    this.Midname = d.Midname
    this.Surname = d.Surname
    this.Title = d.Title
    this.Company = d.Company
    this.AddressLines = d.AddressLines
    this.City = d.City
    this.Zip = d.Zip
    this.State = d.State
    this.Role = d.Role
    this.WebSite = d.WebSite
    this.Email = d.Email
    this.ProviderTINnumber = d.ProviderTINnumber
  }
}

export class DependentsProxy {
  public readonly Data: DataEntityProxy[] | null
  public static Parse(d: string): DependentsProxy {
    return DependentsProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): DependentsProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkArray(d.Data, field + '.Data')
    if (d.Data) {
      for (let i = 0; i < d.Data.length; i++) {
        d.Data[i] = DataEntityProxy.Create(
          d.Data[i],
          field + '.Data[' + i + ']'
        )
      }
    }
    if (d.Data === undefined) {
      d.Data = null
    }
    return new DependentsProxy(d)
  }
  private constructor(d: any) {
    this.Data = d.Data
  }
}

export class DataEntityProxy {
  public readonly Name: string
  public readonly Midname: string
  public readonly Surname: string
  public readonly Gender: string
  public readonly Email: string
  public readonly MedicalProvider: MedicalProviderProxy
  public static Parse(d: string): DataEntityProxy {
    return DataEntityProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): DataEntityProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.Name, false, field + '.Name')
    checkString(d.Midname, false, field + '.Midname')
    checkString(d.Surname, false, field + '.Surname')
    checkString(d.Gender, false, field + '.Gender')
    checkString(d.Email, false, field + '.Email')
    d.MedicalProvider = MedicalProviderProxy.Create(
      d.MedicalProvider,
      field + '.MedicalProvider'
    )
    return new DataEntityProxy(d)
  }
  private constructor(d: any) {
    this.Name = d.Name
    this.Midname = d.Midname
    this.Surname = d.Surname
    this.Gender = d.Gender
    this.Email = d.Email
    this.MedicalProvider = d.MedicalProvider
  }
}

export class MedicalProviderProxy {
  public readonly Name: string
  public readonly AddressLines: AddressLinesEntityProxy[] | null
  public readonly City: string
  public readonly Zip: string
  public readonly State: string
  public static Parse(d: string): MedicalProviderProxy {
    return MedicalProviderProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): MedicalProviderProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.Name, false, field + '.Name')
    checkArray(d.AddressLines, field + '.AddressLines')
    if (d.AddressLines) {
      for (let i = 0; i < d.AddressLines.length; i++) {
        d.AddressLines[i] = AddressLinesEntityProxy.Create(
          d.AddressLines[i],
          field + '.AddressLines[' + i + ']'
        )
      }
    }
    if (d.AddressLines === undefined) {
      d.AddressLines = null
    }
    checkString(d.City, false, field + '.City')
    checkString(d.Zip, false, field + '.Zip')
    checkString(d.State, false, field + '.State')
    return new MedicalProviderProxy(d)
  }
  private constructor(d: any) {
    this.Name = d.Name
    this.AddressLines = d.AddressLines
    this.City = d.City
    this.Zip = d.Zip
    this.State = d.State
  }
}

export class PolicyProxy {
  public readonly CoverageDeductible: string
  public readonly CoverageLimit: string
  public readonly DriversLicense: string
  public readonly LogoFileName: string
  public readonly PolicyCompanyAddressLine1: string
  public readonly PolicyCompanyAddressLine2: string
  public readonly PolicyCompanyAddressLine3: string
  public readonly PolicyCompanyCode: PolicyCompanyCodeEntityProxy[] | null
  public readonly PolicyCompanyName: string
  public readonly PolicyCompanyPhoneNumber: string
  public readonly PolicyCompanyState: string
  public readonly PolicyCompanyWebsite: string
  public readonly PolicyCompanyZip: string
  public readonly PolicyCoverageDescription: string
  public readonly PolicyEffectiveDate: string
  public readonly PolicyHolderAddressLine1: string
  public readonly PolicyHolderBirthdate: string
  public readonly PolicyHolderCellNumber: string
  public readonly PolicyHolderCity: string
  public readonly PolicyHolderEmail: string
  public readonly PolicyHolderMidname: string
  public readonly PolicyHolderName: string
  public readonly PolicyHolderPhoneNumber: string
  public readonly PolicyHolderRole: string
  public readonly PolicyHolderSocialSecurityNumber: string
  public readonly PolicyHolderState: string
  public readonly PolicyHolderSurname: string
  public readonly PolicyHolderZip: string
  public readonly PolicyNumber: string
  public readonly VIN: string
  public readonly VehicleMake: string
  public readonly VehicleModel: string
  public readonly VehicleYear: string
  public static Parse(d: string): PolicyProxy {
    return PolicyProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): PolicyProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.CoverageDeductible, false, field + '.CoverageDeductible')
    checkString(d.CoverageLimit, false, field + '.CoverageLimit')
    checkString(d.DriversLicense, false, field + '.DriversLicense')
    checkString(d.LogoFileName, false, field + '.LogoFileName')
    checkString(
      d.PolicyCompanyAddressLine1,
      false,
      field + '.PolicyCompanyAddressLine1'
    )
    checkString(
      d.PolicyCompanyAddressLine2,
      false,
      field + '.PolicyCompanyAddressLine2'
    )
    checkString(
      d.PolicyCompanyAddressLine3,
      false,
      field + '.PolicyCompanyAddressLine3'
    )
    checkArray(d.PolicyCompanyCode, field + '.PolicyCompanyCode')
    if (d.PolicyCompanyCode) {
      for (let i = 0; i < d.PolicyCompanyCode.length; i++) {
        d.PolicyCompanyCode[i] = PolicyCompanyCodeEntityProxy.Create(
          d.PolicyCompanyCode[i],
          field + '.PolicyCompanyCode[' + i + ']'
        )
      }
    }
    if (d.PolicyCompanyCode === undefined) {
      d.PolicyCompanyCode = null
    }
    checkString(d.PolicyCompanyName, false, field + '.PolicyCompanyName')
    checkString(
      d.PolicyCompanyPhoneNumber,
      false,
      field + '.PolicyCompanyPhoneNumber'
    )
    checkString(d.PolicyCompanyState, false, field + '.PolicyCompanyState')
    checkString(d.PolicyCompanyWebsite, false, field + '.PolicyCompanyWebsite')
    checkString(d.PolicyCompanyZip, false, field + '.PolicyCompanyZip')
    checkString(
      d.PolicyCoverageDescription,
      false,
      field + '.PolicyCoverageDescription'
    )
    checkString(d.PolicyEffectiveDate, false, field + '.PolicyEffectiveDate')
    checkString(
      d.PolicyHolderAddressLine1,
      false,
      field + '.PolicyHolderAddressLine1'
    )
    checkString(
      d.PolicyHolderBirthdate,
      false,
      field + '.PolicyHolderBirthdate'
    )
    checkString(
      d.PolicyHolderCellNumber,
      false,
      field + '.PolicyHolderCellNumber'
    )
    checkString(d.PolicyHolderCity, false, field + '.PolicyHolderCity')
    checkString(d.PolicyHolderEmail, false, field + '.PolicyHolderEmail')
    checkString(d.PolicyHolderMidname, false, field + '.PolicyHolderMidname')
    checkString(d.PolicyHolderName, false, field + '.PolicyHolderName')
    checkString(
      d.PolicyHolderPhoneNumber,
      false,
      field + '.PolicyHolderPhoneNumber'
    )
    checkString(d.PolicyHolderRole, false, field + '.PolicyHolderRole')
    checkString(
      d.PolicyHolderSocialSecurityNumber,
      false,
      field + '.PolicyHolderSocialSecurityNumber'
    )
    checkString(d.PolicyHolderState, false, field + '.PolicyHolderState')
    checkString(d.PolicyHolderSurname, false, field + '.PolicyHolderSurname')
    checkString(d.PolicyHolderZip, false, field + '.PolicyHolderZip')
    checkString(d.PolicyNumber, false, field + '.PolicyNumber')
    checkString(d.VIN, false, field + '.VIN')
    checkString(d.VehicleMake, false, field + '.VehicleMake')
    checkString(d.VehicleModel, false, field + '.VehicleModel')
    checkString(d.VehicleYear, false, field + '.VehicleYear')
    return new PolicyProxy(d)
  }
  private constructor(d: any) {
    this.CoverageDeductible = d.CoverageDeductible
    this.CoverageLimit = d.CoverageLimit
    this.DriversLicense = d.DriversLicense
    this.LogoFileName = d.LogoFileName
    this.PolicyCompanyAddressLine1 = d.PolicyCompanyAddressLine1
    this.PolicyCompanyAddressLine2 = d.PolicyCompanyAddressLine2
    this.PolicyCompanyAddressLine3 = d.PolicyCompanyAddressLine3
    this.PolicyCompanyCode = d.PolicyCompanyCode
    this.PolicyCompanyName = d.PolicyCompanyName
    this.PolicyCompanyPhoneNumber = d.PolicyCompanyPhoneNumber
    this.PolicyCompanyState = d.PolicyCompanyState
    this.PolicyCompanyWebsite = d.PolicyCompanyWebsite
    this.PolicyCompanyZip = d.PolicyCompanyZip
    this.PolicyCoverageDescription = d.PolicyCoverageDescription
    this.PolicyEffectiveDate = d.PolicyEffectiveDate
    this.PolicyHolderAddressLine1 = d.PolicyHolderAddressLine1
    this.PolicyHolderBirthdate = d.PolicyHolderBirthdate
    this.PolicyHolderCellNumber = d.PolicyHolderCellNumber
    this.PolicyHolderCity = d.PolicyHolderCity
    this.PolicyHolderEmail = d.PolicyHolderEmail
    this.PolicyHolderMidname = d.PolicyHolderMidname
    this.PolicyHolderName = d.PolicyHolderName
    this.PolicyHolderPhoneNumber = d.PolicyHolderPhoneNumber
    this.PolicyHolderRole = d.PolicyHolderRole
    this.PolicyHolderSocialSecurityNumber = d.PolicyHolderSocialSecurityNumber
    this.PolicyHolderState = d.PolicyHolderState
    this.PolicyHolderSurname = d.PolicyHolderSurname
    this.PolicyHolderZip = d.PolicyHolderZip
    this.PolicyNumber = d.PolicyNumber
    this.VIN = d.VIN
    this.VehicleMake = d.VehicleMake
    this.VehicleModel = d.VehicleModel
    this.VehicleYear = d.VehicleYear
  }
}

export class PolicyCompanyCodeEntityProxy {
  public readonly PCData: string
  public static Parse(d: string): PolicyCompanyCodeEntityProxy {
    return PolicyCompanyCodeEntityProxy.Create(JSON.parse(d))
  }
  public static Create(
    d: any,
    field: string = 'root'
  ): PolicyCompanyCodeEntityProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.PCData, false, field + '.PCData')
    return new PolicyCompanyCodeEntityProxy(d)
  }
  private constructor(d: any) {
    this.PCData = d.PCData
  }
}

export class PoliciesProxy {
  public readonly Data: Data1Proxy
  public static Parse(d: string): PoliciesProxy {
    return PoliciesProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): PoliciesProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    d.Data = Data1Proxy.Create(d.Data, field + '.Data')
    return new PoliciesProxy(d)
  }
  private constructor(d: any) {
    this.Data = d.Data
  }
}

export class Data1Proxy {
  public readonly PolicyHolder: PolicyHolderProxy
  public readonly AutoInsurance: AutoInsurance1Proxy
  public readonly PolicyNumber: string
  public readonly PolicyEffectiveDate: string
  public readonly PolicyCoverageDescription: string
  public readonly CoverageLimit: string
  public readonly CoverageDeductible: string
  public readonly Company: CompanyProxy
  public readonly LogoFileName: string
  public static Parse(d: string): Data1Proxy {
    return Data1Proxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): Data1Proxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    d.PolicyHolder = PolicyHolderProxy.Create(
      d.PolicyHolder,
      field + '.PolicyHolder'
    )
    d.AutoInsurance = AutoInsurance1Proxy.Create(
      d.AutoInsurance,
      field + '.AutoInsurance'
    )
    checkString(d.PolicyNumber, false, field + '.PolicyNumber')
    checkString(d.PolicyEffectiveDate, false, field + '.PolicyEffectiveDate')
    checkString(
      d.PolicyCoverageDescription,
      false,
      field + '.PolicyCoverageDescription'
    )
    checkString(d.CoverageLimit, false, field + '.CoverageLimit')
    checkString(d.CoverageDeductible, false, field + '.CoverageDeductible')
    d.Company = CompanyProxy.Create(d.Company, field + '.Company')
    checkString(d.LogoFileName, false, field + '.LogoFileName')
    return new Data1Proxy(d)
  }
  private constructor(d: any) {
    this.PolicyHolder = d.PolicyHolder
    this.AutoInsurance = d.AutoInsurance
    this.PolicyNumber = d.PolicyNumber
    this.PolicyEffectiveDate = d.PolicyEffectiveDate
    this.PolicyCoverageDescription = d.PolicyCoverageDescription
    this.CoverageLimit = d.CoverageLimit
    this.CoverageDeductible = d.CoverageDeductible
    this.Company = d.Company
    this.LogoFileName = d.LogoFileName
  }
}

export class PolicyHolderProxy {
  public readonly Name: string
  public readonly Midname: string
  public readonly Surname: string
  public readonly AddressLines: AddressLinesEntityProxy[] | null
  public readonly City: string
  public readonly Zip: string
  public readonly State: string
  public readonly Email: string
  public readonly Birthdate: string
  public readonly PhoneNumber: string
  public readonly CellNumber: string
  public readonly SocialSecurityNumber: string
  public readonly Role: string
  public static Parse(d: string): PolicyHolderProxy {
    return PolicyHolderProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): PolicyHolderProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.Name, false, field + '.Name')
    checkString(d.Midname, false, field + '.Midname')
    checkString(d.Surname, false, field + '.Surname')
    checkArray(d.AddressLines, field + '.AddressLines')
    if (d.AddressLines) {
      for (let i = 0; i < d.AddressLines.length; i++) {
        d.AddressLines[i] = AddressLinesEntityProxy.Create(
          d.AddressLines[i],
          field + '.AddressLines[' + i + ']'
        )
      }
    }
    if (d.AddressLines === undefined) {
      d.AddressLines = null
    }
    checkString(d.City, false, field + '.City')
    checkString(d.Zip, false, field + '.Zip')
    checkString(d.State, false, field + '.State')
    checkString(d.Email, false, field + '.Email')
    checkString(d.Birthdate, false, field + '.Birthdate')
    checkString(d.PhoneNumber, false, field + '.PhoneNumber')
    checkString(d.CellNumber, false, field + '.CellNumber')
    checkString(d.SocialSecurityNumber, false, field + '.SocialSecurityNumber')
    checkString(d.Role, false, field + '.Role')
    return new PolicyHolderProxy(d)
  }
  private constructor(d: any) {
    this.Name = d.Name
    this.Midname = d.Midname
    this.Surname = d.Surname
    this.AddressLines = d.AddressLines
    this.City = d.City
    this.Zip = d.Zip
    this.State = d.State
    this.Email = d.Email
    this.Birthdate = d.Birthdate
    this.PhoneNumber = d.PhoneNumber
    this.CellNumber = d.CellNumber
    this.SocialSecurityNumber = d.SocialSecurityNumber
    this.Role = d.Role
  }
}

export class AutoInsurance1Proxy {
  public readonly VehicleYear: string
  public readonly VehicleMake: string
  public readonly VehicleModel: string
  public readonly VIN: string
  public readonly DriversLicense: string
  public static Parse(d: string): AutoInsurance1Proxy {
    return AutoInsurance1Proxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): AutoInsurance1Proxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.VehicleYear, false, field + '.VehicleYear')
    checkString(d.VehicleMake, false, field + '.VehicleMake')
    checkString(d.VehicleModel, false, field + '.VehicleModel')
    checkString(d.VIN, false, field + '.VIN')
    checkString(d.DriversLicense, false, field + '.DriversLicense')
    return new AutoInsurance1Proxy(d)
  }
  private constructor(d: any) {
    this.VehicleYear = d.VehicleYear
    this.VehicleMake = d.VehicleMake
    this.VehicleModel = d.VehicleModel
    this.VIN = d.VIN
    this.DriversLicense = d.DriversLicense
  }
}

export class CompanyProxy {
  public readonly Code: string
  public readonly Name: string
  public readonly AddressLines: AddressLinesEntityProxy[] | null
  public readonly City: string
  public readonly Zip: string
  public readonly State: string
  public readonly PhoneNumber: string
  public readonly Website: string
  public static Parse(d: string): CompanyProxy {
    return CompanyProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): CompanyProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.Code, false, field + '.Code')
    checkString(d.Name, false, field + '.Name')
    checkArray(d.AddressLines, field + '.AddressLines')
    if (d.AddressLines) {
      for (let i = 0; i < d.AddressLines.length; i++) {
        d.AddressLines[i] = AddressLinesEntityProxy.Create(
          d.AddressLines[i],
          field + '.AddressLines[' + i + ']'
        )
      }
    }
    if (d.AddressLines === undefined) {
      d.AddressLines = null
    }
    checkString(d.City, false, field + '.City')
    checkString(d.Zip, false, field + '.Zip')
    checkString(d.State, false, field + '.State')
    checkString(d.PhoneNumber, false, field + '.PhoneNumber')
    checkString(d.Website, false, field + '.Website')
    return new CompanyProxy(d)
  }
  private constructor(d: any) {
    this.Code = d.Code
    this.Name = d.Name
    this.AddressLines = d.AddressLines
    this.City = d.City
    this.Zip = d.Zip
    this.State = d.State
    this.PhoneNumber = d.PhoneNumber
    this.Website = d.Website
  }
}

export class OthersProxy {
  public readonly Key: string
  public readonly Value: string
  public static Parse(d: string): OthersProxy {
    return OthersProxy.Create(JSON.parse(d))
  }
  public static Create(d: any, field: string = 'root'): OthersProxy {
    if (!field) {
      obj = d
      field = 'root'
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d)
    } else if (typeof d !== 'object') {
      throwNotObject(field, d, false)
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false)
    }
    checkString(d.Key, false, field + '.Key')
    checkString(d.Value, false, field + '.Value')
    return new OthersProxy(d)
  }
  private constructor(d: any) {
    this.Key = d.Key
    this.Value = d.Value
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, 'non-nullable object', false)
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, 'object', nullable)
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, 'object', nullable)
}
function checkArray(d: any, field: string): void {
  if (!Array.isArray(d) && d !== null && d !== undefined) {
    errorHelper(field, d, 'array', true)
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (
    typeof d !== 'string' &&
    (!nullable || (nullable && d !== null && d !== undefined))
  ) {
    errorHelper(field, d, 'string', nullable)
  }
}
function errorHelper(
  field: string,
  d: any,
  type: string,
  nullable: boolean
): never {
  if (nullable) {
    type += ', null, or undefined'
  }
  throw new TypeError(
    'Expected ' +
      type +
      ' at ' +
      field +
      ' but found:\n' +
      JSON.stringify(d) +
      '\n\nFull object:\n' +
      JSON.stringify(obj)
  )
}

export const ClaimsData = ClaimsDataProxy.Create(jsonObject)
