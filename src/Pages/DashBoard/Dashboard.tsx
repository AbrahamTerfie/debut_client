import React, { useEffect, useState } from 'react'
import SideBar from './DashBoardSidebar/SideBar'
import classNames from "classnames";
import Topbar from './DashBoardSidebar/TopBar';
import { Outlet, Routes, useLocation, useNavigate } from "react-router-dom";
import { CHECK_IF_USER_HAS_COMPANY, FETCH_COMPANY } from '../../GraphQl/index'
import { RootState } from '../../Store/RootReducer';
import { setHasCompany, setCompanyID } from '../../Store/identfiers/identfiers';
import { useDispatch, useSelector } from 'react-redux'
import { useLazyQuery, useQuery } from '@apollo/client'
import Loader from '../../Components/Loader/Loader'
import { appRoutes } from '../../Routes/routes';
import { notifyError } from '../../Components/Notification/Toast';
import { motion } from 'framer-motion';
import { Row, Col } from 'reactstrap';
// icon imports
import { IoBusiness, IoCalendarClear, IoHandLeft, IoPerson, IoTrophy, IoNewspaperOutline } from 'react-icons/io5';
// describe className="fa-5x"


export default function Dashboard() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const { userID, hasCompany
        //  companyID, hasCompany
    } = useSelector((store: RootState) => store.identfiers)
    const location = useLocation();
    // const { data, loading, error } = useQuery(CHECK_IF_USER_HAS_COMPANY, {
    //     variables: { userId: userID }
    // })
    const [getCompany, { data: dataCompany, loading: loadingCompany, error: errorCompany
    }] = useLazyQuery(FETCH_COMPANY, {
        variables: { userId: userID }
    })

    // console.info(userID, companyID, hasCompany)
    console.log(dataCompany)
    useEffect(() => {
        if (hasCompany) {
            // dispatch(setHasCompany(true))
            getCompany()
            dataCompany && dispatch(setCompanyID(dataCompany?.getCompanyWithUserId?._id))
        }
        // if (data?.checkIfUserHasCompany === false) { dispatch(setHasCompany(false)) }
    }, [dataCompany])


    if (loadingCompany) return <Loader />

    if (errorCompany) { notifyError("something went wrong" + errorCompany?.message.toString()) }

    const cardInfo = [
        {
            title: "Profile",
            icon: <IoPerson className="fa-4x" />,
            description: "your personal information ",
            link: appRoutes.myProfile,
            bgColor: "bg-primary",
            color: "primary"
        },
        {
            title: "Company",
            icon: <IoBusiness className="fa-4x" />,
            description: "information about your company ",
            link: appRoutes.myCompany,
            bgColor: "bg-success",
            color: "success"
        },
        {
            title: "Event",
            icon: <IoCalendarClear className="fa-4x" />,
            description: "keep track of your events , registries ",
            link: appRoutes.events,
            bgColor: "bg-warning",
            color: "warning"
        },
        {
            title: "Goals & Milestones",
            icon: <IoTrophy className="fa-4x" />,
            description: "set goals and milestones",
            link: appRoutes.goals,
            bgColor: "bg-danger",
            color: "danger"
        },
        {
            title: "Gratitude",
            icon: <IoHandLeft className="fa-4x" />,
            description: "give thanks to your colleagues ",
            link: appRoutes.gratitudes,
            bgColor: "bg-info",
            color: "info"
        },
        {
            title: "Experiance",
            icon: <IoNewspaperOutline className="fa-4x" />,
            description: "keep track of your work experience ",
            link: appRoutes.experience,
            bgColor: "bg-secondary",
            color: "secondary"
        }
    ]
    return (
        <div className="d-flex mt-5   ">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
            <div className={classNames("content  Page overflow-scroll ", { "is-open overflow-scroll  ": sidebarIsOpen })}
                style={sidebarIsOpen ? { width: window.innerWidth * 0.8 } : { width: window.innerWidth }} >
                <Topbar toggleSidebar={toggleSidebar} />

                {location.pathname === "/dashboard" ?
                    <>
                        <h1 className="text-start px-5">Welcome to your dashboard</h1>
                        <h5 className="text-start text-muted px-5">
                            Here you can keep track of your company, events, goals, milestones, gratitude and work experience.
                        </h5>
                        <div className="d-flex flex-wrap justify-content-start align-items-center">
                            {cardInfo.map((card, index) => (
                                <motion.div
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    key={index} className=" my-3 mx-4" style={{ width: "18rem" }} onClick={() => navigate(card.link)}>
                                    <Row className={`card-body shadow border ${card.bgColor} text-${card.color} border-muted  bg-opacity-10 d-flex justify-content-center align-items-between `}  >
                                        <Col className='d-flex justify-content-center align-items-center'>
                                            {card.icon}
                                        </Col>
                                        <Col>
                                            <h5 className="card-title  fw-bold ">{card.title}</h5>
                                            <p className="card-text"> {card.description} .</p>
                                        </Col>
                                    </Row>

                                </motion.div>
                            )
                            )}


                            {/* {data && data.checkIfUserHasCompany === true ? <p>you have a company</p> : <p>you dont have a company</p>} */}
                        </div>
                    </>

                    :
                    <Outlet />}
            </div>
        </div>


    )
}
