import { gql } from "@apollo/client"


export const CHECK_IF_USER_HAS_COMPANY = gql`
query  hasComapny ($userId: ID!) {
  checkIfUserHasCompany(userId: $userId)
}`

export const CREATE_COMPANY = gql`
mutation  createDebutCompany ($companyInput: CompanyInput) {
  createDebutCompany( companyInput:  $companyInput) {
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
      email
    }
    # debutedEvents {
    #   _id
    #   debutEventName
    # }
    companyFollowers {
      _id
      firstName
      email
    }
    companyRegestry{
      _id,
      debutRegistryName,
      debutRegistryStatus,
      debutRegistryItems {
        _id
      }
    }
  }
}
`

export const FETCH_COMPANY = gql`
query  fetchMyCompany($userId: ID!){
  getCompanyWithUserId(userId: $userId) {
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
      email
    }
    # debutedEvents {
    #   _id
    #   debutEventName
    # }
    companyFollowers {
      _id
      firstName
      email
    }
    companyRegestry{
      _id,
      debutRegistryName,
      debutRegistryStatus,
      debutRegistryItems {
        _id
      }
    }
  }
}
`


export const UPDATE_COMPANY = gql`
mutation updateDebutCompany ($updateDebutCompanyId: ID!, $companyInput: CompanyInput) {
  updateDebutCompany(id: $updateDebutCompanyId, companyInput: $companyInput) {
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
      email
    }
    # debutedEvents {
    #   _id
    #   debutEventName
    # }
    companyFollowers {
      _id
      firstName
      email
    }
    companyRegestry {
      _id
      debutRegistryName
      debutRegistryStatus
      debutRegistryItems {
        _id
      }
    }
  }
}
`

export const GET_ALL_VENTURES = gql`
query AllVentures {
  getdebutCompanies {
  _id,
    companyName,
    companyMissionStatement,
    companyHeadquarters,
    companyWebsite,
    companyLogo,
    jobBoard,
    linkedInUrl,
    twitterUrl,
    instagramUrl,
    facebookUrl,
    majorAchivements,
    companyDescription,
    companyServivesGeography,
    aeraOfOperation,
    companySize,
    companyCategory,
    companyOwner{
      _id,
      firstName,
      lastName,
      profileImage
    },
    debutEvents{
      _id,
      debutEventName,
      debutEventImage,
      debutEventDescription,
      debutEventDate,
      belongsTo {
        _id,
        companyName

      }
      createdBy {
        _id,
        firstName,
        lastName
      }
    },

  }
}
`



// export const DELETE_COMPANY = gql``

