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
import waveSvg from '../../Svg/waveSvg.svg'
const iconProperties = {
    size: 40,
    color: 'white'

}


export default function Landing() {
    return (


        <Container fluid className="p-4" >


            <Parallax pages={2} style={{
                top: '0', left: '0',



            }}>
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

                <ParallaxLayer

                    offset={0.8}
                    speed={0.5}
                    style={{
                        backgroundColor: '#1985a1',
                        color: 'lightblue',
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
                        <Col md={5} className="shadow-sm  p-5 rounded  forumCardParent  border-light mx-2" >
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

                </ParallaxLayer>
                {/* <ParallaxLayer offset={0.8} speed={2} style={{}} >
                        <LandingScroll />
                    </ParallaxLayer> */}


                <ParallaxLayer
                    offset={1}
                    speed={2}
                    style={{
                        // backgroundColor: 'lightgray',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'lightblue',
                        backgroundImage: `url(${waveSvg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundBlendMode: 'multiply',

                        // import svg from svg and make it background 

                    }}>
                    <div className='landing-container' >
                        <LandingCard
                            title='ask for help'
                            icon={<FaHandsHelping
                                color="white"

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
                {/* <ParallaxLayer
                    offset={1.6}
                    speed={1}
                    style={{
                      
                    }}
                /> */}



            </Parallax>




        </Container>
    )
}
