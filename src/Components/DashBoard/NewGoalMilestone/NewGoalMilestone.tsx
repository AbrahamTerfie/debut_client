import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
export default function NewGoalMilestone() {
    return (
        <Form>
            <Row className='App' form>
                <Col md={8} >
                    <FormGroup>
                        <Label for="firstname">first name </Label>
                        <Input type="text"
                            name="firstName"
                            placeholder='first name'
                        // value={personalInfoForm.firstName}
                        // id="firstName"
                        // placeholder={personalInfoForm.firstName}
                        // onChange={handleChange} 
                        />

                    </FormGroup>

                </Col>
            </Row>

        </Form>
    )
}
