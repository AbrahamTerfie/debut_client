import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { GET_EVENT_WITH_ID, CREATE_DEBUT_REGISTRY } from '../../../GraphQl/index'
import { Row, Col, Modal, Button, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Input, Label, } from 'reactstrap'
import { motion } from 'framer-motion'
import { notifyError, notifyLoading, notifySuccess, notifyWarning } from '../../../Components/Notification/Toast'
import Loader from '../../../Components/Loader/Loader'
import moment from 'moment'
import { useSelector } from 'react-redux'
import RegistryAccordion from '../../../Components/DashBoard/RegistryAccordion/RegistryAccordion'
import { RootState } from '../../../Store/RootReducer'
export default function DebutEventPage() {


    const { userID, companyID, hasCompany } = useSelector((store: RootState) => store.identfiers)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { id } = useParams<{ id: string }>()
    const newRegisstryState = {
        createdBy: userID,
        belongsTo: companyID,
        debutEvent: id,
        debutRegistryName: "",
        debutRegistryStatus: false
    }

    const [newRegistry, setNewRegistry] = useState(newRegisstryState)
    const inoutHandler = (e: any) => {
        const { name, value } = e.target;
        setNewRegistry({ ...newRegistry, [name]: value })
    }

    const { data, loading, error } = useQuery(GET_EVENT_WITH_ID, {
        variables: { getDebutEventWithIdId: id },
        onCompleted: (data) => {
            console.log("event data", data)
        },
        onError: (error) => {
            console.log(error)
            notifyError(error.toString())
        }
    })

    const [createDebutRegistry, createDebutRegistryRes] = useMutation(CREATE_DEBUT_REGISTRY, {
        refetchQueries: [{ query: GET_EVENT_WITH_ID, variables: { getDebutEventWithIdId: id } }],
        onCompleted: (data) => {
            notifySuccess(" New Registry created")
        },
        onError: (error) => {
            notifyError(error.toString())
        }
    })


    const checkInput = () => {
        if (newRegistry.debutRegistryName === "") {
            notifyWarning("Please fill all the fields")
            return false
        }
        return true
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        if (checkInput()) {
            createDebutRegistry({ variables: { debutRegistryInput: newRegistry } })
            setNewRegistry(newRegisstryState)
            toggle()
        }
    }

    if (loading) return <Loader />

    return (
        <div className='px-5' >
            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}> Create New registry </ModalHeader>
                <ModalBody>
                    <Row className='App'>
                        <Form  >
                            <FormGroup>
                                <Label for="debutRegistryName">Registry Name</Label>
                                <Input type="text"
                                    size={100}
                                    name="debutRegistryName"
                                    id="debutRegistryName" placeholder="enter name of your registry " onChange={inoutHandler} />
                            </FormGroup>
                        </Form>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" size='sm' outline onClick={toggle}>
                        Cancel
                    </Button>
                    <Button color="success" className='px-5' size='sm' outline onClick={(e: any) => submitHandler(e)}>
                        create
                    </Button>{' '}

                </ModalFooter>
            </Modal>
            <Row>
                <Col md={8}>
                    <span className='text-muted' > event name </span>
                    <p className='fs-1 fw-light mb-0' > {data?.getDebutEventWithId?.debutEventName} </p>
                    <p className='text-muted ' > {data && moment(data.getDebutEventWithId.debutEventDate).format('DD MMMM YYYY')} </p>


                    <p className='text-muted m-0' > event description </p>
                    <p>{data?.getDebutEventWithId?.debutEventDescription}</p>


                    <p className='text-muted m-0' > location  </p>
                    <p> {data?.getDebutEventWithId?.debutEventLocation} </p>


                    <p className='text-muted m-0' >  related liknks   </p>
                    {data?.getDebutEventWithId?.otherRelatedLinks.map((link: any, index: number) => {
                        return (
                            <motion.a
                                href={window.location.origin + link}
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                                style={{ cursor: 'default' }}
                                className='border border-info rounded-pill bg-dark bg-opacity-10 p-1  px-4  m-1 me-2'>
                                <span> {link} </span>
                            </motion.a>
                        )
                    }
                    )}
                </Col>
                <Col md={4}>
                    <img
                        className='img-fluid shadow-lg rounded '
                        style={{ height: '300px', width: '100%' }}
                        src={data?.getDebutEventWithId?.debutEventImage} alt="event image " />
                </Col>
            </Row>

            <Row>
                <div
                    className='d-flex justify-content-between align-items-center my-3' >

                    <p className='fs-3  fw-light mt-5' >  Registries  </p>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{ cursor: 'pointer' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggle}
                        className='border border-light rounded-pill bg-success bg-opacity-10 p-1  px-4  m-1 me-2 text-success'>

                        create a registry
                    </motion.div>
                </div>

                {data?.getDebutEventWithId?.debutRegistry.length === 0 ?
                    <div className='d-flex flex-column  justify-content-center align-items-center' >
                        <p className='fs-3 fw-light m-0' > no registries yet </p>
                        <p className='text-muted' > start by creating a registry  </p>

                    </div>
                    : data?.getDebutEventWithId?.debutRegistry.map((registry: any, index: number) => {
                        return (
                            <RegistryAccordion
                                key={index}
                                _id={registry._id}
                                debutRegistryName={registry.debutRegistryName}
                                debutRegistryStatus={registry.debutRegistryStatus}
                                debutRegistryItems={registry.debutRegistryItems}

                            />
                        )
                    }
                    )}
            </Row>
        </div >
    )
}
