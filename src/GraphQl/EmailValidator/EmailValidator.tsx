import { gql } from '@apollo/client'


export const CHECK_EMAIL_VALIDITY = gql`
mutation emailExists ($email: String!) {
  checkUserExistsByEmail(email: $email) 
}
`   