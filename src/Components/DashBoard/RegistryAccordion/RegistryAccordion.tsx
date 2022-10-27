import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { motion } from 'framer-motion'
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody, Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap'
import { NEW_REGISTRY_ITEM, GET_EVENT_WITH_ID, MY_DEBUT_EVENTS, } from '../../../GraphQl/index'
import { useMutation, useQuery } from '@apollo/client'
import RegistryItem from '../RegistryItemcard/RegistryItemCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import { notifyError, notifySuccess } from '../../Notification/Toast'
import { useParams } from 'react-router-dom'


interface registryItem {
    itemOfRegistry: string
    registryItemName: string
    registryItemDescription: string
    registryItemImage: string
    registryItemPrice: string
    registryItemLink: string
    registryItemQuantity: string
    registryItemFullfiled: Boolean
}

interface debutRegistryInterface {
    _id: string
    debutRegistryName: String
    debutRegistryStatus: Boolean
    debutRegistryItems: registryItem[]
}


export default function RegistryAccordion(
    { _id, debutRegistryName, debutRegistryStatus, debutRegistryItems
    }: debutRegistryInterface) {
    const { userID, companyID, hasCompany } = useSelector((store: RootState) => store.identfiers)
    const { id } = useParams<{ id: string }>()
    const itemState: registryItem = {
        itemOfRegistry: _id,
        registryItemName: "",
        registryItemDescription: "",
        registryItemImage: "",
        registryItemPrice: "",
        registryItemLink: "",
        registryItemQuantity: "",
        registryItemFullfiled: false

    }


    const [open, setOpen] = useState('');
    const [modal, setModal] = useState(false);
    const [imageSelected, setImageSelected] = useState() as any
    const toggle = () => setModal(!modal);
    const [newRegistryItem, setNewRegistryItem] = useState(itemState)
    const [previewImage, setPreviewImage] = useState("")


    const [newRegistryItemMutation, newRegistryItemMutationRes] = useMutation(NEW_REGISTRY_ITEM, {
        refetchQueries: [{ query: GET_EVENT_WITH_ID, variables: { getDebutEventWithIdId: id } }],
        onCompleted: (data) => {
            notifySuccess("New Registry Item created")
        },
        onError: (error) => {
            notifyError(error.toString())
        }
    })

    const inputChecker = () => {
        if (newRegistryItem.registryItemName === "" ||
            newRegistryItem.registryItemDescription === "" ||
            newRegistryItem.registryItemPrice === "" ||
            newRegistryItem.registryItemQuantity === "" ||
            newRegistryItem.registryItemLink === "" ||
            imageSelected === undefined) {
            notifyError("Please fill all the fields")
            return false
        }
        return true
    }

    const submitHandler = (e: any) => {
        e.preventDefault()
        if (inputChecker()) {
            newRegistryItemMutation({ variables: { registryItemInput: newRegistryItem } })
            setNewRegistryItem(itemState)
            setPreviewImage("")
            setImageSelected(undefined)
            setModal(false)
            notifySuccess("New Registry Item created")
        }
    }


    //create preview image string 
    useEffect(() => {
        if (!imageSelected) {
            setPreviewImage("")
            return
        }
        const objectURL = URL.createObjectURL(imageSelected)
        setPreviewImage(objectURL)
        return () => URL.revokeObjectURL(objectURL)
    }, [imageSelected])


    const onSelectFile = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageSelected(e.target.files[0])
        }
    }

    const handleFileSelected = () => {
        const formData = new FormData()
        formData.append('file', imageSelected)
        // file is the file object
        // first one is the preset and the second one is name  for cloudnary api
        formData.append('upload_preset', 'debutClient')
        Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
            .then((response) => {
                setNewRegistryItem({ ...newRegistryItem, registryItemImage: response.data.url })
                notifySuccess("Image uploaded")
            })
            .catch((error) => {
                notifyError(error.toString())
                console.log(error)
            })
    }
    const saveImage = (e: any) => {
        e.preventDefault()
        handleFileSelected()
    }

    const inputHandler = (e: any) => {
        const { name, value } = e.target;
        setNewRegistryItem({ ...newRegistryItem, [name]: value })
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} size="xl">
                <ModalHeader toggle={toggle}> Add New Item  </ModalHeader>
                <ModalBody>
                    <Form>
                        <Row className='App px-3'>
                            <Col md={8}>
                                <FormGroup>
                                    <Label
                                        for="registryItemName">  name </Label>
                                    <Input
                                        type="text"
                                        name="registryItemName"
                                        id="registryItemName"
                                        onChange={inputHandler}
                                        placeholder=" name your registry item" />
                                </FormGroup>
                            </Col>
                            <Col md={4} >
                                <FormGroup>
                                    <Label for="registryItemQuantity"> quantity</Label>
                                    <Input type="number" name="registryItemQuantity"
                                        id="registryItemQuantity"
                                        onChange={inputHandler}
                                        placeholder="quantity" />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="registryItemDescription">Item Description</Label>
                                    <Input type="textarea"
                                        name="registryItemDescription"
                                        onChange={inputHandler}
                                        id="registryItemDescription"
                                        placeholder=" item description" />
                                </FormGroup>
                            </Col>
                            <Col md={8}>
                                <FormGroup>
                                    <Label for="registryItemLink">Item link</Label>
                                    <Input type="text" name="registryItemLink"
                                        onChange={inputHandler}
                                        id="registryItemLink"
                                        placeholder=" item link" />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="registryItemPrice">Item price</Label>
                                    <Input type="number"
                                        onChange={inputHandler}
                                        name="registryItemPrice"
                                        id="registryItemPrice" placeholder=" item price"

                                    />
                                </FormGroup>
                            </Col>



                            <Col md={6} >


                                <FormGroup>
                                    <Label for="debutEventImage"> Image </Label>
                                    <Input onChange={onSelectFile} type="file" name="debutEventImage" id="debutEventImage" />

                                </FormGroup>
                            </Col>

                            <Col md={6} className="mt-4" >
                                <img
                                    src={previewImage}
                                    alt="event image"
                                    className='img-fluid'
                                    style={{ height: '200px', width: '200px' }}
                                />

                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 1.01 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                                    onClick={(e: any) => saveImage(e)}
                                    className="mt-2 text-center bg-success text-success p-2 rounded bg-opacity-10">
                                    save image
                                </motion.div>
                            </Col>

                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" outline size='sm' onClick={toggle}>
                        Cancel
                    </Button>
                    <Button color="success" outline size='sm' className='px-5' onClick={(e: any) => submitHandler(e)}>
                        add item
                    </Button>{' '}

                </ModalFooter>
            </Modal>
            <UncontrolledAccordion
                open={open}
                flush
                defaultOpen={[
                    '1',
                    '2'
                ]}
                stayOpen
            >
                <AccordionItem>
                    <motion.div
                        whileHover={{ scale: 1.008 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <AccordionHeader
                            className=' accordionHeader fw-light shadow-sm my-2  '
                            targetId={_id.toString()} >
                            {debutRegistryName}

                            {debutRegistryStatus ? <span className="badge bg-success bg-opacity-10 text-success mx-4">Active</span> :
                                <span className="badge bg-danger mx-4 bg-danger bg-opacity-10 text-danger">Inactive</span>}

                        </AccordionHeader>
                    </motion.div>

                    <AccordionBody accordionId={_id.toString()}>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            whileHover={{ scale: 1.008 }}
                            whileTap={{ scale: 1.09 }}
                            style={{ cursor: 'pointer' }}
                            onClick={toggle}
                            className='shadow-sm rounded rounded-5   p-2 m-4  me-2 bg-success bg-opacity-10  text-success align-items-center justify-content-center d-flex'>
                            add item
                        </motion.div>
                        <Row className="px-4" >


                            {
                                debutRegistryItems.length === 0 ?
                                    <div className="text-center text-muted">
                                        No items added yet
                                    </div> :

                                    debutRegistryItems?.map((item: any) => (

                                        <RegistryItem
                                            key={item._id}
                                            itemOfRegistry={item.itemOfRegistry}
                                            registryItemName={item.registryItemName}
                                            registryItemDescription={item.registryItemDescription}
                                            registryItemImage={item.registryItemImage}
                                            registryItemPrice={item.registryItemPrice}
                                            registryItemLink={item.registryItemLink}
                                            registryItemQuantity={item.registryItemQuantity}
                                            registryItemFullfiled={item.registryItemFullfiled}
                                        />
                                    )
                                    )}
                            {/* <RegistryItem />
                            <RegistryItem />
                            <RegistryItem />
                            <RegistryItem /> */}
                        </Row>

                    </AccordionBody>
                </AccordionItem>


            </UncontrolledAccordion>
        </div >
    )
}
