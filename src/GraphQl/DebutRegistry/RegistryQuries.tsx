import { gql } from "@apollo/client";

export const CREATE_DEBUT_REGISTRY = gql`
mutation CreateDebutRegistry($debutRegistryInput: debutRegistryInput) {
  createDebutRegistry(debutRegistryInput: $debutRegistryInput) {
    debutRegistryName
    _id
    debutEvent {
      _id
    }
    belongsTo {
      _id
    }
    createdBy {
      _id
    }
  }
}


`

export const EVENT_REGISTRIES = gql`
query EventRegistries($eventId: ID!) {
  getEventRegistriesWithEventId(eventId: $eventId) {
    _id
    belongsTo {
      _id
      companyName
    }
    debutRegistryItems {
      _id,

    }
    debutRegistryName
    debutRegistryStatus
  }
}
`