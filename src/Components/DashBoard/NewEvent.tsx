
import React, { useState, useEffect } from 'react'
import { Col, Form, FormGroup, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'reactstrap'
import { FaPlus } from 'react-icons/fa'
import { BsTrash } from "react-icons/bs";

import { MY_DEBUT_EVENTS, CREATE_EVENT, CHECK_IF_USER_HAS_COMPANY, FETCH_COMPANY } from '../../GraphQl/index'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { useMutation, useQuery } from '@apollo/client'
import Loader from '../../Components/Loader/Loader'
import Axios from 'axios'
import { motion } from 'framer-motion'
import { notifySuccess, notifyError, notifyWarning, notifyLoading } from '../../Components/Notification/Toast'

interface newEventForm {
    createdBy: string
    belongsTo: string
    debutEventName: string
    debutEventDescription: string
    debutEventDate: string
    debutEventLocation: string
    debutRegistryStatus: Boolean
    debutEventImage: string,
    debutRegistry: string[],
    debutEventAttendees: string[]
    debutInvitationLink: string
    otherRelatedLinks: string[]


}

export default function NewEvent() {

    const { userID, companyID, hasCompany } = useSelector((store: RootState) => store.identfiers)

    const initState: newEventForm = {
        debutEventName: "",
        debutEventDescription: "",
        debutEventDate: "",
        debutEventLocation: "",
        debutRegistryStatus: false,
        debutEventImage: "",
        debutRegistry: [],
        debutEventAttendees: [],
        debutInvitationLink: "",
        otherRelatedLinks: [],
        createdBy: userID,
        belongsTo: companyID
    }
    const [canvas, setCanvas] = useState(false);
    const [imageSelected, setImageSelected] = useState("")
    const [newEventData, setNewEventData] = useState(initState)
    const [relatedLknks, setRelatedLinks] = useState("")
    const addTOAdditionalLinks = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNewEventData({ ...newEventData, otherRelatedLinks: [...newEventData.otherRelatedLinks, relatedLknks] })
        setRelatedLinks("")
    }
    const removeFromAdditionalLinks = (e: React.ChangeEvent<HTMLInputElement>, link: any) => {
        e.preventDefault()
        const newLinks = newEventData.otherRelatedLinks.filter((item: any) => item !== link)
        setNewEventData({ ...newEventData, otherRelatedLinks: newLinks })
    }

    const { data, loading, error } = useQuery(CHECK_IF_USER_HAS_COMPANY, {
        variables: { userId: userID }
    })
    const { data: dataCompany, loading: loadingCompany, error: errorCompany
    } = useQuery(FETCH_COMPANY, {
        variables: { userId: userID }
    })


    const [createDebutEvent, createDebutEventRes] = useMutation(CREATE_EVENT, {
        refetchQueries: [{ query: MY_DEBUT_EVENTS, variables: { userId: userID } }],
        onCompleted: () => {
            notifySuccess(" New Event Created")
            setCanvas(false)
            setNewEventData(initState)

        },
        onError: (err) => {
            notifyError(err.message)
        },

    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewEventData({ ...newEventData, [name]: value })
    }


    const inputChecker = () => {
        if (newEventData.debutEventName === "" ||
            newEventData.debutEventDescription === "" ||
            newEventData.debutEventDate === "" ||
            newEventData.debutEventLocation === "") {
            notifyWarning("Please fill all fields")
            return false
        }
        return true

    }




    const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', imageSelected)
        formData.append('upload_preset', 'debutClient')
        imageSelected ? Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
            .then((response) => {
                inputChecker() && createDebutEvent({
                    variables: {
                        debutEventInput: {
                            ...newEventData,
                            debutEventImage: response.data.secure_url
                        }
                    }
                })
            }).catch((error) => {
                console.log(error)
                notifyError("Creation Failed")
            })
            : notifyWarning("Please select an image")

    }



    const toggle = () => setCanvas(!canvas);

    if (loading || loadingCompany) return <Loader />
    if (error || errorCompany) notifyError("Error Occured")
    if (createDebutEventRes.loading) notifyLoading("Creating Event...")

    return (
        <div >
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className='btn m-4 px-5 py-2  bg-success text-success bg-opacity-10   '
                color='light'
                onClick={toggle}
                disabled={data?.checkIfUserHasCompany ? false : true}
            >
                {hasCompany === true ? <>
                    <FaPlus className='mx-3' size={20} />
                    add new event
                </> :
                    <>
                        <FaPlus className='mx-3' size={30} style={{ backgroundColor: 'transparent', }} />
                        create a company first
                    </>
                }

            </motion.button>


            <Offcanvas
                style={{ width: '50%' }}
                direction="end"
                scrollable={true}
                isOpen={canvas}
            >
                <OffcanvasHeader toggle={toggle}>
                    <p className='text-center  m-4 fs-1 fw-light text-success'>Create a new event</p>

                </OffcanvasHeader>
                <OffcanvasBody>
                    <Form>

                        <Row className='App px-5 mx-2'>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="debutEventName"> Your Event Name  </Label>
                                    <Input type="text"
                                        name="debutEventName"
                                        id="debutEventName"
                                        placeholder="event name"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="debutEventDate"> Date of the event  </Label>
                                    <Input type="date"
                                        name="debutEventDate"
                                        id="debutEventDate"
                                        placeholder="event date"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="debutEventDescription">  Description </Label>
                                    <Input type="textarea"
                                        name="debutEventDescription"
                                        id="debutEventDescription"
                                        placeholder="description"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>




                            <Col md={12} className="mt-4" >
                                <img src={newEventData.debutEventImage ? newEventData.debutEventImage : ""} alt="event image" className='img-fluid' />

                                <FormGroup>
                                    <Label for="debutEventImage"> Image </Label>
                                    <Input onChange={(event: any) => {
                                        setImageSelected(event.target.files[0])
                                    }} type="file" />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="debutEventLocation"> location </Label>
                                    <Input type="text"
                                        name="debutEventLocation"
                                        id="debutEventLocation"
                                        placeholder="location"
                                        onChange={handleChange}
                                    />
                                </FormGroup>
                            </Col>

                            <Col md={12} className='d-flex  align-items-center flex-wrap mt-5 '>
                                {newEventData.otherRelatedLinks.map((link, index) => {
                                    return <p key={index}
                                        className='border border-light rounded-pill bg-dark bg-opacity-10 p-2  px-4  '>
                                        {link}
                                        <motion.div
                                            whileHover={{ scale: 1.09 }}
                                            whileTap={{ scale: 0.9 }}
                                            className='d-inline-block ' >
                                            <BsTrash className='ms-3'
                                                size={15} color='red'
                                                onClick={(e: any) => removeFromAdditionalLinks(e, link)}
                                            />
                                        </motion.div>
                                    </p>
                                })}
                            </Col>

                            <Col md={8}>
                                <FormGroup>
                                    <Label for="otherRelatedLinks"
                                        className=""
                                    > links </Label>
                                    <Input type="text"
                                        name="otherRelatedLinks"
                                        id="otherRelatedLinks"
                                        placeholder="links"
                                        onChange={(e) => setRelatedLinks(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    className='btn m-3 px-5   bg-success text-success bg-opacity-10  rounded-pill   '
                                    onClick={(e: any) => { addTOAdditionalLinks(e) }}
                                >
                                    <FaPlus className='mx-3' size={15} />
                                    add
                                </motion.div>
                            </Col>
                        </Row>
                        <Row className='m-3 ' >
                            {/* <Button color='light' outline
                                
                            >
                                <FaPlus className='mx-3' size={20}
                                    style={{ backgroundColor: 'transparent', }}
                                />
                                create event
                            </Button> */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                className='btn m-3 px-5  py-4  bg-success text-success bg-opacity-10  rounded-pill   '
                                onClick={(e: any) => { submitHandler(e) }}
                            >
                                <FaPlus className='mx-3' size={20}
                                    style={{ backgroundColor: 'transparent', }}
                                />
                                create event
                            </motion.div>
                        </Row>

                    </Form>
                </OffcanvasBody>
            </Offcanvas>

        </div>
    )
}