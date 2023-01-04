import React, { useState } from 'react'
import './ForumCards.css'
import { Row, Offcanvas, OffcanvasBody, FormGroup, OffcanvasHeader, Col, } from 'reactstrap'
import { useSelector } from 'react-redux'
import { useMutation, useQuery } from '@apollo/client'
import { RootState } from '../../Store/RootReducer';
import { CREATE_FORUM_COMMENT, FETCH_POST_COMMENTS } from '../../GraphQl/index';
import Loader from '../Loader/Loader'
import { notifyError, notifySuccess } from '../../Components/Notification/Toast';
import MotionContainer from '../MotionContainer/MotionContainer'
import { motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'
import { IoMdClose } from 'react-icons/io'
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
            notifySuccess(' Posted Successfully')
            setNewComment({ ...newComment, comment: "" })
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


    const inputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setNewComment({ ...newComment, comment: e.currentTarget.value })
    }

    return (
        < >
            <Offcanvas
                //  style={{ width: '50%' }}
                direction="end"
                isOpen={canvas}
                toggle={toggle}
                responsive={true}
                scrollable={true}>

                <OffcanvasHeader
                    close={<MotionContainer>
                        <IoMdClose className=' text-danger-emphasis' onClick={toggle} size={20} />
                    </MotionContainer>} >
                </OffcanvasHeader>

                <OffcanvasBody >
                    <div className='  d-flex flex-column   border-bottom border-success-subtle border-2
                    shadow-sm p-3 mt-3 mb-5
                      rounded-1 ' >
                        <small className="text-start fw-light m-0 flex-wrap text-secondary">title</small>
                        <span className=' fw-light m-0    flex-wrap' > {postTitle} </span>
                        <p className=' App fw-light m-0 fs-5 flex-wrap'>{postContent} </p>
                        <small className=' fw-light ' > channel - <span className='fw-bold text-success-emphasis  ' >#{channel}</span> </small>
                    </div>

                    <p className=' m-2 px-1 text-success fw-light fs-3' >comments </p>
                    <Row className='px-1 d-flex flex-row flex-wrap '>
                        <FormGroup
                            className='d-flex flex-row flex-wrap'>
                            <input
                                height={12}
                                type="text"
                                name="comment" id="comment" placeholder=" comment on post "
                                className='form-control input-md mb-2'
                                onChange={(e: any) => inputHandler(e)}
                            ></input>
                        </FormGroup>
                        <MotionContainer>
                            <p className='text-center  fw-light    text-success-emphasis  fs-5 bg-success-subtle rounded-1 py-2 border border-success-subtle border-1'
                                onClick={(e: any) => PostCommentHandler(e)}>post  </p>
                        </MotionContainer>

                    </Row>
                    <div className='p-auto App d-flex flex-column ' >
                        {data && data.getPostCommentWithPostId.map((comment: any) => {
                            return (
                                <div key={uuid()} className='shadow-sm   rounded  my-1 ps-2 p-1  border border-tertiary-emphasis border-1 ' >
                                    <p className=' m-0  fw-normal fs-6' > {comment.comment}</p>
                                    <span className=' m-0  text-secondary fw-lighter text-small  text-start ' >  {comment.createdBy.firstName + "" + comment.createdBy.lastName}  </span>
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
