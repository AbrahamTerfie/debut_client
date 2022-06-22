import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
export default function FilterVenture() {

    // roles , expertiesr location programs 
    return (
        <div>
            <h4> Focus Areas</h4>
            <FormGroup check>
                <Input type="checkbox" />
                Energy and Environment
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Food and Water
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Education
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                New Frontiers
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                Health
            </FormGroup>



            {/* ============= */}

            <h4 className='mt-4' > Company Size</h4>

            <FormGroup check>
                <Input type="checkbox" />
                1-10
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                11-50
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                51-100
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                101-500
            </FormGroup>
            <FormGroup check>
                <Input type="checkbox" />{' '}
                501 +
            </FormGroup>

            {/* ================ */}


            <h4 className='mt-4' > Operating Regions</h4>

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
