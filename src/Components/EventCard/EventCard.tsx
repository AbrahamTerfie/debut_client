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
        //  responsive image in rem units with max amnd min width compantable on all devices
        width: '100%', height: '100%', maxWidth: '10rem', minWidth: '15rem',
        maxHeight: '15rem', minHeight: '15rem'
    }


    return (

        <MotionContainer>
            <div className='d-flex justify-content-end align-items-end flex-column p-4 rounded shadow-sm  m-2'
                onClick={() => navigate(appRoutes.debutEvent + `/${event._id}`)}
                style={background}>
                <div className='d-flex justify-content-end align-items-end flex-column'>
                    <p className='fs-3 text-secondary-emphasis text-end' > {event.debutEventName} </p>
                    <p className='text-secondary-emphasis text-end text-wrap' >
                        {event.debutEventDescription.slice(0, 30)}...
                    </p>
                </div>
            </div>
        </MotionContainer>

    )
}
