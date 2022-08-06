import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Button, FormGroup, Input, Label, Collapse } from 'reactstrap'
import { GET_REGISTRY_ITEMS_WITH_REGISTRY_ID, CREATE_REGISTRY_ITEM } from '../../GraphQl/index'
import { useMutation, useQuery } from '@apollo/client'
import Axios from 'axios'
import Loader from '../../Components/Loader/Loader'

function RegistryItemCard(
    { _id,
        itemOfRegistry,
        registryItemName,
        registryItemDescription,
        registryItemImage,
        registryItemPrice,
        registryItemLink,
        registryItemQuantity,
        registryItemFullfiled,
    }: any

) {
    return (
        <>
            <Row className=' m-1 p-3 shadow-sm  MyeventCard' >
                <Col md={8}>
                    <Row>
                        <p className='fw-light fs-4' >  {registryItemName}
                            <small className='mx-4 fs-4 fw-lighter text-success' >
                                {registryItemFullfiled ? "✓" : "✗"}
                            </small>
                        </p>
                    </Row>
                    <Row>
                        <small className='text-muted  text-small fw-light' > item link  </small>
                        <p className='fw-light link ' >
                            {registryItemLink ? <>
                                <a href={registryItemLink} target="_blank" rel="noopener noreferrer">
                                    {registryItemLink}
                                </a>
                            </> : " - "}
                        </p>
                    </Row>
                    <Row>
                        <small className='text-muted  text-small fw-light' > description  </small>
                        <p className='fw-light link ' >
                            {registryItemDescription ? registryItemDescription : " - "}
                        </p>

                    </Row>
                </Col>
                <Col md={4} >
                    <Col md={12} className="d-flex justify-content-end ">
                        <img src={registryItemImage ? registryItemImage :
                            // plaveholder cartoon image
                            "https://via.placeholder.com/150"
                        } alt='registry item' className='img-fluid ' />
                    </Col>
                    <Row className='m-3  d-flex justify-content-end text-end'>
                        <Col md={6}   >
                            <small className='text-muted  text-small fw-light' > price </small>
                            <p className='fw-light' >  {registryItemPrice}   </p>
                        </Col>
                        <Col md={6}>
                            <small className='text-muted  text-small fw-light' > quantity </small>
                            <p className='fw-light' >  {registryItemQuantity}  </p>
                        </Col>
                    </Row>

                </Col>

                <Row className=' border-bottom border-white ' >

                    <Col md={10}>
                        <small className='text-muted  text-small fw-light' > company </small>
                        <p className='fw-light'>  {itemOfRegistry.debutRegistryName} </p>
                    </Col>
                    <Col md={2}>
                        <small className='text-muted  text-small fw-light' > status </small>
                        <p className='fw-light' > open</p>
                    </Col>

                </Row>
            </Row>


        </>
    )
}


export default function RegistryPage() {
    const { id } = useParams()
    const initState = {
        itemOfRegistry: id,
        registryItemName: "",
        registryItemDescription: "",
        registryItemImage: "",
        registryItemPrice: "",
        registryItemLink: "",
        registryItemQuantity: "",
        registryItemFullfiled: false,
    }



    const [imageSelected, setImageSelected] = useState("")
    const [isAddItemOpen, setIsAddItemOpen] = useState(false);
    const [newRegistryItem, setNewRegistryItem] = useState(initState)
    const { data, loading, error } = useQuery(GET_REGISTRY_ITEMS_WITH_REGISTRY_ID, {
        variables: {
            registryId: id
        }
    })
    const [createRegistryItem, createRegistryItemRes] = useMutation(CREATE_REGISTRY_ITEM, {
        update(cache, { data: { createRegistryItem } }) {
            const { getRegistryItemsWithRegistryId }: any = cache.readQuery({
                query: GET_REGISTRY_ITEMS_WITH_REGISTRY_ID,
                variables: {
                    registryId: id
                }
            })
            cache.writeQuery({
                query: GET_REGISTRY_ITEMS_WITH_REGISTRY_ID,
                variables: {
                    registryId: id
                },
                data: {
                    getRegistryItemsWithRegistryId: [...getRegistryItemsWithRegistryId, createRegistryItem]

                }
            })
        }
    }
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewRegistryItem({ ...newRegistryItem, [name]: value })
    }

    const handleSubmut = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createRegistryItem({ variables: { registryItemInput: newRegistryItem } })
        setNewRegistryItem(initState)
        setIsAddItemOpen(false)
    }
    const handleFileSelected = () => {
        const formData = new FormData
        formData.append('file', imageSelected)
        // file is the file object
        // first one is the preset and the second one is name  for cloudnary api
        formData.append('upload_preset', 'debutClient')
        Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
            .then((response) => {
                setNewRegistryItem({ ...newRegistryItem, registryItemImage: response.data.secure_url })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        handleFileSelected()
    }, [imageSelected])

    const toggle = () => setIsAddItemOpen(!isAddItemOpen);


    if (loading) return <Loader />
    if (error) {
        console.log(error)
    }

    return (
        <div className='my-5  mx-5 px-5  w-100 '>
            <p className='fs-2  fw-lighter mx-5 '>
                registriry items

            </p>
            <div className='flex-wrap shadow-lg p-4 ' >
                <Row >
                    {data?.getRegistryItemsWithRegistryId?.map((item: any) => {
                        return <RegistryItemCard
                            key={item._id}
                            _id={item._id}
                            itemOfRegistry={item.itemOfRegistry}
                            registryItemName={item.registryItemName}
                            registryItemDescription={item.registryItemDescription}
                            registryItemImage={item.registryItemImage}
                            registryItemPrice={item.registryItemPrice}
                            registryItemLink={item.registryItemLink}
                            registryItemQuantity={item.registryItemQuantity}
                            registryItemFullfiled={item.registryItemFullfiled}


                        />
                    }
                    )}

                </Row>


                <Row className=' border-top border-white mt-5 p-3'  >
                    <p className='text-small fw-light btn text-success' onClick={toggle}>
                        {isAddItemOpen ? "cancel" : "add item"}
                    </p>
                </Row>

                <Collapse isOpen={isAddItemOpen}>

                    <Row>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="registryItemName"> item name </Label>
                                <Input type="text"
                                    name="registryItemName"
                                    id="registryItemName"
                                    placeholder='item name'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="registryItemDescription"> item description </Label>
                                <Input type="text"
                                    name="registryItemDescription"
                                    id="registryItemDescription"
                                    placeholder='item description'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="companyLogo"> item image </Label>
                                <Input onChange={(event: any) => {
                                    setImageSelected(event.target.files[0])
                                }} type="file" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="registryItemPrice"> price </Label>
                                <Input type="text"
                                    name="registryItemPrice"
                                    id="registryItemPrice"
                                    placeholder='price'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="registryItemLink"> external link </Label>
                                <Input type="text"
                                    name="registryItemLink"
                                    id="registryItemLink"
                                    placeholder='external link'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="registryItemQuantity"> quantity </Label>
                                <Input type="number"
                                    name="registryItemQuantity"
                                    id="registryItemQuantity"
                                    placeholder='quantity'
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row >
                        <Button
                            outline
                            color="light"
                            className=' my-3'
                            onClick={(e: any) => { handleSubmut(e) }}
                        >
                            add item
                        </Button>
                    </Row>
                </Collapse>

            </div>

        </div>
    )
}
