
import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import MyVentureCard from '../../../Components/MyVentureCard/MyVentureCard'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../../Routes/routes'
export default function BusinessPage() {

    const navigate = useNavigate()
    return (

        <Row className='px-5 d-flex page'  >
            <Col className='mt-5 m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
                <p className='fw-bolder fs-3'> My Business Ventures </p>
                <p> List of all your ventures. </p>
                <Button className=' my-3 mx-auto w-100' outline color='light'
                    onClick={() => navigate(appRoutes.newVenture)}>
                    Add Venture
                </Button>
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


    )
}
