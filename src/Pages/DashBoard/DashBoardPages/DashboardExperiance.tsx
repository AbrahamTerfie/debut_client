import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { optionsOfInterst, optionOfGeography } from "../../MyDebutInfo/selectInputs";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
import { setMyDebutTab } from '../../../Store/UI/sidebarController';

import { FETCH_USER_WITH_ID, UPDATE_DEBUT_USER_WITH_ID } from '../../../GraphQl/index'
import { useMutation, useQuery } from '@apollo/client'
import Loader from "../../../Components/Loader/Loader";
import { motion } from "framer-motion";
export default function DashboardExperiance() {
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const dispatch = useDispatch();
    const { data, loading, error } = useQuery(FETCH_USER_WITH_ID, {
        variables: { getDebutUserWithIdId: userID }
    })
    const [selectedIntrest, setSelectedIntrest] = useState([] as any);
    const [selectedGeography, setSelectedGeography] = useState([]);

    const experienceInfoInitState = {
        howyouContribute: "",
        regions: selectedGeography.map((item: any) => item.value),
        aeraOfExpertise: selectedIntrest.map((item: any) => item.value),
        yourBiography: "",
    }
    const [experienceInfoForm, setExperienceInfoForm] = useState(experienceInfoInitState)
    useEffect(() => {
        if (data) {
            setExperienceInfoForm({
                yourBiography: data.getDebutUserWithId.yourBiography === null ? '' : data.getDebutUserWithId.yourBiography,
                howyouContribute: data.getDebutUserWithId.howyouContribute === null ? '' : data.getDebutUserWithId.howyouContribute,
                aeraOfExpertise: data.getDebutUserWithId.aeraOfExpertise === null ? [] : data.getDebutUserWithId.aeraOfExpertise,
                regions: data.getDebutUserWithId.regions === null ? [] : data.getDebutUserWithId.regions,
            })
        }
    }, [data])


    const [updateExperiance, updateExperianceRes] = useMutation(UPDATE_DEBUT_USER_WITH_ID,
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
        setExperienceInfoForm({ ...experienceInfoForm, [name]: value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        updateExperiance({
            variables: {
                userInput: experienceInfoForm,
                updateDebutUserId: userID
            }
        })
        updateExperianceRes.data && dispatch(setMyDebutTab("4")) && setExperienceInfoForm(experienceInfoInitState)
    }
    if (loading) return <Loader />
    if (error) return <p>Error</p>
    return (
        <Form className="px-5" >
            <Row form>

                <Col md={12}>
                    <FormGroup>
                        <Label for="howyouContribute "> your contribution</Label>
                        <p className='fs-6 fw-lighter text-muted ' >
                            describe how you can contribute to this community
                        </p>
                        <Input type="textarea"
                            rows={2}
                            name="howyouContribute"
                            id="howyouContribute"
                            placeholder={experienceInfoForm.howyouContribute}
                            onChange={handleChange}
                            value={experienceInfoForm.howyouContribute}


                        />
                    </FormGroup>
                </Col>
                <Col md={12} className="my-3" >
                    <Label for="intersts ">
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
                    <Label for="regions ">
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
                        <Label for="yourBiography "> Biography</Label>
                        <p className='fs-6 fw-lighter text-muted ' >
                            To ensure formatting looks good for your public profile and printed materials, please limit length to 160 words: 156 words. Mentors can opt-out of a public profile.
                        </p>
                        <Input type="textarea"
                            rows={3}
                            name="yourBiography"
                            id="yourBiography"
                            placeholder={experienceInfoForm.yourBiography}
                            onChange={handleChange}
                            value={experienceInfoForm.yourBiography}

                        />
                    </FormGroup>
                </Col>
            </Row>



            <Row className='d-flex justify-content-center align-items-center mx-5 my-2'
                onClick={(e) => handleSubmit(e)}

            >
                <motion.div whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className=" px-5   d-flex justify-content-center align-items-center  mx-5 py-2 my-4 bg-success bg-opacity-25  rounded-pill  border border-success "
                    style={{ cursor: 'default' }}>
                    <p className=' text-success m-2 fs-5 fw-bold' > save your experiance    </p>
                </motion.div>
            </Row>

        </Form>
    );
}
