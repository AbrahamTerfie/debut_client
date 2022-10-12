import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../Routes/routes";
import SubMenu from "./SubMenu";
import "./styles.css"

export default function SideBar({ isOpen, toggle }: {
    isOpen: any;
    toggle: any
}) {
    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>

            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
                </span>

            </div>
            <div className="side-menu">
                <Nav vertical className="list-unstyled pb-3">
                    <p>Dummy Heading</p>
                    {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}
                    <NavItem>
                        <NavLink tag={Link} to={appRoutes.dashboard}>
                            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                            About
                        </NavLink>
                    </NavItem>
                    {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
                    <NavItem>
                        <NavLink tag={Link} to={appRoutes.dashboard}>
                            <FontAwesomeIcon icon={faImage} className="mr-2" />
                            Portfolio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={appRoutes.dashboard}>
                            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                            FAQ
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={appRoutes.dashboard}>
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                            Contact
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
