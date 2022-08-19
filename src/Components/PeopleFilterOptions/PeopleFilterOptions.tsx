import React from 'react'
import { Row, Col, FormGroup, Input } from 'reactstrap'

export default function PeopleFilterOptions() {
    return (
        <Row className="shadow-sm border-light m-4 ">
            <Col md={5} className=" mx-5">
                <p> roles</p>
                <div className='d-flex justify-content-between' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        Fellow
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light'  >
                        <Input type="checkbox" />{' '}
                        Mentor
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        Speciallist
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        Investor
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        Collective
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light mx-5' >
                        <Input type="checkbox" />
                        Staff
                    </FormGroup>
                </div>
                <div>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        Program Guest
                    </FormGroup>
                </div>
            </Col>
            <Col md={4} className="mx-5" >
                <p> expertise</p>

                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        <span>Business Strategy</span>
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        Team Building
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between ' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        Financing/Invenstment
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light mx-5' >
                        <Input type="checkbox" />
                        Coaching/Mentoring
                    </FormGroup>

                </div>
            </Col>
            <Col md={4}  className="mx-5 my-3">
                <p> region</p>
                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        North America
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        Europe
                    </FormGroup>
                </div>

                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        East Asia
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        South Asia
                    </FormGroup>
                </div>
            </Col>
        </Row>
    )
}
