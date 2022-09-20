import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { GRATITUDE_TO_USER, CREATE_GRATITUDE, SENT_GRATITUDE } from '../../../GraphQl/index';
import { useQuery, useMutation } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
const inputStyles = {
    width: '80%',
    margin: 'auto',
    marginBottom: '10px',

}
export default function NewGratitudeForm() {
    const { userID, userEmail } = useSelector((store: RootState) => store.identfiers)
    const [newGratitudeForm, setNewGratitudeForm] = useState({
        createdBy: userID,
        sentTo: '',
        subject: '',
        message: '',
    } as any)
    // console.log('newGratitudeForm', newGratitudeForm)

    const [filteredUsers, setFilteredUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState({} as any)
    const [searchInput, setSearchInput] = useState('')
    // console.log('selectedUser', selectedUser)
    useEffect(() => {
        setNewGratitudeForm({
            ...newGratitudeForm,
            sentTo: selectedUser._id
        })
    }, [selectedUser])

    const handleInput = (e: any) => {
        setNewGratitudeForm({
            ...newGratitudeForm,
            [e.target.name]: e.target.value
        })
    }
    //input on active state
    const [focused, setFocused] = useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    // console.log('focused', focused)

    // user filtering state
    const { data, loading, error } = useQuery(GRATITUDE_TO_USER);
    const [gratitudeToUser, {
        data: gratitudeToUserData,
        loading: gratitudeToUserLoading,
        error: gratitudeToUserError
    }] = useMutation(CREATE_GRATITUDE,
        {
            update(cache, { data: { createGratitude } }) {
                const { getSentGratitudes }: any = cache.readQuery({
                    query: SENT_GRATITUDE,
                    variables: { userId: userID }
                })
                cache.writeQuery({
                    query: SENT_GRATITUDE,
                    variables: { userId: userID },
                    data: { getSentGratitudes: [createGratitude, ...getSentGratitudes] }
                })
            }
        }
    )



    // if (gratitudeToUserData) {
    //     console.log('gratitudeToUserData', gratitudeToUserData)
    // }
    // if (gratitudeToUserLoading) {
    //     console.log('gratitudeToUserLoading', gratitudeToUserLoading)
    // }
    // if (gratitudeToUserError) {
    //     console.log('gratitudeToUserError', gratitudeToUserError)
    // }
    const onSubmitHandler = (e: any) => {
        e.preventDefault()
        gratitudeToUser({
            variables: {
                gratitudeInput: {
                    ...newGratitudeForm
                }
            }
        })
    }

    if (error) {
        console.log('error.....', error)
    }

    // filter objects by name value 
    const filterByName = (name: String) => {
        const filtered = data.getdebutUsers.filter((user: any) => {
            return (user.firstName?.toLowerCase().includes(name.toLowerCase())
                || user.lastName?.toLowerCase().includes(name.toLowerCase())
            )
        })
        return setFilteredUsers(filtered)
    }
    useEffect(() => {
        if (searchInput.length > 0) { filterByName(searchInput) }
    }, [searchInput])



    return (
        <Form className='mx-4 px-3' >
            <FormGroup className='d-flex ' >
                <Label className='mx-3' for="gratitudeFrom">From : </Label>
                <Input style={inputStyles} type="text" name="gratitudeFrom" id="gratitudeFrom" disabled placeholder=" userName"
                    value={"you: " + userEmail} />
            </FormGroup>
            <FormGroup className='d-flex ' >
                <Label className='mx-4' for="gratitudeTo">To : </Label>
                <Input style={inputStyles}
                    type="text"
                    name="gratitudeTo"
                    id="gratitudeTo"
                    placeholder={selectedUser?.firstName ? `${selectedUser.firstName} ${selectedUser.lastName}` : 'Search for a user'}
                    value={selectedUser?.firstName ? `${selectedUser.firstName} ${selectedUser.lastName}` : searchInput}
                    onChange={(e) => {
                        setSelectedUser({})
                        setSearchInput(e.target.value)
                    }}
                    onFocus={onFocus}
                />
            </FormGroup>

            <Row className='d-flex justify-content-between ' md={12} >
                {focused && filteredUsers.map((user: any) => {
                    return (
                        <Col
                            className='shadow-sm  p-1 px-3 my-2 forumCardParent' md={6} >
                            <div className='d-flex  flex-row' onClick={() => { setSelectedUser(user); onBlur() }}>
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
                })}
            </Row>


            <FormGroup className='d-flex ' >
                <Label className='mx-2' for="gratitudeSubject">Subject :  </Label>
                <Input style={inputStyles} type="text"
                    name="subject"
                    id="gratitudeSubject"
                    placeholder="subject"
                    value={newGratitudeForm.subject}
                    onChange={handleInput}
                />
            </FormGroup>

            <FormGroup className='d-flex ' >
                <Label for="gratitudeMessage">Message : </Label>
                <Input style={inputStyles}
                    type="textarea"
                    name="message"
                    id="gratitudeMessage"
                    placeholder="message"
                    value={newGratitudeForm.message}
                    onChange={handleInput}
                    rows="3" />

            </FormGroup>


            <Button
                className='mx-auto mt-5' outline
                color={gratitudeToUserData ? 'success' : userID === selectedUser._id ? 'danger ' : 'light'}
                size="lg" block
                onClick={gratitudeToUserData ? () => { } : onSubmitHandler}
                disabled={gratitudeToUserData || userID === selectedUser._id ? true : false}
            >

                {gratitudeToUserData ? 'Gratitude Sent'
                    : userID === selectedUser._id ? "you can't send gratitude to yourself "
                        : 'Send Gratitude'
                }

            </Button>
        </Form>
    );
}
