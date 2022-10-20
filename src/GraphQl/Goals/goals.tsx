import { gql } from '@apollo/client';


export const FETCH_COMPANY_GOALS_WITH_COMPANY_ID = gql`
query getCompanyGoalWithCompanyId($companyId: ID!) {
  getCompanyGoalWithCompanyId(id: $companyId) {
    _id
    goalTitle
    goalDescription
    goalStatus
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

`

export const CREATE_COMPANY_GOAL = gql`
mutation createCompanyGoal($companyGoalInput: CompanyGoalInput) {
  createCompanyGoal(companyGoalInput: $companyGoalInput) {
    _id
    goalTitle
    goalDescription
    goalStatus
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

`

export const DELETE_COMPANY_GOAL = gql`
mutation deleteCompanyGoal($deleteCompanyGoalId: ID!) {
  deleteCompanyGoal(id: $deleteCompanyGoalId)
}
`