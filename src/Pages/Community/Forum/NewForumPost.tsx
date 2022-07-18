import React, { useState } from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
import { useMutation } from '@apollo/client';
import { CREATE_FORUM_POST } from '../../../GraphQl/index';
import Loader from '../../../Components/Loader/Loader';
export default function NewForumPost() {
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const [createNewPost, createNewPostRes] = useMutation(CREATE_FORUM_POST)
    const [newForumPost, setNewForumPost] = useState({
        createdBy: userID,
        channel: 'general',
        postContent: '',
        postTitle: '',
    })


    const formSubmitHandler = (newForumPost: {}) => {
        createNewPost({
            variables: { forumPostInput: newForumPost }
        })
    }

    if (createNewPostRes.data) {
        console.log(" data responce ", createNewPostRes.data)
    }
    if (createNewPostRes.error) {
        console.log(createNewPostRes.error)
    }
    if (createNewPostRes.loading) {
        return <Loader />
    }

    return (
        <div className='p-5'>

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

            <Button

                outline color='light' className='mt-3 w-100' size='md'
                onClick={() => { formSubmitHandler(newForumPost) }}>
                Post
            </Button>
        </div  >
    );
}
