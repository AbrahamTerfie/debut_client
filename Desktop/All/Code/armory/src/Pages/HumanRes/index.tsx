import {
  Attendance,
  Employee,
  HRReports,
  HRSettings,
  Payroll,
} from "./Humanres";

import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";

const Finance = (props: any) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            attendance
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            employee
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            payroll
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            reports
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Attendance />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Employee />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Payroll />
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <HRReports />
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <HRSettings />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Finance;
