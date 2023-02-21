import React from "react";
import { MdDarkMode, MdOutlineEvent } from 'react-icons/md'
import { FiTarget } from 'react-icons/fi'
import { FaRegHandSpock } from 'react-icons/fa'
import { BsArchive, BsBuilding, BsPerson } from 'react-icons/bs'
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import { appRoutes } from "../../../Routes/routes";
import "./styles.css"

export default function SideBar({ isOpen, toggle }: {
    isOpen: Boolean;
    toggle: () => void;
}) {
    const location = useLocation()
    const navigate = useNavigate();
    const darkMode = document.documentElement.getAttribute('data-bs-theme') === 'dark'

    const textColor = {
        color: "#1985a1", cursor: "default",
    }
    return (
        <div className={classNames(" sidebar shadow-sm border border-muted  mt-5  ", { "is-open": isOpen }
            // make it responsive for all screen sizes 
            , "d-none d-md-block", "d-none d-lg-block", "d-none d-xl-block", "d-none d-xxl-block"


        )}>
            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
                </span>
            </div>
            <div className="side-menu">
                <Nav vertical className=" p-3  pt-1">
                    <p className="text-muted fs-2  mb-1 mx-2"
                        style={textColor}
                        onClick={() => navigate(appRoutes.dashboard)}>
                        MyDebut
                    </p>
                    <NavItem className={location.pathname === appRoutes.dashboard + "/" + appRoutes.events ? "MyeventCardActive my-2 fs-6 " : "MyeventCard my-2 fs-6 "} >
                        <NavLink onClick={() => navigate(appRoutes.events)}
                            style={textColor}>
                            <MdOutlineEvent
                                className="mx-2" />
                            Events
                        </NavLink>
                    </NavItem>
                    <NavItem className={location.pathname === appRoutes.dashboard + "/" + appRoutes.goals ? "MyeventCardActive my-2 fs-6 " : "MyeventCard my-2 fs-6 "} >
                        <NavLink onClick={() => navigate(appRoutes.goals)}
                            style={textColor}>
                            <FiTarget className="mx-2" />
                            Goals
                        </NavLink>
                    </NavItem>
                    <NavItem className={location.pathname === appRoutes.dashboard + "/" + appRoutes.gratitudes ? "MyeventCardActive my-2 fs-6 fw-light" : "MyeventCard my-2 fs-6 "} >
                        <NavLink onClick={() => navigate(appRoutes.gratitudes)}
                            style={textColor}>
                            <FaRegHandSpock className="mx-2" />
                            Gratitudes
                        </NavLink>
                    </NavItem>
                    <NavItem className={location.pathname === appRoutes.dashboard + "/" + appRoutes.myCompany ? "MyeventCardActive my-2 fs-6 " : "MyeventCard my-2 fs-6 "} >
                        <NavLink onClick={() => navigate(appRoutes.myCompany)}
                            style={textColor}>
                            <BsBuilding className="mx-2" />
                            Company
                        </NavLink>
                    </NavItem>
                    <NavItem className={location.pathname === appRoutes.dashboard + "/" + appRoutes.experience ? "MyeventCardActive my-2 fs-6 " : "MyeventCard my-2 fs-6 "} >
                        <NavLink onClick={() => navigate(appRoutes.experience)}
                            style={textColor}>
                            <BsArchive className="mx-2" />
                            Experience
                        </NavLink>

                    </NavItem>
                    <NavItem
                        className={location.pathname === appRoutes.dashboard + "/" + appRoutes.myProfile ? "MyeventCardActive my-2 fs-6 r" : "MyeventCard my-2 fs-6 "} >
                        <NavLink
                            onClick={() => navigate(appRoutes.myProfile)}
                            style={textColor}>
                            <BsPerson className="mx-2" />
                            Profile
                        </NavLink>


                    </NavItem>

                    <NavItem className="MyeventCard my-2 fs-6 fw-lighter" >
                        <NavLink style={textColor}
                            onClick={() => {
                                document.documentElement.setAttribute('data-bs-theme', darkMode ? 'light' : 'dark')
                            }} >
                            <MdDarkMode className="mx-2" />
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </NavLink>
                    </NavItem>

                </Nav>
            </div>
        </div >
    )
}
