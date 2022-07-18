import React, { useState } from 'react'
import './ForumCards.css'
import { Row, Col, Offcanvas, OffcanvasBody, OffcanvasHeader, FormGroup, Input, Label, Button } from 'reactstrap'
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

    data && console.log(data)
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
                    <p className='fs-3 m-3 px-5 fw-light' >
                        {postTitle}
                    </p>
                    <span className='fs-6 m-3 px-5 fw-light text-muted' >
                        channel - #{channel}
                    </span>

                    <p className='fs-6 m-3 px-5 fw-light' >
                    </p>
                </OffcanvasHeader>
                <OffcanvasBody >
                    <p className='fs-4 mb-3 px-5 fw-light '
                        style={{
                            paddingBottom: '40px',
                            borderBottom: '1px solid #ccc',
                        }}>
                        {postContent}
                    </p>


                    <Label className='m-5 mb-2' >discussion </Label>

                    <FormGroup className='mx-5 ' size='xs' >
                        <Input
                            height={12}
                            type="text" name="comment" id="comment" placeholder=" comment on post "
                            className='form-control input-sm mb-2'
                            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        />
                    </FormGroup>

                    <Button className='btn-sm  m-2 mx-5' color='light' outline size='xs'
                        onClick={() => PostCommentHandler(newComment)}>

                        comment
                    </Button>

                    <div>
                        {data && data.getPostCommentWithPostId.map((comment: any) => {
                            return (
                                <div className='shadow pb-3 rounded' >
                                    <p className='fs-6 m-3 px-5 pt-3 fw-light ' > {comment.comment}</p>
                                    <span className='fs-6 mx-5 px-3  fw-light text-muted text-end ' > by {comment.createdBy.firstName}  </span>
                                    {/* <Button className='btn-sm  ' color='danger' outline size='xs'>x</Button>  
                                    delete for future 
                                    */}
                                </div>
                            )
                        }
                        )}
                    </div>


                </OffcanvasBody>
            </Offcanvas>
            <Row className='forumCardsContainer p-3'
                onClick={() => toggle()}
            >
                <Col xs='2' sm='2' md='2' lg='1' xl='1' className='profileImage' >
                    <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
                </Col>
                <Col className='mx-1' xs='10' sm='10' md='10' lg='10' xl='10' >
                    <p className='fw-bolder fs-5 ' > {postTitle} </p>
                    <p className='fs-6 text-muted' >   posted time  .  {channel}  .   {comments.length}  comments  </p>
                    <p className='fw-light' >
                        {postContent}
                    </p>
                </Col>
            </Row>
        </>
    )
}
