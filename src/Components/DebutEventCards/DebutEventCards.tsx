

import React from 'react'
import { Row, Col, Container, Input } from 'reactstrap'
import './DebutEventCards.css'
export default function DebutEventCards() {
    return (
        <Row className='debutEventsCardsContainer  p-3'>


            <Col xs='10' sm='10' md='10' lg='10' xl='10' >

                <h4 className='ventureName' > Debut EventName <small>  event date </small>  </h4>

                <div className='VentureDetails' >
                    <small>  debut event description description
                        debut event description description
                        debut event description description
                        debut event description description
                        debut event description description
                        debut event description description
                        debut event description description
                    </small>

                </div>

                <div className='eventOwner p-2'>


                    <div  >
                        <h3 className='userFullName' > Venture Name</h3>
                    </div>
                    <div className='mt-2 mx-3'>
                        <p> by</p>
                    </div>

                    <div  >
                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />

                    </div>
                    <div  >
                        <h4 className='userFullName mx-2' >Name fill</h4>
                    </div>

                </div>

            </Col>


        </Row>
    )
}
