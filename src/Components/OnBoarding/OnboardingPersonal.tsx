import React, { useState } from 'react'
import { Row, Col, Input, FormGroup, Label } from 'reactstrap'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { aeraOfExpertise, regions } from '../../Constants/index';


export default function OnboardingPersonal() {
    const animatedComponents = makeAnimated();

    const [onBoardingPersonalform, setOnBoardingPersonalform] = useState({
        firstName: '',
        lastName: '',
        preferredName: '',
        titleAtCompany: '',
        linkedinUrl: '',
        biography: '',
        howWillYouHelp: '',
        aeraOfExpertise: [],
        regions: [],
    })

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnBoardingPersonalform({
            ...onBoardingPersonalform, [e.target.name]: e.target.value
        })
    }
    const selecthandler = (e: any, name: string) => {
        setOnBoardingPersonalform({
            ...onBoardingPersonalform, [name]: e.map((item: any) => item.value)
        })
    }

    console.log(onBoardingPersonalform);
    return (
        <Row>
            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName"
                        id="lastName"
                        placeholder="Last Name"
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>

            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup >
                    <Label for="preferredName">Preferred Name</Label>
                    <Input type="text" name="preferredName"
                        id="preferredName"
                        placeholder="Preferred Name"
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>

            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup >
                    <Label for="titleAtCompany">Role</Label>
                    <Input type="text" name="titleAtCompany"
                        id="titleAtCompany"
                        placeholder="Title At Company"
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup >
                    <Label for="linkedinUrl">Linkedin Url</Label>
                    <Input type="text" name="linkedinUrl"
                        id="linkedinUrl"
                        placeholder="Linkedin Url"
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>
            <br className='border border-success' />
            <Col sm={12} md={12} lg={12} xl={12} >
                <FormGroup >
                    <Label for="biography">Biography</Label>
                    <Input type="textarea" name="biography"
                        id="biography"
                        placeholder="Biography"
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>
            <Col m={12} md={12} lg={12} xl={12} className='my-2'>
                <Label for="aeraOfExpertise">aera of expertise </Label>
                <Select
                    name='aeraOfExpertise'
                    onChange={(e: any) => selecthandler(e, 'aeraOfExpertise')}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={aeraOfExpertise}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'darkgrey' : 'grey',
                            backgroundColor: state.isFocused ? 'darkgrey' : 'grey',
                        }),
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'black',
                            color: 'darkgrey',
                        })
                    }}
                />
            </Col>
            <Col m={12} md={12} lg={12} xl={12} className='my-2'>
                <Label for="regions"> Regions </Label>
                <Select
                    name='regions'
                    onChange={(e: any) => selecthandler(e, 'regions')}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={regions}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            borderColor: state.isFocused ? 'darkgrey' : 'grey',
                            backgroundColor: state.isFocused ? 'darkgrey' : 'grey',
                        }),
                        menu: (baseStyles, state) => ({
                            ...baseStyles,
                            backgroundColor: 'black',
                            color: 'darkgrey',
                        })
                    }}
                />
            </Col>
        </Row>
    )
}
