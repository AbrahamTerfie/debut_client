import React, { useRef } from 'react'
import { Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import './VenturePage.css'
export default function VenturePage() {
    const { id } = useParams()

    return (
        <>
            <Row className='ventureProfileHeader m-3 w-100 h-100 '>

                <div>
                    <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
                </div>

            </Row>
        </>

    )
}
