import React, { useState } from 'react'
import { Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { BsPeople } from 'react-icons/bs'
import { FaCalendar, FaRegBuilding } from 'react-icons/fa'
import { MdOutlineForum, MdLogout, MdOutlineSpaceDashboard } from 'react-icons/md'
import { appRoutes } from '../../Routes/routes'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom'


export default function NavBarComponent() {
    const location = useLocation()
    const { logout } = useAuth0();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const navigate = useNavigate()

    const textColor = { color: "#1985a1", cursor: "pointer" }
    return (
        <Navbar
            className='px-5  mb-5 shadow-lg  bg-light bg-opacity-80 '
            dark expand="xl" fixed="top" fluid    >
            <NavbarBrand href="/"
                style={{
                    fontFamily: 'Bungee Shade, cursive',
                    color: '#1985a1',
                }}>
                <span className=' fs-1 m-0 p-0'> debut </span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={dropdownOpen} navbar>
                <Nav className="me-auto dark  m-2" navbar>

                    <NavItem >
                        <NavLink style={textColor} onClick={() => { navigate(appRoutes.people) }} className={location.pathname === appRoutes.people ? "MyeventCardActive" : "MyeventCard"}  >
                            <BsPeople size={15} className='mx-3 my-1' />
                            People Directory
                        </NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink style={textColor} onClick={() => { navigate(appRoutes.forum) }} className={location.pathname === appRoutes.forum ? "MyeventCardActive mx-3" : "MyeventCard"}  >
                            <MdOutlineForum size={15} className='mx-3 my-1' />
                            Forum
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={textColor} onClick={() => { navigate(appRoutes.ventures) }} className={location.pathname === appRoutes.ventures ? "MyeventCardActive mx-3" : "MyeventCard"}  >
                            <FaRegBuilding size={15} className='mx-3 my-1' />
                            Ventures
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={textColor} onClick={() => { navigate(appRoutes.debutEvent) }} className={location.pathname === appRoutes.debutEvent ? "MyeventCardActive mx-3" : "MyeventCard"}  >
                            <FaCalendar size={15} className='mx-3 my-1' />
                            Events
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={textColor} onClick={() => { navigate(appRoutes.dashboard) }}
                            className={location.pathname === appRoutes.dashboard ? "MyeventCardActive mx-3" : "MyeventCard"}  >
                            <MdOutlineSpaceDashboard size={15} className='mx-2 my-1' />
                            My Debut
                        </NavLink>
                    </NavItem>
                    <NavItem
                        className='justify-content-end align-self-end'
                    >
                        <NavLink style={textColor} onClick={() => { logout() }} className="MyeventCard" >
                            <MdLogout size={15} className='mx-3 my-2' />
                            Logout
                        </NavLink>
                    </NavItem>

                </Nav>

            </Collapse>
        </Navbar >
    )
}
