import User from './userType';

import ForumPost from './forumPosts';
type postComment = {
    _id: String
    createdBy: User
    post: ForumPost
    comment: String

}

export default postComment;