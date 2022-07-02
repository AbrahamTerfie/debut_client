
import React from 'react'
import { Row, Col } from 'reactstrap'

import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import MyDebutcards from '../../../Components/MyDebutCards/MyDebutcards'
export default function MyDebutEvents() {
    return (

        <Row className='px-5 d-flex page' >
            <Col className='mt-5 m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
                <p className='fw-bolder fs-3'> My Debut Events </p>

                <p>
                    Explore the events that are happening in  your community.
                    and join the ones that you like. and show your support.
                </p>

            </Col>

            <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >
                <Row className='searchInput mb-1 mt-4' >
                    <h5> Upcomming Events  </h5>
                    <SearchComponent />
                </Row>
                <Row className='m-3'>
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                    <MyDebutcards />
                </Row>

            </Col>
        </Row>

    )
}
