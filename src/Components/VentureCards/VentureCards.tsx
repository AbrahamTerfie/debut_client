
import React, { useState } from 'react'
import { Row, Col, Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import './VentureCards.css'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
// instagram , facebook . twitter , linked in , indeed icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
} from 'react-icons/fa'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export default function VentureCards(
    { ventureName,
        ventureDescription,
        ventureId,
        ventureOwner,
        ventureAdress }: {
            ventureName: any,
            ventureDescription: any,
            ventureId: any,
            ventureOwner: any,
            ventureAdress: any
        }

) {


    /*{

 _id: ID
    companyName: String
    companyMissionStatement: String
    companyHeadquarters: String
    companyWebsite: String
    companyLogo: String
    jobBoard: String
    linkedInUrl: String
    twitterUrl: String
    instagramUrl: String
    facebookUrl: String
    majorAchivements: [String]
    companyDescription: String
    companyServivesGeography: [String]
    aeraOfOperation: [String]
    companySize: String
    companyCategory: [String]
    companyOwner: User
    debutedEvents: [debutEvents]
    companyFollowers: [User]
    companyRegestry: [debutRegistry]˝

    }*/

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const itemlink = "fromVenturepagewithid"
    return (
        // <Link to={`${appRoutes.ventures}/${itemlink}`}>

        <>




            <Offcanvas
                direction="end"
                scrollable
                isOpen={isOpen}
                toggle={toggle}
                className="offcanvas-style"
                style={{ width: '75%' }}
            >
                <OffcanvasHeader
                    onClick={toggle}
                >
                    <h3 className="text-center">{ventureName}</h3>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Row>
                        <Col md={8}>
                            <p>{ventureDescription}</p>
                            <p>{ventureOwner}</p>
                            <p>{ventureAdress}</p>
                            <p>  venture website  </p>
                            <div className="d-flex justify-content-start my-3">
                                <a href="https://www.linkedin.com/in/joseph-mwaura-b8a8a817b/">
                                    <FaLinkedin className='mx-3' size={30} />
                                </a>
                                <a href="https://twitter.com/josephmwaura">
                                    <FaTwitter size={30} className='mx-3' />
                                </a>
                                <a href="https://www.facebook.com/josephmwaura">
                                    <FaFacebook className='mx-3' size={30} />
                                </a>
                                <a href="https://www.instagram.com/josephmwaura/">
                                    <FaInstagram className='mx-3' size={30} />
                                </a>

                            </div>
                            <p>majorAchivements</p>
                            <p>companyDescription</p>
                            <p>companyServivesGeography</p>
                            <p>aeraOfOperation</p>
                            <p>companySize</p>

                            <p>companyCategory</p>
                            <p>companyOwner</p>
                            <p>debutEvents</p>
                            <p>companyFollowers</p>
                            <p>companyRegestry</p>


                        </Col>
                        <Col md={4}
                        >
                            <img
                                className="w-100 shadow"
                                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>

                        </Col>

                        <Col md={4}>
                            <div className="text-center d-flex  flex-wrap justify-content-center ">
                                <p className='mx-3'>one</p>
                                <p className='mx-3' >two</p>
                                <p className='mx-3' >three</p>

                            </div>
                            <div
                                className="text-center d-flex  flex-wrap justify-content-center "

                            >

                                <p className='mx-3'>region </p>
                                <p className='mx-3' >region </p>
                                <p className='mx-3' >region</p>
                            </div>

                        </Col>

                    </Row>
                </OffcanvasBody>
            </Offcanvas>

            <Row className=' d-flex my-2 py-3 flex-wrap justify-content-between rounded-5 shadow-sm  companyCard'
                onClick={toggle}
            >
                <Col md={2}  >
                    <img
                        className='w-100'
                        src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                        alt='user profile photo' />
                </Col>
                <Col md={10}>
                    <p className='fw-bolder fs-6 ' > {ventureName} </p>
                    <p className='fs-light' >
                        {ventureDescription} <small className='text-muted'>  {ventureAdress} </small>
                    </p>
                    <div className='ventureOwner d-flex'>
                        {/* user name and photo */}

                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                            alt='user profile photo' />


                        <p className='mx-2  fs-6 text-muted fw-normal' > {ventureOwner} </p>


                    </div>
                </Col>

            </Row>
        </>


    )
}
