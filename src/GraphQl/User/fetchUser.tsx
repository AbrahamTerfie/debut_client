import { gql } from "@apollo/client";


export const UPDATE_DEBUT_USER_WITH_ID = gql`
mutation updateDebutUser  ($updateDebutUserId: ID!, $userInput: UserInput){
  updateDebutUser(id: $updateDebutUserId, userInput: $userInput) {
        _id
    firstName
    lastName
    email
    userName
    preferredName
    pronouns
    currentCompany{
      _id
    }
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
    company {
      _id
    }
    companiesFollowing {
      _id
    }
    companiesFollowed {
      _id
    }
    ForumPost {
      _id
    }
    gratitudes {
      _id
    }
    eventsToAttend {
      _id
    }
    eventsAttended {
      _id
    }
  }
  }

`


export const FETCH_USER_WITH_ID = gql`
query getDebutUserWithId($getDebutUserWithIdId: ID!) {
  getDebutUserWithId(id: $getDebutUserWithIdId) {
    _id
    firstName
    lastName
    email
    userName
    preferredName
    pronouns
    currentCompany{
      _id
    }
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
    company {
      _id
    }
    companiesFollowing {
      _id
    }
    companiesFollowed {
      _id
    }
    ForumPost {
      _id
    }
    gratitudes {
      _id
    }
    eventsToAttend {
      _id
    }
    eventsAttended {
      _id
    }
  }
}

`


export const GET_DEBUT_USER_WITH_EMAIL = gql`
query getDebutUserWithEmail ($email: String!) {
  getDebutUserWithEmail(email: $email) {
    firstName,
    lastName,
    email,
    userName,
    preferredName,
    pronouns,
    currentCompany{
      _id,

    }
    titleAtCompany,
    linkedinUrl,
    twitterUrl,
    instagramUrl,
    mailingAddress,
    mobilePhone,
    officePhone,
    preferedContactMethod,
    hasAssistat,
    assistantName,
    assistantPhone,
    assistantEmail,
    howyouContribute,
    aeraOfExpertise,
    regions,
    yourBiography,
    personalDescription,
    profileImage,
    role,

    companiesFollowing{
      _id
    }
    companiesFollowed{
      _id
    }
    ForumPost{
      _id
    }
    gratitudes{
      _id
    }
    eventsToAttend{
      _id
    }
    eventsAttended{
      _id
    }
  }
}`

