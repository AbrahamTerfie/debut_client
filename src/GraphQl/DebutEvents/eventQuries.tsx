import { gql } from "@apollo/client";


export const CREATE_EVENT = gql`
mutation CreateDebutEvent ($debutEventInput: debutEventsInput) {
  createDebutEvent(debutEventInput: $debutEventInput) {
    _id
    createdBy {
      _id
    }
    belongsTo {
      _id
    }
    debutEventName
    debutEventDescription
    debutEventDate
    debutEventLocation
    debutEventImage
    debutEventRegestry {
      _id
      debutRegistryName
    }
    debutEventAttendees {
      _id
      firstName
    }
    debutInvitationLink
    otherRelatedLinks
  }
}
`


export const MY_DEBUT_EVENTS = gql`
query MyDebutEvents ($userId: ID!) {
  getDebutEventsWithUserId(userId: $userId) {
    _id
    createdBy {
      _id
      firstName
    }
    belongsTo {
      _id
      companyName
    }
    debutEventName
    debutEventDescription
    debutEventDate
    debutEventLocation
    debutEventImage
    debutEventRegestry {
      _id
      debutRegistryName
    }
    debutEventAttendees {
      _id
      firstName
    }
    debutInvitationLink
  }
}

`