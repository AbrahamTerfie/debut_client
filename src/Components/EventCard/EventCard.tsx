import React from 'react'
import { Col } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
import './EventCard.css'
import { eventCard } from '../../types/eventCardType'
export default function EventCard({ event }: { event: eventCard }) {
    const navigate = useNavigate()
    const background: React.CSSProperties = {

        backgroundImage: `url(${event.debutEventImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        objectFit: 'cover', objectPosition: 'center', borderRadius: '10px',
        backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%', height: '100%', minHeight: ' 12rem', maxHeight: '20rem', minWidth: '15rem', maxWidth: '20rem',
    }


    return (
        <Col className="m-3  " onClick={() => navigate(appRoutes.debutEvent + `/${event._id}`)} md={2} sm={4} xs={6} xl={2} lg={3}>
            <MotionContainer>
                <div className='d-flex justify-content-end align-items-end flex-column p-4 rounded shadow-lg'
                    style={background}>
                    <div className='d-flex justify-content-end align-items-end flex-column'>
                        <p className='fs-3 m-0 text-light text-end' > {event.debutEventName} </p>
                        <p className='text-light' >
                            {event.debutEventDescription.slice(0, 15)}...
                        </p>
                    </div>
                </div>
            </MotionContainer>
        </Col >
    )
}
