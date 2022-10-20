import React, { useEffect, useState } from 'react'
import {
    AccordionBody, AccordionHeader, AccordionItem, Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
    Modal, ModalBody, ModalFooter, ModalHeader, Offcanvas, OffcanvasBody, OffcanvasHeader, Row, UncontrolledAccordion,
} from 'reactstrap';
import './GoalsAccordion.css'
import { motion } from "framer-motion";
import NewGoalMilestone from '../NewGoalMilestone/NewGoalMilestone';
import { BsThreeDotsVertical, BsTrash } from 'react-icons/bs';
import { DELETE_COMPANY_GOAL, FETCH_COMPANY_GOALS_WITH_COMPANY_ID } from '../../../GraphQl/Goals/goals';
import { useMutation, useQuery } from '@apollo/client';
import { RootState } from '../../../Store/RootReducer';
import { useSelector } from 'react-redux';
import { notifyError, notifyLoading, notifySuccess } from '../../../Components/Notification/Toast';
// import { Toaster } from 'react-hot-toast';
export default function GoalsAccordion(
    { _id, goalTitle, goalDescription, mileStones, goalStatus }: {
        _id: String, goalTitle: String, goalDescription: String, mileStones: [], goalStatus: Boolean
    }
) {
    const { companyID } = useSelector((store: RootState) => store.identfiers)
    const [deleteCompanyGoal, { data: deleteCompanyGoalData, loading: deleteCompanyGoalLoading, error: deleteCompanyGoalError }] = useMutation(DELETE_COMPANY_GOAL, {
        refetchQueries: [{ query: FETCH_COMPANY_GOALS_WITH_COMPANY_ID, variables: { companyId: companyID } }]
    })
    const [open, setOpen] = useState('');
    const [offCanvas, setOffCanvas] = useState(false);
    const toggleCanvas = () => { setOffCanvas(!offCanvas); }
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const [confirmDelete, setConfirmDelete] = useState(false)
    const deleteModal = () => { setConfirmDelete(!confirmDelete) }
    const deleteHandler = (e: any) => {

        deleteCompanyGoal({
            variables: {
                deleteCompanyGoalId: _id
            }
        })
        deleteModal()
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

    }, [deleteCompanyGoalData, deleteCompanyGoalError, deleteCompanyGoalLoading])


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
                            <NewGoalMilestone />
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
