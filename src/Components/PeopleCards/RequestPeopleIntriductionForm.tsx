import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const inputStyles = {
    width: '80%',
    margin: 'auto',
    marginBottom: '10px',

}

export default function RequestPeopleIntriductionForm() {
    return (
        <Form className='mx-4 px-3' >
            <FormGroup className='d-flex ' >
                <Label className='mx-3' for="gratitudeFrom">From : </Label>
                <Input style={inputStyles} type="text" name="gratitudeFrom" id="gratitudeFrom" disabled placeholder=" userName" value="usename" />
            </FormGroup>
            <FormGroup className='d-flex ' >
                <Label className='mx-4' for="gratitudeTo">To : </Label>
                <Input style={inputStyles} type="text" name="gratitudeTo" id="gratitudeTo" placeholder="search for a person to thank" />
            </FormGroup>

            <FormGroup className='d-flex ' >
                <Label className='mx-2' for="gratitudeSubject">Subject :  </Label>
                <Input style={inputStyles} type="text" name="gratitudeSubject" id="gratitudeSubject" placeholder="subject" />
            </FormGroup>

            <FormGroup className='d-flex ' >
                <Label for="gratitudeMessage">Message : </Label>
                <Input style={inputStyles} type="textarea" name="gratitudeMessage" id="gratitudeMessage"
                    placeholder="message"
                    rows="15" />

            </FormGroup>


            <Button
                className='mx-auto mt-5' outline color="light" size="lg" block>
                Send Gratitude</Button>
        </Form>
    );
}
