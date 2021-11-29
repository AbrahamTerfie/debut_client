import {
  POrder,
  PRequisition,
  PSettings,
  PurchaseMasterData,
  Reports,
} from "./Purchase";

import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
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
            master data
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            purchase order
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            purchase requisition
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
            <PurchaseMasterData />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <POrder />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <PRequisition />
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <Reports />
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <PSettings />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Finance;
