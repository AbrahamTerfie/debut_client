import React, { Fragment } from 'react'
import NavBarComponent from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <Fragment>
            <NavBarComponent />
            <Outlet />
        </Fragment>
    )
}
