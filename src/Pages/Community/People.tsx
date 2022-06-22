import React from 'react'
import { Row, Col, Container, Input } from 'reactstrap'
import PeopleCards from '../../Components/PeopleCards/PeopleCards'
import './People.css'
export default function People() {
    return (
        <div  >
            <Row>
                <Col className='filterContainer m-4' xs='10' sm='10' md='8' lg='3' xl='3' >

                    this is the filter pannel
                </Col>

                <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >
                    <Row className='searchInput mb-4' >
                        <Input
                            color='primary'
                            type="text"
                            name="textarea-input"
                            placeholder='Search'
                            prepend="Search"
                        />
                    </Row>

                    <Row className='m-3'>
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />

                    </Row>


                </Col>
            </Row>

        </div>
    )
}
