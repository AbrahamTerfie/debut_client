import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { setMyDebutTab } from '../../Store/UI/sidebarController';
import { contactInfoInitState } from './initSattes'
import { FETCH_USER_WITH_ID, UPDATE_DEBUT_USER_WITH_ID } from '../../GraphQl/index'
import { useMutation, useQuery } from '@apollo/client'
import Loader from '../../Components/Loader/Loader';
export default function ContactInfo() {
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const dispatch = useDispatch();
    const { myDebutTab } = useSelector((store: RootState) => store.uiStore)
    const { data, loading, error } = useQuery(FETCH_USER_WITH_ID, {
        variables: { getDebutUserWithIdId: userID }
    })
    const [contactInfoForm, setContactInfoForm] = useState(contactInfoInitState)
    console.log(contactInfoForm)
    useEffect(() => {
        if (data) {
            setContactInfoForm({
                email: data.getDebutUserWithId.email === null ? '' : data.getDebutUserWithId.email,
                mobilePhone: data.getDebutUserWithId.mobilePhone === null ? '' : data.getDebutUserWithId.mobilePhone,
                officePhone: data.getDebutUserWithId.officePhone === null ? '' : data.getDebutUserWithId.officePhone,
                preferedContactMethod: data.getDebutUserWithId.preferedContactMethod === null ? '' : data.getDebutUserWithId.preferedContactMethod,
                hasAssistat: data.getDebutUserWithId.hasAssistat === null ? true : data.getDebutUserWithId.hasAssistat,
                assistantName: data.getDebutUserWithId.assistantName === null ? '' : data.getDebutUserWithId.assistantName,
                assistantEmail: data.getDebutUserWithId.assistantEmail === null ? '' : data.getDebutUserWithId.assistantEmail,
                assistantPhone: data.getDebutUserWithId.assistantPhone === null ? '' : data.getDebutUserWithId.assistantPhone,
            })
        }
    }, [data])



    const [updateContactInfo, updateContactInfoRes] = useMutation(UPDATE_DEBUT_USER_WITH_ID,
        {
            update(cache, { data: { updateDebutUser } }) {
                const { getDebutUserWithId }: any = cache.readQuery({
                    query: FETCH_USER_WITH_ID,
                    variables: { getDebutUserWithIdId: userID }
                })
                cache.writeQuery({
                    query: FETCH_USER_WITH_ID,
                    variables: { getDebutUserWithIdId: userID },
                    data: { getDebutUserWithId: updateDebutUser }
                })
            }
        })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setContactInfoForm({ ...contactInfoForm, [name]: value })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        updateContactInfo({
            variables: {
                userInput: contactInfoForm,
                updateDebutUserId: userID
            }
        })
        updateContactInfoRes.data && dispatch(setMyDebutTab("3")) && setContactInfoForm(contactInfoInitState)
    }
    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email"> email </Label>
                        <Input type="email"
                            name="firstName"
                            id="FirstName"
                            placeholder={contactInfoForm.email}
                            value={contactInfoForm.email}

                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="mobilePhone "> mobile phone </Label>
                        <Input type="number"
                            name="mobilePhone"
                            id="mobilePhone"
                            placeholder={contactInfoForm.mobilePhone}
                            value={contactInfoForm.mobilePhone}
                            onChange={handleChange}

                        />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="officePhone "> office phone </Label>
                        <Input type="number"
                            name="officePhone"
                            id="officePhone"
                            placeholder={contactInfoForm.officePhone}
                            value={contactInfoForm.officePhone}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
                <Col md={12}>
                    <FormGroup>
                        <Label for="preferedContactMethod"> prefred contact method</Label>
                        <Input type="select" name="preferedContactMethod" id="preferedContactMethod"
                            value={contactInfoForm.preferedContactMethod}
                            onChange={handleChange}

                        >
                            <option value="email" > email  </option>
                            <option value="mobile "  > phone  </option>
                            <option value="office phone" > office phone  </option>

                        </Input>
                    </FormGroup>
                </Col>


                <p className='fs-6 fw-lighter text-muted mt-5' >
                    if you have an assistant and wish to be contacted through them , please enter their information below
                </p>


                <Col md={4}>
                    <FormGroup>
                        <Label for="assistantName ">  Assistant full name   </Label>
                        <Input type="text"
                            name="assistantName"
                            id="assistantName"
                            placeholder={contactInfoForm.assistantName}
                            value={contactInfoForm.assistantName}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="assistantEmail "> Assistant Email </Label>
                        <Input type="email"
                            name="assistantEmail"
                            id="assistantEmail"
                            placeholder={contactInfoForm.assistantEmail}
                            value={contactInfoForm.assistantEmail}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="assistantPhone "> Assistants phone number </Label>
                        <Input type="number"
                            name="assistantPhone"
                            id="assistantPhone"
                            placeholder={contactInfoForm.assistantPhone}
                            value={contactInfoForm.assistantPhone}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Button className='my-4 py-2 w-100 mx-2' outline color="warning"
                        onClick={() => { dispatch(setMyDebutTab('1')) }}>
                        previous
                    </Button>
                </Col>
                <Col md={9}>
                    <Button className='my-4 py-2 w-100' outline color="success"
                       onClick={(e) => handleSubmit(e)}>
                        Save and continue
                    </Button>
                </Col>
            </Row>

        </Form>
    );
}
