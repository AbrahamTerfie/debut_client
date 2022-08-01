import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Button, FormGroup, Input, Label, Collapse, CardBody, Card } from 'reactstrap'

// input debutRegistryInput {
//     createdBy: Stri              ng!
//     belongsTo: String!
//     debutRegistryName: String!
//     debutRegistryStatus: Boolean
//     debutRegistryItems: [String]
// }


// type RegistryItem {
//     _id: ID
//     itemOfRegistry: debutRegistry
//     registryItemName: String
//     registryItemDescription: String
//     registryItemImage: String
//     registryItemPrice: String
//     registryItemLink: String
//     registryItemQuantity: String
//     registryItemFullfiled: Boolean
// }

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
                    <p className='fs-5  fw-lighter my-5 px-3 '>
                        registriry items
                    </p>

                </Row>


                <Row className=' border-top border-white my-5 p-3'  >
                    <p className='text-small fw-light btn text-success '
                        onClick={toggle}>
                        add item </p>
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
