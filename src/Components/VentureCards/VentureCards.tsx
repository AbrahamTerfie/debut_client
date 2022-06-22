

import React from 'react'
import { Row, Col, Container, Input } from 'reactstrap'
import './VentureCards.css'
export default function VentureCards() {
    return (
        <Row className='ventureCardsContainer'>
            <Col xs='2' sm='2' md='2' lg='2' xl='2'  >
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />

            </Col>

            <Col xs='10' sm='10' md='10' lg='10' xl='10' >

                <h4 className='ventureName' >Name fill</h4>

                <div className='VentureDetails' >
                    user title , tilte expands and more <small>  user profile description  </small>

                </div>

                <div className='ventureOwner'>
                    {/* user name and photo */}
                    <div  >
                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />

                    </div>
                    <div  >
                        <h4 className='userFullName' >Name fill</h4>
                    </div>

                </div>
            </Col>


        </Row>
    )
}
