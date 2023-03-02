import React, { useState } from 'react';
import { Row, Col, FormGroup, Label, Input, Table } from 'reactstrap';
import MotionContainer from '../../../Components/MotionContainer/MotionContainer';
import InvitationEmail from '../../../Components/Email/InvitationEmail';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
import { useQuery, useMutation } from '@apollo/client';
import { GET_EVENT_INVITATIONS, SEND_INVIE_TO_USER } from '../../../GraphQl/index';
import { notifyError, notifySuccess } from '../../../Components/Notification/Toast';



function PendingComponent() {
    return (<small className='text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-pill px-3 py-1 w-25 text-center m-0'>pending</small>)
}
function AcceptedComponent() {
    return (<small className='text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill px-3 py-1 w-25 text-center m-0'>accepted</small>)
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

    // const [modal, setModal] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const { userEmail } = useSelector((store: RootState) => store.identfiers)
    const { data, error } = useQuery(GET_EVENT_INVITATIONS, {
        variables: { eventId: invitationToEvent }
    })
    const [createInvitation] = useMutation(SEND_INVIE_TO_USER, {
        variables: {
            invitationInput: {
                createdBy: createdBy,
                invitationToUserEmail: newEmail,
                invitationToEvent: invitationToEvent,
                eventCode: eventCode,
                status: "pending",
            }
        },
        refetchQueries: [{ query: GET_EVENT_INVITATIONS, variables: { eventId: invitationToEvent } }],
        onCompleted: () => {
            InvitationEmail({
                invitationToEmail: newEmail,
                InvitationCode: eventCode,
                eventName: eventName,
                eventDate: eventDate,
                userEmail: userEmail
            })
            setNewEmail('')
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
    // const toggle = () => setModal(!modal);
    if (error) notifyError("error")
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
                            <th> Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.getInvitationWithEventId.map((item: any, index: number) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.invitationToUserEmail}</td>
                                    <td>
                                        {item.status === "pending" ? <PendingComponent /> : <AcceptedComponent />}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}
