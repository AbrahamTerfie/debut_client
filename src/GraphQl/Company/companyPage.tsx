import { gql } from '@apollo/client'


export const COMPANY_PAGE = gql` 

query getDebutCompanyWithId($getDebutCompanyWithIdId: ID!) {
  getDebutCompanyWithId(id: $getDebutCompanyWithIdId) {
    _id
    companyName
    companyMissionStatement
    companyHeadquarters
    companyWebsite
    companyLogo
    jobBoard
    linkedInUrl
    twitterUrl
    instagramUrl
    facebookUrl
    majorAchivements
    companyDescription
    companyServivesGeography
    aeraOfOperation
    companySize
    companyCategory
    companyOwner {
      _id
      firstName
      lastName
      email
      profileImage
      titleAtCompany
    }
    debutEvents {
      _id
      debutEventImage
      debutEventName
      debutEventDescription
    }
    companyGoals {
      _id
      goalTitle
      goalStatus
      goalDescription
      mileStones {
        _id
        mileStoneTitle
        mileStoneDescription
        milestoneDueDate
        milestoneCompleted
        milestoneCompletedDate
        needHelpWith
        additionalLinks
      }
    }
  }
}

 `