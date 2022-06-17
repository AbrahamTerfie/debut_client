import React from 'react'
import '../../Styles/Landing.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { LandingCard } from '../../Components/index'
import { Row, Col, Container, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { FaHandsHelping, FaHandPointUp, FaHandHoldingHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
const iconProperties = {
    size: `3em`,
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
                    <Row>
                        <Col lg={6} sm={12} md={12}
                            className='textLeft'>

                            Debut is a digital platform aimed at helping founders mobilize
                            their village (family, friends and extended network) to help launch their startup or project.
                            Think “baby-shower for your startup”.

                        </Col>
                        <Col lg={3} sm={12} md={12} className="linkContainer"  >
                            <Link to={appRoutes.authentication}>
                                <div className="getStartedButton m-4"   >
                                    get started
                                </div>
                            </Link>


                        </Col>
                    </Row>


                </Container  >
                <div className='landing-container' >

                    <LandingCard
                        title='ask for help'
                        icon={<FaHandsHelping {...iconProperties} />} />

                    <LandingCard
                        title='frictionless help'
                        icon={<FaHandPointUp {...iconProperties} />} />

                    <LandingCard
                        title='follow up with gratitude'
                        icon={<FaHandHoldingHeart {...iconProperties} />} />



                </div>
            </>

        </Container>
    )
}
