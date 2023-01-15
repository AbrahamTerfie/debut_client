import React, { useState, useEffect } from 'react'
import { Row, Col, Pagination, PaginationItem, PaginationLink, FormGroup, Input } from 'reactstrap'
import VentureCards from '../../../Components/VentureCards/VentureCards'

import { useQuery, useLazyQuery } from '@apollo/client'
import { GET_ALL_VENTURES, SearchVenture } from '../../../GraphQl/index'
import Loader from '../../../Components/Loader/Loader'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer'
import { FaSearch } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { notifyError } from '../../../Components/Notification/Toast'


import VentureResults from '../../../Components/Search/VentureResults'


type Company = {
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


type VentureReturns = {
    TotalAmount: number,
    Ventures: [Company]

}
export default function Ventures() {
    const [pagination, setPagination] = useState<{ limit: number, offset: number, allcompany: number }>({
        limit: 20,
        offset: 0,
        allcompany: 0,
    })
    const { loading, error, data } = useQuery<{ getdebutCompanies: VentureReturns }>(GET_ALL_VENTURES, {
        variables: {
            limit: pagination.limit,
            offset: pagination.offset
        },
    })

    const [search, setSearch] = useState<string>('')
    const [searchVenture, { loading: searchLoading, error: searchError, data: searchData }] = useLazyQuery(SearchVenture, {
        variables: {
            searchParam: search
        }
    })
    console.log(searchData)

    useEffect(() => {
        setPagination({
            ...pagination,
            allcompany: data?.getdebutCompanies.TotalAmount ?? 0

        })
    }, [data?.getdebutCompanies.TotalAmount])


    const nextPage = () => {
        pagination.offset + pagination.limit < pagination.allcompany &&
            setPagination({ ...pagination, offset: pagination.offset + pagination.limit })
    }
    const prevPage = () => {
        pagination.offset > 0 &&
            setPagination({ ...pagination, offset: pagination.offset - pagination.limit })
    }
    const firstPage = () => {
        pagination.offset > 0 &&
            setPagination({ ...pagination, offset: 0 })
    }
    const lastPage = () => {
        pagination.offset + pagination.limit < pagination.allcompany &&
            setPagination({
                ...pagination, offset: Math.floor(
                    pagination.allcompany / pagination.limit) * pagination.limit
            })
    }
    // refetch()







    if (loading) return <Loader />
    if (error || searchError) { notifyError("something went wrong ") }

    const companies = data?.getdebutCompanies.Ventures ?? []



    return (
        <div className='w-100'>
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
                    <Row>
                        <FormGroup>
                            <Input
                                className='App'
                                type="text"
                                name="textarea-input"
                                placeholder='Search using name or email ... '
                                onChange={(e) => setSearch(e.target.value)}
                                value={search} />
                        </FormGroup>
                        <div className='w-75 position-absolute mt-5   shadow-lg'
                            style={{ zIndex: 1000, maxHeight: '300px', overflowY: 'scroll' }}>
                            {searchLoading ? <div>
                                <p className='text-center text-warning bg-muted py-5 ' > please wait  ....</p>
                            </div> : searchData.searchCompanyWithParam?.length === 0 && search.length !== 0 ?
                                <p className='text-center text-warning py-5 bg-muted ' >  no match foud.</p>
                                :
                                searchData?.searchCompanyWithParam.map((venture: any) => {
                                    return (<VentureResults key={venture._id}
                                        ventures={venture} />)
                                })}

                        </div>
                    </Row>
                </Col>
                <Col md={1} >
                    <MotionContainer>
                        <div className='shadow-sm rounded rounded-5   p-2 m-1  me-2 bg-success bg-opacity-10   text-success align-items-center justify-content-center d-flex'
                            onClick={() => searchVenture()}
                        >
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
            <Row className='d-flex justify-content-center px-5 ms-2 mt-5 w-100'>
                {companies.map((item: Company, index: number) => (
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
            <Row>
                {/* paginaton  */}
                <Pagination className='d-flex justify-content-center align-items-center  my-5 ' size="md">
                    <PaginationItem>
                        <PaginationLink first onClick={firstPage}>
                            first
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={prevPage}>
                        <PaginationLink previous />
                    </PaginationItem>
                    <PaginationItem onClick={nextPage}>
                        <PaginationLink next />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last onClick={lastPage}>
                            last
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </Row>
        </div>
    )
}


