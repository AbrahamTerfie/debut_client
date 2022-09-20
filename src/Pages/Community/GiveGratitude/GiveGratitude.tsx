
import React, { useState } from 'react'
import {
    Row, Col, Button, TabContent, TabPane, Nav, NavItem, NavLink,
    Offcanvas, OffcanvasBody, OffcanvasHeader
} from 'reactstrap'
import GratitudeCards from '../../../Components/Gratitudecards/GratitudeCards';
import './GiveGratitude.scss'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { IoMdAdd } from 'react-icons/io'
import { MdForwardToInbox, MdMailOutline } from 'react-icons/md'
import NewGratitudeForm from './NewGratitudeForm';
import Loader from '../../../Components/Loader/Loader';
import { RECIVED_GRATITUDE, SENT_GRATITUDE } from '../../../GraphQl/index';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer';
export default function GiveGratitude() {
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const [activeTab, setActiveTab] = useState('1');
    const [canvas, setCanvas] = useState(false);
    const toggle = (tab: any) => { if (activeTab !== tab) setActiveTab(tab) }
    const toggleCanvas = () => setCanvas(!canvas);

    const { data: recGraData, loading: recGraLoading, error: recGraError } = useQuery(RECIVED_GRATITUDE, {
        variables: { userId: userID }
    })
    const { data: sentGraData, loading: sentGraLoading, error: sentGraError } = useQuery(SENT_GRATITUDE, {
        variables: { userId: userID }
    })


    console.log("recGraData", recGraData)
    console.log("sentGraData", sentGraData)

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
            <Col className=' m-4 ' xs='12' sm='12' md='12' lg='2' xl='2' >
                <p className='fw-bolder fs-3 my-4'> Give Gratitude </p>
                <p>
                    Give gratitude to the people who have
                    helped you in your journey. and
                </p>

                <Button outline color='light' className='mt-5 w-100' size='sm'
                    onClick={() => toggleCanvas()} >
                    <IoMdAdd size={20}
                        style={{
                            backgroundColor: 'transparent',
                        }}
                        className='mx-1 ' />
                    <small>
                        New Gratitude Post
                    </small>
                </Button>



            </Col>

            <Col className='mainPageContainer ' xs='12' sm='12' md='12' lg='8' xl='8' >
                <Row className='searchInput mb-1 mt-4' >
                    <p className='fw-bolder fs-3'> Gratitudes </p>

                    <SearchComponent />
                </Row>
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
                            {
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
                            }
                        </TabPane>
                        <TabPane tabId="2" className='overflow-auto h-100'  >

                            {sentGraData?.getSentGratitudes.map((item: any) => {
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
                            })}

                            <h4>
                                you havent sent any gratitude acards yet
                            </h4>

                        </TabPane>
                    </TabContent>
                </Row>
            </Col>
        </Row >


    )
}
