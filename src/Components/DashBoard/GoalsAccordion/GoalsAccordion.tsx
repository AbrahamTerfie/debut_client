import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Button,
    Col,
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Row,
    UncontrolledAccordion,
} from 'reactstrap';
import './GoalsAccordion.css'
import { motion } from "framer-motion";
import NewGoalMilestone from '../NewGoalMilestone/NewGoalMilestone';

export default function GoalsAccordion(
    { _id, goalTitle, goalDescription, mileStones, goalStatus }: {
        _id: String, goalTitle: String, goalDescription: String, mileStones: [], goalStatus: Boolean
    }
) {
    console.log("goalStatus", goalStatus)

    const [open, setOpen] = useState('');
    const [offCanvas, setOffCanvas] = useState(false);
    const toggleCanvas = () => { setOffCanvas(!offCanvas); }
    return (
        <div>
            <UncontrolledAccordion
                open={open}

                flush
                stayOpen>
                {/* {props.accordionData.map((item) => { */}

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
                            <Col md={5} className='d-flex justify-content-center align-items-center' >
                                <Button className='mx-2' outline color='success'
                                    onClick={toggleCanvas} > new milestone </Button>
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
        </div>
    )
}
