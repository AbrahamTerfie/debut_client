import React from 'react'
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, Nav, NavbarText } from 'reactstrap'
import '../../Styles/NavBar.css'
import { Outlet, Link } from 'react-router-dom'

export default function NavBar() {
    return (

        <div>
            <Navbar
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
            </Navbar>
            <Outlet />
        </div>
    )
}
