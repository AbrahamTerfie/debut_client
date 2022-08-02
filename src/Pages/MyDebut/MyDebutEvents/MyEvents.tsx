import React, { useState } from 'react'
import { Button, Col, FormGroup, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'reactstrap'
import MyEventCard from '../../../Components/MyEventCard/MyEventCard'
import { FaPlus } from 'react-icons/fa'
import { MY_DEBUT_EVENTS, CREATE_EVENT } from '../../../GraphQl/index'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import { useMutation, useQuery } from '@apollo/client'
import Loader from '../../../Components/Loader/Loader'

function NewEvent() {
  const [canvas, setCanvas] = useState(false);
  const [imageSelected, setImageSelected] = useState("")

  const toggle = () => setCanvas(!canvas);
  return (
    <>
      <Button className='m-4 '
        outline color='light'
        onClick={toggle}
      >
        <FaPlus className='mx-3' size={30} style={{ backgroundColor: 'transparent', }} />
        add new event
      </Button>
      <div>

        <Offcanvas
          style={{ width: '50%' }}
          direction="end"
          scrollable
          isOpen={canvas}
        >
          <OffcanvasHeader toggle={toggle}>
            <p className='fs-2 m-4 fw-light '>
              create a debut event
            </p>
          </OffcanvasHeader>
          <OffcanvasBody>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="debutEventName"> event name </Label>
                  <Input type="text"
                    name="debutEventName"
                    id="debutEventName"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="debutEventDate"> event date </Label>
                  <Input type="date"
                    name="debutEventDate"
                    id="debutEventDate"
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="debutEventDescription">  description </Label>
                  <Input type="textarea"
                    name="debutEventDescription"
                    id="debutEventDescription"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="debutEventImage"> event image </Label>
                  <Input onChange={(event: any) => {
                    setImageSelected(event.target.files[0])
                  }} type="file" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="debutEventLocation"> location </Label>
                  <Input type="text"
                    name="debutEventLocation"
                    id="debutEventLocation"
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="otherRelatedLinks"> links </Label>
                  <Input type="text"
                    name="otherRelatedLinks"
                    id="otherRelatedLinks"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className='m-3 ' >
              <Button color='light' outline  >
                <FaPlus className='mx-3' size={20} style={{ backgroundColor: 'transparent', }} />
                create event
              </Button>
            </Row>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  )
}

export default function MyEvents() {
  const { userID, hasCompany, companyID } = useSelector((store: RootState) => store.identfiers)

  const { data, loading, error } = useQuery(MY_DEBUT_EVENTS, {
    variables: {
      userId: userID
    }
  })


  if (loading) return <Loader />
  if (error) {
    console.log(error)
  }
  if (data) {
    console.log(data.getDebutEventsWithUserId)
  }

  return (
    <div className='my-5  mx-5 px-5  w-100 '>
      <p className='fs-2  fw-lighter mx-5 '>
        your events
      </p>
      <div className='d-flex flex-wrap shadow p-4' >
        {
          data?.getDebutEventsWithUserId?.map((event: any) => {
            return <MyEventCard
              key={event.id}
              debutEventName={event.debutEventName}
              debutEventDate={event.debutEventDate}
              debutEventDescription={event.debutEventDescription}
              debutEventImage={event.debutEventImage}
              debutEventLocation={event.debutEventLocation}
              otherRelatedLinks={event.otherRelatedLinks}
              createdBy={event.createdBy}
              belongsTo={event.belongsTo}
              debutInvitationLink={event.debutInvitationLink}
            />
          })
        }

        <MyEventCard />

        <NewEvent />
      </div>
      <div>

      </div>
    </div>

  )
}
