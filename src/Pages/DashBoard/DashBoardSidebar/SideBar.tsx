import React from "react";
import { MdOutlineEvent } from 'react-icons/md'
import { FiTarget } from 'react-icons/fi'
import { FaRegHandSpock } from 'react-icons/fa'
import { BsArchive, BsBuilding, BsPerson } from 'react-icons/bs'
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { useNavigate, useLocation } from "react-router-dom";
import { appRoutes } from "../../../Routes/routes";
import "./styles.css"

export default function SideBar({ isOpen, toggle }: {
    isOpen: any;
    toggle: any
}) {
    const location = useLocation()
    const navigate = useNavigate();
    const textColor = {
        color: "#1985a1", cursor: "default",
    }
    return (
        <div className={classNames(" sidebar shadow   ", { "is-open": isOpen })}>
            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#222" }}>
                    &times;
                </span>
            </div>
            <div className="side-menu">
                <Nav vertical className=" p-3">
                    <p className="text-muted fs-2 mt-4 mb-1 mx-2"
                        style={textColor}
                        onClick={() => navigate(appRoutes.dashboard)}>
                        Dashboard
                    </p>
                    <NavItem className={location.pathname === appRoutes.dashboard + "/" + appRoutes.events ? "MyeventCardActive my-2 fs-6 fw-lighte" : "MyeventCard my-2 fs-6 fw-lighter"} >
                        <NavLink
                            onClick={() => navigate(appRoutes.events)}
                            style={textColor}>
                            <MdOutlineEvent
                                className="mx-2" />
                            Events
                        </NavLink>
                    </NavItem>
                    <NavItem
                        className={location.pathname === appRoutes.dashboard + "/" + appRoutes.goals ? "MyeventCardActive my-2 fs-6 fw-lighte" : "MyeventCard my-2 fs-6 fw-lighter"} >
                        <NavLink
                            onClick={() => navigate(appRoutes.goals)}
                            style={textColor}>
                            <FiTarget className="mx-2" />
                            Goals
                        </NavLink>
                    </NavItem>
                    <NavItem
                        className={location.pathname === appRoutes.dashboard + "/" + appRoutes.gratitudes ? "MyeventCardActive my-2 fs-6 fw-lighte" : "MyeventCard my-2 fs-6 fw-lighter"} >
                        <NavLink
                            onClick={() => navigate(appRoutes.gratitudes)}
                            style={textColor}>
                            <FaRegHandSpock className="mx-2" />
                            Gratitudes
                        </NavLink>
                    </NavItem>
                    <NavItem
                        className={location.pathname === appRoutes.dashboard + "/" + appRoutes.myCompany ? "MyeventCardActive my-2 fs-6 fw-lighte" : "MyeventCard my-2 fs-6 fw-lighter"} >


                        <NavLink
                            onClick={() => navigate(appRoutes.myCompany)}
                            style={textColor}>
                            <BsBuilding className="mx-2" />
                            Your Company
                        </NavLink>
                    </NavItem>
                    <NavItem
                        className={location.pathname === appRoutes.dashboard + "/" + appRoutes.experience ? "MyeventCardActive my-2 fs-6 fw-lighte" : "MyeventCard my-2 fs-6 fw-lighter"} >
                        <NavLink
                            onClick={() => navigate(appRoutes.experience)}
                            style={textColor}>
                            <BsArchive className="mx-2" />
                            Experience
                        </NavLink>

                    </NavItem>
                    <NavItem
                        className={location.pathname === appRoutes.dashboard + "/" + appRoutes.myProfile ? "MyeventCardActive my-2 fs-6 fw-lighte" : "MyeventCard my-2 fs-6 fw-lighter"} >
                        <NavLink
                            onClick={() => navigate(appRoutes.myProfile)}
                            style={textColor}>
                            <BsPerson className="mx-2" />
                            Profile
                        </NavLink>

                    </NavItem>

                </Nav>
            </div>
        </div >
    )
}
