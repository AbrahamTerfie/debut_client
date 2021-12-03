import {
  SalesMasterdata,
  SalesOrder,
  SalesQuotes,
  SalesReports,
  SalesSettings,
} from "./Sales";

import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";
import classnames from "classnames";

const Sales = (props: any) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Row>
        <h1 className="m-4 mb-0">sales</h1>

        <Nav className="tabs">
          <NavItem>
            <NavLink
              className={activeTab === "1" ? "activePage" : "notActivePage"}
              onClick={() => {
                toggle("1");
              }}
            >
              master data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "2" ? "activePage" : "notActivePage"}
              onClick={() => {
                toggle("2");
              }}
            >
              sales order
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "activePage" : "notActivePage"}
              onClick={() => {
                toggle("3");
              }}
            >
              sales quotes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "4" ? "activePage" : "notActivePage"}
              onClick={() => {
                toggle("4");
              }}
            >
              reports
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "5" ? "activePage" : "notActivePage"}
              onClick={() => {
                toggle("5");
              }}
            >
              settings
            </NavLink>
          </NavItem>
        </Nav>
      </Row>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <SalesMasterdata />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <SalesOrder />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <SalesQuotes />
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <SalesReports />
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <SalesSettings />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Sales;
