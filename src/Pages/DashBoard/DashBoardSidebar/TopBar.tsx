import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,

} from "reactstrap";
import { useLocation } from "react-router-dom";

export default function TopBar({ toggleSidebar }: any) {
    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
    const location = useLocation();
    return (
        <Navbar
            color="light"
            light
            className="navbar shadow-sm p-3 mb-5 mt-0 bg-white rounded h-10  "
            expand="lg"
            style={{ width: "150vh" }}>
            <Button color="info" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar
                className="w-auto justify-content-start">

                <Nav className="" navbar>
                    <p className="text-muted mt-2 mx-4 fs-5 fw-bold" >
                        {location.pathname.slice(1, location.pathname.length)}
                    </p>
                </Nav>
            </Collapse>
        </Navbar>
    );
};


