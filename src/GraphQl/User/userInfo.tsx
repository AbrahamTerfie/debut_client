import { gql } from "@apollo/client";



export const All_USERS = gql`
query DebutUsers($offset: Int, $limit: Int) {
  getdebutUsers (offset: $offset, limit: $limit) {
    TotalAmount
    Users {
      _id
      firstName
      lastName
      titleAtCompany
      profileImage
      aeraOfExpertise
      regions
      company {
        _id
        companyName
      }
    }
  }

}
`


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



