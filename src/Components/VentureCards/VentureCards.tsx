
import React from 'react'
import { Row, Col } from 'reactstrap'
import './VentureCards.css'
import {  useNavigate } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'

export default function VentureCards() {

    const navigate = useNavigate()

    const itemlink = "fromVenturepagewithid"
    return (
        // <Link to={`${appRoutes.ventures}/${itemlink}`}>

        <Row className='ventureCardsContainer p-3'
            onClick={() => navigate(`${appRoutes.ventures}/${itemlink}`)}>


            <Col xs='2' sm='2' md='2' lg='2' xl='2'  >
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
            </Col>
            <Col xs='10' sm='10' md='10' lg='10' xl='10' >
                <p className='fw-bolder fs-6 ' > Venture Name Venture Name Venture Name </p>
                <p className='fs-light' >
                    user title , tilte expands and more <small className='text-muted'>  user profile description  </small>
                </p>
                <div className='ventureOwner d-flex'>
                    {/* user name and photo */}
                    <div  >
                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
                    </div>
                    <div >
                        <p className='mx-2  fs-6 text-muted fw-normal' >Name fill</p>
                    </div>

                </div>
            </Col>

        </Row>


    )
}
