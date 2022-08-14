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
        <Row className='d-flex m-4   shadow-sm rounded   align-items-end w-100 MyeventCard '
            onClick={() => navigate(`${appRoutes.debutEvents}/${debutEventLink}`)}>

            <Col md={9}>
                <p className='fs-4 fw-light' > {debutEventName}
                    <small className='text-muted fw-light mx-3'>
                        {moment(debutEventDate).format('MMMM Do YYYY')}
                    </small>  </p>
                <p className='fs-6 fw-light' >
                    {debutEventDescription}
                </p>

            </Col>
            <Col md={3}>
                <img className='  rounded shadow' src={debutEventImage}
                    style={{ height: '150px', width: '200px' }}
                />
            </Col>

            <div className='eventOwner pt-3 pb-0 '>
                <p className='fs-6 fw-bolder' > {belongsTo?.companyName}  </p>
                <p className='mx-3' > by</p>

                <p className=' mx-2' > {createdBy?.firstName}  </p>
            </div>

        </Row>
    )
}
