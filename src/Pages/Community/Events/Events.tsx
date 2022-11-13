import React from 'react'
import { useNavigate, } from 'react-router-dom'
import { Button, Row } from 'reactstrap'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { appRoutes } from '../../../Routes/routes'
import EventCard from '../../../Components/EventCard/EventCard'
import { MdSearch, MdSettings } from 'react-icons/md'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer'
import { eventCard } from '../../../types/eventCardType'
import { EVENTS_PAGE } from '../../../GraphQl/index'
import { useQuery } from '@apollo/client'
import Loader from '../../../Components/Loader/Loader'
import { notifyError } from '../../../Components/Notification/Toast'
export default function Events() {


    const { data, loading, error } = useQuery(EVENTS_PAGE)

    if (loading) return <Loader />
    if (error || !data) { notifyError('Error fetching events') }
    console.log("events data", data)

    const { getdebutEvents: events } = data

    return (
        <div className='m-5 p-5  d-flex flex-column' >

            <h1 className=' fw-light mt-5 ' > Explore Events </h1>

            <div className='d-flex justify-content-start align-items-center  m-5' >
                <SearchComponent />

                <MotionContainer>
                    <div className='d-flex justify-content-between align-items-center bg-success bg-opacity-10 p-2 rounded-1 m-2 px-5'>
                        <MdSearch className='text-success' size={25} />
                    </div>
                </MotionContainer>
                <MotionContainer>
                    <div className='d-flex justify-content-between align-items-center bg-warning bg-opacity-10 p-2 rounded-1 m-2 px-5'>
                        <MdSettings className='text-warning' size={25} />
                    </div>
                </MotionContainer>
            </div>
            <p className='fs-3 text-success fw-light m-2 mx-5 '> Featured  </p>

            <Row className='d-flex  flex-wrap justify-content-start align-items-center shadow p-3' >
                {events.map((event: eventCard) => <EventCard event={event} />)}
            </Row>

            <p className='fs-3 text-success fw-light m-2 mx-5 mt-5'> events around you   </p>
            <Row className='d-flex  flex-wrap justify-content-start align-items-center shadow p-3' >
                {events.map((event: eventCard) => <EventCard event={event} />)}
            </Row>

        </div>

    )
}
