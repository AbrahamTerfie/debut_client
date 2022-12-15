import React, { useState } from 'react'
import './ForumCards.css'
import { Row, Offcanvas, OffcanvasBody, FormGroup, } from 'reactstrap'
import { useSelector } from 'react-redux'
import { useMutation, useQuery } from '@apollo/client'
import { RootState } from '../../Store/RootReducer';
import { CREATE_FORUM_COMMENT, FETCH_POST_COMMENTS } from '../../GraphQl/index';
import Loader from '../Loader/Loader'
import { notifyError, notifySuccess } from '../../Components/Notification/Toast';
import MotionContainer from '../MotionContainer/MotionContainer'
import { motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'
export default function ForumCards(
    { _id,
        // createdBy,
        channel, postTitle, comments, postContent, }: {
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

    const inputChecker = () => {
        if (newComment.comment === '') {
            notifyError('Please fill all the fields')
            return false
        }
        return true
    }

    const [postNewComment] = useMutation(CREATE_FORUM_COMMENT, {
        refetchQueries: [{ query: FETCH_POST_COMMENTS, variables: { getPostCommentWithPostIdId: _id } }],
        onCompleted: () => {
            notifySuccess('Comment Posted Successfully')
        },
        onError: (err) => {
            notifyError(err.message)
        }

    })
    const { data, loading, error } = useQuery(FETCH_POST_COMMENTS, { variables: { getPostCommentWithPostIdId: _id } })

    // data && console.log(data)
    if (loading) { return <Loader /> }
    if (error) { notifyError(error.message) }


    const PostCommentHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        inputChecker() && postNewComment({
            variables: { postCommentInput: newComment }
        })

    }

    return (
        < >
            <Offcanvas style={{ width: '50%' }}
                direction="end"
                isOpen={canvas}
                toggle={toggle}
                scrollable={true}>
                <OffcanvasBody >
                    <div className=' App d-flex flex-column   px-5  border border-1 border-success shadow-sm p-5 mb-5  rounded bg-success bg-opacity-10   rounded-1 ' >
                        <small className="text-start fw-light m-0  text-muted">title</small>
                        <p className=' fw-light m-0  fs-5 ' > {postTitle} </p>
                        <p className='text-success fw-light m-0 fs-3 flex-wrap'>{postContent} </p>
                        <small className=' fw-light ' > channel - <span className='fw-bold' >#{channel}</span> </small>
                    </div>

                    <p className=' m-2 px-5 text-success fw-light fs-3' >comments </p>
                    <div className='px-5 d-flex flex-row flex-wrap justify-content-between align-items-start App'>
                        <FormGroup className=' w-75 ' size='sm' >
                            <input
                                height={12}
                                type="text" name="comment" id="comment" placeholder=" comment on post "
                                className='form-control input-md mb-2'
                                onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                            ></input>
                        </FormGroup>

                        <div className='w-10'>
                            <MotionContainer>
                                <p className='text-center text-success fw-light  bg-success bg-opacity-10 p-2 px-5 rounded-pill'
                                    onClick={(e: any) => PostCommentHandler(e)}>post  </p>
                            </MotionContainer>
                        </div>
                    </div>
                    <div className='px-5 App d-flex flex-column ' >
                        {data && data.getPostCommentWithPostId.map((comment: any) => {
                            return (
                                <div key={uuid()} className='shadow-sm MyeventCard  rounded  my-2 ' >
                                    <p className=' m-3 px-5 pt-3 fw-light fs-5' > {comment.comment}</p>
                                    <p className='fs-6 mx-5 px-3  fw-light text-muted text-start ' > by {comment.createdBy.firstName}  </p>
                                </div>
                            )
                        })}
                    </div>

                </OffcanvasBody>
            </Offcanvas>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100, damping: 20 }}
                whileHover={{ scale: 1.005 }}
                whileTap={{ scale: 0.9 }}>
                <Row className=' MyeventCard border border-muted shadow-sm rounded p-3 m-2  ' onClick={() => toggle()}>
                    <p className='fw-light fs-5 m-1 ' > {postTitle} </p>
                    <p className=' fw-lighter text-muted m-0' >   posted time  .  {channel}  .   {comments.length}  comments  </p>
                    <p className='fw-light m-0' > {postContent} </p>
                </Row>
            </motion.div>
        </>
    )
}
