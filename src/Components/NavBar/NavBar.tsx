import React, { useState } from 'react'
import {
    Row, Col, Container, Navbar, Collapse, Dropdown, DropdownToggle,
    NavItem, NavLink, Nav, NavbarBrand, NavbarToggler, DropdownMenu,
    DropdownItem, UncontrolledDropdown, NavbarText
} from 'reactstrap'
export default function NavBarComponent() {


    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    return (

        <Navbar
            color="dark"
            dark
            expand="xl"
            fixed="top"
            full


        >
            <NavbarBrand href="/"  >
                debut
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse navbar>
                <Nav className="me-auto" navbar>

                    <UncontrolledDropdown dark inNavbar nav >
                        <DropdownToggle color='dark' nav>
                            Community
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Proples Directory
                            </DropdownItem>
                            <DropdownItem>
                                Ventures Directory
                            </DropdownItem>

                            <DropdownItem>
                                Forum
                            </DropdownItem>
                            <DropdownItem>
                                Give Gratitude
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    {/* ====================== */}
                    <UncontrolledDropdown dark
                        inNavbar
                        nav >
                        <DropdownToggle color='dark' nav >
                            Funding
                        </DropdownToggle>
                        <DropdownMenu right  >
                            <DropdownItem>
                                Connections Directory
                            </DropdownItem>
                            <DropdownItem>
                                Insights
                            </DropdownItem>

                            <DropdownItem>
                                Perks
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    {/* ================ */}



                    <UncontrolledDropdown dark
                        inNavbar
                        nav >
                        <DropdownToggle color='dark' nav>
                            Resources
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                    Simple Text
                </NavbarText>
            </Collapse>
        </Navbar>

    )
}
