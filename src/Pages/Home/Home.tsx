import React from 'react'
import '../../Styles/HomeStyles/HomeStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import NavBarComponent from '../../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
export default function Home() {

    const { isSidebarOpen } = useSelector((store: RootState) => store.sideBarOpen)
    return (
        <>
            <div className='m-5' >
                <NavBarComponent />
            </div>
            <Outlet />

        </>
    )
}
