import React from 'react'
import '../../Styles/Landing.css'

import { LandingCard } from '../../Components/index'
import { Row, Col, Container } from 'reactstrap'
import { FaHandsHelping, FaHandPointUp, FaHandHoldingHeart } from 'react-icons/fa'
import { VscDebugStart } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
import LandingScroll from '../../animations/Framer/LandingScroll'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

const iconProperties = {
    size: 40,
    color: '#87ceeb'

}


export default function Landing() {
    return (


        <Container fluid className="p-4" >

            <div>
                <Parallax pages={3} style={{ top: '0', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={1.5}
                        className='d-flex justify-content-start align-items-center
                        flex-column p-3 mx-2 my-5
                        '
                    >


                        <Row className='headerText'  >
                            <p>Debut</p>
                        </Row>
                        <p className='fs-4 m-0' >Scroll down</p>
                        <p className='text-muted m-0' > to learn more </p>

                    </ParallaxLayer>

                    {/* <ParallaxLayer offset={1} speed={1} /> */}

                    <ParallaxLayer

                        offset={0.5}
                        speed={0.5}
                        style={{
                            backgroundColor: '#A2BCE0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'lightblue',
                        }}>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col md={5} className="shadow-sm  p-5 rounded mx-2 border border-light" >
                                <p
                                    className='fs-6 fw-lighter text-start text-light '>
                                    Debut is a digital platform aimed at helping founders mobilize
                                    their village (family, friends and extended network) to help launch their startup or project.
                                    Think “baby-shower for your startup”.
                                </p>

                            </Col>
                            <Col md={5} className="shadow-sm  p-5 rounded  forumCardParent mx-2" >
                                <Link to={appRoutes.authentication}>
                                    <div className=" p-4 d-flex justify-content-center align-items-center ">
                                        <VscDebugStart
                                            className='mx-3'
                                            size={30}
                                            color='#87ceeb' />
                                        <div>
                                            <p className='m-0 fs-3' >get started </p>
                                            <span className='text-muted' >
                                                sign up or login
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>

                        <p>Scroll up</p>
                    </ParallaxLayer>
                    {/* <ParallaxLayer offset={2} speed={2} style={{  }} /> */}


                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                            backgroundColor: 'lightgray',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'lightblue',
                        }}>
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

                        <p>Scroll up</p>
                    </ParallaxLayer>


                </Parallax>

            </div>


        </Container>
    )
}
