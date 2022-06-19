import React, { useState } from "react";
import classNames from "classnames";
import { Collapse, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SubMenu = (props : any) => {
    // console.log(items)
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const { icon, title, items } = props;
console.log(items.map((item: any) => item.target))
    return (
        <div>
            <NavItem
                onClick={toggle}
                className={classNames({ "menu-open": !collapsed })}
            >
                <NavLink className="dropdown-toggle">
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    {title}
                </NavLink>
            </NavItem>
            <Collapse
                isOpen={!collapsed}
                navbar
                className={classNames("items-menu", { "mb-1": !collapsed })}
            >
                {items.map(({ item, index }: {
                    item: any;
                    index: number;
                }) => (
                    <NavItem key={index} className="pl-4">
                        <NavLink tag={Link} to={item.target}>
                            {item.title}
                        </NavLink>
                    </NavItem>
                ))}
            </Collapse>
        </div>
    );
};

export default SubMenu;
