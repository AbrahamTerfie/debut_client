
import React from 'react'
import { Row, Col, Container, Input, Button } from 'reactstrap'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import MyVentureCard from '../../../Components/MyVentureCard/MyVentureCard'
export default function BusinessPage() {
    return (
        <div  >
            <Row>
                <Col className='mt-4 m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
                    <h4> My Businesses </h4>
                    <p>
                        List of all your ventures.
                    </p>
                </Col>

                <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >
                    <Row className='searchInput mb-1 mt-4' >
                        <h5> My Ventures   </h5>
                        <SearchComponent />
                    </Row>
                    <Row className='m-3'>
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                        <MyVentureCard />
                    </Row>
                </Col>
            </Row>

        </div>
    )
}
