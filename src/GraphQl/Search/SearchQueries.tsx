import React from 'react'
import gql from 'graphql-tag'


export const SearchUser = gql`
query SearchUser($searchParam: String) {
  searchUserWithParam(searchParam: $searchParam) {
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