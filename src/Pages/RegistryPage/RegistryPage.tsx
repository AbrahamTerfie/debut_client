import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Button, FormGroup, Input, Label, Collapse, CardBody, Card } from 'reactstrap'

function RegistryItemCard() {
    return (
        <Row className=' m-1 p-3 shadow-sm  ' >
            <Col md={8}>
                <Row>
                    <p className='fw-light fs-4' > Item Name
                        <small className='mx-2 fs-6 fw-lighter text-success' >fullfilled</small>
                    </p>
                </Row>
                <Row>
                    <small className='text-muted  text-small fw-light' > item links  </small>
                    <p className='fw-light link ' >
                        https://via.placeholder.com/120
                    </p>
                </Row>
                <Row>
                    <small className='text-muted  text-small fw-light' > description  </small>
                    <p className='fw-light link ' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus itaque nihil. Neque placeat dolore enim est qui modi et quaerat nemo voluptates nisi perferendis iusto maiores, mollitia quod optio.
                    </p>

                </Row>
            </Col>
            <Col md={4} >
                <Col md={12} className="d-flex justify-content-end ">
                    <img src='https://via.placeholder.com/120' alt='registry item' className='img-fluid ' />
                </Col>
                <Row className='m-3  d-flex justify-content-end text-end'>
                    <Col md={6}   >
                        <small className='text-muted  text-small fw-light' > price </small>
                        <p className='fw-light' > 9999</p>
                    </Col>
                    <Col md={6}>
                        <small className='text-muted  text-small fw-light' > quantity </small>
                        <p className='fw-light' > 9999</p>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}


export default function RegistryPage() {


    const { id } = useParams()
    const [imageSelected, setImageSelected] = useState("")
    const [isAddItemOpen, setIsAddItemOpen] = useState(false);

    const toggle = () => setIsAddItemOpen(!isAddItemOpen);
    return (
        <div className='my-5  mx-5 px-5  w-100 '>
            <p className='fs-2  fw-lighter mx-5 '>
                registriry name {id}
            </p>
            <div className='flex-wrap shadow-lg p-4 ' >
                <Row className=' border-bottom border-white ' >
                    <Col md={5}>
                        <small className='text-muted  text-small fw-light' > creator </small>
                        <p className='fw-light' > firstname lastname</p>
                    </Col>
                    <Col md={5}>
                        <small className='text-muted  text-small fw-light' > company </small>
                        <p className='fw-light'>  companyname </p>
                    </Col>
                    <Col md={2}>
                        <small className='text-muted  text-small fw-light' > status </small>
                        <p className='fw-light' > open</p>
                    </Col>

                </Row>
                <Row >
                    <p className='fs-5  fw-lighter mt-5 px-3 '>
                        registriry items
                    </p>

                    <RegistryItemCard />
                    <RegistryItemCard />
                    <RegistryItemCard />
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
                                />
                            </FormGroup>
                        </Col>

                        <Col md={4}>
                            <FormGroup>
                                <Label for="registryItemDescription"> item description </Label>
                                <Input type="text"
                                    name="registryItemDescription"
                                    id="registryItemDescription"
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
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="registryItemLink"> external link </Label>
                                <Input type="text"
                                    name="registryItemLink"
                                    id="registryItemLink"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="registryItemQuantity"> quantity </Label>
                                <Input type="number"
                                    name="registryItemQuantity"
                                    id="registryItemQuantity"
                                />
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row >
                        <Button
                            outline
                            color="light"
                            className=' my-3'
                        >
                            add item
                        </Button>
                    </Row>
                </Collapse>

            </div>

        </div>
    )
}
