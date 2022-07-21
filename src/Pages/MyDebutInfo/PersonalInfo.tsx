import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { setMyDebutTab } from '../../Store/UI/sidebarController';
import { FETCH_USER_WITH_ID, UPDATE_DEBUT_USER_WITH_ID } from '../../GraphQl/index'
import { useMutation, useQuery } from '@apollo/client'
import { personalInfoInitialState } from './initSattes';
import Loader from '../../Components/Loader/Loader';


export default function PersonalInfo() {
    const dispatch = useDispatch();
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const { data, loading, error } = useQuery(FETCH_USER_WITH_ID, {
        variables: { getDebutUserWithIdId: userID }
    })
    const [personalInfoForm, setPersonalInfoForm] = useState(personalInfoInitialState)

    useEffect(() => {
        if (data) {
            setPersonalInfoForm({
                firstName: data.getDebutUserWithId.firstName === null ? '' : data.getDebutUserWithId.firstName,
                lastName: data.getDebutUserWithId.lastName === null ? '' : data.getDebutUserWithId.lastName,
                preferredName: data.getDebutUserWithId.preferredName === null ? '' : data.getDebutUserWithId.preferredName,
                pronouns: data.getDebutUserWithId.pronouns === null ? '' : data.getDebutUserWithId.pronouns,
                titleAtCompany: data.getDebutUserWithId.titleAtCompany === null ? '' : data.getDebutUserWithId.titleAtCompany,
                linkedinUrl: data.getDebutUserWithId.linkedinUrl === null ? '' : data.getDebutUserWithId.linkedinUrl,
                twitterUrl: data.getDebutUserWithId.twitterUrl === null ? '' : data.getDebutUserWithId.twitterUrl,
                instagramUrl: data.getDebutUserWithId.instagramUrl === null ? '' : data.getDebutUserWithId.instagramUrl,
                facebookUrl: data.getDebutUserWithId.facebookUrl === null ? '' : data.getDebutUserWithId.facebookUrl,
                mailingAddress: data.getDebutUserWithId.mailingAddress === null ? '' : data.getDebutUserWithId.mailingAddress,
            })
        }
    }, [data])

    const [updatePersonalInfo, updatePersonalInfoRes] = useMutation(UPDATE_DEBUT_USER_WITH_ID,
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
        setPersonalInfoForm({ ...personalInfoForm, [name]: value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        updatePersonalInfo({
            variables: {
                userInput: personalInfoForm,
                updateDebutUserId: userID
            }
        })
        updatePersonalInfoRes.data && dispatch(setMyDebutTab("2")) && setPersonalInfoForm(personalInfoInitialState)
    }

    if (loading) return <div>   <Loader /> </div>
    if (error) return <div>Error!</div>
    console.log(data)

    return (
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="firstname">first name </Label>
                        <Input type="text"
                            name="firstName"
                            value={personalInfoForm.firstName}
                            id="firstName"
                            placeholder={personalInfoForm.firstName}
                            onChange={handleChange} />

                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="lastName">last name</Label>
                        <Input type="text"
                            name="lastName"
                            id="lastName"
                            value={personalInfoForm.lastName}
                            placeholder={personalInfoForm.lastName}
                            onChange={handleChange} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="preferredName"> prefred name</Label>
                        <Input type="text"
                            name="preferredName"
                            id="preferredName"
                            value={personalInfoForm.preferredName}
                            placeholder={personalInfoForm.preferredName}
                            onChange={handleChange} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="pronouns"> pronouns </Label>
                        <Input type="text"
                            name="pronouns"
                            id="pronouns"
                            placeholder={personalInfoForm.pronouns}
                            value={personalInfoForm.pronouns}
                            onChange={handleChange} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="titleAtCompany"> title at your company </Label>
                        <Input type="text"
                            name="titleAtCompany"
                            id="titleAtCompany"
                            placeholder={personalInfoForm.titleAtCompany}
                            value={personalInfoForm.titleAtCompany}
                            onChange={handleChange} />
                    </FormGroup>
                </Col>
                <Col md={6} className='py-4' >
                    * current company *
                </Col>

                <Col md={3}>
                    <FormGroup>
                        <Label for="linkedinUrl"> LinkedIn URL </Label>
                        <Input type="text"
                            name="linkedinUrl"
                            id="linkedinUrl"
                            placeholder={personalInfoForm.linkedinUrl}
                            value={personalInfoForm.linkedinUrl}
                            onChange={handleChange} />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="twitterUrl"> twitter URL </Label>
                        <Input type="text"
                            name="twitterUrl"
                            id="twitterUrl"
                            placeholder={personalInfoForm.twitterUrl}
                            value={personalInfoForm.twitterUrl}
                            onChange={handleChange} />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="facebookUrl"> facebook URL </Label>
                        <Input type="text"
                            name="facebookUrl"
                            id="facebookUrl"
                            placeholder={personalInfoForm.facebookUrl}
                            value={personalInfoForm.facebookUrl}
                            onChange={handleChange} />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <FormGroup>
                        <Label for="instagramUrl"> instagram URL </Label>
                        <Input type="text"
                            name="instagramUrl"
                            id="instagramUrl"
                            placeholder={personalInfoForm.instagramUrl}
                            value={personalInfoForm.instagramUrl}
                            onChange={handleChange} />
                    </FormGroup>
                </Col>

            </Row>

            <FormGroup>
                <Label for="mailingAddress">Mailing address</Label>
                <span className='fs-6 text-muted mx-3' > not shared with anyone , only will be used for goodies and promotional mail </span>
                <Input type="text"
                    name="mailingAddress"
                    id="mailingAddress"
                    placeholder={personalInfoForm.mailingAddress}
                    value={personalInfoForm.mailingAddress}
                    onChange={handleChange} />

            </FormGroup>
            <Row>

                <Button className='my-4 py-2' outline color="success"
                    onClick={(e) => handleSubmit(e)}>
                    Save and continue
                </Button>

            </Row>
        </Form>
    );
}


