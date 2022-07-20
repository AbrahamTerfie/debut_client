import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { setMyDebutTab } from '../../Store/UI/sidebarController';

export default function PersonalInfo() {
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const dispatch = useDispatch();
    const { myDebutTab } = useSelector((store: RootState) => store.uiStore)

    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="firstname">first name </Label>
                        <Input type="text"
                            name="firstName"
                            id="FirstName"
                            placeholder="first name" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="lastName">last name</Label>
                        <Input type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="last name" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="preferedname"> prefred name</Label>
                        <Input type="text"
                            name="preferedname"
                            id="preferedname"
                            placeholder="prefered" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="pronouns"> pronouns </Label>
                        <Input type="text"
                            name="pronouns"
                            id="pronouns"
                            placeholder="pronouns" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="pronouns"> title at your company </Label>
                        <Input type="text"
                            name="pronouns"
                            id="pronouns"
                            placeholder="pronouns" />
                    </FormGroup>
                </Col>
                <Col md={6} className='py-4' >
                    * current company *
                </Col>

                <Col md={3}>
                    <FormGroup>
                        <Label for="linkedIn"> LinkedIn URL </Label>
                        <Input type="text"
                            name="linkedIn"
                            id="linkedIn"
                            placeholder="LinkedIn " />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="twitter"> twitter URL </Label>
                        <Input type="text"
                            name="twitter"
                            id="twitter"
                            placeholder="twitter" />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="facebook"> facebook URL </Label>
                        <Input type="text"
                            name="facebook"
                            id="facebook"
                            placeholder="facebook" />
                    </FormGroup>
                </Col>

            </Row>

            <FormGroup>
                <Label for="exampleAddress">Mailing address</Label>
                <span className='fs-6 text-muted mx-3' > not shared with anyone , only will be used for goodies and promotional mail </span>
                <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
            </FormGroup>
            <Row>

                <Button className='my-4 py-2' outline color="success"
                    onClick={() => { dispatch(setMyDebutTab('2')) }}>
                    Save and continue
                </Button>

            </Row>
        </Form>
    );
}
