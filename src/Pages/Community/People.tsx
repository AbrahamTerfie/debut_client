import React from 'react'
import { Row, Col } from 'reactstrap'
import PeopleCards from '../../Components/PeopleCards/PeopleCards'
import FilterPeople from '../../Components/FilterPeople/FilterPeople'
import './People.css'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
export default function People() {
    return (

            <Row className='px-5 d-flex page ' >
                <Col className='filterContainer m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
                    <FilterPeople />
                </Col>
                <Col className=' mainPageContainer' xs='10' sm='10' md='8' lg='8' xl='8' >
                    <Row className='searchInput mb-1 mt-4' >
                        <h5> People Directory </h5>
                        <SearchComponent />
                    </Row>
                    <Row className='m-3'>
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                        <PeopleCards />
                    </Row>
                </Col>
            </Row>
    )
}
