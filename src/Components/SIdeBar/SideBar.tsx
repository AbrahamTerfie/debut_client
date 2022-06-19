import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faPeopleGroup,
    faList,
    faClock,
    faFile,
    faUser,
    faCopy
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { appRoutes } from "../../Routes/routes";
import SubMenu from "./SubMenu";

const SidebarStyle = {
    marginRight: '1rem',
    color: 'darkGray'
}

const SideBar = ({ isOpen, toggle }:
    {
        isOpen: boolean;
        toggle: any
    }) => (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
        <div className="sidebar-header">
            <span color="info" onClick={() => toggle()} style={{ color: "#fff" }}>
                &times;
            </span>
            <h3>My Debut</h3>
        </div>
        <div className="side-menu">
            <Nav vertical className="list-unstyled pb-3">
                <h5>Dummy Heading</h5>
                {/* <SubMenu title="Home" icon={faHome} items={submenus[0]} /> */}

                <NavItem>
                    <NavLink tag={Link} to={appRoutes.myDebutHome}>
                        <FontAwesomeIcon icon={faFile} className="mr-2"
                            style={SidebarStyle} />
                        Dashboard
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={appRoutes.myDebutBusiness}>
                        <FontAwesomeIcon icon={faBriefcase} className="ml-2"
                            style={SidebarStyle}
                        />

                        Business
                    </NavLink>
                </NavItem>
                {/* <SubMenu title="Pages" icon={faCopy} items={submenus[1]} /> */}
                <NavItem>
                    <NavLink tag={Link} to={appRoutes.myDebutEvents}>
                        <FontAwesomeIcon icon={faClock} className="mr-2"
                            style={SidebarStyle} />
                        Events
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={appRoutes.myDebutRegistry}>
                        <FontAwesomeIcon icon={faList} className="mr-2"
                            style={SidebarStyle} />
                        Registry
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={"/contact"}>
                        <FontAwesomeIcon icon={faPeopleGroup} className="mr-2"
                            style={SidebarStyle} />
                        Supporters
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={appRoutes.profile}>
                        <FontAwesomeIcon icon={faUser} className="mr-2"
                            style={SidebarStyle} />
                        Profile
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    </div>
);

const submenus = [
    // [
        {
            title: "Home 1",
            target: "Home-1",
        },
        {
            title: "Home 2",
            target: "Home-2",
        },
        {
            itle: "Home 3",
            target: "Home-3",
        },
    // ],
    // [
    //     {
    //         title: "Page 1",
    //         target: "Page-1",
    //     },
    //     {
    //         title: "Page 2",
    //         target: "Page-2",
    //     },
    // ],
];

export default SideBar;
