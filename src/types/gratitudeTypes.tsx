import User from './userType';

type Gratitude = {
    _id: String
    createdBy: User
    sentTo: User
    subject: String
    message: String
}


export default Gratitude;