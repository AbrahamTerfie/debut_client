import React from 'react'
import { Col, Row } from 'reactstrap'
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaHandsHelping, FaTimes, } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { useQuery } from '@apollo/client';
import { FETCH_USER_WITH_ID } from '../../GraphQl/index'
import Loader from '../Loader/Loader';
import { motion } from 'framer-motion';
import MotionContainer from '../MotionContainer/MotionContainer';
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import Emailcanvas from '../Email/Emailcanvas';
import { EmailTypes } from '../../Email/EmailTypes';
import { v4 as uuid } from 'uuid'
import { appRoutes } from '../../Routes/routes';
import { useNavigate } from 'react-router-dom';
import { setActivePersonId } from '../../Store/UI/sidebarController'
function MotionCover({ children }: any) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </motion.div>
    )
}

export default function PersonDetail() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { activePersonId } = useSelector((store: RootState) => store.uiStore)
    const { userEmail, myBiography } = useSelector((store: RootState) => store.identfiers)
    const { loading, error, data } = useQuery(FETCH_USER_WITH_ID, { variables: { getDebutUserWithIdId: activePersonId } })
    if (loading) { <Loader /> }

    if (activePersonId === "") { return <p className='text-center p-5 shadow-sm h-auto rounded  border border-muted  text-muted fw-bolder my-2 ' > select user </p> }
    if (error) { return <p className='text-center p-4 shadow-sm h-auto rounded   my-2 ' > something went wrong  </p> }

    function closePerson() {
        dispatch(setActivePersonId(""))
    }

    const personIntroductoinHandler = (e: any) => {
        e.preventDefault()
        dispatch(toggleEmailPopup({
            emailData: {
                emailType: EmailTypes.peopleIntroduction,
                name: data.getDebutUserWithId.firstName,
                userEmail: userEmail,
                userBioGraphy: data.getDebutUserWithId.yourBiography,
                emailTo: data.getDebutUserWithId.email,
                userBiography: myBiography

            }
        }))

    }


    return (
        <div className='p-4 px-auto shadow rounded  my-auto overflow-auto d-flex flex-column  flex-wrap  py-5  text-info-emphasis bg-info-subtle border border-info-subtle '>
            <Emailcanvas />
            <div className='d-flex justify-content-end align-items-center my-auto '>
                <MotionCover>
                    <FaTimes className='text-danger bg-danger bg-opacity-10 p-2 rounded-circle' onClick={closePerson} size={35} />
                </MotionCover>
            </div>
            <Row>
                <Col md={3}
                    sm={12} lg={3} xl={3} xxl={3} className='d-flex justify-content-start align-items-start'>

                    <img src={data?.getDebutUserWithId.profileImage}
                        // have the image a fixed height and width with overflow hidden 
                        alt='Userprofile'
                        className='rounded-1 shadow  img-fluid '
                        style={{
                            // responsive image 
                            height: window.innerWidth * 0.1,
                            width: window.innerWidth * 0.22,
                            objectFit: 'cover',
                        }}
                    />
                </Col>
                <Col md={9}
                    sm={12} lg={9} xl={9} xxl={9} className='d-flex flex-column flex-wrap justify-content-start align-items-start'>

                    <p className='fs-1 fw-lighter m-0'>  {data?.getDebutUserWithId.firstName} {data?.getDebutUserWithId.lastName}
                        <span className='fs-6 fw-bold text-muted mx-2'>
                            {data?.getDebutUserWithId.pronouns}
                        </span>
                    </p>
                    <p className='fs-6 fw-bold  m-0'>
                        {data?.getDebutUserWithId.userName} / <span className='text-muted' >  {data?.getDebutUserWithId.preferredName} </span> </p>

                    <p className='fs-5 fw-light m-0 d-flex justify-content-start  flex-row flex-wrap'>
                        {data?.getDebutUserWithId.titleAtCompany} <span className='text-muted mx-1'> at </span>{data?.getDebutUserWithId.company[0]?.companyName}
                    </p>




                    <div className='d-flex justify-content-start my-2 flex-wrap' >
                        <MotionCover>
                            {data?.getDebutUserWithId.linkedinUrl ? <a href={data?.getDebutUserWithId.linkedinUrl}>
                                <FaLinkedin className='text-primary mx-2 bg-primary bg-opacity-10 p-2 rounded-circle' size={35} />
                            </a> : null}
                        </MotionCover>
                        <MotionCover>
                            {data?.getDebutUserWithId.twitterUrl ? <a href={data?.getDebutUserWithId.twitterUrl}>
                                <FaTwitter className='text-info mx-2 bg-info bg-opacity-10 p-2 rounded-circle' size={35} />

                            </a> : null}
                        </MotionCover>
                        <MotionCover>
                            {data?.getDebutUserWithId.facebookUrl ? <a href={data?.getDebutUserWithId.facebookUrl}>
                                <FaFacebook className='text-primary mx-2 bg-primary bg-opacity-10 p-2 rounded-circle' size={35} />
                            </a> : null}
                        </MotionCover>
                        <MotionCover>
                            {data?.getDebutUserWithId.instagramUrl ? <a href={data?.getDebutUserWithId.instagramUrl}>
                                <FaInstagram className='text-danger mx-2 bg-danger bg-opacity-10 p-2 rounded-circle' size={35} />
                            </a> : null}
                        </MotionCover>
                    </div>
                    <MotionContainer>
                        <p className='d-flex flex-row justify-content-center align-items-center  text-warning-emphasis bg-warning-subtle border border-warning-subtle  px-3 p-2 rounded  shadow-sm border border-muted'

                            onClick={(e: any) => personIntroductoinHandler(e)}>
                            request introduction
                            <FaHandsHelping size={25} className='mx-3' />
                        </p>
                    </MotionContainer>

                </Col>

            </Row>
            <Row className='mt-4 '>


                <Col md={12}   >
                    <p className=" text-muted mt-4 mb-0 " > biography</p>
                    <p className=' fw-light m-0'>
                        <span > {data?.getDebutUserWithId.yourBiography} </span>
                    </p>
                </Col>

                <Col md={12} >
                    <p className=" text-muted mt-4 mb-0 " > your contribution</p>
                    <p className=' fw-light m-0'>
                        <span >
                            {data?.getDebutUserWithId.howyouContribute}
                        </span>
                    </p>
                </Col>

                <Col md={12}  >
                    <p className="m-3  ">
                        Area of Expertise
                    </p>
                    <div className='  d-flex flex-wrap justify-content-start '>
                        {data?.getDebutUserWithId.aeraOfExpertise.map((item: any) => {
                            return <MotionCover key={uuid()}>
                                <p className='text-muted mx-1 d-flex my-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle p-2 px-4 rounded-pill flex-wrap '>
                                    {item}
                                </p>
                            </MotionCover>
                        })}
                    </div>

                </Col>
                <Col md={12}>
                    <p className="m-3">
                        Regions
                    </p>
                    <div className='  d-flex flex-wrap justify-content-start '>
                        {data?.getDebutUserWithId.regions.map((item: any) => {
                            return <MotionCover key={uuid()}>
                                <span className='text-muted mx-1 my-2 d-flex text-secondary-emphasis bg-secondary-subtle border border-secondary-subtle p-2 px-4 rounded-pill flex-wrap '>
                                    {item}
                                </span>
                            </MotionCover>
                        })}
                    </div>

                </Col>
                <Col md={12} className="mt-5">
                    <p className="m-3 mb-0">company</p> </Col>

                {data?.getDebutUserWithId.company.length === 0 ? <Col md={12} className="mt-5">
                    <p className=" mx-3 mb-0 text-start text-muted">
                        debut user has not added any company yet
                    </p> </Col> :

                    <MotionContainer>
                        <Col md={10} className='d-flex flex-wrap justify-content-start  m-3 border border-muted rounded-1 shadow-sm p-3'
                            onClick={() => navigate(`${appRoutes.ventures}/${data?.getDebutUserWithId.company[0]?._id}`)}
                        >
                            <img src={data?.getDebutUserWithId.company[0]?.companyLogo}
                                alt="profile"
                                className='rounded-1 shadow-sm  img-fluid p-2'
                                style={{
                                    // responsive image 
                                    height: window.innerWidth * 0.07,
                                    width: window.innerWidth * 0.07,
                                    objectFit: 'cover', objectPosition: 'center'
                                }}
                            />


                            <div className='d-flex flex-column justify-content-start align-items-start ms-4'>
                                <p className='m-0 fs-4 fw-bold' > {data?.getDebutUserWithId.company[0]?.companyName} </p>
                                <p className='m-0 text-muted  fs-6 fw-light'>
                                    {data?.getDebutUserWithId.company[0]?.companyHeadquarters}
                                </p>
                                <p className='m-0'>
                                    {data?.getDebutUserWithId.company[0]?.companyWebsite}
                                </p>
                            </div>
                        </Col>
                    </MotionContainer>}



            </Row>
        </div>
    )
}
