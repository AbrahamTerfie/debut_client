import React, { useEffect, useState } from 'react'
import {
    AccordionBody, AccordionHeader, AccordionItem, Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader, Row,
    UncontrolledAccordion,
} from 'reactstrap';
import './GoalsAccordion.css'
import { motion } from "framer-motion";
import NewGoalMilestone from '../NewGoalMilestone/NewGoalMilestone';
import { BsThreeDotsVertical, BsTrash, BsPen } from 'react-icons/bs';
import { DELETE_COMPANY_GOAL, FETCH_COMPANY_GOALS_WITH_COMPANY_ID, UPDATE_COMPANY_GOAL } from '../../../GraphQl/Goals/goals';
import { useMutation, } from '@apollo/client';
import { RootState } from '../../../Store/RootReducer';
import { useSelector } from 'react-redux';
import { notifyError, notifyLoading, notifySuccess } from '../../../Components/Notification/Toast';

export default function GoalsAccordion(
    { _id, goalTitle, goalDescription, mileStones, goalStatus }: {
        _id: string, goalTitle: String, goalDescription: String, mileStones: [], goalStatus: Boolean
    }
) {

    const { companyID, userID } = useSelector((store: RootState) => store.identfiers)
    const [deleteCompanyGoal, { data: deleteCompanyGoalData, loading: deleteCompanyGoalLoading, error: deleteCompanyGoalError }] = useMutation(DELETE_COMPANY_GOAL, {
        refetchQueries: [{ query: FETCH_COMPANY_GOALS_WITH_COMPANY_ID, variables: { companyId: companyID } }]
    })
    const [updateCompanyGoal, { data: updateCompanyGoalData, loading: updateCompanyGoalLoading, error: updateCompanyGoalError }] = useMutation(UPDATE_COMPANY_GOAL, {
        refetchQueries: [{ query: FETCH_COMPANY_GOALS_WITH_COMPANY_ID, variables: { companyId: companyID } }]
    })
    const initState = {
        createdBy: userID,
        belongsTo: companyID,
        goalTitle: goalTitle,
        goalDescription: goalDescription,

    }
    const [editGoal, setEditGoal] = useState(initState)
    const inputHndler = (e: any) => {
        const { name, value } = e.target;
        setEditGoal({ ...editGoal, [name]: value })
    }



    const [open, setOpen] = useState('');
    const [offCanvas, setOffCanvas] = useState(false);
    const toggleCanvas = () => { setOffCanvas(!offCanvas); }
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [editModal, setEditModal] = useState(false);
    const toggleEditModal = () => setEditModal(!editModal);
    const deleteModal = () => { setConfirmDelete(!confirmDelete) }
    const deleteHandler = (e: any) => {
        deleteCompanyGoal({
            variables: {
                deleteCompanyGoalId: _id
            }
        })
        deleteModal()
    }

    const editHandler = (e: any) => {
        updateCompanyGoal({
            variables: {
                updateCompanyGoalId: _id,
                companyGoalInput: editGoal
            }
        })
        toggleEditModal()
    }

    useEffect(() => {
        if (deleteCompanyGoalData) {
            notifySuccess('Goal deleted successfully')
        }
        if (deleteCompanyGoalError) {
            notifyError("Error deleting goal")
        }
        if (deleteCompanyGoalLoading) {
            notifyLoading('Deleting goal ........')
        }
        if (updateCompanyGoalData) {
            notifySuccess('Goal updated successfully')
        }
        if (updateCompanyGoalError) {
            notifyError("Error updating goal")
        }
        if (updateCompanyGoalLoading) {
            notifyLoading('Updating goal ........')
        }

    }, [deleteCompanyGoalData,
        deleteCompanyGoalError,
        deleteCompanyGoalLoading,
        updateCompanyGoalData,
        updateCompanyGoalError,
        updateCompanyGoalLoading])

    return (
        <div>
            <UncontrolledAccordion
                open={open}
                flush
                stayOpen>
                <AccordionItem  >
                    <Offcanvas
                        direction="end"
                        scrollable
                        isOpen={offCanvas}
                        toggle={toggleCanvas}
                        style={{
                            width: '70%',
                            color: '#1985a1'
                        }}>
                        <OffcanvasHeader toggle={toggleCanvas}  >
                            <p className="fw-light m-4 fs-3">
                                create new milestone for this goal
                            </p>
                        </OffcanvasHeader>
                        <OffcanvasBody className='p-5' >
                            {/* new milestone form  */}
                            <NewGoalMilestone
                                goalID={_id}
                            />
                        </OffcanvasBody>
                    </Offcanvas>
                    <motion.div
                        whileHover={{ scale: 1.008 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <AccordionHeader
                            className=' accordionHeader fw-light shadow-sm my-2  '
                            targetId={_id.toString()} >
                            {goalTitle}
                        </AccordionHeader>
                    </motion.div>

                    <AccordionBody accordionId={_id.toString()}>
                        <Row>
                            <Col md={7} className=' text-muted' >
                                <span className='mx-3' > goal description</span>
                                <p className='text-muted p-2'>
                                    {goalDescription}
                                </p>
                            </Col>
                            <Col md={5} className='d-flex justify-content-center align-items-start' >
                                <Button className='mx-2' outline color='success' size="sm"
                                    onClick={toggleCanvas} > new milestone </Button>
                                <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down" >
                                    <DropdownToggle outline size='sm'>
                                        <BsThreeDotsVertical />
                                    </DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem onClick={toggleEditModal}  >
                                            <BsPen className='mx-2 text-warning' /> <span className='text-warning' >edit  goal </span>
                                        </DropdownItem>
                                        <DropdownItem onClick={deleteModal}  >
                                            <BsTrash className='mx-2 text-danger' /> <span className='text-danger' >delete goal </span>
                                        </DropdownItem>

                                    </DropdownMenu>
                                </Dropdown>
                                <Modal isOpen={confirmDelete} toggle={deleteModal} size="lg" >
                                    <ModalHeader toggle={toggle}>
                                        <p className='text-danger' > delete prompt </p>
                                    </ModalHeader>
                                    <ModalBody className='p-5' >
                                        <p className='text-danger fw-light fs-5' >
                                            Are you sure you want to delete <span className='fw-bold'>
                                                {goalTitle}
                                            </span> ?
                                        </p>
                                        <span className='text-warning' > note: this action is irreversible </span>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="warning" outline onClick={deleteModal}>
                                            Cancel
                                        </Button>
                                        <Button color="danger" outline onClick={deleteHandler}>
                                            yes delete
                                        </Button>{' '}
                                    </ModalFooter>
                                </Modal>
                                <Modal isOpen={editModal} toggle={toggleEditModal} size="lg"  >

                                    <ModalHeader toggle={toggleEditModal}>
                                        <p className="fw-light m-0 fs-3">
                                            edit goal
                                        </p>
                                    </ModalHeader>
                                    <ModalBody>

                                        <Row className='App' >
                                            <Col md={12} >
                                                <FormGroup>
                                                    <Label for="goalTitle">  title </Label>
                                                    <Input
                                                        required
                                                        value={editGoal.goalTitle.toString()}
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
                                                        value={editGoal.goalDescription.toString()}
                                                        onChange={inputHndler}
                                                        name="goalDescription"
                                                        id="goalDescription"
                                                        placeholder=" describe your goal in deatil" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button size="sm" color="secondary" outline className='px-4' onClick={() => { toggleEditModal() }}>
                                            Cancel
                                        </Button>
                                        <Button size="sm" color="success" outline className='px-4'
                                            onClick={editHandler}>
                                            update
                                        </Button>{' '}

                                    </ModalFooter>

                                </Modal>
                            </Col>

                        </Row>
                        <Row>
                            {mileStones?.length === 0 ?
                                <div className="m-4 p-4 ">
                                    <p className='text-muted text-center fs-4' > no milestones yet </p>
                                    <p className='text-muted text-center' > start by adding  new milestone </p>
                                </div> : mileStones?.map((mileStone: any) => {
                                    return <Col md={6} className='d-flex justify-content-center align-items-center' >
                                        <div className='milestoneCard p-2 my-2' >
                                            <p className='fw-light fs-4' >{mileStone.mileStoneTitle}
                                            </p>
                                        </div>
                                    </Col>
                                })}

                        </Row>
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
            {/* <Toaster /> */}
        </div>
    )
}
