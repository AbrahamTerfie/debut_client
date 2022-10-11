import React, { useState } from 'react'
import './ForumCards.css'
import { Row, Offcanvas, OffcanvasBody, OffcanvasHeader, FormGroup, Input, Label, Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useMutation, useQuery } from '@apollo/client'
import { RootState } from '../../Store/RootReducer';
import { CREATE_FORUM_COMMENT, FETCH_POST_COMMENTS } from '../../GraphQl/index';
import Loader from '../Loader/Loader'

export default function ForumCards(
    { _id, createdBy, channel, postTitle, comments, postContent, }: {
        _id: String,
        createdBy: {
            _id: String,
            firstName: String,
            email: String,
        },
        channel: String,
        postTitle: String,
        comments: [],
        postContent: String,
    }) {
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const [newComment, setNewComment] = useState({
        createdBy: userID,
        post: _id,
        comment: "",
    })
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);



    const [postNewComment, postNewCommentRes] = useMutation(CREATE_FORUM_COMMENT,
        {
            update(cache, { data: { createPostComment } }) {
                const { getPostCommentWithPostId }: any = cache.readQuery({
                    query: FETCH_POST_COMMENTS,
                    variables: { getPostCommentWithPostIdId: _id }
                })
                cache.writeQuery({
                    query: FETCH_POST_COMMENTS,
                    variables: { getPostCommentWithPostIdId: _id },
                    data: { getPostCommentWithPostId: [createPostComment, ...getPostCommentWithPostId] }
                })
            }
        })
    const { data, loading, error } = useQuery(FETCH_POST_COMMENTS, {
        variables: { getPostCommentWithPostIdId: _id }
    })

    // data && console.log(data)
    if (loading) {
        return <Loader />
    }
    if (error) {
        console.log(error)
    }



    const PostCommentHandler = (newComment: any) => {
        postNewComment({
            variables: { postCommentInput: newComment }
        })

    }

    return (
        <>

            <Offcanvas style={{ width: '50%' }}
                direction="end"
                isOpen={canvas}
                toggle={toggle}
                scrollable={true}
            >
                <OffcanvasHeader toggle={toggle}>
                    <span className="text-start fw-light m-0 fs-6 text-muted">title</span>
                    <p className='fs-2  fw-light m-0  ' > {postTitle} </p>
                    <br />
                    <p className='fs-6  px-2 fw-light text-muted' >
                        channel - <span className='fw-bold' >#{channel}</span>
                    </p>
                </OffcanvasHeader>
                <OffcanvasBody >
                    <p className='fs-4  px-5 fw-light border border-1 border-light shadow-sm p-3 mb-5 bg-body rounded'


                    > {postContent} </p>
                    <Label className=' mb-2' >discussion </Label>
                    <FormGroup className='mx-2 ' size='xs' >
                        <input
                            height={12}
                            type="text" name="comment" id="comment" placeholder=" comment on post "
                            className='form-control input-md mb-2'
                            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        ></input>
                    </FormGroup>
                    <Button className=' border-success  m-2  px-5 py-2 shadow-sm MyeventCard   ' color='light ' outline 
                        onClick={() => PostCommentHandler(newComment)}>
                        <p className='m-0' >post </p>
                    </Button>
                    <div>
                        {data && data.getPostCommentWithPostId.map((comment: any) => {
                            return (
                                <div key={comment.id} className='shadow-sm MyeventCard  pb-3 rounded' >
                                    <p className='fs-6 m-3 px-5 pt-3 fw-light ' > {comment.comment}</p>
                                    <span className='fs-6 mx-5 px-3  fw-light text-muted text-end ' > by {comment.createdBy.firstName}  </span>
                                </div>
                            )
                        })}
                    </div>

                </OffcanvasBody>
            </Offcanvas>
            <Row className=' forumCardParent  shadow-sm rounded p-3 m-2  my-3' onClick={() => toggle()}>
                <p className='fw-light fs-5 m-1 ' > {postTitle} </p>
                <p className=' fw-lighter text-muted m-0' >   posted time  .  {channel}  .   {comments.length}  comments  </p>
                <p className='fw-light m-0' > {postContent} </p>
            </Row>
        </>
    )
}
