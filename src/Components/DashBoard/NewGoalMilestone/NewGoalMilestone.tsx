import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { motion } from "framer-motion";
// plus icon 
import { FaPlus } from 'react-icons/fa';
export default function NewGoalMilestone() {
    return (
        <Form>
            <Row className='App' form>
                <Col md={8} >
                    <FormGroup>
                        <Label for="mileStoneTitle">Milestone Title</Label>
                        <Input type="text" name="mileStoneTitle" id="mileStoneTitle" placeholder="wname your milestone" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="mileStoneDate">Milestone Date</Label>
                        <Input type="date" name="mileStoneDate" id="mileStoneDate" placeholder="date placeholder" />
                    </FormGroup>
                </Col>

                <Col md={12}>
                    <FormGroup>
                        <Label for="mileStoneDescription">Milestone Description</Label>
                        <Input type="textarea" name="mileStoneDescription" id="mileStoneDescription" />
                    </FormGroup>
                </Col>


                <Col md={10}>
                    <FormGroup>
                        <Label for="helpNeedede">  need help with  </Label>
                        <div>
                            <p>  *   help needed with ssome thing</p>
                            <p>  *   help needed with ssome thing</p>
                            <p>  *   help needed with ssome thing</p>
                            <p>  *   help needed with ssome thing</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Input type="text" name="helpNeedede" id="helpNeedede" />
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }} color="light"
                                className=" px-5   d-flex justify-content-center align-items-center  mx-5  bg-light "
                                style={{ cursor: 'default' }}>
                                <FaPlus
                                    className='text-success'
                                    size={20}
                                />
                                <p className=' text-success m-2' > add</p>
                            </motion.div>
                        </div>
                    </FormGroup>
                </Col>

                <Col md={12}  >
                    <FormGroup>
                        <Label for="howToHelp"> how you can help </Label>
                        <Input type="textarea" name="howToHelp" id="howToHelp" />
                    </FormGroup>
                </Col>
                <Col md={12} >
                    <FormGroup>
                        <Label for="additionalLinks"> additional links </Label>
                        <Input type="textarea" name="additionalLinks" id="additionalLinks" />
                    </FormGroup>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center' >
                <motion.div whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }} color="light"
                    className=" px-5   d-flex justify-content-center align-items-center  mx-5 py-2 my-4 bg-success rounded-pill   "
                    style={{ cursor: 'default' }}>

                    <p className=' text-light m-2 fs-5' > save milestone </p>
                </motion.div>

            </Row>

        </Form>
    )
}
