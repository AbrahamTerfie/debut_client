import React from 'react'
import { Button, Form, FormGroup, FormText, Input, Label } from 'reactstrap';

export default function NewForumPost() {
    return (
        <Form className='p-5' >


            <FormGroup>
                <Label for="exampleSelect">Select channel you want to post to</Label>
                <Input type="select" name="select" id="exampleSelect">
                    <option> general  </option>
                    <option> collabration  </option>
                    <option> community board  </option>

                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="posttitle">Post Title</Label>
                <Input type="text" name="PostTitle" id="PostTitle" placeholder="Post Title" />
            </FormGroup>


            <FormGroup>
                <Label for="post"> Post   </Label>
                <Input type="textarea" name="postText" id="postText" />
            </FormGroup>

            <Button
                outline color='light' className='mt-3 w-100' size='md'>
                Post
            </Button>
        </Form>
    );
}
