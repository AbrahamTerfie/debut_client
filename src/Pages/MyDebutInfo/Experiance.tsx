import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


const optionsOfInterst = [
    { label: "board development", value: "board development" },
    { label: "branding", value: "mango" },
    { label: "engineering", value: "branding" },
    { label: "advertizing", value: "advertizing" },
    { label: "agriculture", value: "agriculture" },
    { label: "coaching", value: "coaching" },
    { label: "copy writing", value: "copy writing" },
    { label: "editing", value: "editing" },
    { label: "data science", value: "data science" },
    { label: "design: product", value: "design : product" },
    { label: "financing / investment", value: "financing/ investment" },
    { label: "founders", value: "founders" },
    { label: "government relations", value: "government relations" },
    { label: "human resource", value: "human resource" },
    { label: "journalisim", value: "journalisim" },
    { label: "law", value: "law" },
    { label: "marketing", value: "marketing" },
    { label: "social media", value: "social media" },
    { label: "media and press relations", value: "media and press relations" },
    { label: "music", value: "music" },
    { label: "photography", value: "photography" },
    { label: "sales", value: "sales" },
    { label: "supply chain management", value: "supply chain management" },
    { label: "business strategy ", value: "business strategy" },
]

const optionOfGeography = [
    { label: "Africa", value: "Africa" },
    { label: "Asia", value: "Asia" },
    { label: "Europe", value: "Europe" },
    { label: "North America", value: "North America" },
    { label: "Oceania", value: "Oceania" },
    { label: "South America", value: "South America" },

]

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
                            rows={4}
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
