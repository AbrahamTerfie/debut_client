import React from 'react'
import '../../Styles/HomeStyles/HomeStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import NavBarComponent from '../../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Forum from '../../Pages/Community/Forum'
export default function Home() {

    const { isSidebarOpen } = useSelector((store: RootState) => store.sideBarOpen)
    return (
        <>
            <div className='m-5' >
                <NavBarComponent />
            </div>
            {/* <Forum /> */}
            <Outlet />

        </>
    )
}
