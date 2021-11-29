import {
  Cash,
  FixedAssets,
  Journals,
  LedgerEntries,
  Purchase,
  Sales,
  Settings,
} from "./FinanceParent";

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
            cash
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            fixed assets
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            journals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            ledger entries
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            purchase
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            sales
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "7" })}
            onClick={() => {
              toggle("7");
            }}
          >
            settings
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Cash />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <FixedAssets />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Journals />
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <LedgerEntries />
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <Purchase />
          </Row>
        </TabPane>
        <TabPane tabId="6">
          <Row>
            <Sales />
          </Row>
        </TabPane>
        <TabPane tabId="7">
          <Row>
            <Settings />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Finance;
