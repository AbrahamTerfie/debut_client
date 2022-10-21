import { motion } from "framer-motion"
import { BsTrash } from "react-icons/bs"
import { Button, Col } from "reactstrap"


export function MileStoneCard(
    {
        mileStoneTitle, mileStoneDescription, milestoneDueDate, milestoneCompleted,
        milestoneCompletedDate, needHelpWith, additionalLinks, mileStoneId,

    }: {
        mileStoneTitle: string, mileStoneDescription: string, milestoneDueDate: string,
        milestoneCompleted: boolean, milestoneCompletedDate: string,
        needHelpWith: string, additionalLinks: string, mileStoneId: string,
    }

) {
    return (
        <Col md={5} className=" shadow-sm p-4 m-3  MyeventCard">
            <div className='d-flex justify-content-between align-items-start my-2'>
                <p className='fw-bolder' >  {mileStoneTitle} </p>
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
            <p className='text-muted fw-light' > this is a milestone description Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati debitis necessitatibus ratione reprehenderit assumenda quo ipsa dolor, blanditiis repellat perspiciatis impedit? Suscipit porro ut, explicabo dolorum cum adipisci qui.</p>

            <p className='m-2'> need help with </p>
            <div className="d-flex justify-content-start flex-wrap ">
                <p className="text-muted mx-2"> some text </p>
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


