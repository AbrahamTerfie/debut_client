import React from 'react'
import { Col } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
import './EventCard.css'
export default function EventCard() {
    const navigate = useNavigate()
    const background: React.CSSProperties = {

        backgroundImage: `url(https://images.unsplash.com/photo-1667715191315-351400a5789a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
        objectFit: 'cover', objectPosition: 'center', borderRadius: '10px',
        backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%', height: '100%', minHeight: ' 10rem', maxHeight: '20rem', minWidth: '10rem', maxWidth: '20rem',
    }


    return (
        <Col className="m-3  " onClick={() => navigate(appRoutes.debutEvent + '/evntId8687687678')} md={2} sm={4} xs={6} xl={2} lg={3}>
            <MotionContainer>
                <div className='d-flex justify-content-end align-items-end flex-column p-4 rounded shadow-lg'
                    style={background}>
                    <div className='d-flex justify-content-end align-items-end flex-column'>
                        <p className='fs-3 m-0' > event title </p>
                        <p className='text-light' > event description </p>
                    </div>
                </div>
            </MotionContainer>
        </Col >
    )
}
