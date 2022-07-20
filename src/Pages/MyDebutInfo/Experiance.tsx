import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { optionsOfInterst, optionOfGeography } from "./selectInputs";


export default function Experiance() {
    const [selectedIntrest, setSelectedIntrest] = useState([]);
    const [selectedGeography, setSelectedGeography] = useState([]);
    return (
        <Form>
            <Row form>

                <Col md={12}>
                    <FormGroup>
                        <Label for="yourContribution "> your contribution</Label>
                        <p className='fs-6 fw-lighter text-muted ' >
                            describe how you can contribute to this community
                        </p>
                        <Input type="textarea"
                            rows={2}
                            name="yourContribution"
                            id="yourContribution"
                            placeholder=" your contribution " />
                    </FormGroup>
                </Col>
                <Col md={12} className="my-3" >
                    <Label for="yourContribution ">
                        select 3-5 areas of interest that you would like to be involved in or have experience in
                    </Label>

                    <MultiSelect
                        hasSelectAll={false}
                        options={optionsOfInterst}
                        value={selectedIntrest}
                        onChange={setSelectedIntrest}
                        labelledBy="Select your interest"
                    />
                </Col>
                <Col md={12} className="my-3" >
                    <Label for="yourContribution ">
                        select geographical regions that you would like to be involved in or have experience in
                    </Label>

                    <MultiSelect
                        hasSelectAll={false}
                        options={optionOfGeography}
                        value={selectedGeography}
                        onChange={setSelectedGeography}
                        labelledBy="Select your geographical region"
                    />
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="yourContribution "> Biography</Label>
                        <p className='fs-6 fw-lighter text-muted ' >
                            To ensure formatting looks good for your public profile and printed materials, please limit length to 160 words: 156 words. Mentors can opt-out of a public profile.
                        </p>
                        <Input type="textarea"
                            rows={3}
                            name="yourContribution"
                            id="yourContribution"
                            placeholder=" your contribution " />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Button className='my-5 py-2' outline color="success" >Save and continue</Button>

            </Row>
        </Form>
    );
}
