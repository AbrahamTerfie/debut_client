import React, { useState } from 'react'

import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Login from './login';
import SignUp from './SignUp';
import '../../Styles/Auth.scss'
import { ImFacebook, ImGoogle } from 'react-icons/im'
import { Link } from 'react-router-dom';
import { appRoutes } from '../../Routes/routes';
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
            <Nav className="tabs" tabs  >
                <NavItem>
                    <NavLink
                       
                        className={activeTab === "1" ? "activepageTabBlue" : "notactivePageTabBlue"}
                        onClick={() => { toggle('1'); }}>
                        Log-In
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink

                        className={
                            activeTab === "2" ? "activepageTabBlue" : "notactivePageTabBlue"
                        }
                        onClick={() => { toggle('2'); }}
                    >
                        Sign-Up
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="authTabcontent" >
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
