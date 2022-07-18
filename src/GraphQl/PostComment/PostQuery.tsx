import { gql } from 'graphql-tag';



export const CREATE_FORUM_POST = gql`
mutation CreateNewForumPost ($forumPostInput: ForumPostInput){ createForumPost(  forumPostInput: $forumPostInput) {
   _id
    channel
    postComments
    postTitle
    createdBy {
      _id
      firstName
      email
    }
    comments {
      _id
    }

}

}`

export const FETCH_ALL_FORUM_POSTS = gql`
   query FetchAllForumPosts {
  getForumPosts {
    _id
    channel
    postComments
    postTitle
    comments {
      _id
      comment
    },
    createdBy {
      _id,
      firstName,email
    }
  }
}

`