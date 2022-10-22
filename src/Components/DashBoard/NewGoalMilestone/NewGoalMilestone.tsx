import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { motion } from "framer-motion";
import classNames from "classnames";
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer'
import { BsTrash } from "react-icons/bs";
import { useMutation, useQuery } from '@apollo/client';
import { notifyError, notifyLoading, notifySuccess, notifyWarning } from '../../Notification/Toast';


interface mileSoneform {
    createdBy: string,
    belongsTo: string,
    mileStoneTitle: string,
    mileStoneDescription: string,
    milestoneDueDate: string,
    milestoneCompleted: boolean,
    milestoneCompletedDate: string,
    underGoal: string,
    needHelpWith: string[],
    additionalLinks: string[],
}


export default function NewGoalMilestone(
    { goalID }: { goalID: string }
) {
    const { companyID, userID } = useSelector((store: RootState) => store.identfiers)

    const [newMileStone, setNewMileStone] = useState({
        createdBy: userID,
        belongsTo: companyID,
        mileStoneTitle: "",
        mileStoneDescription: "",
        milestoneDueDate: "",
        milestoneCompleted: false,
        milestoneCompletedDate: "",
        underGoal: goalID,
        needHelpWith: [],
        additionalLinks: [],
    } as mileSoneform)

    const [helpWith, setNeedHelpWith] = useState("")
    const [additionalLink, setAdditionalLink] = useState("")

    console.log("newMileStone", newMileStone)

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMileStone({
            ...newMileStone,
            [e.target.name]: e.target.value,
        })
    }
    const addToNeedHelpWith = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMileStone({ ...newMileStone, needHelpWith: [...newMileStone.needHelpWith, helpWith] })
        setNeedHelpWith("")
    }
    const removeFromNeedHelpWith = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        // remove item ftpm array
        const newNeedHelpWith = newMileStone.needHelpWith.filter((item, i) => i !== index)
        setNewMileStone({ ...newMileStone, needHelpWith: newNeedHelpWith })

    }
    const addToAdditionalLinks = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMileStone({ ...newMileStone, additionalLinks: [...newMileStone.additionalLinks, additionalLink] })
        setAdditionalLink("")
    }
    const removeFromAdditionalLinks = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {

        const newAdditionalLinks = newMileStone.additionalLinks.filter((item, i) => i !== index)
        setNewMileStone({ ...newMileStone, additionalLinks: newAdditionalLinks })


    }


    return (
        <Form>
            <Row className='App' form>

                <Col md={8} >
                    <FormGroup>
                        <Label for="mileStoneTitle">Milestone Title</Label>
                        <Input type="text" name="mileStoneTitle" id="mileStoneTitle"
                            value={newMileStone.mileStoneTitle}
                            onChange={inputHandler}
                            placeholder="name your milestone" />
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for="milestoneDueDate">Milestone Due Date</Label>
                        <Input type="date" name="milestoneDueDate" id="milestoneDueDate" placeholder="date "
                            value={newMileStone.milestoneDueDate}
                            onChange={inputHandler}
                        />
                    </FormGroup>
                </Col>

                <Col md={12}>
                    <FormGroup>
                        <Label for="mileStoneDescription">Milestone Description</Label>
                        <Input type="textarea" name="mileStoneDescription" id="mileStoneDescription"
                            value={newMileStone.mileStoneDescription}
                            onChange={inputHandler}
                        />
                    </FormGroup>
                </Col>
                <Col md={12} >
                    <p> help needed with </p>

                    <div className='d-flex  align-items-center flex-wrap'>
                        {newMileStone.needHelpWith.map((item, index) => {
                            return (
                                <p key={index}
                                    className='border border-light rounded-pill bg-dark bg-opacity-10 p-2  px-4  me-2'>
                                    {item}
                                    <motion.div
                                        whileHover={{ scale: 1.09 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='d-inline-block ms-2' >
                                        <BsTrash className='ms-3'
                                            size={15} color='red'
                                            onClick={(e: any) => removeFromNeedHelpWith(e, index)}
                                        />
                                    </motion.div>
                                </p>
                            )
                        })}

                    </div>
                </Col>

                <Col md={12}>
                    <FormGroup>
                        <Label for="needHelpWith">  need help with  </Label>

                        <div className='d-flex justify-content-between align-items-center'>
                            <Input type="text" name="needHelpWith" id="needHelpWith"
                                value={helpWith}
                                onChange={(e) => setNeedHelpWith(e.target.value)}
                            />
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }} color="light"
                                className=" px-5   d-flex justify-content-center align-items-center  mx-5  bg-light "
                                style={{ cursor: 'default' }}
                                onClick={(e: any) => addToNeedHelpWith(e)}
                            >
                                <FaPlus
                                    className='text-success'
                                    size={20}
                                />
                                <p className=' text-success m-2' > add</p>
                            </motion.div>
                        </div>
                    </FormGroup>
                </Col>
                <Col md={12} >
                    <p> additional links</p>
                    <div className='d-flex  align-items-center flex-wrap'>
                        {
                            newMileStone.additionalLinks.map((item, index) => {
                                return (
                                    <p
                                        key={index}
                                        className='border border-light rounded-pill bg-dark bg-opacity-10 p-2  px-4  me-2'>
                                        {item}
                                        <motion.div
                                            whileHover={{ scale: 1.09 }}
                                            whileTap={{ scale: 0.9 }}
                                            className='d-inline-block ms-2' >
                                            <BsTrash className='ms-3'
                                                size={15} color='red'
                                                onClick={(e: any) => removeFromAdditionalLinks(e, index)}
                                            />
                                        </motion.div>
                                    </p>
                                )
                            })
                        }

                    </div>
                </Col>

                <Col md={12}>
                    <FormGroup>
                        <Label for="additionalLinks">  additional links   </Label>

                        <div className='d-flex justify-content-between align-items-center'>
                            <Input type="text" name="additionalLinks" id="additionalLinks"
                                onChange={(e) => setAdditionalLink(e.target.value)}
                            />
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 30 }} color="light"
                                className=" px-5   d-flex justify-content-center align-items-center  mx-5  bg-light "
                                style={{ cursor: 'default' }}
                                onClick={(e: any) => addToAdditionalLinks(e)}
                            >
                                <FaPlus
                                    className='text-success'
                                    size={20}
                                />
                                <p className=' text-success m-2' > add</p>
                            </motion.div>
                        </div>
                    </FormGroup>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center' >
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }} color="light"
                    className=" px-5   d-flex justify-content-center align-items-center  mx-5 py-2 my-4 bg-success rounded-pill   bg-opacity-75 "
                    style={{ cursor: 'default' }}>

                    <p className=' text-light m-2 fs-5' > save milestone </p>
                </motion.div>

            </Row>

        </Form >
    )
}
