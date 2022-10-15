import React from 'react';
import { Row, Col, FormGroup, Input, Label } from 'reactstrap';

export default function NewGoalForm() {
    return (

        <Row className='App' >
            <Col md={12} >
                <FormGroup>
                    <Label for="exampleEmail">  title </Label>
                    <Input type="text" name="goalTitle" id="goalTitle" placeholder=" name your goal" />
                </FormGroup>
            </Col>
            <Col md={12} >
                <FormGroup>
                    <Label for="goalDescription">  description </Label>
                    <Input type="textarea"
                        col={9}
                        name="goalDescription" id="goalDescription" placeholder=" describe your goal in deatil" />
                </FormGroup>
            </Col>
        </Row>
    );
}

