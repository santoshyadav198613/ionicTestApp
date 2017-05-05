import {Ischools} from './school'

export class SchoolApi{
    EnrollmentSchool : Ischools[];
    constructor(){
      let school  =[{
        	  SchoolSessionId :31922 ,
    SchoolCode : "",
    SchoolYear : "",
    SchoolName: "LEXINGTON CHRISTIAN ACADEMY",
    SchoolAddress: "test",
    City: "string",
    StateName: "string",
    StateCode: 0,
    Latitude: 0,
    Longitude: 0,
    AllowEmailInvoicing: false,
    AllowCCs: false,
    IsCharterSchool: false,
    DepositRequired: false,
    PolicyAgreementType: "string",
    PolicyAgreementText: "string",
    HasCustomPolicyAgreement: false,
    CustomPolicyAgreementObjectKey :"string",
    HasSchoolLogo: false,
    SchoolLogoUrl: "string",
    Distance : "string",
    AdditionalAgreementText: "string",
    AdditionalConfirmationMessage: "string",
    ElectronicFailFee: "string",
    CheckFailFee: "string",
    DioceseId: 0,
    SchoolType: "string",
    DisableNewFamilyEnrollment: false,
    SmartShieldUrl: "string",
    IsSmartShieldActive: false,
    IsStateEligibleForSmart: false

      },
      {
             SchoolSessionId :28349 ,
    SchoolCode : "",
    SchoolYear : "",
    SchoolName: "THE ALEXANDER ROBERTSON SCHOOL",
    SchoolAddress: "test",
    City: "string",
    StateName: "string",
    StateCode: 0,
    Latitude: 0,
    Longitude: 0,
    AllowEmailInvoicing: false,
    AllowCCs: false,
    IsCharterSchool: false,
    DepositRequired: false,
    PolicyAgreementType: "string",
    PolicyAgreementText: "string",
    HasCustomPolicyAgreement: false,
    CustomPolicyAgreementObjectKey :"string",
    HasSchoolLogo: false,
    SchoolLogoUrl: "string",
    Distance : "string",
    AdditionalAgreementText: "string",
    AdditionalConfirmationMessage: "string",
    ElectronicFailFee: "string",
    CheckFailFee: "string",
    DioceseId: 0,
    SchoolType: "string",
    DisableNewFamilyEnrollment: false,
    SmartShieldUrl: "string",
    IsSmartShieldActive: false,
    IsStateEligibleForSmart: false

      }];

      this.EnrollmentSchool = school;  
       
    }

    getSchoolData(){
        return  this.EnrollmentSchool;
    }
}