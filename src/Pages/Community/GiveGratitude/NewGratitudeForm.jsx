import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';
import { GRATITUDE_TO_USER } from '../../../GraphQl/index';
import { useQuery, useMutation } from '@apollo/client';
const inputStyles = {
    width: '80%',
    margin: 'auto',
    marginBottom: '10px',

}
export default function NewGratitudeForm() {
    //input on active state
    const [focused, setFocused] = useState(true)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    console.log('focused', focused)

    // user filtering state
    const { data, loading, error } = useQuery(GRATITUDE_TO_USER);

    // if (loading) {
    //     console.log('loading.........')
    // } if (data) {
    //     console.log('data....', data.getdebutUsers)
    // }
    // if (error) {
    //     console.log('error.....', error)
    // }
    const [filteredUsers, setFilteredUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState({})
    console.log('selectedUser', selectedUser)

    // filter objects by name value 
    const filterByName = (name) => {
        const filtered = data.getdebutUsers.filter((user) => {
            return (
                user.firstName?.toLowerCase().includes(name.toLowerCase())
                ||
                user.lastName?.toLowerCase().includes(name.toLowerCase())
            )
        })
        return setFilteredUsers(filtered)
    }



    return (
        <Form className='mx-4 px-3' >
            <FormGroup className='d-flex ' >
                <Label className='mx-3' for="gratitudeFrom">From : </Label>
                <Input style={inputStyles} type="text" name="gratitudeFrom" id="gratitudeFrom" disabled placeholder=" userName" value="usename" />
            </FormGroup>
            <FormGroup className='d-flex ' >
                <Label className='mx-4' for="gratitudeTo">To : </Label>
                <Input style={inputStyles}
                    type="text"
                    name="gratitudeTo"
                    id="gratitudeTo"
                    placeholder="search for a person to thank"
                    onChange={(e) => filterByName(e.target.value)}
                    onFocus={onFocus} onBlur={onBlur}
                />
            </FormGroup>

            <Row className='d-flex justify-content-between ' md={12} >
                {filteredUsers ? filteredUsers.map((user) => {
                    return (
                        <Col
                            className='shadow-sm  p-1 px-3 my-2 forumCardParent' md={6} >
                            <div className='d-flex  flex-row' onClick={() => setSelectedUser(user)}>
                                <img
                                    src={user.profileImage} alt="user" className='w-25 h-25' />
                                <div className='mx-3' >
                                    <small className='m-0  fw-light  ' >  {user.firstName} {user.lastName}</small>
                                    <small className='m-0 fw-light text-muted ' > {user.email?.slice(0, 20)} </small>
                                    <br />
                                    <small className='m-0 text-muted  fw-light' > {user.titleAtCompany} , {user.company.companyName} </small>
                                </div>
                            </div>
                        </Col>
                    )
                })
                    : <div>
                        <h1>no users</h1>
                    </div>
                }
            </Row>


            <FormGroup className='d-flex ' >
                <Label className='mx-2' for="gratitudeSubject">Subject :  </Label>
                <Input style={inputStyles} type="text" name="gratitudeSubject" id="gratitudeSubject" placeholder="subject" />
            </FormGroup>

            <FormGroup className='d-flex ' >
                <Label for="gratitudeMessage">Message : </Label>
                <Input style={inputStyles} type="textarea" name="gratitudeMessage" id="gratitudeMessage"
                    placeholder="message"
                    rows="3" />

            </FormGroup>


            <Button
                className='mx-auto mt-5' outline color="light" size="lg" block>
                Send Gratitude</Button>
        </Form>
    );
}
