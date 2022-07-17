import { gql } from "@apollo/client";



export const CREATE_DEBUT_USER = gql`
mutation CreateDebutUser($userInput: UserInput) {
  createDebutUser(userInput: $userInput) {
    _id,
    email,
    firstName,
    userName
  }
}`



export const AUTHENTICATED_USER = gql`
mutation  AuthenticatedUser ($userInput: UserInput){
  authenticatedUser (  userInput: $userInput){
    _id,
    aeraOfExpertise,
    email,
    assistantName,
    lastName,
    firstName,
    preferredName,
    company {
      _id
    }

  }
}
`
