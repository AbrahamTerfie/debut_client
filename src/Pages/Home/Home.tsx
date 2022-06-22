import React from 'react'
import { Row, Col, Container, FormGroup, Input, Collapse } from 'reactstrap'
import '../../Styles/HomeStyles/HomeStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import NavBarComponent from '../../Components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'
export default function Home() {

    const { isSidebarOpen } = useSelector((store: RootState) => store.sideBarOpen)
    return (
        <>

            <div className='m-4' >
                <NavBarComponent />

            </div>

            <Outlet />
            {/* <Container>

                <Row>

                    <Col xs='12' sm='12' md='3' lg='3' xl='3' className=' m-3' >
                        <Collapse isOpen={isSidebarOpen}>
                            <div className='sideBarContainer'>

                                where the sidebar goes
                            </div>
                        </Collapse>
                    </Col>


                    <Col xs='12' sm='12' md='7' lg='8' xl='8' className='pageView m-3'  >
                        <Row xs='12' sm='12' md='12' lg='12' xl='12' className=' HomeHeaderElement'  >
                            <Row>
                                <Col xs='12' sm='12' md='3' lg='3' xl='3' className='headerLogo' >
                                    debut
                                </Col>
                                <Col className='headerSearchComponent mt-3' >
                                    <FormGroup>
                                        <Input type="text" name="search" id="search" placeholder="Search" />
                                    </FormGroup>
                                </Col>

                                <Row>
                                </Row>
                            </Row>

                        </Row>


                    </Col>
                </Row>



            </Container> */}
        </>
    )
}
