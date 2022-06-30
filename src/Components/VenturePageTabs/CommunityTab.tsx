import React from 'react'
import { Row, Col } from 'reactstrap'

function following() {
    return (

        <div className='d-flex flex-row my-5 border border-light' >
            <div className='profileImage ' >
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
            </div>
            <div className='py-2 mx-3' >
                <p className='fs-5 fw-semibold mx-2'> UserName
                    <p className='text-muted fs-6'> owner ttile  </p>
                </p>
            </div>
        </div>

    )
}


function followers() {
    return (

        <div className='d-flex flex-row my-5 border border-light' >
            <div className='profileImage ' >
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
            </div>
            <div className='py-2 mx-3' >
                <p className='fs-5 fw-semibold mx-2'> UserName
                    <p className='text-muted fs-6'> owner ttile  </p>
                </p>
            </div>
        </div>

    )
}




export default function CommunityTab() {
    return (
        <Row>

            <Col >

                <p className='fs-3 fw-bold text-muted m-3' > Followers </p>
                {following()}

            </Col>

            <Col>
                <p className='fs-3 fw-bold text-muted m-3' > folloiwng </p>
                {followers()}
            </Col>
        </Row>
    )
}
