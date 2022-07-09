import React from 'react'
import { Row, Col } from 'reactstrap'
import VentureCards from '../../../Components/VentureCards/VentureCards'
import FilterVenture from '../../../Components/FilterVentures/FilterVenture'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { useQuery } from '@apollo/client'
import { VENTURE_QUERY } from '../../../GraphQl/Queries/VentureQuries/VentureQuery'
export default function Ventures() {

    const { data, loading, error } = useQuery(VENTURE_QUERY)


    if (loading) return <div>Loading...</div>
    if (error) return <div  > Error!</div >
    if (error) console.log("error", error)
    console.log('from use query', data.getAllBusinesses)
    return (
        <Row className=' d-flex page' >
            <Col className='filterContainer m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
                <FilterVenture />
            </Col>

            <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >
                <Row className='searchInput mb-1 mt-4' >
                    <p className='fw-bolder fs-3'> Venture Directory </p>
                    <SearchComponent />
                </Row>
                <Row className='my-3'>
                    {data.getAllBusinesses.map((venture: any, index: any) => {
                        return <VentureCards
                            ventureName={venture.businessName}
                            ventureDescription={venture.businessDescription}
                            ventureId={venture._id}
                            ventureOwner={venture.businessOwner.firstName}
                            ventureAdress={venture.businessAddress} />
                    })}

                </Row>
            </Col>

        </Row>
    )
}
