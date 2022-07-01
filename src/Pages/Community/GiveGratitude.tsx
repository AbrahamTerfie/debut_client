
import React, { useState } from 'react'
import {
    Row, Col, Button,
    TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap'
import GratitudeCards from '../../Components/Gratitudecards/GratitudeCards';
import './GiveGratitude.scss'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
import { IoMdAdd } from 'react-icons/io'
import { MdForwardToInbox, MdMailOutline } from 'react-icons/md'
import PeopleCards from '../../Components/PeopleCards/PeopleCards';
import VentureCards from '../../Components/VentureCards/VentureCards';
export default function GiveGratitude() {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div  >
            <Row>
                <Col className='mt-4 ' xs='12' sm='12' md='12' lg='2' xl='2' >
                    <h4> Give Gratitide  </h4>
                    <p>
                        Give gratitude to the people who have
                        helped you in your journey.
                    </p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }} >
                        <Button outline color='light' className='mt-3 w-100' size='md' >
                            <IoMdAdd size={30}
                                style={{
                                    backgroundColor: 'transparent',
                                }}
                                className='mx-1 ' />
                            New Gratitude Post
                        </Button>
                    </div>

                </Col>

                <Col className=' ' xs='12' sm='12' md='12' lg='8' xl='8' >
                    <Row className='searchInput mb-1 mt-4' >
                        <h5> Gratitudes </h5>
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

                                    className={
                                        activeTab === "2" ? "activeTab" : "notActiveTab"
                                    }
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
<VentureCards />

                                <h4>
                                    you havent sent any gratitude acards yet
                                </h4>

                            </TabPane>
                        </TabContent>
                    </Row>
                </Col>
            </Row>

        </div>
    )
}
