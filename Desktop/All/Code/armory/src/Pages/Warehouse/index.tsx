// import React from 'react'
// import Warehouse from './Warehouse'
// export default function index() {
//     return (
//         <div>
//             <Warehouse/>
//         </div>
//     )
// }
import {
  WarehouseMasterData,
  WarehouseOut,
  WarehouseIn,
  WarehouseRports,
  WarehouseSettings,
} from "./Warehouse";

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
            out
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            in
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

export default Finance;
