import React from 'react'
import { Col, Row } from 'reactstrap'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import EventCard from '../../../Components/EventCard/EventCard'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer'
import { eventCard } from '../../../types/eventCardType'
import { EVENTS_PAGE } from '../../../GraphQl/index'
import { useQuery } from '@apollo/client'
import Loader from '../../../Components/Loader/Loader'
import { notifyError } from '../../../Components/Notification/Toast'
import { FaSearch } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
export default function Events() {

    const { data, loading, error } = useQuery(EVENTS_PAGE)
    if (loading) return <Loader />
    if (error || !data) { notifyError('Error fetching events') }
    const { getdebutEvents: events } = data

    return (
        <div className='w-100'>
            <Row className=' mb-1 my-auto pt-5 mt-5 px-5 mx-5  ' >
                <h1 className='fw-light fs-1  m-5 mb-3'> Events and  Regisries</h1>
                <p className="text-muted ms-5" >
                    explore events and registries in your community
                </p>
            </Row>
            <Row
                className='d-flex justify-content-evenly   flex-row flex-wrap sticky-xxl-top  ms-5 ps-5 mb-3 ' style={{ zIndex: 2, top: '10%', }}>

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
            <Row className=' mb-1 my-auto  px-5 mx-5  ' >
                <p className='fw-light fs-1  m-5 mb-1'>
                    Featured Events
                </p>
            </Row>
            <Row className='d-flex justify-content-start p-5 ms-2   border border-right-1 bordr-left-0 border-top-0 border-bottom-1 border-muted'>
                {events.map((event: eventCard, index: number) => {
                    return (<Col ><EventCard key={index} event={event} /> </Col>)
                })}
            </Row>
            <Row className='  my-auto  px-5 mx-5  ' >
                <p className='fw-light fs-1  m-5 mb-1'>New &  upcomming  </p>
            </Row>
            <Row className='d-flex justify-content-start shadow   p-5 ms-2  border border-right-1 bordr-left-0 border-top-0 border-bottom-1 border-muted'>
                {events.map((event: eventCard, index: number) => {
                    return (<Col sm={6} md={3} lg={3} xl={3}><EventCard key={index} event={event} /></Col>)
                })}
            </Row>
        </div>

    )
}
