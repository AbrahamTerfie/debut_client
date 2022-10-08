import React, { useState } from 'react'
import '../../Styles/Landing.css'

import { LandingCard } from '../../Components/index'
import { Row, Col, Container } from 'reactstrap'
import { FaHandsHelping, FaHandPointUp, FaHandHoldingHeart } from 'react-icons/fa'
import { VscDebugStart } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import waveSvg from '../../Svg/waveSvg.svg'
import LandingDetailCards from '../../Components/LandingDetailCards/LandingDetailCards'
import { LandingAccordion } from '../../Components/LandingAccordion/LandingAccordion'


const iconProperties = {
    size: 40,
    color: 'white'

}

export default function Landing() {

    return (
        <Container fluid className="p-4" >
            <Parallax pages={2} style={{ top: '0', left: '0', }}>
                <ParallaxLayer
                    offset={0}
                    speed={1.5}
                    className='d-flex justify-content-start align-items-center
                        flex-column p-3 mx-2 my-5'>
                    <Row className='headerText'  >
                        <p>Debut</p>
                    </Row>
                    <p className='fs-4 m-0' >Scroll down</p>
                    <p className='text-muted m-0' > to learn more </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.5}
                    speed={0.5}
                    style={{
                        backgroundColor: '#1985a1',
                        color: 'lightblue',
                        height: "max-content",
                    }}>
                    <Row className='d-flex justify-content-center align-items-center pt-5'>
                        <Col md={5} className="shadow-sm  p-5 rounded mx-2 border border-light" >
                            <p
                                className='fs-6 fw-lighter text-start text-light '>
                                Debut is a digital platform aimed at helping founders mobilize
                                their village (family, friends and extended network) to help launch their startup or project.
                                Think “baby-shower for your startup”.
                            </p>

                        </Col>
                        <Col md={5} className="shadow-sm  p-5 rounded  forumCardParent  border-light border-5 mx-2" >
                            <Link to={appRoutes.authentication}>
                                <div className=" p-4 d-flex justify-content-center align-items-center ">
                                    <VscDebugStart
                                        className='mx-3'
                                        size={30}
                                        color="#ffffff"
                                    />
                                    <div>
                                        <p className='m-0 fs-3 text-light' >get started </p>
                                        <span className='text-light' >
                                            sign up or login
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                    <Row>
                        <div className='landing-container' >
                            <LandingCard
                                title='ask for help'
                                icon={<FaHandsHelping
                                    {...iconProperties}
                                />} />
                            <LandingCard
                                title='frictionless help'
                                icon={<FaHandPointUp
                                    {...iconProperties}
                                />} />
                            <LandingCard
                                title='follow up with gratitude'
                                icon={<FaHandHoldingHeart
                                    {...iconProperties} />} />
                        </div>
                    </Row>
                    <Row>
                        <p className='fs-4 fw-lighter text-center text-light '>
                            mobilize your cimmunity to help with the launch of your idea
                        </p>
                        <LandingDetailCards />
                    </Row>


                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={2}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'start',
                        color: 'lightblue',
                        backgroundImage: `url(${waveSvg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'multiply',
                    }}>

                    <Row>

                        <Col md={6} >
                            <p className='fs-2 px-5 fw-light text-center  '>
                                our soluton for goal managemnt
                            </p>

                            <div>
                                <LandingAccordion />
                            </div>


                        </Col>
                        <Col md={6} >
                            <p className='fs-4 fw-lighter text-center text-dark '>
                                Debut is a digital platform aimed at helping founders mobilize
                                their village (family, friends and extended network) to help launch their startup or project.
                            </p>
                        </Col>
                    </Row>


                    <p className=' p-3 fw-lighter  text-light fixed-bottom text-center' >
                        @ debut 2022
                    </p>

                </ParallaxLayer>

            </Parallax>
        </Container>
    )
}
