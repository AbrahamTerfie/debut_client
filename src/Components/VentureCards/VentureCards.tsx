
import React, { useState } from 'react'
import { Row, Col, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import './VentureCards.css'
import { useNavigate } from 'react-router-dom'
import DebutEventCards from '../DebutEventCards/DebutEventCards'
import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
} from 'react-icons/fa'


export default function VentureCards(
    {
        _id,
        companyName,
        companyMissionStatement,
        companyHeadquarters,
        companyWebsite,
        companyLogo,
        jobBoard,
        linkedInUrl,
        twitterUrl,
        instagramUrl,
        facebookUrl,
        majorAchivements,
        companyDescription,
        companyServivesGeography,
        aeraOfOperation,
        companySize,
        companyCategory,
        companyOwner,
        debutEvents,

    }: any

) {

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
                    <h3 className="text-center">{companyName}</h3>
                    <h6 className="text-start text-muted"   >  {companyWebsite} </h6>

                </OffcanvasHeader>
                <OffcanvasBody className='p-5 pt-1' >
                    <Row>
                        <Col md={7}>
                            <small className=' fw-light text-muted  m-0'> mission statemeny </small>
                            <p> {companyMissionStatement} </p>
                            <small className='fs-6 fw-light text-muted  m-0'> Description </small>
                            <p className='fs-5 fw-light mb-3' >{companyDescription}</p>
                            <small className=' fw-light text-muted  m-0'> Company owner </small>
                            <p className='fs-5 fw-light mb-3' > company owner  </p>
                            <small className=' fw-light text-muted  m-0'> company achivements </small>
                            <div className='d-flex flex-wrap' >
                                {majorAchivements?.map((item: any) => (
                                    <p className='m-2'
                                        key={item.index}
                                    >{item}</p>
                                ))}

                            </div>
                        </Col>
                        <Col md={5}>
                            <img
                                className="w-75 shadow-sm p-4 rounded"
                                src={companyLogo}
                                alt="" />
                            <div className="d-flex justify-content-around mb-5 mt-3">
                                <a href={linkedInUrl ? linkedInUrl : ""}>
                                    <FaLinkedin className='mx-3' size={25} />
                                </a>
                                <a href={twitterUrl ? twitterUrl : ""}>
                                    <FaTwitter size={25} className='mx-3' />
                                </a>
                                <a href={facebookUrl ? facebookUrl : ""} >
                                    <FaFacebook className='mx-3' size={25} />
                                </a>
                                <a href={instagramUrl ? instagramUrl : ""}>
                                    <FaInstagram className='mx-3' size={25} />
                                </a>

                            </div>
                            <small className=' fw-light text-muted ' >aera of operations </small>
                            <div className='d-flex flex-wrap' >
                                {aeraOfOperation?.map((item: any) => (
                                    <p className='m-2' >{item}</p>
                                ))}
                            </div>
                            <small className=' fw-light text-muted  m-0'>  active on regions </small>
                            <div className='d-flex flex-wrap' >
                                {companyCategory?.map((item: any) => (
                                    <p className='m-2' >{item}</p>
                                ))}
                            </div>
                        </Col>
                    </Row>

                        {debutEvents?.map((item: any) => (
                            <DebutEventCards
                                _id={item._id}
                                createdBy={item.createdBy}
                                belongsTo={item.belongsTo}
                                debutEventName={item.debutEventName}
                                debutEventDescription={item.debutEventDescription}
                                debutEventDate={item.debutEventDate}
                                debutEventImage={item.debutEventImage}
                            />
                        ))}

                </OffcanvasBody>
            </Offcanvas>

            <Row className=' d-flex my-2 py-3 flex-wrap justify-content-between rounded-5 shadow-sm  companyCard'
                onClick={toggle}>
                <Col md={2}  >
                    <img
                        className='w-50'
                        src={companyLogo}
                        alt='user profile photo' />
                </Col>
                <Col md={10}>
                    <p className='fw-bolder fs-3 m-2' > {companyName} </p>
                    <p className='fs-light m-2' >{companyDescription} </p>
                    <p className='text-muted m-2'>  {companyHeadquarters} </p>
                    <div className='ventureOwner d-flex'>
                        <img src={companyOwner?.profileImage}
                            alt='user profile photo'

                        />
                        <p className='mx-2  fs-6 text-muted fw-normal' > {companyOwner?.firstName + "  " + companyOwner?.lastName} </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}
