import React, { useState } from 'react'
import {
    Navbar, Collapse, DropdownToggle, Nav, NavbarBrand,
    NavbarToggler, DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarText, NavItem, NavLink, Button
} from 'reactstrap'
import { BsPeople } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { MdOutlineForum, MdLogout } from 'react-icons/md'
import { RiChatSmileLine, RiCalendarEventLine } from 'react-icons/ri'
import { GiReceiveMoney, GiTechnoHeart, GiBrain } from 'react-icons/gi'
import { appRoutes } from '../../Routes/routes'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';




export default function NavBarComponent() {
    const { logout } = useAuth0();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const navMargins = { backgroundColor: 'transparent', }
    const navigate = useNavigate()
    return (
        <>
            <Navbar
                className='px-5 mx-md-0  shadow-lg '
                dark
                expand="xl"
                fixed="top"
                full  >
                <NavbarBrand href="/"
                    style={{
                        fontFamily: 'Bungee Shade, cursive',
                        fontSize: '2.5rem',
                    }}
                >
                    debut
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={dropdownOpen} navbar>
                    <Nav className="me-auto dark  m-2" navbar>
                        <UncontrolledDropdown dark inNavbar nav    >
                            <DropdownToggle nav    >

                                <BsPeople size={15} className='mx-3 my-2' />
                                Community
                            </DropdownToggle>
                            <DropdownMenu end dark >
                                <DropdownItem onClick={() => navigate(appRoutes.people)}>
                                    <BsPeople size={15} className='mx-3 my-2' style={navMargins} />
                                    People Directory
                                </DropdownItem>
                                <DropdownItem onClick={() => { navigate(appRoutes.ventures) }}>
                                    <FaRegBuilding size={15} className='mx-3 my-2' style={navMargins} />
                                    Ventures Directory
                                </DropdownItem>
                                <DropdownItem onClick={() => { navigate(appRoutes.forum) }}>
                                    <MdOutlineForum size={15} className='mx-3 my-2' style={navMargins} />
                                    Forum
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem >
                            <NavLink onClick={() => { navigate(appRoutes.debutEvents) }}  >
                                <GiReceiveMoney size={15} className='mx-3 my-2' style={navMargins} />
                                Debut Events
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => { navigate(appRoutes.giveGratitude) }} >
                                <RiChatSmileLine size={15} className='mx-3 my-2' style={navMargins} />
                                Give Gratitude
                            </NavLink>
                        </NavItem>



                        {/* ====================== */}
                        <UncontrolledDropdown dark
                            inNavbar
                            nav >
                            <DropdownToggle nav  >
                                <FaRegBuilding className='mx-3 my-2' size={15} />
                                My Debut
                            </DropdownToggle>
                            <DropdownMenu end dark >
                                <DropdownItem onClick={() => { navigate(appRoutes.myDebutInfo) }}>
                                    <GiBrain size={15} className='mx-3 my-2' style={navMargins} />
                                    Me & My Debut
                                </DropdownItem>
                                <DropdownItem
                                    onClick={() => { navigate(appRoutes.myEvents) }}>

                                    <RiCalendarEventLine size={15} className='mx-3 my-2' style={navMargins} />
                                    MyEvents
                                </DropdownItem>

                                <DropdownItem onClick={() => { logout() }}>
                                    <MdLogout size={15} className='mx-3 my-2' style={navMargins} />
                                    logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        {/* ================ */}

                    </Nav>

                </Collapse>
            </Navbar>
            {/* <Outlet /> */}
        </>

    )
}
