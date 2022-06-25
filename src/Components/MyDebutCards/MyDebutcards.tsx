
import React from 'react'
import { Row, Col, Container, Input } from 'reactstrap'
export default function MyDebutcards() {
    return (
        <Row className='debutEventsCardsContainer  p-3'>


            <Col xs='10' sm='10' md='10' lg='10' xl='10' >

                <h4 className='ventureName' > Debut EventName <small className='fw-lighter mx-3'>  event date </small>  </h4>

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



                </div>

            </Col>


        </Row>
    )
}
