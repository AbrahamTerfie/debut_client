
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
import VentureCards from '../../../Components/VentureCards/VentureCards';
import NewGratitudeForm from './NewGratitudeForm';

export default function GiveGratitude() {
    const [activeTab, setActiveTab] = useState('1');
    const [canvas, setCanvas] = useState(false);
    const toggle = (tab: any) => { if (activeTab !== tab) setActiveTab(tab) }
    const toggleCanvas = () => setCanvas(!canvas);

    return (
        <Row className='px-5 d-flex page mt-3'  >
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
                                    style={{
                                        backgroundColor: 'transparent',
                                    }}
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
                                    style={{
                                        backgroundColor: 'transparent',
                                    }}
                                    className='mx-3 ' />
                                Sent
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}  >
                        <TabPane tabId="1">
                            <GratitudeCards />
                        </TabPane>
                        <TabPane tabId="2"  >
                            {/* <VentureCards /> */}
                            <GratitudeCards />
                            <GratitudeCards />

                            <h4>
                                you havent sent any gratitude acards yet
                            </h4>

                        </TabPane>
                    </TabContent>
                </Row>
            </Col>
        </Row>


    )
}
