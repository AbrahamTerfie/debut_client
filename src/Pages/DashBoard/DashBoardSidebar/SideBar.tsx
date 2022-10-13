import React from "react";
import { MdOutlineEvent } from 'react-icons/md'
import { FiTarget } from 'react-icons/fi'
import { BsBuilding, BsPerson } from 'react-icons/bs'
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../Routes/routes";
import "./styles.css"

export default function SideBar({ isOpen, toggle }: {
    isOpen: any;
    toggle: any
}) {

    const navigate = useNavigate();
    const textColor = { color: "#1985a1", cursor: "pointer" }
    return (
        <div className={classNames(" sidebar shadow   ", { "is-open": isOpen })}>
            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#222" }}>
                    &times;
                </span>
            </div>
            <div className="side-menu">
                <Nav vertical className=" p-3">
                    <p className="text-muted fs-4 my-4 mx-5"
                        onClick={() => navigate(appRoutes.dashboard)}>
                        dashboard
                    </p>
                    <NavItem className="MyeventCard my-2" >
                        <NavLink
                            onClick={() => navigate(appRoutes.events)}
                            style={textColor}>
                            <MdOutlineEvent className="mx-2" />
                            events
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard" >
                        <NavLink
                            onClick={() => navigate(appRoutes.goals)}
                            style={textColor}>
                            <FiTarget className="mx-2" />
                            goals
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard">
                        <NavLink
                            onClick={() => navigate(appRoutes.myCompany)}
                            style={textColor}>
                            <BsBuilding className="mx-2" />
                            your company
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard">
                        <NavLink
                            onClick={() => navigate(appRoutes.myProfile)}
                            style={textColor}>
                            <BsPerson className="mx-2" />
                            your profile
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div >
    )
}
