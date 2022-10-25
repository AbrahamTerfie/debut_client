import { motion } from "framer-motion"
import { BsThreeDotsVertical, BsTrash, BsPen } from 'react-icons/bs';
import { DELETE_COMPANY_MILESTONE, FETCH_COMPANY_GOALS_WITH_COMPANY_ID, TOGGLE_MILESTONE_STATUS } from '../../../GraphQl/index'
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import moment from "moment"
import { useMutation, useQuery } from "@apollo/client"
import { notifyError, notifyLoading, notifySuccess, notifyWarning } from "../../../Components/Notification/Toast"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import { useState } from "react";

interface mileSoneform {
    _id: string
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

export default function MileStoneCard(
    {
        mileStoneTitle, mileStoneDescription, milestoneDueDate, milestoneCompleted,
        milestoneCompletedDate, needHelpWith, additionalLinks, underGoal, _id

    }: mileSoneform) {
    const { companyID } = useSelector((store: RootState) => store.identfiers)

    const [deleteCompanyMilestone, { data: deleteCompanyMilestoneData, loading: deleteCompanyMilestoneLoading, error: deleteCompanyMilestoneError }] = useMutation(DELETE_COMPANY_MILESTONE, {
        refetchQueries: [{ query: FETCH_COMPANY_GOALS_WITH_COMPANY_ID, variables: { companyId: companyID } }],
        onCompleted: (deleteCompanyMilestoneData) => {
            console.log(deleteCompanyMilestoneData)
            deleteCompanyMilestoneData?.deleteCompanyMilestone ? notifySuccess('Milestone deleted successfully') : notifyError('Something went wrong')
        },
        onError: (deleteCompanyMilestoneError) => {
            console.log(deleteCompanyMilestoneError)
            notifyError(deleteCompanyMilestoneError.toString())
        }

    })

    const [toggleMilestoneStatus, { data: toggleMilestoneStatusData, loading: toggleMilestoneStatusLoading, error: toggleMilestoneStatusError }] = useMutation(TOGGLE_MILESTONE_STATUS, {
        refetchQueries: [{ query: FETCH_COMPANY_GOALS_WITH_COMPANY_ID, variables: { companyId: companyID } }],
        onCompleted: (toggleMilestoneStatusData) => {
            console.log(toggleMilestoneStatusData)
            toggleMilestoneStatusData && !milestoneCompleted ?
                notifySuccess('Milestone status changed to completed ') :
                notifyWarning(' status changed to pending ')
        },
        onError: (toggleMilestoneStatusError) => {
            console.log(toggleMilestoneStatusError)
            notifyError(toggleMilestoneStatusError.toString())
        }
    })


    const markAsComplete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        toggleMilestoneStatus({
            variables: {
                toggleMilestoneCompletedId: _id
            }
        })
    }

    const deleteHandler = (e: any) => {
        e.preventDefault()
        deleteCompanyMilestone({
            variables: {
                deleteCompanyMilestoneId: _id
            }
        })
    }

    const [deleteModal, setDeleteModal] = useState(false)
    const toggleDeleteModal = () => setDeleteModal(!deleteModal)


    return (
        <Col md={5} className=" shadow-sm p-4 m-3  MyeventCard" >
            <div className='d-flex justify-content-between align-items-start my-2'>
                <Modal isOpen={deleteModal} toggle={toggleDeleteModal} size="lg" >
                    <ModalHeader toggle={toggleDeleteModal}>
                        <p className='text-danger' > delete prompt </p>
                    </ModalHeader>
                    <ModalBody className='p-5' >
                        <p className='text-danger fw-light fs-5' >
                            Are you sure you want to delete <span className='fw-bold'>
                                {mileStoneTitle}
                            </span> ?
                        </p>
                        <span className='text-warning' > note: this action is irreversible </span>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning" outline onClick={toggleDeleteModal}>
                            Cancel
                        </Button>
                        <Button color="danger" outline
                            onClick={(e) => deleteHandler(e)}

                        >
                            yes delete
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
                <p className='fw-bolder m-0' >  {mileStoneTitle}


                    {milestoneCompleted ? <span className="mx-2 bg-success rounded-pill px-2 py-1 bg-opacity-10 text-success" > completed </span> :
                        <span className="mx-2 bg-warning rounded-pill px-2 py-1 bg-opacity-10 text-warning" > pending </span>}

                </p>
                <motion.div
                    onClick={toggleDeleteModal}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                    <BsTrash
                        className='text-danger  '
                        color='red'
                        size={20}
                    />
                </motion.div>

            </div>
            <p className="  text-muted" > due:  {moment(milestoneDueDate).format('MM DD YYYY')} </p>


            <p className='text-muted fw-light' >
                {mileStoneDescription}
            </p>

            <p className='m-2'> need help with </p>
            <div className='d-flex  align-items-center flex-wrap'>
                {needHelpWith.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ cursor: 'default' }}
                            className='border border-light rounded-pill bg-dark bg-opacity-10 p-1  px-4  m-1 me-2'>
                            <span> {item} </span>
                        </motion.div>
                    )
                })}
            </div>


            <p className='m-2'> links </p>
            <div className='d-flex  align-items-center flex-wrap'>
                {additionalLinks.map((item, index) => {
                    return (
                        <motion.a
                            href={window.location.origin + item}
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}
                            style={{ cursor: 'default' }}
                            className='border border-info rounded-pill bg-dark bg-opacity-10 p-1  px-4  m-1 me-2'>
                            <span> {item} </span>
                        </motion.a>
                    )
                })}
            </div>


            {/* checkbox and a button to mark item completed  */}
            <div className="d-flex justify-content-between align-items-center my-3" >
                <Button color="success" size="sm" outline className='px-4'
                    onClick={(e) => markAsComplete(e)}>

                    {milestoneCompleted ? 'mark as pending' : 'mark as completed'}

                </Button>
            </div >
        </Col >
    )
}


