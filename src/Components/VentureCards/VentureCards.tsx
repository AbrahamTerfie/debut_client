
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
                <OffcanvasHeader onClick={toggle} className="px-5 py-5" >
                    <p className='fs-6 fw-light text-muted  m-0'> Name </p>
                    <h3 className="text-center">{ventureName}</h3>
                    <h6 className="text-start text-muted"   >  www,websiteofthis </h6>




                </OffcanvasHeader>
                <OffcanvasBody className='p-5 pt-1' >
                    <Row>
                        <Col md={7}>

                            <small className=' fw-light text-muted  m-0'> category </small>
                            <p>companyCategory</p>
                            <small className=' fw-light text-muted  m-0'> owner </small>
                            <p>firstName lastName</p>
                            <small className='fs-6 fw-light text-muted  m-0'> Description </small>
                            <p className='fs-5 fw-light mb-3' >{ventureDescription}</p>
                            <small className=' fw-light text-muted  m-0'> Company owner </small>

                            <p className='fs-5 fw-light mb-3' >{ventureOwner}</p>

                            <small className=' fw-light text-muted  m-0'> company achivements </small>
                            <div className='d-flex flex-wrap' >
                                <p className='m-2'  >this achivements achivements achivements ,</p>
                                <p className='m-2' >this also svhivement ,</p>
                                <p className='m-2'>this achivements,</p>
                                <p className='m-2'> this also svhivement,</p>
                                <p className='m-2'>this achivements,</p>
                                <p className='m-2'>this also svhivement,</p>
                            </div>


                            <small className=' fw-light text-muted  m-0'> company achivements </small>
                            <p>comapny size</p>


                            <small className=' fw-light text-muted  m-0'> debut events  </small>

                            <p>debutEvents</p>
                            {/* <p>companyFollowers</p>
                            <p>companyRegestry</p> */}


                        </Col>
                        <Col md={5}
                        >
                            <img
                                className="w-100 shadow"
                                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                                alt="" />
                            <div className="d-flex justify-content-around mb-5 mt-3">
                                <a href="https://www.linkedin.com/in/joseph-mwaura-b8a8a817b/">
                                    <FaLinkedin className='mx-3' size={25} />
                                </a>
                                <a href="https://twitter.com/josephmwaura">
                                    <FaTwitter size={25} className='mx-3' />
                                </a>
                                <a href="https://www.facebook.com/josephmwaura">
                                    <FaFacebook className='mx-3' size={25} />
                                </a>
                                <a href="https://www.instagram.com/josephmwaura/">
                                    <FaInstagram className='mx-3' size={25} />
                                </a>

                            </div>
                            <small className=' fw-light text-muted ' >aera of operations </small>
                            <div className='d-flex flex-wrap' >
                                <p className='m-2' >africa</p>
                                <p className='m-2' >europe</p>
                                <p className='m-2' >asia</p>
                                <p className='m-2' >north america</p>
                                <p className='m-2' >south america </p>
                                <p className='m-2' >austrilia</p>
                            </div>

                            <small className=' fw-light text-muted  m-0'>  active on regions </small>
                            <div className='d-flex flex-wrap' >
                                <p className='m-2' >africa</p>
                                <p className='m-2' >europe</p>
                                <p className='m-2' >asia</p>
                                <p className='m-2' >north america</p>
                                <p className='m-2' >south america </p>
                                <p className='m-2' >austrilia</p>
                            </div>



                        </Col>
                    </Row>
                    <Row className='border border-light' >

                        <p> company events </p>
                        {/* <p>companyFollowers</p>
            <p>companyRegestry</p> */}
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
