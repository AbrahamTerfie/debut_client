
import React from 'react'
import { Row, Col } from 'reactstrap'
import DebutEventCards from '../../Components/DebutEventCards/DebutEventCards'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
export default function DebutEvents() {
    return (

        <Row className='p-5 d-flex page ' >
            <Col className=' m-3' xs='10' sm='10' md='8' lg='2' xl='2' >

                <p className='fw-bolder fs-3  mt-3'   > Debut Events </p>
                <p>
                    Explore the events that are happening in  your community.
                    and join the ones that you like. and show your support.
                </p>

            </Col>

            <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >

                <Row className='searchInput mb-1 mt-4' >
                    <p className='fw-bolder fs-3'> Debut Events</p>

                    <SearchComponent />
                </Row>
                <Row className='m-3'>
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                    <DebutEventCards />
                </Row>


            </Col>
        </Row>


    )
}
