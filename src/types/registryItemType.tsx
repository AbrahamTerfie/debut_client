import debutRegistry from './debutRegistryTypes';


type RegistryItem = {
    _id: String
    itemOfRegistry: debutRegistry
    registryItemName: String
    registryItemDescription: String
    registryItemImage: String
    registryItemPrice: String
    registryItemLink: String
    registryItemQuantity: String
    registryItemFullfiled: Boolean
}

export default RegistryItem;