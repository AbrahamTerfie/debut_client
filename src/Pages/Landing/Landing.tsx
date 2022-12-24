import React from 'react'
import '../../Styles/Landing.css'

import { LandingCard } from '../../Components/index'
import { Row, Col, Container } from 'reactstrap'
import { VscDebugStart } from 'react-icons/vsc'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import waveSvg from '../../Svg/waveSvg.svg'
import LandingDetailCards from '../../Components/LandingDetailCards/LandingDetailCards'
import { LandingAccordion } from '../../Components/LandingAccordion/LandingAccordion'
import { LandingCard2, LandingCard3 } from '../../Components/LandingCard2/LandingCard2'
import { useAuth0 } from '@auth0/auth0-react'
import Loader from '../../Components/Loader/Loader'
import helping from '../../Svg/helping.gif'
import askingHelp from '../../Svg/askingHelp.gif'
import givingHelp from '../../Svg/frictionLessHelp.gif'
import thankyou from '../../Svg/thankyou.gif'
import { redirectUri } from '../../Constants/apiLink'
import { FiTarget } from 'react-icons/fi'
import { TbCalendarTime, TbWriting } from 'react-icons/tb'
import { IoCheckmarkCircleOutline, IoArrowUndoOutline } from 'react-icons/io5'
import { GiThumbUp } from 'react-icons/gi'


export default function Landing() {
    const {
        loginWithRedirect, isLoading,
        // isAuthenticated, user,
        // logout
    } = useAuth0();
    // console.log(" user object form auth0 hook  ", user)

    if (isLoading) { return <Loader /> }

    return (
        <Container fluid className="" >
            <Parallax pages={3} style={{ top: '0', left: '0', bottom: '0', right: '0', position: 'absolute', }}>
                <ParallaxLayer
                    offset={0}
                    speed={1.5}
                    className='d-flex justify-content-start align-items-center 
                        flex-column p-3 mx-2 my-5'>
                    <Row className='headerText'  ><p>Debut</p></Row>
                    <p className='fs-4 m-0' >Scroll down</p>
                    <p className='text-muted m-0' > to learn more </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={0.5} speed={0.5}
                    style={{ backgroundColor: '#1985a1', color: 'lightblue', height: "max-content", }}
                    className="mb-5">
                    <Row className='d-flex justify-content-center align-items-center pt-5  '>
                        <Col md={5} className="shadow-sm  p-4 rounded mx-2 border border-light" >
                            <p
                                className='fs-4 fw-lighter text-start text-light '>
                                Debut is a digital platform aimed at helping founders mobilize
                                their village (family, friends and extended network) to help launch their startup or project.
                                Think “baby-shower for your startup”.
                            </p>

                        </Col>
                        <Col md={5} className="shadow-lg p-5 rounded     border-muted border-5 mx-2"
                            onClick={() => { loginWithRedirect({ redirectUri: redirectUri }) }}>

                            <div className=" d-flex justify-content-center align-items-center ">
                                <VscDebugStart className='mx-3' size={100} color="#ffffff" />
                                <div>
                                    <p className='m-0 fs-1 text-light' >get started </p>
                                    <span className='text-light' > sign up or login </span>
                                </div>
                            </div>

                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-around align-items-center my-5 flex-wrap flex-row '>
                        <LandingCard
                            title='ask for help'
                            icon={<img src={askingHelp} alt="asking help" className="img-fluid" />} />
                        <LandingCard
                            title='frictionless help'
                            icon={<img src={givingHelp} alt="asking help" className="img-fluid" />} />
                        <LandingCard
                            title='follow up with gratitude'
                            icon={<img src={thankyou} alt="asking help" className="img-fluid" />} />
                    </Row>
                    <div className='my-5' >
                        <p className='fs-2 my-5  fw-lighter text-center text-light '>
                            mobilize your cimmunity to help with the launch of your idea
                        </p>
                        <LandingDetailCards />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.3}
                    speed={1}
                    factor={2}
                    style={{
                        backgroundColor: '#1985a1',
                        // color: 'lightblue',
                        backgroundSize: 'cover',
                        height: "max-content",
                    }}>
                    <p className='fs-2 my-5  fw-lighter text-center text-light '>

                        our solutoin for mobilizing your village
                    </p>
                    <Row className="d-flex justify-content-evenly flex-wrap flex-row align-items-center my-3">

                        <LandingCard2
                            number={1}
                            icon={<FiTarget size={60} color="#ffffff" />}
                            title='set start up goals '
                            text="define your professional goal with guidance .  "
                        />
                        <LandingCard2
                            number={2}
                            icon={<TbCalendarTime size={60} color="#ffffff" />}
                            title='set timeline '
                            text="define timeline of your goals "
                        />
                        <LandingCard2
                            number={3}
                            icon={<IoCheckmarkCircleOutline size={60} color="#ffffff" />}
                            title='small commitments'
                            text="Debut breaks the goal to incremental “small offers"
                        />

                    </Row>
                    <Row className="d-flex justify-content-evenly flex-wrap flex-row align-items-center my-5">

                        <LandingCard3
                            number={3.1}
                            icon={<TbWriting size={60} color="#1985a1" />}
                            title="recomendations"
                            text="Debut will make bespoke recommendations to utilize your community and remove the friction in: asking for help, getting help and giving gratitude. "
                        />

                        <LandingCard3
                            number={3.2}
                            icon={<GiThumbUp size={60} color="#1985a1" />}
                            title='follow up and reward'
                            text="Consistently follow up and reward your community with gratitude, shares, and other creative ways. "
                        />
                        <LandingCard3
                            number={3.3}
                            icon={<IoArrowUndoOutline size={60} color="#1985a1" />}
                            title='revise targets'
                            text="customize the plan"
                        />

                    </Row>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.9}
                    speed={0.5}
                    factor={2}

                    style={{
                        backgroundImage: `url(${waveSvg})`,
                        //   positoin image to the bottom
                        backgroundPosition: 'bottom',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        height: window.innerHeight * 1.5,
                        // height: "max-content",

                    }}>
                    <Row
                        // have the dimention of each column doesn't affect the other column
                        className='d-flex justify-content-center align-items-center flex-wrap flex-row'
                    >


                        <Col md={6} >

                            {/* display helping gif here  */}
                            <img src={helping}
                                className='img-fluid'
                                alt="helping gif" />


                        </Col>
                        <Col md={6} >
                            <div className='px-5' >
                                <LandingAccordion />
                            </div>
                        </Col>

                    </Row>
                    <p className=' pb-5  mb-5 fw-lighter  text-light fixed-bottom text-center' >
                        {/* footer   */}
                        © 2021 Debut. All rights reserved.


                    </p>
                </ParallaxLayer>

            </Parallax>
        </Container >
    )
}
