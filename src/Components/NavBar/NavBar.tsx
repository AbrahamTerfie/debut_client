import React, { useState } from 'react'
import {
    Navbar, Collapse, DropdownToggle, Nav, NavbarBrand,
    NavbarToggler, DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarText, NavItem, NavLink, Button
} from 'reactstrap'
import { BsPeople } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { MdOutlineForum, MdLogout, MdOutlineSpaceDashboard } from 'react-icons/md'
import { RiChatSmileLine, RiCalendarEventLine } from 'react-icons/ri'
import { GiReceiveMoney, GiTechnoHeart, GiBrain } from 'react-icons/gi'
import { appRoutes } from '../../Routes/routes'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';




export default function NavBarComponent() {
    const { logout } = useAuth0();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    const textColor = {
        color: "#1985a1", cursor: "pointer",

    }
    const navigate = useNavigate()
    return (
        <>
            <Navbar
                className='px-5 mx-md-0  shadow  bg-light'
                dark
                expand="xl"
                fixed="top"
                full  >
                <NavbarBrand href="/"
                    style={{
                        fontFamily: 'Bungee Shade, cursive',
                        fontSize: '2.5rem',
                        color: '#1985a1',
                    }}
                >
                    debut
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={dropdownOpen} navbar>
                    <Nav className="me-auto dark  m-2" navbar>
                        <UncontrolledDropdown inNavbar nav    >
                            <DropdownToggle nav style={textColor} className="MyeventCard">

                                <BsPeople size={15} className='mx-2 my-1' />
                                Community
                            </DropdownToggle>
                            <DropdownMenu    >
                                <DropdownItem onClick={() => navigate(appRoutes.people)} className="MyeventCard">
                                    <BsPeople size={15} className='mx-3 my-1'  />
                                    People Directory
                                </DropdownItem>
                                <DropdownItem onClick={() => { navigate(appRoutes.ventures) }} className="MyeventCard" >
                                    <FaRegBuilding size={15} className='mx-3 my-1'  />
                                    Ventures Directory
                                </DropdownItem>
                                <DropdownItem onClick={() => { navigate(appRoutes.forum) }} className="MyeventCard">
                                    <MdOutlineForum size={15} className='mx-3 my-1'  />
                                    Forum
                                </DropdownItem>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem >
                            <NavLink style={textColor} onClick={() => { navigate(appRoutes.debutEvents) }} className="MyeventCard"  >
                                <GiReceiveMoney size={15} className='mx-2 my-1'  />
                                Debut Events
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={textColor} onClick={() => { navigate(appRoutes.giveGratitude) }} className="MyeventCard">
                                <RiChatSmileLine size={15} className='mx-2 my-1'  />
                                Give Gratitude
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={textColor} onClick={() => { navigate(appRoutes.dashboard) }} className="MyeventCard" >
                                <MdOutlineSpaceDashboard size={15} className='mx-2 my-1'  />
                                Dashboard
                            </NavLink>
                        </NavItem>



                        {/* ====================== */}
                        <UncontrolledDropdown dark
                            inNavbar
                            nav >
                            <DropdownToggle nav style={textColor} className="MyeventCard">
                                <FaRegBuilding className='mx-2 my-1' size={15} />
                                My Debut
                            </DropdownToggle>
                            <DropdownMenu   >
                                <DropdownItem onClick={() => { navigate(appRoutes.myDebutInfo) }} className="MyeventCard">
                                    <GiBrain size={15} className='mx-3 my-1'  />
                                    Me & My Debut
                                </DropdownItem>
                                <DropdownItem onClick={() => { navigate(appRoutes.myEvents) }} className="MyeventCard">
                                    <RiCalendarEventLine size={15} className='mx-3 my-1'  />
                                    MyEvents
                                </DropdownItem>

                                <DropdownItem onClick={() => { logout() }} className="MyeventCard">
                                    <MdLogout size={15} className='mx-3 my-2'  />
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
