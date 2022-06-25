
import React from 'react'
import { Row, Col, Container, Input, Button } from 'reactstrap'
import DebutEventCards from '../../../Components/DebutEventCards/DebutEventCards'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import MyDebutcards from '../../../Components/MyDebutCards/MyDebutcards'
export default function MyDebutEvents() {
    return (
        <div  >
            <Row>
                <Col className='mt-4 m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
                    <h4> My Debut Events  Events </h4>
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

        </div>
    )
}
