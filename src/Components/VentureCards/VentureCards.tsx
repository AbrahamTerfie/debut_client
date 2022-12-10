
import React, { useState } from 'react'
import { Row, Col, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import './VentureCards.css'
import { useNavigate } from 'react-router-dom'
import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaHandsHelping,
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import MotionContainer from '../MotionContainer/MotionContainer'
import { appRoutes } from '../../Routes/routes'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes } from '../../Email/EmailTypes'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import Emailcanvas from '../Email/Emailcanvas'
export default function VentureCards(
    {
        _id,
        companyName,
        companyMissionStatement,
        companyHeadquarters,
        companyWebsite,
        companyLogo,
        // jobBoard,
        linkedInUrl,
        twitterUrl,
        instagramUrl,
        facebookUrl,
        majorAchivements,
        companyDescription,
        // companyServivesGeography,
        aeraOfOperation,
        // companySize,
        companyCategory,
        companyOwner,
        // debutEvents,

    }: any

) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const { userEmail } = useSelector((state: RootState) => state.identfiers)
    const copanyIntroductionHandeler = () => {
        dispatch(toggleEmailPopup({
            emailData: {
                emailType: EmailTypes.companyIntroduction,
                name: companyOwner.firstName,
                userEmail: userEmail,
                userBioGraphy: companyOwner.yourBiography,
                emailTo: companyOwner.email ? companyOwner.email : companyOwner.assistantEmail,
            }
        }))
    }
    return (
        <>
            <Emailcanvas />
            <Offcanvas
                direction="end"
                scrollable
                isOpen={isOpen}
                toggle={toggle}
                className="offcanvas-style"
                style={{ width: '60%' }}>
                <OffcanvasHeader onClick={toggle} className=" mb-0 App p-5 pb-0 shadow" >
                    <p className='fs-6 fw-light text-muted  m-0  '> Name </p>
                    <h1 className="">{companyName}</h1>
                    <h6 className="text-start "   >  {companyWebsite} </h6>
                    <div className="d-flex justify-content-around mb-5 mt-3">
                        <MotionContainer>
                            <FaLinkedin className='text-primary mx-2 bg-primary bg-opacity-10 p-2 rounded-circle' size={35}
                                onClick={() => window.open(linkedInUrl ? linkedInUrl : "", "_blank")} />
                        </MotionContainer>
                        <MotionContainer>
                            <FaTwitter className='text-info mx-2 bg-info bg-opacity-10 p-2 rounded-circle' size={35}
                                onClick={() => window.open(twitterUrl ? twitterUrl : "", "_blank")} />
                        </MotionContainer>
                        <MotionContainer>
                            <FaFacebook className='text-primary mx-2 bg-primary bg-opacity-10 p-2 rounded-circle' size={35}
                                onClick={() => window.open(facebookUrl ? facebookUrl : "", "_blank")} />
                        </MotionContainer>
                        <MotionContainer>
                            <FaInstagram className='text-danger mx-2 bg-danger bg-opacity-10 p-2 rounded-circle' size={35}
                                onClick={() => window.open(instagramUrl ? instagramUrl : "", "_blank")} />
                        </MotionContainer>
                    </div>
                </OffcanvasHeader>
                <OffcanvasBody className=' App px-5 pt-5 d-flex flex-column ' >
                    <Row>
                        <Col md={8}>
                            <small className=' fw-light text-muted  m-0'> mission statement </small>
                            <p> {companyMissionStatement} </p>
                            <small className='fw-light text-muted  m-0'> Description </small>
                            <p className=' fw-light mb-3' >{companyDescription}</p>
                            <small className=' fw-light text-muted  m-0'> Company owner </small>
                            <p className=' fw-light mb-3' > company owner  </p>
                            <small className=' fw-light text-muted  m-0'> company achivements </small>
                            <div className='d-flex flex-wrap m-2' >
                                {majorAchivements?.map((item: any) => (
                                    <MotionContainer key={item.index}>
                                        <p className=' mx-1 bg-success text-success bg-opacity-10 p-2 px-4 rounded-pill '>{item}</p>
                                    </MotionContainer>
                                ))}
                            </div>
                        </Col>
                        <Col md={3} className='d-flex flex-column justify-content-center align-items-center mx-3'>
                            <div>
                                <img className="img-fluid w-100 rounded-5 shadow p-3 mb-5 bg-body rounded"
                                    sizes='(max-width: 300px) 10vw, 300px'
                                    src={companyLogo}
                                    alt="" />
                            </div>
                            <MotionContainer>
                                <small className='d-flex text-center text-primary fw-bolder bg-primary bg-opacity-10  p-1 px-3  rounded-1 '
                                    onClick={() => copanyIntroductionHandeler()}>
                                    request introduction
                                    <FaHandsHelping size={25} className='mx-2' />

                                </small>
                            </MotionContainer>
                        </Col>
                    </Row>

                    <Row className='d-flex flex-column justify-content-center align-items-start mt-5'>
                        <small className=' fw-light text-muted ' >aera of operations </small>
                        <div className='d-flex flex-wrap my-2' >
                            {aeraOfOperation?.map((item: any) => (
                                <MotionContainer>
                                    <p className='text-warning mx-1 bg-warning bg-opacity-10 p-2 px-4 rounded-pill '>{item}</p>
                                </MotionContainer>
                            ))}
                        </div>
                        <small className=' fw-light text-muted  m-0'>  active on regions </small>
                        <div className='d-flex flex-wrap my-2' >
                            {companyCategory?.map((item: any) => (
                                <MotionContainer>
                                    <p className='text-muted mx-1 bg-dark bg-opacity-10 p-2 px-4 rounded-pill '>{item}</p>
                                </MotionContainer>
                            ))}
                        </div>
                    </Row>
                    <Row>
                        <MotionContainer>
                            <p onClick={() => navigate(`${appRoutes.ventures}/${_id}`)}
                                className='fs-4 fw-bold m-3 text-success bg-success bg-opacity-10  py-2  px-5 rounded-1 '>
                                got to the company page to see more
                            </p>
                        </MotionContainer>
                    </Row>
                </OffcanvasBody>
            </Offcanvas>


            <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 40 }}
                onClick={toggle}
                className=' my-2 py-2 rounded rounded-5 shadow-sm  border border-muted bg-light bg-opacity-10 d-flex flex-row '>
                <Col md={1} className='d-flex justify-content-center align-items-center mx-3 shadow-sm rounded-5'>

                    <img
                        src={companyLogo}
                        alt='user profile photo'
                        className='rounded img-fluid h-100 w-75'
                        style={{ width: '75px', height: '75px', objectFit: 'contain', maxHeight: '7em', minHeight: '7em' }} />
                </Col>
                <Col md={10} >
                    <p className='fw-bolder fs-5 m-0' > {companyName} </p>
                    <span className=' text-muted' >{
                        companyDescription?.length > 150 ? companyDescription?.slice(0, 150) + "..." : companyDescription
                    } </span>
                    <p className=' fw-bold'>  {companyHeadquarters} </p>
                    <div className='d-flex flex-row ' >
                        <img src={companyOwner?.profileImage}
                            className='rounded-circle img-fluid'
                            style={{ width: '30px', height: '30px', objectFit: 'cover', maxHeight: '100%' }}
                            alt='user profile photo' />
                        <p className='mx-2  fs-6  fw-normal' > {companyOwner?.firstName + "  " + companyOwner?.lastName} </p>
                    </div>
                </Col>

            </motion.div>

        </>
    )
}
