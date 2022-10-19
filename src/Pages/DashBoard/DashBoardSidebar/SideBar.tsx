import React from "react";
import { MdOutlineEvent } from 'react-icons/md'
import { FiTarget } from 'react-icons/fi'
import { FaPrayingHands, FaRegHandSpock } from 'react-icons/fa'
import { BsBuilding, BsPerson } from 'react-icons/bs'
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../../Routes/routes";
import "./styles.css"

export default function SideBar({ isOpen, toggle }: {
    isOpen: any;
    toggle: any
}) {

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
                    <NavItem className="MyeventCard my-2 fs-6 fw-lighter" >
                        <NavLink
                            onClick={() => navigate(appRoutes.events)}
                            style={textColor}>
                            <MdOutlineEvent
                                className="mx-2" />
                            Events
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard my-2 fs-6 fw-lighter" >

                        <NavLink
                            onClick={() => navigate(appRoutes.goals)}
                            style={textColor}>
                            <FiTarget className="mx-2" />
                            Goals
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard my-2 fs-6 fw-lighter" >

                        <NavLink
                            onClick={() => navigate(appRoutes.gratitudes)}
                            style={textColor}>
                            <FaRegHandSpock className="mx-2" />
                            Gratitudes
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard my-2 fs-6 fw-lighter" >

                        <NavLink
                            onClick={() => navigate(appRoutes.myCompany)}
                            style={textColor}>
                            <BsBuilding className="mx-2" />
                            Your Company
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard my-2 fs-6 fw-lighter" >

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
