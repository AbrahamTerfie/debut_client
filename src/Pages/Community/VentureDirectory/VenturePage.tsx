import React, { useState } from 'react'
import {
    Row, Col, Button, TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap'
import { useParams } from 'react-router-dom'
import './VenturePage.css'
import { MdOutlineLocationOn, } from 'react-icons/md'
import DebutEventCards from '../../../Components/DebutEventCards/DebutEventCards'
import { ImStack } from 'react-icons/im'
import { FaIndustry, FaGlobe } from 'react-icons/fa'
import { RiCalendarEventLine } from 'react-icons/ri'
import RegistryCards from '../../../Components/RegistryCards/RegistryCards'
import { AboutTab, CommunityTab } from '../../../Components/VenturePageTabs'

export default function VenturePage() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const { id } = useParams()
    return (

        <Row className='ventureProfileHeader  '>
            <div >
                <img
                    className='img-fluid backGroundImage'
                    src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    alt='user profile photo' />

                <img
                    className='img-fluid vebtureProfileImage'
                    src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    alt='user profile photo' />
            </div>
            <Row className='mt-5 px-5'  >
                <Col sm="12" md="6" lg="8" xl="8" className='text-left'>

                    <p className='fs-2 fw-light' >  {id} </p>

                    <p className='fs-4 fw-normal text-muted' >  company description and details here </p>                        <br />
                    <div className='d-flex flex-row' >
                        <MdOutlineLocationOn size={20} />
                        <p className='fs-6 mr-3 ml-3 fw-light' > location</p>
                        <ImStack className='mx-3' size={20} />
                        <p className='fs-6  fw-light' > type</p>
                        <FaIndustry className='mx-3' size={20} />
                        <p className='fs-6  fw-light' > industry</p>
                        <FaGlobe className='mx-3' size={20} />
                        <p className='fs-6 fw-light' > website</p>

                    </div>
                </Col>

                <Col sm="12" md="12" lg="4" xl="4" className='text-left'>

                    <Button color='light' outline className='mt-5 p-2 d-flex' >
                        <RiCalendarEventLine size={20} className="mx-3 " />
                        <  > Request Introduction  </>
                    </Button>
                </Col>
            </Row>

            <Row className='px-5'>
                <Nav className="tabs" tabs style={{ position: "sticky" }}  >
                    <NavItem>
                        <NavLink
                            className={activeTab === "1" ? "activeTab" : "notActiveTab"}
                            onClick={() => { toggle('1'); }}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={
                                activeTab === "2" ? "activeTab" : "notActiveTab"
                            } onClick={() => { toggle('2'); }}>

                            Events
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={
                                activeTab === "3" ? "activeTab" : "notActiveTab"
                            } onClick={() => { toggle('3'); }}>

                            Registry
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={
                                activeTab === "4" ? "activeTab" : "notActiveTab"
                            } onClick={() => { toggle('4'); }}>

                            Community
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}  >
                    <TabPane tabId="1">
                        <AboutTab />
                    </TabPane>
                    <TabPane tabId="2" className='p-3' >
                        <DebutEventCards />
                        <DebutEventCards />
                        <DebutEventCards />
                        <DebutEventCards />
                        <DebutEventCards />
                    </TabPane>
                    <TabPane tabId="3"  >
                        <RegistryCards />
                    </TabPane>
                    <TabPane tabId="4"  >
                        <CommunityTab />
                    </TabPane>
                </TabContent>
            </Row>

        </Row>


    )
}
