import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import VentureCards from '../../../Components/VentureCards/VentureCards'
import FilterVenture from '../../../Components/FilterVentures/FilterVenture'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { useQuery } from '@apollo/client'
import { ALL_VENTURES } from '../../../GraphQl/Queries/index'
import Loader from '../../../Components/Loader/Loader'
export default function Ventures() {

    // const { data, loading, error } = useQuery(ALL_VENTURES)

    // if (loading) return <Loader />
    // if (error) return <div  > Error!</div >
    // if (error) console.log("error", error)
    // console.log('from use query', data.getAllBusinesses)
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
                {/* <Row className='my-3'>
                    {data.getAllBusinesses.map((venture: any, index: any) => {
                        return <VentureCards
                            ventureName={venture.businessName}
                            ventureDescription={venture.businessDescription}
                            ventureId={venture._id}
                            ventureOwner={venture.businessOwner.firstName}
                            ventureAdress={venture.businessAddress} />
                    })}

                </Row> */}
            </Col>

        </Row>
    )
}
