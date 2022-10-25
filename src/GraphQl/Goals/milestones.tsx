import { gql } from "@apollo/client";

export const CREATE_NEW_MILESTONE = gql`
mutation createCompanyMilestone($companyMilestoneInput: GoalMilestoneInput) {
  createCompanyMilestone(companyMilestoneInput: $companyMilestoneInput) {
    _id
  }
}
`


export const DELETE_COMPANY_MILESTONE = gql`
mutation deleteCompanyMilestone($deleteCompanyMilestoneId: ID!){
  deleteCompanyMilestone(id: $deleteCompanyMilestoneId)
}`


export const TOGGLE_MILESTONE_STATUS = gql`
mutation toggleMilestoneCompleted($toggleMilestoneCompletedId: ID!){
  toggleMilestoneCompleted(id: $toggleMilestoneCompletedId) {
    _id
  }
}

`