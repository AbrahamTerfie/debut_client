import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { Container } from 'reactstrap'
import Topbar from '../../../Components/MyDebutTopBar/TopBar'
import SideBar from '../../../Components/SIdeBar/SideBar'

export default function MyDebutHome() {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (

    <>
      <SideBar toggle={toggleSidebar} isOpen={false} />

      <Container >
        <Topbar toggleSidebar={toggleSidebar} />
        {/* <Outlet /> */}
      </Container>
    </>
  )
}
