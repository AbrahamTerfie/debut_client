import React, { useState } from 'react'
import SideBar from './DashBoardSidebar/SideBar'
import classNames from "classnames";
import Topbar from './DashBoardSidebar/TopBar';
import { Container } from "reactstrap";
import {  Outlet } from "react-router-dom";

export default function Dashboard() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <div className="App ">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <div
                className={classNames("content overflow-auto ", { "is-open": sidebarIsOpen })}>
                <Topbar toggleSidebar={toggleSidebar} />
                <Outlet />
            </div>
        </div>


    )
}
