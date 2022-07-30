import React, { useState } from 'react'
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Col, Row } from 'reactstrap'
import './MyEventCard.css'
export default function MyEventCard() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div
        onClick={toggle}
        className='d-flex m-4  h-50 border flex-column  align-items-end w-25 MyeventCard ' >

        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
          className='w-100 h-100'
          alt='event' />

        <div className='px-4 py-2' >
          <p className='fs-4' >event Name</p>
          <span className=' text-muted fw-light' >
            event date
          </span>
        </div>


      </div>
      <div>

        {/* 
        
           createdBy: String!
    belongsTo: String!
    debutEventName: String!
    debutEventDescription: String!
    debutEventDate: String!
    debutEventLocation: String
    debutRegistryStatus: Boolean
    debutEventImage: String
    debutRegistry: [String] #registry ids here
    debutEventAttendees: [String] # user id's
    debutInvitationLink: String
    otherRelatedLinks: [String]
        */}

        <Offcanvas
          style={{ width: '50%' }}
          isOpen={isOpen}
          direction="end"
          scrollable
          toggle={toggle}
        >
          <OffcanvasHeader toggle={toggle}>
            <h3 className='fs-3'>event name</h3>
          </OffcanvasHeader>
          <OffcanvasBody>
            <Row>

              <Col md={12}>

                <small className='text-muted  text-small fw-light' > created by  / company name </small>
                <p className='fw-light' > userfirstname lastname /  company name  </p>
              </Col>


              <Col md={12}>

                <small className='text-muted fw-light' >  event description </small>
                <p className='fw-light' >
                  debut event debutEventDescription Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, pariatur enim facere necessitatibus voluptatum
                  velit, doloribus quibusdam accusamus voluptate dolorum atque aperiam
                  ullam quis architecto magni nam repellendus sunt similique!

                </p>
              </Col>

              <Col md={6}>
                <small className='text-muted  text-small fw-light' > date </small>
                <p className='fw-light' > monday january 1 2020</p>
              </Col>
              <Col md={6}>
                <small className='text-muted  text-small fw-light' > location </small>
                <p className='fw-light' >  detail location </p>
              </Col>



            </Row>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  )
}
