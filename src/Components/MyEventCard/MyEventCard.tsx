import React, { useState } from 'react'
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Col, Row } from 'reactstrap'
import './MyEventCard.css'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
import moment from 'moment'
export default function MyEventCard(
  { _id,
    createdBy,
    belongsTo,
    debutEventName,
    debutEventDescription,
    debutEventDate,
    debutEventLocation,
    debutEventImage,
    debutEventRegestry,
    debutEventAttendees,
    debutInvitationLink,
    otherRelatedLinks,
  }: any

) {

  console.log("event name ", debutEventName)
  const navigate = useNavigate()
  const registryId = "shitwtfisthis"
  // const { debutEventName } = event

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

        <div className='px-4 py-3' >
          <p className='fs-5 d-flex justify-content-end ' >  {debutEventName}  </p>
          <small className=' text-muted fw-light  d-flex justify-content-end ' >
            {moment(debutEventDate).format('MMMM Do YYYY')}
          </small>
        </div>
      </div>
      <div>

        <Offcanvas
          style={{ width: '50%' }}
          isOpen={isOpen}
          direction="end"
          scrollable
          toggle={toggle}
        >
          <OffcanvasHeader toggle={toggle}>
            <h3 className='fs-3 fw-light m-3'>  {debutEventName}
              <small className='text-success fw-light px-3 fs-6' > open </small>
            </h3>
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
              <Col md={12}>
                <small className='text-muted  text-small fw-light' > event link </small>
                <p className='fw-light' > https://www.google.com/</p>
              </Col>

              <Col md={12}>
                <small className='text-muted  text-small fw-light' > related links </small>
                <p className='fw-light' >https://www.google.com/</p>
                <p className='fw-light' >https://www.google.com/</p>
              </Col>
              <br />
              <br />
              <br />
              <p className=' fw-light' > registriry </p>
              <Row className='border m-2 MyeventCard'

                onClick={() => navigate(`${appRoutes.myEvents}/${registryId}`)}>


                <Col md={8}>
                  <small className='text-muted  text-small fw-light' >name</small>
                  <p className='fw-light' > registry of this  </p>
                </Col>
                <Col md={2}>
                  <small className='text-muted  text-small fw-light' >status</small>
                  <p className='fw-light' > fullfilled </p>
                </Col>
                <Col md={2}>
                  <small className='text-muted  text-small fw-light' > items </small>
                  <p className='fw-light' >  898 </p>
                </Col>
              </Row>

            </Row>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  )
}
