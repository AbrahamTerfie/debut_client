import { gql } from 'graphql-tag';

export const GRATITUDE_TO_USER = gql`
query gratitudeToUser {
  getdebutUsers {
    _id,
    firstName,
    lastName,
    userName,
    email,
   profileImage,
   titleAtCompany
   company {
     _id,
     companyName,
   } 
  }
}
`

export const CREATE_GRATITUDE = gql`
mutation newGratitude($gratitudeInput: GratitudeInput) {
  createGratitude(gratitudeInput: $gratitudeInput) {
    _id
    message
    subject
    createdBy {
      firstName
      lastName
      email
      titleAtCompany
      company {
        _id
        companyName
        companyLogo
      }
    }
    sentTo {
      _id
      firstName
      lastName
      email
      titleAtCompany
      company {
        _id
        companyName
        companyLogo
      }
    }
  }
}


`