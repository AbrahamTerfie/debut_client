import React from 'react'
import '../../Styles/HeaderComponent.css'
import { Row, Col, Container, FormGroup, Input } from 'reactstrap'
import FilterToolip from './FilterToolip'
export default function HeaderComponent() {
    return (

        <Container className='headerComponent' >
            <Row
                className='headerComponentSearch  mt-4 p-2 mb-4 ml-3 mr-3'     >

                <Col xs='12' sm='12' md='3' lg='3' xl='3' className='logoContainer'  >
                    debut 
                </Col>

                <Col xs='12' sm='12' md='9' lg='9' xl='9'
                    className="searchGroup"
                >
                    <Row>
                        <FormGroup>
                            <Input type="text" name="search" id="search" placeholder="Search" />
                        </FormGroup>
                    </Row>
                    <Row  >
                        <div className='filterContainer' >

                            <FilterToolip filterOption='company size' />
                            <FilterToolip filterOption='company size' />
                            <FilterToolip filterOption='company size' />
                            <FilterToolip filterOption='company size' />
                            <FilterToolip filterOption='company size' />
                            <FilterToolip filterOption='company size' />
                            <FilterToolip filterOption='company size' />
                            <FilterToolip filterOption='company size' />
                        </div>
                    </Row>
                </Col>


            </Row>
            {/* <Row>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
                <Col>.col</Col>
            </Row>
            <Row>
                <Col xs="3">.col-3</Col>
                <Col xs="auto">.col-auto - variable width content</Col>
                <Col xs="3">.col-3</Col>
            </Row>
            <Row>
                <Col xs="12">.col-6</Col>
                <Col xs="6">.col-6</Col>
            </Row>
            <Row>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
                <Col sm="4">.col-sm-4</Col>
            </Row>
            <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
            </Row>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
            </Row>
            <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
                <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
            </Row> */}
        </Container>
    )
}
