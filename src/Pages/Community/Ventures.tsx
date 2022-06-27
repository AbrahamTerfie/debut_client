import React from 'react'
import { Row, Col } from 'reactstrap'
import VentureCards from '../../Components/VentureCards/VentureCards'
import FilterVenture from '../../Components/FilterVentures/FilterVenture'
import './People.css'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'

export default function Ventures() {
    return (
        <div  >
            <Row>
                <Col className='filterContainer m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
                    <FilterVenture />
                </Col>

                <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >
                    <Row className='searchInput mb-1 mt-4' >
                        <p className='fw-bolder fs-3'> Venture Directory </p>
                        <SearchComponent />
                    </Row>
                    <Row className='m-3'>
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />
                        <VentureCards />

                    </Row>


                </Col>
            </Row>

        </div>
    )
}
