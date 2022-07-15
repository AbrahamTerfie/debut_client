import User from './userType';
import postComment from './postComment';
type ForumPost = {
    _id: String
    createdBy: User
    channel: String
    postTitle: String
    comments: [postComment]
    postComments: [String]
}

export default ForumPost;