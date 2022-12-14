


import React, { useState } from 'react'
import {
    Row, TabContent, TabPane, Nav, NavItem, NavLink,
    Offcanvas, OffcanvasBody, OffcanvasHeader
} from 'reactstrap'
import GratitudeCards from '../../../Components/Gratitudecards/GratitudeCards';

import { MdForwardToInbox, MdMailOutline } from 'react-icons/md'
import NewGratitudeForm from '../../../Components/NewGratitudeForm/NewGratitudeForm';
import Loader from '../../../Components/Loader/Loader';
import { RECIVED_GRATITUDE, SENT_GRATITUDE } from '../../../GraphQl/index';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
import { motion } from 'framer-motion';
import { FaPlus } from 'react-icons/fa';
export default function GratitudePage() {
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const [activeTab, setActiveTab] = useState('1');
    const [canvas, setCanvas] = useState(false);
    const toggle = (tab: any) => { if (activeTab !== tab) setActiveTab(tab) }
    const toggleCanvas = () => setCanvas(!canvas);

    const { data: recGraData, loading: recGraLoading, } = useQuery(RECIVED_GRATITUDE, {
        variables: { userId: userID }
    })
    const { data: sentGraData, loading: sentGraLoading } = useQuery(SENT_GRATITUDE, {
        variables: { userId: userID }
    })


    // console.log("recGraData", recGraData)
    // console.log("sentGraData", sentGraData)

    if (recGraLoading || sentGraLoading) { return <Loader /> }
    return (
        <Row className='px-5 d-flex page mt-3' >
            <Offcanvas
                style={{ width: '50%' }}
                direction="end"
                isOpen={canvas}
                toggle={toggleCanvas}
                scrollable={true}>
                <OffcanvasHeader toggle={toggleCanvas}>
                    <p className='fs-3 mx-3 px-3 fw-light' >Send your Gratitude   </p>
                </OffcanvasHeader>
                <OffcanvasBody >
                    <NewGratitudeForm />
                </OffcanvasBody>
            </Offcanvas>

            <div
                className='d-flex justify-content-between align-items-center w-100' >

                <div className='mx-5'>
                    <p className=' fs-1 fw-light mt-4 mb-1 mx-3' > Gratitudes </p>
                    <p className='text-muted fs-6 mt-0 mb-2 mx-3'>
                        show your gratitude to your colleagues and friends
                    </p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className='btn   m-4 px-5 py-2  bg-success text-white bg-opacity-75   '
                    color='light'
                    onClick={() => toggleCanvas()}>
                    <FaPlus className='mx-3' size={20} style={{ backgroundColor: 'transparent', }} />
                    send gratitude
                </motion.button>

            </div>



            <Row className=''>
                <Nav className="tabs" tabs  >
                    <NavItem>
                        <NavLink

                            className={activeTab === "1" ? "activeTab" : "notActiveTab"}
                            onClick={() => { toggle('1'); }}>
                            <MdMailOutline size={20}
                                style={{ backgroundColor: 'transparent' }}
                                className='mx-3 ' />
                            Inbox
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={activeTab === "2" ? "activeTab" : "notActiveTab"}
                            onClick={() => { toggle('2'); }}
                        >
                            <MdForwardToInbox size={20}
                                style={{ backgroundColor: 'transparent' }}
                                className='mx-3 ' />
                            Sent
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab} className="overflow-auto" >
                    <TabPane tabId="1" className='overflow-auto h-100'>
                        {recGraData?.getReceivedGratitudes.length > 0 ?
                            recGraData?.getReceivedGratitudes.map((item: any) => {
                                return <GratitudeCards
                                    key={item._id}
                                    createdBy={item.createdBy}
                                    createdAt={item.createdAt}
                                    message={item.message}
                                    sentTo={item.sentTo}
                                    subject={item.subject}
                                />
                            })
                            :
                            <p className='text-muted text-center ' >
                                nothing to see here
                            </p>
                        }
                    </TabPane>
                    <TabPane tabId="2" className='overflow-auto h-100'  >

                        {sentGraData?.getSentGratitudes.length > 0 ?
                            sentGraData?.getSentGratitudes.map((item: any) => {
                                return (
                                    <GratitudeCards
                                        key={item._id}
                                        createdBy={item.createdBy}
                                        createdAt={item.createdAt}
                                        message={item.message}
                                        sentTo={item.sentTo}
                                        subject={item.subject}
                                    />
                                )
                            })
                            :
                            <p className='text-muted text-center ' >
                                nothing to see here
                            </p>
                        }

                    </TabPane>
                </TabContent>
            </Row>

        </Row >


    )
}