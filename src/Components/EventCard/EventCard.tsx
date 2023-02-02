import React from 'react'
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
        //  responsive image in em units with max amnd min width compantable on all devices
        width: '100%', height: '100%', minHeight: '15em', minWidth: '15em',
    }


    return (

        <MotionContainer>
            <div className={'shadow-sm rounded-3  p-2 m-1  me-2 bg-secondary-emphasis bg-opacity-10   text-secondary-emphasis align-items-center justify-content-end d-flex '}
                onClick={() => navigate(appRoutes.debutEvent + `/${event._id}`)}
                style={background}>
                <div className='d-flex justify-content-end align-items-end flex-column'>
                    <p className='fs-3 text-light text-end' > {event.debutEventName} </p>
                    <p className='text-light text-end text-wrap' >
                        {event.debutEventDescription.slice(0, 30)}...
                    </p>
                </div>
            </div>
        </MotionContainer>

    )
}
