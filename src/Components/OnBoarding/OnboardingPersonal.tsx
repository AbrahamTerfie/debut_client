import React, { useState } from 'react'
import { Row, Col, Input, FormGroup, Label } from 'reactstrap'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { aeraOfExpertise, regions } from '../../Constants/index';
import { UPDATE_DEBUT_USER_WITH_ID } from '../../GraphQl/index';
import { useMutation } from '@apollo/client';
import { notifyError } from '../Notification/Toast';

interface OnBoardingPersonalform {
    firstName: string,
    lastName: string,
    preferredName: string,
    titleAtCompany: string,
    email: string,
    linkedinUrl: string,
    yourBiography: string,
    howyouContribute: string,
    aeraOfExpertise: string[],
    regions: string[],

}

export default function OnboardingPersonal(
    { onBoardingPersonalform, setOnBoardingPersonalform }: {
        onBoardingPersonalform: OnBoardingPersonalform,
        setOnBoardingPersonalform: React.Dispatch<React.SetStateAction<OnBoardingPersonalform>>
    }) {
    const animatedComponents = makeAnimated();

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
// console.log("onBoardingPers...........onalform", onBoardingPersonalform)
    return (
        <Row>
            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName"
                        id="firstName"
                        placeholder="First Name"
                        value={onBoardingPersonalform?.firstName}
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName"
                        id="lastName"
                        value={onBoardingPersonalform?.lastName}
                        placeholder="Last Name"
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>

            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup >
                    <Label for="preferredName">Preferred Name</Label>
                    <Input type="text" name="preferredName"
                        id="preferredName"
                        value={onBoardingPersonalform?.preferredName}
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
                        value={onBoardingPersonalform?.titleAtCompany}
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup >
                    <Label for="linkedinUrl">Linkedin Url</Label>
                    <Input type="text" name="linkedinUrl"
                        id="linkedinUrl"
                        placeholder="Linkedin Url"
                        value={onBoardingPersonalform?.linkedinUrl}
                        onChange={onChangeHandler} />
                </FormGroup>
            </Col>
            <Col sm={12} md={6} lg={6} xl={6} >
                <FormGroup >
                    <Label for="email">Email</Label>
                    <Input type="email" name="email"
                        id="email"
                        disabled
                        placeholder="Email"
                        value={onBoardingPersonalform?.email}
                    />
                </FormGroup>
            </Col>
            <br className='border border-success' />
            <Col sm={12} md={12} lg={12} xl={12} >
                <FormGroup >
                    <Label for="yourBiography"> Biography</Label>
                    <Input type="textarea" name="yourBiography"
                        id="yourBiography"
                        placeholder="yourBiography"
                        value={onBoardingPersonalform?.yourBiography}
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
                    defaultValue={aeraOfExpertise?.filter((item: any) => onBoardingPersonalform.aeraOfExpertise.includes(item.value))}
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
                    name='regiregionsons'
                    onChange={(e: any) => selecthandler(e, 'regions')}
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    isMulti
                    options={regions}
                    defaultValue={regions?.filter((item: any) => onBoardingPersonalform.regions.includes(item.value))}
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
