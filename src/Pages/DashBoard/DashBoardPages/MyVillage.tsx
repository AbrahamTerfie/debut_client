import React, { useState } from 'react';
import { Row, Col, FormGroup, Label, Input, Table } from 'reactstrap';
import MotionContainer from '../../../Components/MotionContainer/MotionContainer';
import InvitationEmail from '../../../Components/Email/InvitationEmail';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
import { useQuery, useMutation } from '@apollo/client';
import emailjs from '@emailjs/browser';
import { emailJsInfo } from '../../../Components/Email/emailJsInfo';
import { EmailStatticValues } from '../../../Email/EmailTypes';
import { SEND_INVIE_TO_USER } from '../../../GraphQl/index';
import { notifyError, notifySuccess } from '../../../Components/Notification/Toast';
function PendingComponent() {
    return (
        <small className='text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-pill px-3 py-1 w-25 text-center m-0'>pending</small>
    )
}
function AcceptedComponent() {
    return (
        <small className='text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill px-3 py-1 w-25 text-center m-0'>accepted</small>
    )
}


export default function MyVillage(
    {
        createdBy,
        invitationToEvent,
        eventCode,
        status,
        eventName,
        eventDate
    }: {
        createdBy: string,
        invitationToEvent: string,
        eventCode: string,
        status: string,
        eventName: string,
        eventDate: string
    }


) {

    const [modal, setModal] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const { userEmail, userID, userFullName } = useSelector((store: RootState) => store.identfiers)

    const [createInvitation, createInvitationData] = useMutation(SEND_INVIE_TO_USER, {
        variables: {
            invitationInput: {
                createdBy: createdBy,
                invitationToUserEmail: newEmail,
                invitationToEvent: invitationToEvent,
                eventCode: eventCode,
                status: "pending",
            }


        },
        onCompleted: () => {
            InvitationEmail({
                invitationToEmail: newEmail,
                InvitationCode: eventCode,
                eventName: eventName,
                eventDate: eventDate,
                userEmail: userEmail
            })
            notifySuccess("invite sent")
        },
        onError: (error) => {
            console.log(error)
            notifyError("invite not sent")
        }
    })
    function Sendinvite() {

        createInvitation()

        console.log("send invite ")
    }
    const toggle = () => setModal(!modal);
    return (
        <div>
            <Row className='d-flex justify-content-center   align-items-center mx-2'>
                <Col md={8}>
                    <Label for="exampleEmail">Email</Label>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="invite to  email"
                            onChange={(e) => { setNewEmail(e.target.value) }} />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <button className=' text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill px-4 py-1'
                        onClick={() => { Sendinvite() }}>
                        <MotionContainer>
                            send invite
                        </MotionContainer>
                    </button>
                </Col>
            </Row>

            <Row className='justify-content-center mx-2 mt-5 '>
                <Table hover size="sm" striped>
                    <thead>
                        <tr>
                            <th> #</th>
                            <th>Email</th>
                            <th> Full Name </th>
                            <th> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <AcceptedComponent />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <PendingComponent />
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>
                                <PendingComponent />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}
