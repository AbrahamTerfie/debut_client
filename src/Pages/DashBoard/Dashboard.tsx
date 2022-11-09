import React, { useEffect, useState } from 'react'
import SideBar from './DashBoardSidebar/SideBar'
import classNames from "classnames";
import Topbar from './DashBoardSidebar/TopBar';
import { Outlet, useLocation } from "react-router-dom";
import { CHECK_IF_USER_HAS_COMPANY, FETCH_COMPANY } from '../../GraphQl/index'
import { RootState } from '../../Store/RootReducer';
import { setHasCompany, setCompanyID } from '../../Store/identfiers/identfiers';
import { useDispatch, useSelector } from 'react-redux'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import Loader from '../../Components/Loader/Loader'

export default function Dashboard() {
    const dispatch = useDispatch()
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const { userID, companyID, hasCompany } = useSelector((store: RootState) => store.identfiers)
    const location = useLocation();
    const { data, loading, error } = useQuery(CHECK_IF_USER_HAS_COMPANY, {
        variables: { userId: userID }
    })
    const [getCompany, { data: dataCompany, loading: loadingCompany, error: errorCompany
    }] = useLazyQuery(FETCH_COMPANY, {
        variables: { userId: userID }
    })

    // console.info(userID, companyID, hasCompany)

    useEffect(() => {
        if (data?.checkIfUserHasCompany === true) {
            dispatch(setHasCompany(true))
            getCompany()
            dataCompany && dispatch(setCompanyID(dataCompany?.getCompanyWithUserId?._id))
        }
        if (data?.checkIfUserHasCompany === false) {
            dispatch(setHasCompany(false))
        }
    }, [data, dataCompany])


    if (loading || loadingCompany) return <Loader />

    if (error || errorCompany) return <p>error</p>



    // console.log("data", data)
    // console.log("loading", loading)
    // console.log("error", error)
    return (
        <div className="d-flex mt-5   ">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <div className={classNames("content  Page overflow-scroll ", { "is-open overflow-scroll  ": sidebarIsOpen })}
                style={sidebarIsOpen ? { width: window.innerWidth * 0.8 } : { width: window.innerWidth }} >
                <Topbar toggleSidebar={toggleSidebar} />

                {location.pathname === "/dashboard" ?
                    <p> 
                        this is dashboard item d

                        {data && data.checkIfUserHasCompany === true ? <p>you have a company</p> : <p>you dont have a company</p>}
                    </p> :
                    <Outlet />}
            </div>
        </div>


    )
}
