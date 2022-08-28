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
        <Row
            className=' d-flex page m-5'
        >

            {/* <FilterVenture /> */}

            <p className='fw-bolder fs-3'> Venture Directory  </p>
            <SearchComponent />



            <VentureCards
                ventureName="{venture.businessName}"
                ventureDescription="{venture.businessDescription}"
                ventureId="{venture._id}"
                ventureOwner="{venture.businessOwner.firstName}"
                ventureAdress="{venture.businessAddress} "
            />
            <VentureCards
                ventureName="{venture.businessName}"
                ventureDescription="{venture.businessDescription}"
                ventureId="{venture._id}"
                ventureOwner="{venture.businessOwner.firstName}"
                ventureAdress="{venture.businessAddress} "
            />
            <VentureCards
                ventureName="{venture.businessName}"
                ventureDescription="{venture.businessDescription}"
                ventureId="{venture._id}"
                ventureOwner="{venture.businessOwner.firstName}"
                ventureAdress="{venture.businessAddress} "
            />


        </Row>
    )
}
