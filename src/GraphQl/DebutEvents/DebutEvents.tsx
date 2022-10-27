import { gql } from "@apollo/client";

export const GET_EVENT_WITH_ID = gql`
query getDebutEventWithId($getDebutEventWithIdId: ID!) {
  getDebutEventWithId(id: $getDebutEventWithIdId) {
    _id
    debutEventName
    debutEventDescription
    debutEventDate
    debutEventLocation
    debutEventImage
    debutRegistry {
      _id
      debutRegistryName
      debutRegistryStatus
      debutRegistryItems {
        _id
        registryItemName
        registryItemDescription
        registryItemImage
        registryItemPrice
        registryItemLink
        registryItemQuantity
        registryItemFullfiled
      }
    }
    debutEventAttendees {
      firstName
      lastName
      email
      profileImage
    }
    debutInvitationLink
    otherRelatedLinks
  }
}
`


export const CREATE_DEBUT_REGISTRY = gql`
mutation createDebutRegistry($debutRegistryInput: debutRegistryInput){
  createDebutRegistry(debutRegistryInput: $debutRegistryInput) {
    _id
  }
}
`


export const NEW_REGISTRY_ITEM = gql`
mutation createRegistryItem($registryItemInput: RegistryItemInput) {
  createRegistryItem(registryItemInput: $registryItemInput) {
    _id
  }
}
`


export const DELETE_REGISTRY_ITEM = gql`
mutation deleteRegistryItem($deleteRegistryItemId: ID!){
  deleteRegistryItem(id: $deleteRegistryItemId)

}`



export const DELETE_DEBUT_REGISTRY = gql`
mutation deleteDebutRegistry($deleteDebutRegistryId: ID!){
  deleteDebutRegistry(id: $deleteDebutRegistryId)
}`