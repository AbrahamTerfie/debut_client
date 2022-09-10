import React from 'react'
import { Row, Col } from 'reactstrap'
import './GratitudeCards.css'
export default function GratitudeCards() {
    return (
        <Row className='  p-3 shadow m-2'>
            <p className='fs-5 fw-semibold m-0'> <small className='text-muted fs-6' > To : </small>  Gratitudeposter UserName</p>
            <p className='text-muted '>posted time </p>
            <p className='fw-light px-2 m-0' >
                Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quia,
                tempora itaque! Illum, molestias.
                Quisquam temporibus iusto quae amet,
                ullam, velit ducimus porro quas, vel
                necessitatibus repudiandae cupiditate sunt
                enim voluptatibus.
            </p>
        </Row>
    )
}
