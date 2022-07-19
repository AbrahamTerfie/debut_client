import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function ContactInfo() {
    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email"> email </Label>
                        <Input type="email"
                            name="firstName"
                            id="FirstName"
                            placeholder="email"
                            disabled
                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="phonenumber ">phone number</Label>
                        <Input type="number"
                            name="phonenumber"
                            id="phonenumber"
                            placeholder=" your phone number " />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="officePhone "> office phone </Label>
                        <Input type="number"
                            name="officePhone"
                            id="officePhone"
                            placeholder="office phone number" />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="preferedContact"> prefred contact method</Label>
                        <Input type="select" name="preferedContact" id="preferedContact">
                            <option value="general" > email  </option>
                            <option value="collabration"  > phone  </option>
                            <option value="community" > office phone  </option>

                        </Input>
                    </FormGroup>
                </Col>


                <p className='fs-6 fw-lighter text-muted mt-5' >
                    if you have an assistant and wish to be contacted through them , please enter their information below
                </p>


                <Col md={4}>
                    <FormGroup>
                        <Label for="assistantFullName ">  Assistant full name   </Label>
                        <Input type="text"
                            name="assistantFullName"
                            id="assistantFullName"
                            placeholder=" full name " />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="assistantEmail "> Assistant Email </Label>
                        <Input type="email"
                            name="assistantEmail"
                            id="assistantEmail"
                            placeholder="assistant email" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="assistantsPhoneNumber "> Assistants phone number </Label>
                        <Input type="number"
                            name="assistantsPhoneNumber"
                            id="assistantsPhoneNumber"
                            placeholder="assistant phone number" />
                    </FormGroup>
                </Col>

            </Row>


            <Row>

                <Button className='my-5 py-2' outline color="success" >Save and continue</Button>

            </Row>
        </Form>
    );
}
