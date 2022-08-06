import React from 'react'
import { Col, Row, } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import './DebutEventCards.css'
import { appRoutes } from '../../Routes/routes'
export default function DebutEventCards() {
    const navigate = useNavigate()
    const debutEventLink = "DebutEventLink"

    return (
        <Row className='d-flex m-4   shadow-sm rounded   align-items-end w-100 MyeventCard '
            onClick={() => navigate(`${appRoutes.debutEvents}/${debutEventLink}`)}>

            <Col md={9}>
                <p className='fs-5 fw-light' > Debut EventName
                    <small className='text-muted fw-light'>  event date </small>  </p>
                <p className='fs-6 fw-light' >
                    debut event description description
                    debut event description description
                    debut event description description
                    debut event description description
                    debut event description description
                    debut event description description
                    debut event description description
                </p>

            </Col>
            <Col md={3}>
                <img className='w-100 rounded shadow' src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
            </Col>

            <div className='eventOwner pt-3 pb-0 '>
                <p className='fs-6 fw-bolder' > Venture Name</p>
                <p className='mx-3' > by</p>

                <p className=' mx-2' >Name fill</p>
            </div>

        </Row>
    )
}
