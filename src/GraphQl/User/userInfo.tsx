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


export const GET_DEBUT_USER_WITH_ID = gql`
query  DebutUserDetail($getDebutUserWithIdId: ID!) {
  getDebutUserWithId(id: $getDebutUserWithIdId) {
    _id
    firstName
    lastName
    email
    userName
    preferredName
    pronouns
    titleAtCompany
    linkedinUrl
    twitterUrl
    instagramUrl
    mailingAddress
    mobilePhone
    officePhone
    preferedContactMethod
    hasAssistat
    assistantName
    assistantPhone
    assistantEmail
    howyouContribute
    aeraOfExpertise
    regions
    yourBiography
    personalDescription
    profileImage
    role
    companiesFollowing {
      _id
    }
    companiesFollowed {
      _id
    }
    eventsToAttend {
      _id
    }
    eventsAttended {
      _id
    }
    company {
      _id
      companyName
      companyLogo,
      companyWebsite,
    }
  }
}

`



