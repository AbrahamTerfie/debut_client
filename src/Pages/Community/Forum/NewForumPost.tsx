import React, { useState } from 'react'
import { FormGroup, Input, Label } from 'reactstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
import { useMutation } from '@apollo/client';
import { CREATE_FORUM_POST, FETCH_ALL_FORUM_POSTS } from '../../../GraphQl/index';
import Loader from '../../../Components/Loader/Loader';
import { notifyError, notifySuccess } from '../../../Components/Notification/Toast';
import MotionContainer from '../../../Components/MotionContainer/MotionContainer';


export default function NewForumPost({ toggler }: { toggler: () => void }) {
    const { userID } = useSelector((store: RootState) => store.identfiers)

    const [createNewPost, createNewPostRes] = useMutation(CREATE_FORUM_POST, {
        refetchQueries: [{ query: FETCH_ALL_FORUM_POSTS }],
        onCompleted: () => {
            notifySuccess('Post Created Successfully')
            toggler()
        },
        onError: (err) => {
            notifyError(err.message)
        }
    })


    const [newForumPost, setNewForumPost] = useState({
        createdBy: userID,
        channel: 'general',
        postContent: '',
        postTitle: '',
    })

    const inputChecker = () => {
        if (newForumPost.postTitle === '' || newForumPost.postContent === '') {
            notifyError('Please fill all the fields')
            return false
        }
        return true
    }
    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        inputChecker() && createNewPost({
            variables: { forumPostInput: newForumPost }
        })
    }

    if (createNewPostRes.loading) {
        return <Loader />
    }
    return (
        <div className=' d-flex flex-column '>
            <FormGroup>
                <Label for="exampleSelect">Select channel you want to post to</Label>
                <Input type="select" name="select" id="exampleSelect"
                    onChange={(e) => setNewForumPost({ ...newForumPost, channel: e.target.value })}>
                    <option value="general" > general  </option>
                    <option value="collabration"  > collabration  </option>
                    <option value="community" > community board  </option>

                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="posttitle">Post Title</Label>
                <Input type="text" name="PostTitle" id="PostTitle" placeholder="Post Title"
                    onChange={(e) => setNewForumPost({ ...newForumPost, postTitle: e.target.value })}
                />
            </FormGroup>
            <FormGroup>
                <Label for="post"> Post   </Label>
                <Input type="textarea" name="postText" id="postText"
                    onChange={(e) => setNewForumPost({ ...newForumPost, postContent: e.target.value })}
                />
            </FormGroup>

            <MotionContainer>
                <p className="
                 my-3 p-3 px-5  text-center 
                 text-success-emphasis bg-success-subtle border border-success-emphasis rounded
                "
                    onClick={(e: any) => formSubmitHandler(e)}>
                    post to
                    <span className='fw-bold mx-2'>
                        {newForumPost.channel}
                    </span>

                </p>
            </MotionContainer>
        </div  >
    )
}
