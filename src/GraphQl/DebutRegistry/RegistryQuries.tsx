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