import React from 'react'
import { Row, Col } from 'reactstrap'
export default function MyCompany() {
  return (
    <div>

      <Row>

        <Col md={8} >
          {/* personal informations  */}
          

        </Col>
        <Col md={4} className='mx-auto'>
          <div className='d-flex justify-content-center align-items-center'>
            <img src='https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png' alt='profile' className='img-fluid' />
          </div>

        </Col>
      </Row>
    </div>
  )
}
