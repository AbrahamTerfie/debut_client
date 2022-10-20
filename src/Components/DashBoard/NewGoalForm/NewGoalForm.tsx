import React, { useState } from 'react';
import { Row, Col, FormGroup, Input, Label } from 'reactstrap';
import { useMutation, useQuery } from '@apollo/client';
import { RootState } from '../../../Store/RootReducer';
import { useSelector } from 'react-redux';
import { CREATE_COMPANY_GOAL, FETCH_COMPANY_GOALS_WITH_COMPANY_ID } from '../../../GraphQl/index';
export default function NewGoalForm() {

    const { userID, companyID } = useSelector((store: RootState) => store.identfiers)
    const [newGoal, setNewGoal] = useState({
        createdBy: userID,
        belongsTo: companyID,
        goalTitle: "",
        goalDescription: "",

    })

    const inputHndler = (e: any) => {
        const { name, value } = e.target;
        setNewGoal({ ...newGoal, [name]: value })
    }

    return (

        <Row className='App' >
            <Col md={12} >
                <FormGroup>
                    <Label for="goalTitle">  title </Label>
                    <Input
                        required
                        value={newGoal.goalTitle}
                        onChange={inputHndler}
                        type="text"
                        name="goalTitle"
                        id="goalTitle"
                        placeholder=" name your goal" />
                </FormGroup>
            </Col>
            <Col md={12} >
                <FormGroup>
                    <Label for="goalDescription">  description </Label>
                    <Input
                        required
                        type="textarea"
                        rows={10}
                        value={newGoal.goalDescription}
                        onChange={inputHndler}
                        name="goalDescription"
                        id="goalDescription"
                        placeholder=" describe your goal in deatil" />
                </FormGroup>
            </Col>
        </Row>
    );
}

