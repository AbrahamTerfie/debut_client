import React, { useState } from 'react'
import { Button } from 'reactstrap';
import SideBar from './DashBoardSidebar/SideBar'
export default function Dashboard() {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <div>
            <div className=" wrapper">
                <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />

                {/* <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} /> */}
            </div>
            <Button
            onClick={toggleSidebar}
            >
                Button
            </Button>
        </div>
    )
}
