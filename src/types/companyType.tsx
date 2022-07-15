import debutEvents from './debutEventTypes';
import debutRegistry from './debutRegistryTypes';
import User from './userType';

type Company = {
    _id: String
    companyName: String
    companyMissionStatement: String
    companyHeadquarters: String
    companyWebsite: String
    companyLogo: String
    jobBoard: String
    linkedInUrl: String
    twitterUrl: String
    instagramUrl: String
    facebookUrl: String
    majorAchivements: [String]
    companyDescription: String
    companyServivesGeography: String
    aeraOfOperation: [String]
    companySize: String
    companyCategory: [String]
    companyOwner: User
    debutedEvents: [debutEvents]
    companyFollowers: [User]
    companyRegestry: [debutRegistry]

}


export default Company;