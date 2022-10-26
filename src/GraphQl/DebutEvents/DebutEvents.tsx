import { gql } from "@apollo/client";

export const GET_EVENT_WITH_ID = gql`
query($getDebutEventWithIdId: ID!) {
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