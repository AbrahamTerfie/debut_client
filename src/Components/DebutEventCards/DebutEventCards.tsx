import React from 'react'
import { Row, } from 'reactstrap'
import './DebutEventCards.css'
export default function DebutEventCards() {
    return (
        <Row className='debutEventsCardsContainer  p-3'>
            {/* <Col xs='10' sm='10' md='10' lg='10' xl='10' > */}
            <p className='fs-5 fw-bolder' > Debut EventName <small>  event date </small>  </p>
            <p className='fs-6 fw-light' >
                debut event description description
                debut event description description
                debut event description description
                debut event description description
                debut event description description
                debut event description description
                debut event description description
            </p>
            <div className='eventOwner pt-3 pb-0 '>
                <p className='fs-6 fw-bolder' > Venture Name</p>
                <p className='mx-3' > by</p>
                <div >
                    <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
                </div>
                <p className=' mx-2' >Name fill</p>
            </div>
            {/* </Col> */}
        </Row>
    )
}