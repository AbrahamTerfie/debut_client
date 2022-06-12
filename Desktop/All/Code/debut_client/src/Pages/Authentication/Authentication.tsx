import React, { useState } from 'react'
import { Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import '../../Styles/Auth.css'
import classnames from 'classnames'
export default function Authentication() {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab: any) => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div className='authContainer' >
            {/* <Row>
                <Col>
                    <p> sign in </p>
                </Col>

                <Col>
                    <p> log in in </p>
                </Col>

            </Row> */}
            <Row>
                <div>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggle('1'); }}
                            >
                                Log In
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggle('2'); }}
                            >
                                Sign Up
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab="1">
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <h4>
                                        Tab 1 Contents
                                    </h4>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6">
                                    this text
                                </Col>
                                <Col sm="6">
                                    another tab text
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </Row>
        </div>
    )
}
