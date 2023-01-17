import React from 'react'
import { FaRegHandshake } from 'react-icons/fa'
import { Row } from 'reactstrap'

export default function Footer() {
    return (
        <Row>
            <p className='text-center' >
                <span className='text-muted'>Powered by </span>
                <span className='text-primary-emphasis'>  <FaRegHandshake size={15}
                    style={{ backgroundColor: 'transparent', }}
                    className='mx-2' />  </span>
                <span className='text-muted'>  Community</span>
            </p>
            <p className='text-muted text-center '>
                {new Date().getFullYear()} © All rights reserved Debut Co. </p>
        </Row>
    )
}
