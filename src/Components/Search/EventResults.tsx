import React from 'react'
import MotionContainer from '../MotionContainer/MotionContainer'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
import { Col, Row } from 'reactstrap'
import moment from 'moment'

export default function EventResults({ event }: { event: any, }) {
    const navigate = useNavigate()
    return (
        <MotionContainer>
            <Row className='border border-muted  ps-0  bg-secondary  text-muted  '
                onClick={() => navigate(appRoutes.debutEvent + `/${event._id}`)}

            >
                <Col md={3} sm={4} xs={4} lg={2}
                    className='d-flex flex-column justify-content-center align-items-center  mx-auto flex-wrap overflow-hidden  '>
                    <img
                        src={event?.debutEventImage}
                        alt='profile'
                        className='rounded-2 img-fluid  '
                        style={{
                            width: '100px', height: '100px', objectFit: 'cover',
                            maxHeight: '100%', minWidth: '100px', minHeight: '100px'
                        }} />
                </Col>
                <Col md={9} sm={8} xs={8} lg={10}
                    className='d-flex flex-column justify-content-center align-items-start mx-auto flex-wrap overflow-hidden  text-light '>
                    <p className='fw-bolder fs-5 m-0' >
                        {event.debutEventName}
                    </p>
                    <span className=' text-muted' >
                        {event.debutEventDescription?.length > 150 ? event.debutEventDescription?.slice(0, 150) + "..." : event.debutEventDescription}
                    </span>
                    <p className=' fw-bold'>
                        {moment(event.debutEventDate).format('MMMM Do YYYY')}
                    </p>
                </Col>

            </Row>
        </MotionContainer >
    )
}
