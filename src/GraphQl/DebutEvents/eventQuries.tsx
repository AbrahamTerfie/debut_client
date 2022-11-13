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
    debutRegistry {
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
    debutRegistry {
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

export const EVENTS_PAGE = gql`
query getdebutEvents {
  getdebutEvents {
    _id
      debutEventImage
      debutEventName
      debutEventDescription
  }
}

`


export const DEBUT_EVENT_DETAILS = gql`
query DebutEventDetails($getDebutEventWithIdId: ID!){
  getDebutEventWithId(id: $getDebutEventWithIdId) {
    _id,
    debutEventDate,
    debutEventDescription,
    debutEventName,
    debutEventImage,
    otherRelatedLinks,
    debutInvitationLink,
    belongsTo {
      _id,
      companyName,
    }
    createdBy {
      _id,
      lastName,
      firstName
    }
    debutRegistry {
      _id,      
    }
  
  }
}
`


export const EVENT_PAGE_REGISTRY = gql`
query  EventpageRegistry ($getDebutRegistryWithIdId: ID!){
  getDebutRegistryWithId(id: $getDebutRegistryWithIdId) {
    _id,
    debutRegistryName,
    debutRegistryStatus,
    belongsTo {
      _id,
      companyName
    },
    createdBy {
      _id,
      firstName
    },
    debutEvent {
      _id,
    },
    debutRegistryItems {
      _id,
      registryItemName,
      registryItemDescription,
      registryItemPrice,
      registryItemQuantity,
      registryItemImage,
      registryItemLink,
    }
    
  }
}`