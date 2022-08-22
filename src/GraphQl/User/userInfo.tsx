import { gql } from "@apollo/client";



export const All_USERS = gql`
query DebutUsers{
  getdebutUsers {
    _id
    firstName
    lastName
    titleAtCompany
    profileImage
    company {
      _id
      companyName
    }
  }
}
`

// const UPDATE_DEBUT_USER = gql``

// const DELETE_DEBUT_USER = gql``


// const GET_DEBUT_USER_WITH_ID = gql``



