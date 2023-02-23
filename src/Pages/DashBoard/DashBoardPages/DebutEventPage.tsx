import React, { useState } from 'react'
import { useParams, Outlet, useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { GET_EVENT_WITH_ID, CREATE_DEBUT_REGISTRY } from '../../../GraphQl/index'
import { Row, Col, Modal, Button, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Input, Label, } from 'reactstrap'
import { motion } from 'framer-motion'
import { notifyError, notifySuccess, notifyWarning } from '../../../Components/Notification/Toast'
import Loader from '../../../Components/Loader/Loader'
import moment from 'moment'
import { useSelector } from 'react-redux'
import RegistryAccordion from '../../../Components/DashBoard/RegistryAccordion/RegistryAccordion'
import { RootState } from '../../../Store/RootReducer'
import { BsTrash } from 'react-icons/bs'
import NukeEvent from '../../../Components/DashBoard/NukeEvent/NukeEvent'
import MyVillage from './MyVillage'
import { appRoutes } from '../../../Routes/routes'
export default function DebutEventPage() {


    const { userID, companyID } = useSelector((store: RootState) => store.identfiers)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [myvillageMOdal, setMyvillageMOdal] = useState(false);
    const toggleMyvillageMOdal = () => setMyvillageMOdal(!myvillageMOdal);
    const [nukeEventModal, setNukeEventModal] = useState(false);
    const toggleNukeEventModal = () => setNukeEventModal(!nukeEventModal);
    const navigation = useNavigate()

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

    const { data, loading } = useQuery(GET_EVENT_WITH_ID, {
        variables: { getDebutEventWithIdId: id },
        // onCompleted: (data) => {
        //     console.log("event data", data)
        // },
        onError: (error) => {
            // console.log(error)
            notifyError("failed to fetch " + error.toString())
        }
    })

    const [createDebutRegistry] = useMutation(CREATE_DEBUT_REGISTRY, {
        refetchQueries: [{ query: GET_EVENT_WITH_ID, variables: { getDebutEventWithIdId: id } }],
        onCompleted: () => {
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

    if (loading) return (

        <div className='d-flex justify-content-center align-items-center'>

            <Loader />
        </div>
    )

    return (
        <div className='px-5' >
            {/* <Outlet /> */}

            <NukeEvent
                event={data?.getDebutEventWithId}
                loading={loading}
                modalState={nukeEventModal}
                toggler={toggleNukeEventModal}
            />
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
            <Modal isOpen={myvillageMOdal} toggle={toggleMyvillageMOdal} size="lg">
                <ModalHeader toggle={toggleMyvillageMOdal}>
                    <Row className='m-5' >
                        <h3 className='text-start '>Your Community</h3>
                        <span className='text-muted' > list of all your community members </span>
                    </Row> </ModalHeader>
                <ModalBody>
                    <MyVillage />
                </ModalBody>

            </Modal>
            <Row>
                <Col md={8}>
                    <span className='text-muted' > event name </span>
                    <p className='fs-1 fw-light mb-0' > {data?.getDebutEventWithId?.debutEventName} </p>
                    <p className='text-muted ' > {data && moment(data.getDebutEventWithId.debutEventDate).format('DD MMMM YYYY')} </p>
                    <p className='text-muted m-0' > event description </p>
                    <p>{data?.getDebutEventWithId?.debutEventDescription}</p>

                    {data?.getDebutEventWithId?.isOnline ?
                        <div>
                            <p className='text-muted' >online  event link </p>
                            <small className='mb-2' >zoom link </small>
                            <p className='' > {data?.getDebutEventWithId?.debutInvitationLink} </p>
                        </div>
                        :
                        (<div>
                            <p className='text-muted m-0' > location  </p>
                            <p> {data?.getDebutEventWithId?.debutEventLocation} </p>
                        </div>)
                    }
                    <p className='text-muted m-0' >  related liknks   </p>
                    {data?.getDebutEventWithId?.otherRelatedLinks.map((link: any, index: number) => {
                        return (
                            <motion.a
                                href={window.location.origin + link}
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                                style={{ cursor: 'default' }}
                                className='  p-1  px-4  m-1 me-2 border   rounded-pill  bg-info-subtle  text-info-subtle  border-info-subtle
                                '>
                                <span> {link} </span>
                            </motion.a>
                        )
                    }
                    )}
                </Col>
                <Col md={4}
                    className='d-flex justify-content-center align-items-center flex-column'
                >
                    <img
                        className='img-fluid shadow-lg rounded '
                        style={{ height: '300px', width: '100%' }}
                        src={data?.getDebutEventWithId?.debutEventImage} alt="event_identfier_image " />

                </Col>
            </Row>
            <Row>
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    style={{ cursor: 'pointer' }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => { toggleMyvillageMOdal() }}
                    className='border border-primary rounded-pill bg-primary bg-opacity-10 p-1  px-4  m-4  w-100 text-center fw-bold text-primary'>

                    your village
                </motion.div>
            </Row>

            <Row>
                <div
                    className='d-flex justify-content-between align-items-center my-3' >

                    <p className='fs-3  fw-light mt-5' >  Registries  </p>
                    <div className='d-flex justify-content-between align-items-center' >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            style={{ cursor: 'pointer' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggle}
                            className='border border-success rounded-pill bg-success bg-opacity-10 p-1  px-4  m-1 me-2 text-success'>

                            create a registry
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            style={{ cursor: 'pointer' }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleNukeEventModal}
                            className='border border-danger rounded-pill bg-danger bg-opacity-10 p-1  px-4  m-1 me-2 text-danger'>

                            <BsTrash size={20} />
                        </motion.div>
                    </div>
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
