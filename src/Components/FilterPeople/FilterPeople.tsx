import React from 'react'

import { FormGroup, Label, Input } from 'reactstrap'
export default function FilterPeople() {

    // roles , expertiesr location programs 
    return (
        <div>
            <p className='fs-5 fw-bolder'> Roles</p>
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
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                Investor
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                Collective Member
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                Unreasonable Staff
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                Program Guest
            </FormGroup>


            {/* ============= */}

            <p className='fs-5 fw-bolder my-4'> Expertiese</p>


            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />
                Business Strategy
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                Team Building
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                Financing / Invenstment
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                Coaching / Mentoring
            </FormGroup>


            {/* ================ */}


            <p className='fs-5 fw-bolder my-4'> Location</p>


            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />
                North America
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                Europe
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                East Asia
            </FormGroup>
            <FormGroup check className='fs-6 fw-light' >
                <Input type="checkbox" />{' '}
                South Asia
            </FormGroup>


        </div>
    )
}
