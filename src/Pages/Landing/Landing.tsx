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
import { LandingCard2, LandingCard3 } from '../../Components/LandingCard2/LandingCard2'

const iconProperties = {
    size: 40,
    color: 'white'

}

export default function Landing() {

    return (
        <Container fluid className="p-4" >
            <Parallax pages={3} style={{
                top: '0', left: '0',

            }}>
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
                    }}
                    className="mb-5"
                >
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
                    speed={1}
                    // factor={1.5}
                    style={{
                        backgroundColor: '#1985a1',
                        color: 'lightblue',
                        backgroundSize: 'cover',
                        height: "100vh"
                    }}>
                    <p className=' text-center text-light fw-lighter my-5 py-5'>
                        our solutoin for mobilizing your village
                    </p>
                    <Row  >
                        <div className="
                        d-flex justify-content-evenly flex-wrap flex-row
                         align-items-center mt-3 pt-3 my-5 py-5
                        " >
                            <LandingCard2
                                number={1}
                                title='set start up goals '
                                text="define your professional goal with guidance from our AI system.                                "
                            />
                            <LandingCard2
                                number={2}
                                title='set timeline '
                                text="define timeline of your goals "
                            />
                            <LandingCard2
                                number={3}
                                title='small commitments'
                                text="Debut breaks the goal to incremental “small offers"
                            />
                        </div>
                    </Row>
                    <Row  >
                        <div className="
                        d-flex justify-content-evenly flex-wrap flex-row
                         align-items-center my-3" >

                            <LandingCard3
                                number={3.1}
                                title="recomendations"
                                text="Debut will make bespoke recommendations to utilize your community and remove the friction in: asking for help, getting help and giving gratitude. "
                            />

                            <LandingCard3
                                number={3.2}
                                title='follow up and reward'
                                text="Consistently follow up and reward your community with gratitude, shares, and other creative ways. "
                            />
                            <LandingCard3
                                number={3.3}
                                title='rrevise targets'
                                text="customize the plan"
                            />
                        </div>
                    </Row>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.5}
                    speed={0.5}
                    factor={2}

                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'start',
                        backgroundImage: `url(${waveSvg})`,
                        backgroundSize: 'cover',
                        height: "160vh",
                    }}>
                    <Row>
                        <Col md={6} >
                            <h1 className=' fs-0 px-5 fw-bold text-center  '>
                                our soluton for goal managemnt
                            </h1>
                        </Col>
                        <Col md={6} >
                            <div className='px-5' >
                                <LandingAccordion />
                            </div>
                        </Col>
                    </Row>
                    <p className=' pb-5  mb-5 fw-lighter  text-light fixed-bottom text-center' >
                        @ debut 2022
                    </p>
                </ParallaxLayer>

            </Parallax>
        </Container>
    )
}
