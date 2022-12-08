import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,

} from "reactstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../Routes/routes";
import { motion } from "framer-motion";

export default function TopBar({ toggleSidebar }: any) {
    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);
    const location = useLocation();
    const navigate = useNavigate();
    // { console.log(location.pathname) }

    return (
        <Navbar
            color="light"
            light
            className="navbar shadow-sm p-3 my-5  bg-white rounded h-10 border border-muted "
            expand="xl"
            md="12"
            sticky="top"
        // style={{ width: "150vh" }}
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, duration: 0.5 }}
                color="light" onClick={toggleSidebar} className=" btn outline bg-success bg-opacity-25">

                <FontAwesomeIcon icon={faAlignLeft}
                    color="green"
                />
            </motion.div>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar
                className="w-auto justify-content-start">

                <Nav className="" navbar>
                    <p className="text-muted mt-2 mx-4 fs-5 fw-bold" >
                        <span onClick={() => navigate(appRoutes.dashboard)} style={{ cursor: "pointer" }}>
                            {location.pathname.split("/")[1]}
                        </span>
                        <span> / </span>
                        <span
                            onClick={() => navigate(location.pathname.split("/")[2])} style={{ cursor: "pointer" }} >
                            {location.pathname.split("/")[2]}
                        </span>

                    </p>
                </Nav>
            </Collapse>
        </Navbar>
    );
};


