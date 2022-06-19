import React, { useState } from 'react'
import { Container } from 'reactstrap'
import '../../Styles/NavBar.css'
import { Outlet } from 'react-router-dom'
import Topbar from '../MyDebutTopBar/TopBar'
import SideBar from '../SIdeBar/SideBar'
import classNames from "classnames";

export default function NavBar() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return (

        <>
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <Container
                fluid
                className={classNames("content", { "is-open": sidebarIsOpen })}>
                <Topbar toggleSidebar={toggleSidebar} />
                {/* <Outlet /> */}
            </Container>
        </>
    )
}
