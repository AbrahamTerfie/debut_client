
import React from 'react'
import { Row, Col } from 'reactstrap'
import './VentureCards.css'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'

export default function VentureCards(
    { ventureName,
        ventureDescription,
        ventureId,
        ventureOwner,
        ventureAdress }: {
            ventureName: any,
            ventureDescription: any,
            ventureId: any,
            ventureOwner: any,
            ventureAdress: any
        }

) {

    const navigate = useNavigate()

    const itemlink = "fromVenturepagewithid"
    return (
        // <Link to={`${appRoutes.ventures}/${itemlink}`}>

        <Row className=' d-flex my-2 py-3 flex-wrap justify-content-between rounded-5 shadow-sm  companyCard'
        // onClick={() => navigate(`${appRoutes.ventures}/${ventureId}`)}
        >


            <Col md={2}  >
                <img
                    className='w-100'
                    src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    alt='user profile photo' />
            </Col>
            <Col md={10}>
                <p className='fw-bolder fs-6 ' > {ventureName} </p>
                <p className='fs-light' >
                    {ventureDescription} <small className='text-muted'>  {ventureAdress} </small>
                </p>
                <div className='ventureOwner d-flex'>
                    {/* user name and photo */}

                    <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                        alt='user profile photo' />


                    <p className='mx-2  fs-6 text-muted fw-normal' > {ventureOwner} </p>


                </div>
            </Col>

        </Row>


    )
}
