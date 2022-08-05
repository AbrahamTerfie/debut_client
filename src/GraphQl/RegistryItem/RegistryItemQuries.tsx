import { gql } from "@apollo/client";



export const GET_REGISTRY_ITEMS_WITH_REGISTRY_ID = gql`
query  RegistryItems($registryId: ID!) {
  getRegistryItemsWithRegistryId(registryId: $registryId) {
    _id
    itemOfRegistry {
      _id,
      debutRegistryName
      debutRegistryStatus
    }
    registryItemName
    registryItemDescription
    registryItemImage
    registryItemPrice
    registryItemLink
    registryItemQuantity
    registryItemFullfiled
  }
}

`

export const CREATE_REGISTRY_ITEM = gql`
mutation  NewRegistryItem($registryItemInput: RegistryItemInput) {
  createRegistryItem(registryItemInput: $registryItemInput) {
    _id
    itemOfRegistry {
      _id,
      debutRegistryName
      debutRegistryStatus
    }
    registryItemName
    registryItemDescription
    registryItemImage
    registryItemPrice
    registryItemLink
    registryItemQuantity
    registryItemFullfiled
  }
}

`