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


export const SearchVenture = gql`
query  SearchVenture($searchParam: String) {
  searchCompanyWithParam(searchParam: $searchParam) {
    _id
    companyName
    companyHeadquarters
    companyLogo
    companyDescription
    companyOwner {
      _id
      firstName
      lastName
      profileImage
      email
    }
   
  }
}
`