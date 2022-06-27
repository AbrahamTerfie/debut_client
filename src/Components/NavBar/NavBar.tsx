import React, { useState } from 'react'
import {
    Navbar, Collapse, DropdownToggle, Nav, NavbarBrand,
    NavbarToggler, DropdownMenu, DropdownItem, UncontrolledDropdown, NavbarText, NavItem, NavLink
} from 'reactstrap'
import { BsPeople } from 'react-icons/bs'
import { FaRegBuilding } from 'react-icons/fa'
import { MdOutlineForum } from 'react-icons/md'
import { RiChatSmileLine, RiCalendarEventLine } from 'react-icons/ri'
import { GiReceiveMoney, GiTechnoHeart, GiBrain } from 'react-icons/gi'
import { appRoutes } from '../../Routes/routes'
import { Link } from 'react-router-dom'
export default function NavBarComponent() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const navMargins = {
        backgroundColor: 'transparent',
        marginLeft: '10px',
        marginRight: '10px',
    }
    const linkStyle = { display: 'flex', justifyContent: 'center', background: 'none' }
    return (

        <Navbar
            color="dark"
            dark
            expand="xl"
            fixed="top"
            full  >
            <NavbarBrand href="/"  >
                debut
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={dropdownOpen} navbar>
                <Nav className="me-auto dark  m-2" navbar>

                    <UncontrolledDropdown dark inNavbar nav    >
                        <DropdownToggle color='dark' nav    >

                            <BsPeople size={15} className="mx-2" />
                            Community
                        </DropdownToggle>
                        <DropdownMenu right dark >

                            <Link to={appRoutes.people} style={linkStyle} >
                                <DropdownItem >
                                    <BsPeople size={15} style={navMargins} />
                                    People Directory
                                </DropdownItem>
                            </Link>
                            <Link to={appRoutes.ventures} style={linkStyle} >
                                <DropdownItem>
                                    <FaRegBuilding size={15} className='m-2' style={navMargins} />
                                    Ventures Directory
                                </DropdownItem>
                            </Link>

                            <Link to={appRoutes.forum} style={linkStyle} >
                                <DropdownItem>
                                    <MdOutlineForum size={15} className='m-2' style={navMargins} />
                                    Forum
                                </DropdownItem>
                            </Link>

                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href={appRoutes.debutEvents} >
                            <GiReceiveMoney size={15} style={navMargins} />
                            Debut Events
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={appRoutes.giveGratitude} >
                            <RiChatSmileLine size={15} style={navMargins} />
                            Give Gratitude
                        </NavLink>
                    </NavItem>


                    {/* ====================== */}
                    <UncontrolledDropdown dark
                        inNavbar
                        nav >
                        <DropdownToggle nav  >
                            <FaRegBuilding className='mx-2' size={15} />

                            My Debut
                        </DropdownToggle>
                        <DropdownMenu right dark >


                            <Link to={appRoutes.myVentures} style={linkStyle} >
                                <DropdownItem>
                                    <GiBrain size={15} className='m-2' style={navMargins} />
                                    My Ventures
                                </DropdownItem>
                            </Link>


                            <Link to={appRoutes.myEvents} style={linkStyle} >
                                <DropdownItem>
                                    <RiCalendarEventLine size={15} className='m-2' style={navMargins} />
                                    Upcomming Events
                                </DropdownItem>
                            </Link>



                            <DropdownItem>
                                <GiTechnoHeart size={15} className='m-2' style={navMargins} />

                                My Community
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    {/* ================ */}




                </Nav>
                <NavbarText>
                    Simple Text
                </NavbarText>
            </Collapse>
        </Navbar>

    )
}
