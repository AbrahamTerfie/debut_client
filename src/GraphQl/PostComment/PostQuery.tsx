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

export const CREATE_FORUM_COMMENT = gql`
mutation ($postCommentInput: postCommentInput){
  createPostComment(  postCommentInput: $postCommentInput) {
    _id
    comment
    createdBy {
      _id,
      firstName,
      email
    },
    post {
      _id,
      postContent
    }
  }
}


`


export const FETCH_POST_COMMENTS = gql`
query postComments ($getPostCommentWithPostIdId: ID!){
  getPostCommentWithPostId(id: $getPostCommentWithPostIdId) {
    _id
    comment
    createdBy {
      _id,
      firstName,
      email
    },
    post {
      _id,
      postContent
    }
  }
}`