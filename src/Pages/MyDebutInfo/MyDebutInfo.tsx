import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import Connections from './Connections';
import ContactInfo from './ContactInfo';

import Experiance from './Experiance';
import PersonalInfo from './PersonalInfo';
import Sharing from './Sharing';
import YourComapany from './YourComapany';


export default function MyDebutInfo() {
    const [activeTab, setActiveTab] = useState('1');
    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className='my-5  mx-5 px-5  w-100 '>

            <p className='fs-2  fw-lighter mx-5 '>
                your information
            </p>
            <Nav tabs className='tabs'  >
                <NavItem >
                    <NavLink
                        className={activeTab === "1" ? "activeTab " : "notActiveTab"}
                        onClick={() => { toggle('1') }}>
                        Personal info
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={
                            activeTab === "2" ? "activeTab" : "notActiveTab"
                        } onClick={() => { toggle('2'); }}>
                        Contact info
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={
                            activeTab === "3" ? "activeTab" : "notActiveTab"
                        } onClick={() => { toggle('3'); }}>
                        Experiance
                    </NavLink>
                </NavItem>


            
                <NavItem>
                    <NavLink
                        className={
                            activeTab === "4" ? "activeTab" : "notActiveTab"
                        } onClick={() => { toggle('4') }}>
                        Connectoins
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={
                            activeTab === "5" ? "activeTab" : "notActiveTab"
                        } onClick={() => { toggle('5') }}>
                        Sharing
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={
                            activeTab === "6" ? "activeTab" : "notActiveTab"
                        } onClick={() => { toggle('6') }}>
                        Your Company
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="my-5 w-100" 
               scrollable={true}

            >
                <TabPane tabId="1">
                    <Row>

                        <PersonalInfo />

                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <ContactInfo />
                    </Row>
                </TabPane>
                <TabPane tabId="3">
                    <Row>
                        <Experiance />
                    </Row>
                </TabPane>

                <TabPane tabId="4">
                    <Row>
                        <Connections />
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                    <Row>
                        <Sharing />
                    </Row>
                </TabPane>
                <TabPane tabId="6">
                    <Row>
                        <YourComapany />
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}
