import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import VentureCards from '../../../Components/VentureCards/VentureCards'
import FilterVenture from '../../../Components/FilterVentures/FilterVenture'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { useQuery } from '@apollo/client'
import { GET_ALL_VENTURES } from '../../../GraphQl/index'
import Loader from '../../../Components/Loader/Loader'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer'
import { MdSearch } from 'react-icons/md'
import { BsGear } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
export default function Ventures() {

    const { loading, error, data } = useQuery(GET_ALL_VENTURES)
    if (loading) return <Loader />

    if (data) console.log('venture data', data.getdebutCompanies)

    return (
        <div className=' d-flex  m-5  flex-column '>
            <p className='fs-1 fw-light mx-5 px-5 '> Discover ventures</p>
            <Row className='mx-4  d-flex justify-content-center'>
                <Col md={10} > <SearchComponent /> </Col>
                <Col md={1} >
                    <MotionContainer>
                        <div className='shadow-sm rounded rounded-5   p-2 m-1  me-2 bg-success bg-opacity-10   text-success align-items-center justify-content-center d-flex'>
                            <FaSearch />
                        </div>
                    </MotionContainer>
                </Col>
                <Col md={1} >
                    <MotionContainer>
                        <div className='shadow-sm rounded rounded-5   p-2 m-1  me-2 bg-warning bg-opacity-10   text-warning align-items-center justify-content-center d-flex'>
                            <IoMdSettings />
                        </div>
                    </MotionContainer>

                </Col>
            </Row>
            <Row 
            className='d-flex justify-content-center px-5 mt-5'
            >
                {data?.getdebutCompanies.map((item: any) => {
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
                })}
            </Row>



        </div >
    )
}
