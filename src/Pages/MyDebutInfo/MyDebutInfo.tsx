import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from 'reactstrap';
import Connections from './Connections';
import ContactInfo from './ContactInfo';

import Experiance from './Experiance';
import PersonalInfo from './PersonalInfo';
import MyEvents from './MyEvents';
import YourComapany from './YourComapany';
import { RootState } from '../../Store/RootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { setMyDebutTab } from '../../Store/UI/sidebarController';
export default function MyDebutInfo() {
    const dispatch = useDispatch();
    const { myDebutTab } = useSelector((store: RootState) => store.uiStore)

    return (
        <div className='my-5  mx-5 px-5  w-100 '>
            <p className='fs-2  fw-lighter mx-5 '>
                your information
            </p>
            <Nav tabs className='tabs shadow-lg py-4'  >
                <NavItem >
                    <NavLink
                        className={myDebutTab === "1" ? "activeTab " : "notActiveTab"}
                        onClick={() => { dispatch(setMyDebutTab('1')); }}>

                        Personal info
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={myDebutTab === "2" ? "activeTab" : "notActiveTab"}
                        onClick={() => { dispatch(setMyDebutTab('2')) }}>
                        Contact info
                    </NavLink>
                </NavItem>

                <NavItem>
                    <NavLink
                        className={myDebutTab === "3" ? "activeTab" : "notActiveTab"}
                        onClick={() => { dispatch(setMyDebutTab('3')); }}>

                        Experience
                    </NavLink>
                </NavItem>


                {/* <NavItem>
                    <NavLink
                        className={myDebutTab === "4" ? "activeTab" : "notActiveTab"}
                        onClick={() => { dispatch(setMyDebutTab('4')); }}>

                        Connectoins
                    </NavLink>
                </NavItem> */}

                <NavItem>
                    <NavLink
                        className={myDebutTab === "4" ? "activeTab" : "notActiveTab"}
                        onClick={() => { dispatch(setMyDebutTab('4')); }}>

                        Your Company
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={myDebutTab === "5" ? "activeTab" : "notActiveTab"}
                        onClick={() => { dispatch(setMyDebutTab('5')); }}>

                        My Events
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={myDebutTab} className="py-5 px-5 w-100 shadow-lg "
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

                {/* <TabPane tabId="4">
                    <Row>
                        <Connections />
                    </Row>
                </TabPane> */}
                <TabPane tabId="4">
                    <Row>
                        <YourComapany />
                    </Row>
                </TabPane>
                <TabPane tabId="5">
                    <Row>
                        <MyEvents />
                    </Row>
                </TabPane>

            </TabContent>
        </div>
    );
}
