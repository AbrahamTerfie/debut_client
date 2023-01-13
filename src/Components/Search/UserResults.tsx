import React from 'react'
import { Col, Row } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'

export default function UserResults() {
    return (
        <MotionContainer>
            <Row className='border border-muted p-2  bg-secondary  text-muted  '>
                <Col md={3}
                    sm={4}
                    xs={4}
                    lg={2}
                    className='d-flex flex-column justify-content-center align-items-center  mx-auto flex-wrap overflow-hidden  '
                >
                    <img
                        // src={people.profileImage}
                        alt='profile'
                        className='rounded-2 img-fluid  '
                        style={{
                            width: '40px', height: '40px', objectFit: 'cover',
                            maxHeight: '50%', minWidth: '40px', minHeight: '40px'
                        }}
                    />
                </Col>
                <Col md={9} sm={8} xs={8} lg={10}
                    className='d-flex flex-column justify-content-center align-items-start mx-auto flex-wrap overflow-hidden  text-light '>
                    <p className=' fw-bold m-0   me-auto d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start' >
                        {/* {people.firstName}  {people.lastName} */}
                        this is a name congatsss
                    </p>
                    <p className='fs-6 m-0 fw-lighter me-auto text-muted  d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start' >
                        {/* {people.titleAtCompany} */}
                        this is a title
                    </p>
                    <p className='fw-lighter m-0  me-auto   d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start'>
                        {/* {people.company[0]?.companyName} */}
                        title at company
                    </p>
                </Col>

            </ Row>
        </MotionContainer>
    )
}
