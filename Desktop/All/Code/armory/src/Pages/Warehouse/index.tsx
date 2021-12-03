import {
  WarehouseMasterData,
  WarehouseOut,
  WarehouseIn,
  WarehouseRports,
  WarehouseSettings,
} from "./Warehouse";

import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row } from "reactstrap";

const Warehouse = (props: any) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab: any) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <h1 className="m-4 mb-0">warehouse</h1>

      <Row>
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
              out
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab === "3" ? "activePage" : "notActivePage"}
              onClick={() => {
                toggle("3");
              }}
            >
              in
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
            <WarehouseMasterData />
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <WarehouseOut />
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <WarehouseIn />
          </Row>
        </TabPane>
        <TabPane tabId="4">
          <Row>
            <WarehouseRports />
          </Row>
        </TabPane>
        <TabPane tabId="5">
          <Row>
            <WarehouseSettings />
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Warehouse;
