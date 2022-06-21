import React from 'react'
import { Row, Col, Container, FormGroup, Input, Collapse } from 'reactstrap'
import '../../Styles/HomeStyles/HomeStyles.css'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
export default function Home() {

    const { isSidebarOpen } = useSelector((store: RootState) => store.sideBarOpen)
    return (
        <Container>



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
                        <Col xs='12' sm='12' md='3' lg='3' xl='3' className='headerLogo' >
                            debut
                        </Col>
                        <Col className='headerSearchComponent' >
                            <FormGroup>
                                <Input type="text" name="search" id="search" placeholder="Search" />
                            </FormGroup></Col>
                    </Row>
                </Col>
            </Row>



        </Container>
    )
}
