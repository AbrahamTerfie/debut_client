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
        width: '100%', height: '100%', minHeight: ' 12rem', maxHeight: '20rem', minWidth: '19rem', maxWidth: '20rem',
    }


    return (
        <Col className="m-3   " onClick={() => navigate(appRoutes.debutEvent + `/${event._id}`)} >
            <div className='d-flex justify-content-end align-items-end flex-column p-4 rounded shadow-lg' style={background}>
                <MotionContainer>
                    <div className='d-flex justify-content-end align-items-end flex-column'>
                        <p className='fs-3 text-light text-end' > {event.debutEventName} </p>
                        <p className='text-light text-end text-wrap' >
                            {event.debutEventDescription.slice(0, 30)}...
                        </p>
                    </div>
                </MotionContainer>
            </div>
        </Col >
    )
}
