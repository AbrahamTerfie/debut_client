import React from "react";
import { MdOutlineEvent } from 'react-icons/md'
import { FiTarget } from 'react-icons/fi'
import { BsBuilding, BsPerson } from 'react-icons/bs'
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../Routes/routes";
import "./styles.css"

export default function SideBar({ isOpen, toggle }: {
    isOpen: any;
    toggle: any
}) {
    return (
        <div className={classNames(" shadow mt-auto  ", { "is-open": isOpen })}
            style={{ height: "100vh" }}
        >

            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                </span>

            </div>
            <div className="side-menu">
                <Nav vertical className=" p-3">
                    <p className="text-muted fs-4 my-4 mx-5">
                        dashboard
                    </p>
                    {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
                    <NavItem className="MyeventCard my-2" >
                        <NavLink tag={Link} to={appRoutes.dashboard}>
                            <MdOutlineEvent className="mx-2" />
                            events
                        </NavLink>
                    </NavItem>
                    {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
                    <NavItem className="MyeventCard" >
                        <NavLink tag={Link} to={appRoutes.dashboard}>
                            <FiTarget className="mx-2" />
                            goals
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard">
                        <NavLink tag={Link} to={appRoutes.dashboard}>
                            <BsBuilding className="mx-2" />
                            your company
                        </NavLink>
                    </NavItem>
                    <NavItem className="MyeventCard">
                        <NavLink tag={Link} to={appRoutes.dashboard}>
                            <BsPerson className="mx-2" />
                            your profile
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    )
}

const submenus = [
    [
        {
            title: "Home 1",
            target: appRoutes.dashboard
        },
        {
            title: "Home 2",
            target: appRoutes.dashboard
        },
        {
            itle: "Home 3",
            target: appRoutes.dashboard
        },
    ],
    [
        {
            title: "Page 1",
            target: appRoutes.dashboard
        },
        {
            title: "Page 2",
            target: appRoutes.dashboard
        },
    ],
];

;
