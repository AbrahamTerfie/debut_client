import React from 'react'
import { Row } from 'reactstrap'
import '../../Styles/HeaderComponent.css'

export default function FilterToolip({ filterOption }:
    {
        filterOption: string
    }
) {
    return (
        <Row className='m-2 filterToolip '  >

            {filterOption}
        </Row>
    )
}
