import { gql } from "@apollo/client";

export const CREATE_DEBUT_REGISTRY = gql`
mutation CreateDebutRegistry($debutRegistryInput: debutRegistryInput) {
  createDebutRegistry(debutRegistryInput: $debutRegistryInput) {
    _id
    debutRegistryName
    debutRegistryStatus
    debutEvent {
      _id
    }
    belongsTo {
      _id
    }
    createdBy {
      _id
    }
    debutRegistryItems {
      _id,

    }
  }
}


`

export const EVENT_REGISTRIES = gql`
query EventRegistries($eventId: ID!) {
  getEventRegistriesWithEventId(eventId: $eventId) {
    _id
    debutRegistryName
    debutRegistryStatus
    debutEvent {
      _id
    }
    belongsTo {
      _id
    }
    createdBy {
      _id
    }
    debutRegistryItems {
      _id,

    }
  
  }
}
`