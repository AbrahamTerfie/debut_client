import User from './userType';
import Company from './companyType';
import RegistryItem from './registryItemType';
type debutRegistry = {
    _id: String
    createdBy: User
    belongsTo: Company
    debutRegistryName: String
    debutRegistryStatus: Boolean
    debutRegistryItems: [RegistryItem]

}

export default debutRegistry;