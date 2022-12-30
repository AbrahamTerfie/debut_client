import Gratitude from './gratitudeTypes';
import ForumPost from './forumPosts';
import Company from './companyType';
import debutEvents from './debutEventTypes';
type User = {
    _id?: String
    firstName?: String
    lastName?: String
    email?: String
    userName?: String
    preferredName?: String
    pronouns?: String
    currentCompany?: Company
    titleAtCompany?: String
    linkedinUrl?: String
    twitterUrl?: String
    instagramUrl?: String
    mailingAddress?: String
    mobilePhone?: String
    officePhone?: String
    preferedContactMethod?: String
    hasAssistat?: Boolean
    assistantName?: String
    assistantPhone?: String
    assistantEmail?: String
    howyouContribute?: String
    aeraOfExpertise?: [String]
    regions?: [String]
    yourBiography?: String
    personalDescription?: String
    profileImage?: String
    role?: String
    company?: Company
    companiesFollowing?: [Company]
    companiesFollowed?: [Company]
    ForumPost?: [ForumPost]
    gratitudes?: [Gratitude]
    eventsToAttend?: [debutEvents]
    eventsAttended?: [debutEvents]

}

export default User;