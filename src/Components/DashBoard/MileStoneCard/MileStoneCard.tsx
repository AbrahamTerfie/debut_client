import { motion } from "framer-motion"
import { BsTrash } from "react-icons/bs"
import { Button, Col } from "reactstrap"
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

export default function MileStoneCard(
    {
        mileStoneTitle, mileStoneDescription, milestoneDueDate, milestoneCompleted,
        milestoneCompletedDate, needHelpWith, additionalLinks, underGoal,

    }: mileSoneform) {
    return (
        <Col md={5} className=" shadow-sm p-4 m-3  MyeventCard">
            <div className='d-flex justify-content-between align-items-start my-2'>
                <p className='fw-bolder' >  {mileStoneTitle}  </p>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                    <BsTrash
                        className='text-danger  '
                        color='red'
                        size={20}
                    />
                </motion.div>

            </div>
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
            <div className="d-flex justify-content-between align-items-center">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        mark as achived
                    </label>
                </div>
                <Button color="success" size="sm" outline className='px-4' > save </Button>
            </div>
        </Col>
    )
}


