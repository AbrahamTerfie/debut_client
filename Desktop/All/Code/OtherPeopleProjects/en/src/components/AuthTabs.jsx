

import React, { useState } from 'react';
import {
    TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col
    ,
    FormGroup, Label, Input
} from 'reactstrap';
import classnames from 'classnames';

const AuthTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        signup
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        admin
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12" className=" p-4" >
                            <FormGroup>
                                <Label for="exampleEmail" hidden>Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            {' '}
                            <FormGroup className="mt-4" >
                                <Label for="examplePassword" hidden>Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Col sm="12" className=" p-4" >
                        <FormGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup className="mt-4" >
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                        <FormGroup className="mt-4" >
                            <Label for="examplePassword" hidden>confirm password </Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                    </Col>
                </TabPane>
                <TabPane tabId="3">
                    <Col sm="12" className=" p-4" >
                        <FormGroup>
                            <Label for="exampleEmail" hidden>Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>
                        {' '}
                        <FormGroup className="mt-4" >
                            <Label for="examplePassword" hidden>Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                        </FormGroup>
                    </Col>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default AuthTabs;