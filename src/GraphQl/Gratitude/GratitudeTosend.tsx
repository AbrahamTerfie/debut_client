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

