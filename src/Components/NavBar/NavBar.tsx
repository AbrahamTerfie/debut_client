import React, { useState } from 'react'
import { Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { BsPeople } from 'react-icons/bs'
import { FaCalendar, FaRegBuilding } from 'react-icons/fa'
import { MdOutlineForum, MdLogout, MdOutlineSpaceDashboard } from 'react-icons/md'
import { appRoutes } from '../../Routes/routes'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

// import { ThemeToggler } from '../../Styles/darkModeToggler'

export default function NavBarComponent() {
    const location = useLocation()
    const { logout } = useAuth0();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const navigate = useNavigate()

    const textColor = { color: "#1985a1", cursor: "pointer" }
    return (
        <Navbar
            className='px-5  mb-5 shadow-sm   '
            expand="xl" fixed="top" fluid="true"    >
            <NavbarBrand onClick={() => { navigate(appRoutes.forum) }}
                style={{
                    fontFamily: 'Bungee Shade, cursive',
                    color: '#1985a1',
                }}>
                <span className=' fs-1 m-0 p-0'> debut </span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={dropdownOpen} navbar>
                <Nav className=" d-flex justify-content-between" navbar>
                    <div className='d-flex   '>
                        <NavItem >
                            <NavLink style={textColor} onClick={() => { navigate(appRoutes.people) }} className={classNames(" mx-1 px-2", location.pathname === appRoutes.people ? "MyeventCardActive" : "MyeventCard")}  >
                                <BsPeople size={15} className='mx-3 my-1' />
                                People Directory
                            </NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink style={textColor} onClick={() => { navigate(appRoutes.forum) }} className={classNames(" mx-1 px-2", location.pathname === appRoutes.forum ? "MyeventCardActive" : "MyeventCard")}  >

                                <MdOutlineForum size={15} className='mx-3 my-1' />
                                Forum
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={textColor} onClick={() => { navigate(appRoutes.ventures) }} className={classNames(" mx-1 px-2", location.pathname === appRoutes.ventures ? "MyeventCardActive" : "MyeventCard")}  >
                                <FaRegBuilding size={15} className='mx-3 my-1' />
                                Ventures
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={textColor} onClick={() => { navigate(appRoutes.debutEvent) }} className={classNames(" mx-1 px-2", location.pathname === appRoutes.debutEvent ? "MyeventCardActive" : "MyeventCard")}  >
                                <FaCalendar size={15} className='mx-3 my-1' />
                                Events
                            </NavLink>
                        </NavItem>

                    </div>

                    <NavItem>
                        <NavLink style={textColor} onClick={() => { navigate(appRoutes.dashboard) }}
                            className={classNames(" mx-2", location.pathname === appRoutes.dashboard ? "MyeventCardActive" : "MyeventCard")}  >
                            <MdOutlineSpaceDashboard size={15} className='mx-2 my-1' />
                            My Debut
                        </NavLink>
                    </NavItem>
                    <NavItem className=' justify-content-end align-self-end'>
                        <NavLink style={textColor} onClick={() => { logout() }} className="MyeventCard" >
                            <MdLogout size={15} className='mx-3 my-2' />
                            Logout
                        </NavLink>
                    </NavItem>


                    <NavItem className=' d-flex w-100 justify-content-end align-self-end'>
                        <NavLink style={textColor}
                            onClick={() => {
                                // change the valure of the darkMode variable in the dom element of html passed as data-bs-theme
                                const darkMode = document.documentElement.getAttribute('data-bs-theme') === 'dark'
                                document.documentElement.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark')
                            }}
                            className="MyeventCard" >
                            toggle

                        </NavLink>
                    </NavItem>


                </Nav>

            </Collapse>
        </Navbar >
    )
}
