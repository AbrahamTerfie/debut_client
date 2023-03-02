import React, { useEffect, useState } from 'react'
import SideBar from './DashBoardSidebar/SideBar'
import classNames from "classnames";
import Topbar from './DashBoardSidebar/TopBar';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FETCH_COMPANY } from '../../GraphQl/index'
import { RootState } from '../../Store/RootReducer';
import { setCompanyID } from '../../Store/identfiers/identfiers';
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@apollo/client'
import Loader from '../../Components/Loader/Loader'
import { appRoutes } from '../../Routes/routes';
import { notifyError } from '../../Components/Notification/Toast';
import { motion } from 'framer-motion';

// icon imports
import { IoBusiness, IoCalendarClear, IoHandLeft, IoPerson, IoTrophy, IoNewspaperOutline } from 'react-icons/io5';
import { Row } from 'reactstrap';
// describe className="fa-5x"


export default function Dashboard() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    const { userID, hasCompany } = useSelector((store: RootState) => store.identfiers)
    const location = useLocation();

    const { data: dataCompany, loading: loadingCompany, error: errorCompany
    } = useQuery(FETCH_COMPANY, {
        variables: { userId: userID }
    })

    useEffect(() => {
        if (dataCompany) {
            if (hasCompany && dataCompany.getCompanyWithUserId) {
                // call the getCompany() function here
                dispatch(setCompanyID(dataCompany.getCompanyWithUserId._id))
            }
        }
    })

    if (loadingCompany) return <Loader />
    if (hasCompany === true && errorCompany) { notifyError("something went wrong" + errorCompany?.message.toString()) }
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
            companyName: dataCompany?.getCompanyWithUserId?.companyName,
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
        <Row className="d-flex mt-5   ">
            <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen}

            />
            <div className={classNames("content   overflow-scroll ", { "is-open overflow-scroll  ": sidebarIsOpen })}
                style={sidebarIsOpen ? { width: window.innerWidth * 0.8 } : { width: window.innerWidth }} >
                <Topbar toggleSidebar={toggleSidebar} />

                {location.pathname === "/dashboard" ?
                    <>
                        <h1 className="text-start px-5">Welcome to your dashboard</h1>
                        <h5 className="text-start text-muted px-5">
                            Here you can keep track of your company, events, goals, milestones, gratitude and work experience.
                        </h5>
                        <div className="d-flex flex-wrap justify-content-start align-items-center  ">


                            <motion.div
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className=" my-3 mx-4" style={{ width: "18rem" }} >
                                    <div className={` bg-primary border border-primary-subtle text-light border-muted  bg-opacity-50 d-flex justify-content-center align-items-center flex-row p-3 rounded`}
                                        // make the card size the same
                                        style={{ height: "150px", cursor: "default" }}>
                                        <div className='d-flex justify-content-center align-items-center mx-2'>
                                            <IoNewspaperOutline className="fa-4x" />

                                        </div>
                                        <div className='py-3 . px-2' >
                                            <h5 className="text-start">
                                                accept invite
                                            </h5>
                                            <p className="text-start text-light">
                                                accept your invite to an event
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>

                            {cardInfo.map((card, index) => (
                                <motion.div
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.9 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    key={index} className=" my-3 mx-4" style={{ width: "18rem" }} onClick={() => navigate(card.link)}>
                                    <div className={` shadow-sm border ${card.bgColor} text-${card.color} border-muted  bg-opacity-10 d-flex justify-content-center align-items-center flex-row p-3 rounded  `}
                                        // make the card size the same
                                        style={{ height: "150px", cursor: "default" }}>
                                        <div className='d-flex justify-content-center align-items-center mx-2'>
                                            {card.icon}
                                        </div>
                                        <div className='py-3 . px-2' >
                                            <h6 className="card-title  fw-bold ">{card.title}</h6>
                                            <span className='' > {card.title === "Company" && card.companyName ? card.companyName : null} </span>
                                            <span className="card-text fw-light text-muted"> {card.description} .</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </>
                    :
                    <Outlet />}
            </div>
        </Row>


    )
}
