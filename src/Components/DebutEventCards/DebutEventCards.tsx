import React from 'react'
import { Col, Row, } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import './DebutEventCards.css'
import { appRoutes } from '../../Routes/routes'

import moment from 'moment'
export default function DebutEventCards({
    _id,
    createdBy,
    belongsTo,
    debutEventName,
    debutEventDescription,
    debutEventDate,
    debutEventImage,
}: any) {
    const navigate = useNavigate()
    const debutEventLink = _id
    return (
        <Row className='d-flex m-1  p-2 border border-light shadow-sm rounded   w-100 MyeventCard '
            onClick={() => navigate(`${appRoutes.debutEvents}/${_id}`)}>

            <Col md={9}>
                <p className='fs-4 fw-light' > {debutEventName}
                    <small className='text-muted fw-light mx-3'>
                        {debutEventDate ? moment(parseInt(debutEventDate)).format("MMM Do YY") : ''}
                    </small>  </p>
                <p className='fs-6 fw-light' >
                    {debutEventDescription}
                </p>

            </Col>
            <Col md={3}>
                <img className=' d-flex rounded shadow my-1' src={debutEventImage}
                    style={{ height: '100px', width: '150px' }}
                />
                <div className='eventOwner d-flex flex-row align-items-center m-3  '>
                    <p className='fs-6 fw-bolder' > {belongsTo?.companyName}  </p>
                    <p className='mx-3' > by</p>

                    <p className=' mx-2' > {createdBy?.firstName} {createdBy?.lastName}  </p>
                </div>
            </Col>



        </Row>
    )
}
