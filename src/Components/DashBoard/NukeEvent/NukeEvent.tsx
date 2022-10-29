import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Row, Label, Input, Col } from 'reactstrap';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { NUKE_DEBUT_EVENT, MY_DEBUT_EVENTS } from '../../../GraphQl/index';
import { appRoutes } from '../../../Routes/routes';
import { notifySuccess, notifyError, notifyWarning } from '../../Notification/Toast';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
export default function NukeEvent(
    { modalState, toggler, event, loading,
    }: { modalState: boolean, toggler: () => void, event: any, loading: boolean }) {
    const { userID } = useSelector((store: RootState) => store.identfiers)

    const navigate = useNavigate()
    const [nukeInput, setNukeInput] = useState("")

    const [nukeEvent, nukeEventRes] = useMutation(NUKE_DEBUT_EVENT, {
        refetchQueries: [{ query: MY_DEBUT_EVENTS, variables: { userId: userID } }],
        onCompleted: (data) => {
            data && notifySuccess("Event deleted") &&
                navigate(appRoutes.dashboard + "/" + appRoutes.events)

        },
        onError: (error) => {
            notifyError(error.toString())
        }
    })

    const deleteHandler = (e: any) => {
        e.preventDefault()
        if (nukeInput === "NUKE" + " " + event.debutEventName) {
            nukeEvent({
                variables: { deleteDebutEventId: event._id }
            })

        }
        else {
            notifyWarning("Please check your input and try again")
        }


    }


    if (loading) { return <Loader /> }
    return (
        <Modal isOpen={modalState} toggle={toggler} size='xl' centered color='danger' className='text-center'>
            <ModalHeader toggle={toggler} className='text-danger bg-danger bg-opacity-10 text-danger ' >
                you're about to delete this event and all its registries and items ?
            </ModalHeader>
            <ModalBody className='text-danger bg-danger bg-opacity-10 text-danger px-5'>
                <Row>
                    {event.debutRegistry?.length === 0 ?
                        <p className='text-danger fw-light m-5 text-center fs-3'> no registries found </p> :
                        event.debutRegistry?.map((registry: any) => {
                            return (
                                <Col md={6} >
                                    <motion.div
                                        className="w-100 p-3 text-start bg-danger bg-opacity-10 rounded-3 shadow-sm  m-3"
                                        layout initial={{ borderRadius: 10 }} animate={{ borderRadius: 25 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }} whileHover={{ scale: 1.03 }}>
                                        <p className='fw-warning fs-4 m-0' > {registry.debutRegistryName}
                                            <span className='text-muted fs-6 mx-3' >
                                                {registry.debutRegistryItems?.length} items
                                            </span>
                                        </p>
                                        <p className='text-muted m-0 mb-3' > items </p>
                                        {registry.debutRegistryItems?.length === 0 ?
                                            <p className='text-center m-0 mb-3' > no items </p> :
                                            registry.debutRegistryItems?.map((item: any) => {
                                                return (
                                                    <Row className='w-100 border border-light rounded-1 p-2  py-3 my-2  d-flex flex-row justify-content-between align-items-center'>
                                                        <Col md={2}>
                                                            <img src={item.registryItemImage} alt="" className='w-100' />
                                                        </Col>
                                                        <Col md={10} >{item.registryItemName}</Col>
                                                    </Row>
                                                )
                                            })}
                                    </motion.div>
                                </Col>
                            )
                        })}
                </Row>

                <Row >
                    <FormGroup className='' >
                        <Label className=' d-flex flex-column  px-4 justify-content-start align-items-start' for="nukeConfirm">

                            <p className='m-0 text-muted' >are you sure ?</p>
                            <p className='text-muted fw-light fs-5' > if you are please type
                                <span className=' text-danger fw-bold'> NUKE  {event?.debutEventName} </span> in the box below
                            </p>

                        </Label>
                        <Input type="text"
                            size={100}
                            name="nukeConfirm"
                            id="nukeConfirm" placeholder="enter name of your event with the prefix NUKE  "
                            onChange={(e) => setNukeInput(e.target.value)}
                        />
                    </FormGroup>
                </Row>
            </ModalBody>
            <ModalFooter className='text-danger bg-danger bg-opacity-10 text-danger '>
                <Button color="secondary" outline size="sm" onClick={toggler}>
                    cancel
                </Button>{' '}
                <Button color="danger" size='sm' outline className='px-5' onClick={(e: any) => deleteHandler(e)}>
                    yes delete
                </Button>
            </ModalFooter>
        </Modal>
    )
}
