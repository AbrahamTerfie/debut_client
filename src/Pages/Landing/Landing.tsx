import React from 'react'
import '../../Styles/Landing.css'

import { LandingCard } from '../../Components/index'
import { Row, Col, Container } from 'reactstrap'
import { FaHandsHelping, FaHandPointUp, FaHandHoldingHeart } from 'react-icons/fa'
import { VscDebugStart } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
const iconProperties = {
    size: 40,
    color: '#87ceeb'

}


export default function Landing() {
    return (
        <Container fluid className="p-4" >
            <>
                <Row className='headerText'  >
                    Debut
                </Row>
                <Container fluid sm={12} md="12"   >
                    <Row
                        className='d-flex justify-content-center align-items-center'
                    >
                        <Col md={5}
                            className="shadow-sm  p-5 rounded mx-2"
                        >
                            <p
                                className='fs-6 fw-lighter text-start'>
                                Debut is a digital platform aimed at helping founders mobilize
                                their village (family, friends and extended network) to help launch their startup or project.
                                Think “baby-shower for your startup”.
                            </p>

                        </Col>
                        <Col md={5} className="
                            shadow-sm  p-5 rounded  forumCardParent mx-2"
                        >
                            <Link to={appRoutes.authentication}>
                                <div className=" p-5 "   >
                                    <p className='m-0' >
                                        <VscDebugStart
                                            className='mx-3'
                                            size={20}
                                            color='#87ceeb'

                                        />
                                        get started
                                    </p>
                                </div>
                            </Link>
                        </Col>
                    </Row>


                </Container  >
                <div className='landing-container' >

                    <LandingCard
                        title='ask for help'
                        icon={<FaHandsHelping
                            size={iconProperties.size}
                            color={iconProperties.color}
                        />} />

                    <LandingCard
                        title='frictionless help'
                        icon={<FaHandPointUp size={iconProperties.size}
                            color={iconProperties.color} />} />

                    <LandingCard
                        title='follow up with gratitude'
                        icon={<FaHandHoldingHeart size={iconProperties.size}
                            color={iconProperties.color} />} />



                </div>
            </>

        </Container>
    )
}
