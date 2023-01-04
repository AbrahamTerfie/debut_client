import React, { memo } from 'react'
import { Row, Col } from 'reactstrap'
import VentureCards from '../../../Components/VentureCards/VentureCards'

import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { useQuery } from '@apollo/client'
import { GET_ALL_VENTURES } from '../../../GraphQl/index'
import Loader from '../../../Components/Loader/Loader'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer'
import { FaSearch } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { notifyError } from '../../../Components/Notification/Toast'

type Venture = {
    _id: string,
    companyName: string,
    companyMissionStatement: string,
    companyHeadquarters: string,
    companyWebsite: string,
    companyLogo: string,
    jobBoard: string,
    linkedInUrl: string,
    twitterUrl: string,
    instagramUrl: string,
    facebookUrl: string,
    majorAchivements: string,
    companyDescription: string,
    companyServivesGeography: string,
    aeraOfOperation: string,
    companySize: string,
    companyCategory: string,
    companyOwner: string,
    debutEvents: string,
}

export default function Ventures() {
    const { loading, error, data } = useQuery<{ getdebutCompanies: Venture[] }>(GET_ALL_VENTURES)

    if (loading) return <Loader />
    if (error) { notifyError(error.message.toString()) }

    const ventures = data?.getdebutCompanies ?? []



    return (
        <div >

            <Row className=' mb-1 my-auto pt-5 mt-5 px-5 mx-5  ' >
                <h1 className='fw-light fs-1  m-5 mb-3'>
                    Venture Directory
                </h1>
                <p className="text-muted ms-5" >
                    Find and connect with other ventures in your industry
                </p>

            </Row>
            <Row
                className='d-flex justify-content-evenly   flex-row flex-wrap sticky-xxl-top  ms-5 ps-5 mb-3 ' style={{ zIndex: 1, top: '10%', }}>

                <Col md={10}>
                    <SearchComponent />
                </Col>
                <Col md={1} >
                    <MotionContainer>
                        <div className='shadow-sm rounded rounded-5   p-2 m-1  me-2 bg-success bg-opacity-10   text-success align-items-center justify-content-center d-flex'>
                            <FaSearch />
                        </div>
                    </MotionContainer>
                </Col>
                <Col md={1} >
                    <MotionContainer>
                        <div className='shado-sm border border-muted rounded rounded-5   p-2 m-1  me-2 bg-warning bg-opacity-10   text-warning align-items-center justify-content-center d-flex'>
                            <IoMdSettings />
                        </div>
                    </MotionContainer>

                </Col>
            </Row>
            <Row className='d-flex justify-content-center px-5 ms-2 mt-5'>
                {ventures.map((item: Venture, index: number) => (
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
                ))}
            </Row>
        </div>
    )
}


