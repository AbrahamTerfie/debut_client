import React, { useState } from 'react'
import {
    Row, Col, Container, Navbar, Collapse, Dropdown, DropdownToggle,
    NavItem, NavLink, Nav, NavbarBrand, NavbarToggler, DropdownMenu,
    DropdownItem, UncontrolledDropdown, NavbarText
} from 'reactstrap'
import { BsPeople } from 'react-icons/bs'
import { FaRegBuilding, FaRegCreditCard, FaCashRegister } from 'react-icons/fa'
import { MdOutlineForum, MdRateReview } from 'react-icons/md'
import { RiChatSmileLine } from 'react-icons/ri'
import { GiReceiveMoney } from 'react-icons/gi'
export default function NavBarComponent() {


    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    const navMargins = {
        backgroundColor: 'transparent',
        marginLeft: '10px',
        marginRight: '10px',
    }
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
            <Collapse navbar>
                <Nav className="me-auto dark" navbar>

                    <UncontrolledDropdown dark inNavbar nav color='warning'   >
                        <DropdownToggle color='dark' nav split={true}    >

                            <BsPeople size={25} />
                            Community
                        </DropdownToggle>
                        <DropdownMenu right dark >
                            <DropdownItem  >
                                <BsPeople size={25} className='m-2' style={navMargins} />
                                People Directory
                            </DropdownItem>
                            <DropdownItem>
                                <FaRegBuilding size={25} className='m-2' style={navMargins} />
                                Ventures Directory
                            </DropdownItem>

                            <DropdownItem>

                                <MdOutlineForum size={25} className='m-2' style={navMargins} />
                                Forum
                            </DropdownItem>
                            <DropdownItem>
                                <RiChatSmileLine size={25} className='m-2' style={navMargins} />
                                Give Gratitude
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>

                    {/* ====================== */}
                    <UncontrolledDropdown dark
                        inNavbar
                        nav >
                        <DropdownToggle nav  >
                            <FaCashRegister className='mx-2' size={25} />

                            Funding
                        </DropdownToggle>
                        <DropdownMenu right dark >
                            <DropdownItem>
                                <GiReceiveMoney size={25} className='m-2' style={navMargins} />
                                Fundraising Support
                            </DropdownItem>
                            <DropdownItem>
                                <FaRegCreditCard size={25} className='m-2' style={navMargins} />
                                Investors Directory
                            </DropdownItem>

                            <DropdownItem>
                                <MdRateReview size={25} className='m-2' style={navMargins} />

                                Rate Investors
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
                        <DropdownMenu right dark >
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
                </Nav>
                <NavbarText>
                    Simple Text
                </NavbarText>
            </Collapse>
        </Navbar>

    )
}
