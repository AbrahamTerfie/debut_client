import { gql } from "@apollo/client";

export const CREATE_NEW_MILESTONE = gql`
mutation createCompanyMilestone($companyMilestoneInput: GoalMilestoneInput) {
  createCompanyMilestone(companyMilestoneInput: $companyMilestoneInput) {
    _id
  }
}
`