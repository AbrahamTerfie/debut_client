import React from 'react'
import './FilterPeople.css'
import { FormGroup, Label, Input } from 'reactstrap'
export default function FilterPeople() {

    // roles , expertiesr location programs 
    return (
        <div>
            <h4> Roles</h4>
            <FormGroup check>
                <Input type="checkbox" />
                Fellow
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Mentor
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Speciallist
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Investor
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Collective Member
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Unreasonable Staff
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Program Guest
            </FormGroup>


            {/* ============= */}

            <h4> Experties</h4>

            <FormGroup check>
                <Input type="checkbox" />
                Business Strategy
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Team Building
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Financing / Invenstment
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Coaching / Mentoring
            </FormGroup>


            {/* ================ */}


            <h4> Location</h4>

            <FormGroup check>
                <Input type="checkbox" />
                North America
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Europe
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                East Asia
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                South Asia
            </FormGroup>


        </div>
    )
}
