import { gql } from "@apollo/client"


export const CHECK_IF_USER_HAS_COMPANY = gql`
query  hasComapny ($userId: ID!) {
  checkIfUserHasCompany(userId: $userId)
}
`