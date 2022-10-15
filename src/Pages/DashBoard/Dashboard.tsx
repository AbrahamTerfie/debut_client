import React, { useState } from 'react'
import SideBar from './DashBoardSidebar/SideBar'
import classNames from "classnames";
import Topbar from './DashBoardSidebar/TopBar';
import { Container, Row } from "reactstrap";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <div className="d-flex   ">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <div
                className={classNames("content  Page overflow-scroll ", { "is-open overflow-scroll  ": sidebarIsOpen })}
                style={sidebarIsOpen ? { width: window.innerWidth * 0.8 } : { width: window.innerWidth }}



            >
                <Topbar toggleSidebar={toggleSidebar} />
                <Outlet />
            </div>
        </div>


    )
}
