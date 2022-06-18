import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Nav, NavbarText, Container } from 'reactstrap'
import '../../Styles/NavBar.css'
import { Outlet, Link } from 'react-router-dom'
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
                className={classNames("content", { "is-open": sidebarIsOpen })}
            >
                <Topbar toggleSidebar={toggleSidebar} />

                {/* <Navbar
                color="light"
                expand
                fixed="top"
                full
                light
            >
                <NavbarBrand className='titleText' href="/">
                    Debut
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/components/">
                                Businesses
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                Events
                            </NavLink>
                        </NavItem>

                    </Nav>
                    <NavbarText className='pl-4' >
                        Profile
                    </NavbarText>

                </Collapse>
            </Navbar> */}
                <Outlet />
            </Container>
        </>
    )
}
