import { motion } from "framer-motion"
import { BsThreeDotsVertical, BsTrash, BsPen } from 'react-icons/bs';
import { DELETE_COMPANY_MILESTONE, FETCH_COMPANY_GOALS_WITH_COMPANY_ID } from '../../../GraphQl/index'
import { Button, Col } from "reactstrap"
import moment from "moment"
import { useMutation, useQuery } from "@apollo/client"
import { notifyError, notifyLoading, notifySuccess } from "../../../Components/Notification/Toast"
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'

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

    const deleteHandler = (e: any) => {
        e.preventDefault()
        deleteCompanyMilestone({
            variables: {
                deleteCompanyMilestoneId: _id
            }
        })
    }


    return (
        <Col md={5} className=" shadow-sm p-4 m-3  MyeventCard" >
            <div className='d-flex justify-content-between align-items-start my-2'>
                <p className='fw-bolder m-0' >  {mileStoneTitle}  </p>
                <motion.div
                    onClick={(e) => deleteHandler(e)}
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
            <div className="d-flex justify-content-between align-items-center" >
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault"
                        defaultChecked={milestoneCompleted}
                    >
                        mark as achived
                    </label>
                </div>
                <Button color="success" size="sm" outline className='px-4' > save </Button>
            </div >
        </Col >
    )
}


