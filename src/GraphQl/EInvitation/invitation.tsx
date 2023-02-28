import { gql } from "@apollo/client";



export const SEND_INVIE_TO_USER = gql`
 mutation createInvitation($invitationInput: DebutInvitationInput) {
  createInvitation(invitationInput: $invitationInput) {
    _id
    createdBy {
      _id
      firstName
      lastName
      email
    }
    invitationToEvent {
      _id
      debutEventName
      debutEventImage
      debutEventLocation
      isOnline
    }
    eventCode
    invitationToUserEmail
    status
  }
}

`