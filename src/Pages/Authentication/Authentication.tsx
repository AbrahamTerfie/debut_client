
import React, { useState } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, } from 'reactstrap';
import Login from './login';
import SignUp from './SignUp';
import '../../Styles/Auth.scss'
import { ImFacebook, ImGoogle } from 'react-icons/im'

export default function Authentication() {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className='authContainer'>
            <div className='authHeader' >
                debut
            </div>
            <Nav className="tabs"   >
                <NavItem>
                    <NavLink

                        className={activeTab === "1" ? "activeTab" : "notActiveTab"}

                        onClick={() => { toggle('1'); }}>
                        Log-In
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === "2" ? "activeTab" : "notActiveTab"}

                        onClick={() => { toggle('2'); }}
                    >
                        Sign-Up
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="authTabcontent p-5 mt-4" >
                <TabPane tabId="1">
                    <Row sm="12" >
                        <Login />
                    </Row>
                    <Row>
                        <div>
                            <p className='m-4' >
                                <small className="authText">
                                    forgot your password?
                                </small>
                            </p>
                        </div>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row sm="12" >
                        <SignUp />
                    </Row>
                </TabPane>
            </TabContent>

            <div>
                <p>
                    <span className='authText'>
                        or authenticate with
                    </span>
                </p>
            </div>
            <div className='authFooter' >
                <Button color='warning' className='m-4' outline
                    size='lg'  >
                    <ImFacebook />
                </Button>
                <Button color='warning' className='m-4' outline
                    size='lg'  >
                    <ImGoogle

                    />
                </Button>
            </div>

        </div>
    );
}
