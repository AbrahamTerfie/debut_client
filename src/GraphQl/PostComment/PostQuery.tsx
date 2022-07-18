import { gql } from 'graphql-tag';



export const CREATE_FORUM_POST = gql`
mutation CreateNewForumPost ($forumPostInput: ForumPostInput){ 
    createForumPost(  forumPostInput: $forumPostInput) {
    _id
    channel
    postContent
    postTitle
    comments {
      _id

    },
    createdBy {
      _id,
      firstName,
      email
    }

}

}`

export const FETCH_ALL_FORUM_POSTS = gql`
   query FetchAllForumPosts {
  getForumPosts {
    _id
    channel
    postContent
    postTitle
    comments {
      _id

    },
    createdBy {
      _id,
      firstName,
      email
    }
  }
}

`