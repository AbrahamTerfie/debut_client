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
interface AccordionData {
    id: number;
    accordionTitle: string;
    goalDescription: string;
    accordionBody: JSX.Element[];
}
export default function GoalsAccordion(
    props: { accordionData: AccordionData[] }) {

    const [open, setOpen] = useState('');
    const [offCanvas, setOffCanvas] = useState(false);
    const toggleCanvas = () => { setOffCanvas(!offCanvas); }
    return (
        <div>
            <UncontrolledAccordion
                open={open}
                defaultOpen={['1']}
                flush
                stayOpen>
                {props.accordionData.map((item) => {
                    return (
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
                                <OffcanvasBody>
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
                                    targetId={item.id.toString()} >
                                    {item.accordionTitle}
                                </AccordionHeader>
                            </motion.div>

                            <AccordionBody accordionId={item.id.toString()}>
                                <Row>
                                    <Col md={7} className=' text-muted' >
                                        <span className='mx-3' > goal description</span>
                                        <p className='text-muted p-2'>
                                            {item.goalDescription}
                                        </p>
                                    </Col>
                                    <Col md={5} className='d-flex justify-content-center align-items-center' >
                                        <Button className='mx-2' outline color='success'
                                            onClick={toggleCanvas} > new milestone </Button>
                                    </Col>
                                </Row>

                                <Row>{item.accordionBody.map((item) => {
                                    return item
                                })}
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    )
                })}
            </UncontrolledAccordion>
        </div>
    )
}
