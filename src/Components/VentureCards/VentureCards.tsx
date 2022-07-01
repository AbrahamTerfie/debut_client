
import React, { useState } from 'react'
import { Row, Col, Collapse, Button, CardBody, Card } from 'reactstrap'
import './VentureCards.css'
import { Link } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
import { VenturePage } from '../../Pages/Community'
export default function VentureCards() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const itemlink = "itemLInk"
    return (
        <Link to={`${appRoutes.ventures}/${itemlink}`}>

            <Row className='ventureCardsContainer p-3' onClick={toggle} >
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
                {/* <Collapse isOpen={isOpen} className="venturePageCollapse mt-3" >
                <VenturePage />
            </Collapse> */}
            </Row>
        </Link>

    )
}
