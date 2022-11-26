import { motion } from 'framer-motion'
import React from 'react'
import { Row, Col } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import { companyGoals, mileStones } from '../../types/Goals_MileStones'
import classNames from 'classnames'
import moment from 'moment'
import { MdCheck } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes } from '../../Email/EmailTypes'
import Emailcanvas from '../Email/Emailcanvas'
import { IoHandRightOutline } from 'react-icons/io5'

function MileStoneCard({ milestone }: { milestone: mileStones }) {
    const dispatch = useDispatch()
    return (
        <div className={classNames('shadow-sm m-2  d-flex flex-column  justify-content-between  px-4  py-3 rounded rounded-2', {
            'border-success border': milestone.milestoneCompleted
        })}>
            <Emailcanvas />
            <Row className='p-3 pt-0' >
                <Col md={12}>
                    <h6 className='fw-bold' > {milestone.mileStoneTitle}
                        {milestone.milestoneCompleted ?
                            <span className='badge rounded-pill bg-success text-success ms-3 p-2 px-4 bg-opacity-10 ' > completed </span> :
                            <span className='badge rounded-pill bg-warning text-warning ms-3 p-2 px-4 bg-opacity-10 ' > pending  </span>}                        </h6>
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
                                    <p className='  bg-danger bg-opacity-10 text-danger rounded rounded-pill  p-1 px-4  m-2' >{help} </p>
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
                                    <p className='  bg-primary bg-opacity-10 text-primary rounded rounded-pill  p-1 px-4  m-2' >{link} </p>
                                </MotionContainer>
                            )
                        })}
                    </div>
                </Col>

            </Row >
            <Row>
                <MotionContainer>
                    {!milestone.milestoneCompleted ?
                        <p className='text-center bg-warning m-3 text-warning rounded rounded-1 bg-opacity-10  p-2 px-4  m-2'
                            onClick={() => dispatch(toggleEmailPopup(EmailTypes.helpWithGoal))} >

                            let me help
                            <IoHandRightOutline className='mx-3' size={25} />
                        </p> :
                        <p className='text-center bg-success m-3 text-success rounded rounded-1 bg-opacity-10  p-2 px-4  m-2'>
                            this goal is completed
                            <MdCheck size={25} className='mx-3' />
                        </p>
                    }
                </MotionContainer>
            </Row>
        </div >
    )
}



export default function GoalsBody({ goals }: { goals: companyGoals }) {
    return (
        <div className='p-4'>
            <small className=' fw-bold text-muted text-start m-0 p-0' >  descriptoin </small>
            <p className='fw-light t text-start m-0 p-0'> {goals.goalDescription}</p>
            <Row className='p-4'>
                {goals.mileStones?.length > 0 ? goals.mileStones?.map((milestone, index) => {
                    return (
                        <Col md={6} key={index} >
                            <motion.div
                                initial={{ opacity: 0, x: -1000 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 40 }}
                                whileHover={{ scale: 1.01 }}>
                                <MileStoneCard milestone={milestone} />
                            </motion.div>
                        </Col>
                    )
                }) : <p className='text-muted text-center fw-light' > no milestones yet </p>}
            </Row>
        </div>

    )
}
