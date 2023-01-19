import React from 'react'
import '../../Styles/Landing.css'

import { LandingCard } from '../../Components/index'
import { Row, Col } from 'reactstrap'
import { BsPlay } from 'react-icons/bs'
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
import MotionContainer from '../../Components/MotionContainer/MotionContainer'


export default function Landing() {
    const {
        loginWithRedirect, isLoading,
        // isAuthenticated, user,
        // logout
    } = useAuth0();
    // console.log(" user object form auth0 hook  ", user)

    if (isLoading) { return <Loader /> }

    return (
        <div>
            <div className='d-flex justify-content-start align-items-center flex-column p-3 mx-2 my-5' >
                <Row className='headerText'  ><p>Debut</p></Row>
                <Row className='d-flex flex-column' >
                    <p className='fs-4 m-0' >Scroll down</p>
                    <p className='text-muted m-0' > to learn more </p>
                </Row>
            </div >
            <Row className='d-flex justify-content-center align-items-center mt-4 pt-5 '>
                <Col md={5} xs={12} sm={12} lg={5} xl={5}
                    className="shadow-sm  p-4 rounded m-5 border border-secondary" >
                    <h3 className=' m-0 fw-bold text-start   flex-wrap   text-secondary   '>
                        <span className='text-warning mx-2'>Debut </span>
                        is a digital platform aimed at helping founders mobilize
                        their village (family, friends and extended network) to help launch their startup or project.
                        Think “baby-shower for your startup”.
                    </h3>
                </Col>
                <Col md={5} xs={12} sm={12} lg={5} xl={5}
                    className="shadow-lg p-5 rounded border    border-warning border-2  m-5 d-flex justify-content-start align-items-start flex-column"
                    onClick={() => { loginWithRedirect({ redirectUri: redirectUri }) }}>
                    <MotionContainer>
                        <div className=" d-flex justify-content-start align-items-center w-100">
                            <BsPlay className='ml-3 text-warning' size={100} />
                            <div>
                                <p className='m-0 fs-1 text-warning' >get started </p>
                                <span className='text-warning' > sign up or login </span>
                            </div>
                        </div>
                    </MotionContainer>
                </Col>
            </Row>
            <Row className='d-flex justify-content-around align-items-center my-5 flex-wrap flex-row '
                style={{ backgroundColor: '#1985a1', color: 'lightblue', height: "max-content", minHeight: 'max-content' }}>
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
            <Row className='fs-2 my-5  p-5  '>
                <Col
                    sm={12} md={12} lg={6} xl={6}
                    className='d-flex justify-content-center align-items-center flex-column' >
                    <span className='fs-2 fw-lighter text-end m-0 '>
                        Share  your startup
                        <p className=' fw-bolder text-end  text-warning m-0 ' style={{ fontSize: 'calc(8.5vw + 1.5vh + 1.5vmin)', }}>
                            registry
                        </p>
                    </span>
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} className='d-flex justify-content-center align-items-center flex-column'>
                    <p className='fs-2 fw-lighter text-center  '>
                        <p className=' fw-bolder text-start  text-warning m-0 ' style={{ fontSize: 'calc(8.5vw + 1.5vh + 1.5vmin)', }}>
                            goals & milestones</p>
                        with your village
                    </p>
                </Col>
            </Row>
            <Row
                className='d-flex justify-content-evenly align-items-center flex-wrap flex-row py-5'
                style={{ backgroundColor: '#1985a1', color: 'lightblue', height: "max-content", minHeight: 'max-content' }}>
                <LandingDetailCards />
            </Row>

            <Row className='d-flex justify-content-evenly align-items-center flex-wrap  my-5'>

                <LandingCard2
                    number={1}
                    icon={<FiTarget size={60} />}
                    title='set start up goals '
                    text="define your professional goal with guidance .  " />
                <LandingCard2
                    number={2}
                    icon={<TbCalendarTime size={60} />}
                    title='set timeline '
                    text="define timeline of your goals " />
                <LandingCard2
                    number={3}
                    icon={<IoCheckmarkCircleOutline size={60} />}
                    title='small commitments'
                    text="Debut breaks the goal to incremental “small offers" />
            </Row>

            <Row className='fs-2 my-5  p-5  bg-warning-subtle '>
                <Col md={6} xs={12} sm={12} lg={6} xl={6} className='d-flex justify-content-center align-items-center flex-column px-5' >
                    <p className='fw-lighter text-start flex-wrap fw-lighter text-warning-emphasis '>
                        <span
                            className='fw-bold m-3 fs-1'
                        >
                            Debut
                        </span>
                        will make bespoke recommendations to utilize your community and remove the friction in
                        <br />
                        <p style={{ color: 'lightblue' }} className='fw-bold my-3 fs-1'>
                            asking for help, getting help and giving gratitude.
                        </p>
                    </p>
                </Col>
                <Col md={6} xs={12} sm={12} lg={6} xl={6} className='d-flex justify-content-center align-items-center flex-column px-5' >
                    <p className='fw-lighter text-end flex-wrap text-warning-emphasis '>
                        Consistently follow up and reward your community with
                        <br />
                        <span style={{ color: 'lightblue' }} className='fw-bold m-5 fs-1'> gratitude, shares, and other creative ways. </span>
                    </p>
                </Col>
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

            <Row className='d-flex justify-content-center align-items-center flex-wrap flex-row mb-5' >
                <Col md={6} >
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
            <Row className={'d-flex  mt-5 pt-5 mb-2 text-centerjustify-content-center align-items-center flex-wrap flex-row  '}
                style={{
                    backgroundImage: `url(${waveSvg})`,
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: window.innerHeight * .5,
                }}>
                <p className='text-light text-center justify-content-end align-items-end flex-wrap flex-row  fw-lighter'>
                    © 2021 Debut. All rights reserved.
                </p>
            </Row>
        </ div >
    )
}
