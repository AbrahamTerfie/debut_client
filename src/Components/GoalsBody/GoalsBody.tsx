import { motion } from 'framer-motion'
import React from 'react'
import { Row, Col } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import { companyGoals, mileStones } from '../../types/Goals_MileStones'
import classNames from 'classnames'
import moment from 'moment'
import { MdCheck } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes } from '../../Email/EmailTypes'
import Emailcanvas from '../Email/Emailcanvas'
import { IoHandRightOutline } from 'react-icons/io5'
import { RootState } from '../../Store/RootReducer'

function MileStoneCard({ milestone, ownerEmail }: { milestone: mileStones, ownerEmail: string }) {
    const dispatch = useDispatch()
    const { userEmail } = useSelector((store: RootState) => store.identfiers)


    const EmailHandler = () => {
        dispatch(toggleEmailPopup({
            emailData: {
                emailType: EmailTypes.helpWithGoal,
                name: milestone.mileStoneTitle,
                userEmail: userEmail,
                emailTo: ownerEmail,
                userBioGraphy: "this is plaveholder biography  ",
            }
        }))
    }


    return (
        <div className={classNames('shadow-sm m-2  d-flex flex-column  justify-content-between  p-2 rounded rounded-2 border border-muted', {
            'border-success border': milestone.milestoneCompleted
        })}>
            <Emailcanvas />
            <Row className='p-3' >
                <Col md={12}>
                    <h6 className={
                        classNames('fw-bold   ', {
                            'text-success': milestone.milestoneCompleted,
                            'text-warning': !milestone.milestoneCompleted
                        })
                    } > {milestone.mileStoneTitle}
                        {milestone.milestoneCompleted ?
                            <span className='badge rounded-pill text-success-emphasis bg-success-subtle border border-success-subtle ms-3 p-2 px-4 ' > completed </span> :
                            <span className='badge rounded-pill text-warning-emphasis bg-warning-subtle border border-warning-subtle ms-3 p-2 px-4  ' > pending  </span>}                        </h6>
                    <p className='fw-light' > {milestone.mileStoneDescription} </p>
                </Col>
                <Col md={6}>
                    <small className='text-muted  text-small fw-light' >due date</small>
                    <p className='fw-light'> {moment(milestone.milestoneDueDate).format('MMMM Do YYYY')}</p>
                </Col>
                <Col md={12}  >
                    <small className='text-muted  text-small fw-light' >need help with </small>
                    <div className='d-flex flex-wrap my-2' >
                        {milestone.needHelpWith?.map((help: string, index: number) => {
                            return (
                                <MotionContainer key={index}>
                                    <p className='  text-danger-emphasis bg-danger-emphasis border border-danger-subtle rounded rounded-pill  p-1 px-4  m-1' >{help} </p>
                                </MotionContainer>
                            )
                        })}
                    </div>

                </Col>
                <Col md={12}>
                    <small className='text-muted  text-small fw-light' >links  </small>
                    <div className='d-flex flex-wrap my-2' >
                        {milestone.additionalLinks?.map((link: string, index: number) => {
                            return (
                                <MotionContainer key={index} >
                                    <p className='  text-primary-emphasis bg-primary-emphasis border border-primary-subtle rounded rounded-pill  p-1 px-4  m-2' >{link} </p>
                                </MotionContainer>
                            )
                        })}
                    </div>
                </Col>

            </Row >
            <Row>
                <MotionContainer>
                    {!milestone.milestoneCompleted ?
                        <p className='text-center bg-primary-subtle m-3 text-primary-emphasis rounded rounded-1 bg-opacity-10  p-2 px-4  m-2'
                            onClick={() => EmailHandler()} >

                            <IoHandRightOutline className='me-3' size={20} />
                            let me help
                        </p> :
                        <p className='text-center bg-success-subtle m-3 text-success-emphasis rounded rounded-1 bg-opacity-10  p-2 px-4  m-2'
                        >
                            <MdCheck size={20} className='me-3' />
                            this goal is completed
                        </p>
                    }
                </MotionContainer>
            </Row>
        </div >
    )
}



export default function GoalsBody({ goals, ownerEmail }: { goals: companyGoals, ownerEmail: string }) {
    return (
        <div className='p-0'>
            <small className=' fw-bold text-muted text-start m-0 p-0' >  descriptoin </small>
            <p className='fw-light t text-start mb-4 p-0'> {goals.goalDescription}</p>
            <Row className=''>
                {goals.mileStones?.length > 0 ? goals.mileStones?.map((milestone, index) => {
                    return (
                        <Col
                            sm={12} md={6} lg={6} xl={4}

                            key={index} >
                            <motion.div
                                initial={{ opacity: 0, x: -1000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 40 }}
                                whileHover={{ scale: 1.01 }}>
                                <MileStoneCard milestone={milestone}
                                    ownerEmail={ownerEmail} />

                            </motion.div>
                        </Col>
                    )
                }) : <p className='text-muted text-center fw-light' > no milestones yet </p>}
            </Row>
        </div>

    )
}
