import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import VentureCards from '../../../Components/VentureCards/VentureCards'
import FilterVenture from '../../../Components/FilterVentures/FilterVenture'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { useQuery } from '@apollo/client'
import { GET_ALL_VENTURES } from '../../../GraphQl/index'
import Loader from '../../../Components/Loader/Loader'
export default function Ventures() {

    const { loading, error, data } = useQuery(GET_ALL_VENTURES)
    if (loading) return <Loader />

    if (data) console.log('venture data', data.getdebutCompanies)

    return (
        <Row className=' d-flex page m-5  '>

            {/* <FilterVenture /> */}

            <p className='fs-2 fw-lighter mx-5 px-5 '>  discover ventures</p>
            <SearchComponent />

            {data && data.getdebutCompanies.map((item: any) => {
                return (

                    <VentureCards
                        key={item._id}
                        _id={item._id}
                        companyName={item.companyName}
                        companyMissionStatement={item.companyMissionStatement}
                        companyHeadquarters={item.companyHeadquarters}
                        companyWebsite={item.companyWebsite}
                        companyLogo={item.companyLogo}
                        jobBoard={item.jobBoard}
                        linkedInUrl={item.linkedInUrl}
                        twitterUrl={item.twitterUrl}
                        instagramUrl={item.instagramUrl}
                        facebookUrl={item.facebookUrl}
                        majorAchivements={item.majorAchivements}
                        companyDescription={item.companyDescription}
                        companyServivesGeography={item.companyServivesGeography}
                        aeraOfOperation={item.aeraOfOperation}
                        companySize={item.companySize}
                        companyCategory={item.companyCategory}
                        companyOwner={item.companyOwner}
                        debutEvents={item.debutEvents}



                    />

                )

            }
            )}



        </Row>
    )
}
