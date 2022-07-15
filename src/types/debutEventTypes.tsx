import User from './userType';
import Company from './companyType';
import debutRegistry from './debutRegistryTypes';


type debutEvents = {
    _id: String
    createdBy: User
    belongsTo: Company
    debutEventName: String
    debutEventDescription: String
    debutEventDate: String
    debutEventLocation: String
    debutEventImage: String
    debutEventRegestry: [debutRegistry]
    debutEventAttendees: [User]
    debutInvitationLink: String
    otherRelatedLinks: [String]
}




export default debutEvents;