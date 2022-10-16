





import React, { useState, useEffect } from 'react'
import { Button, Col, FormGroup, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'reactstrap'
import MyEventCard from '../../../Components/MyEventCard/MyEventCard'
import { FaPlus } from 'react-icons/fa'
import { MY_DEBUT_EVENTS, CREATE_EVENT, CHECK_IF_USER_HAS_COMPANY, FETCH_COMPANY } from '../../../GraphQl/index'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import { useMutation, useQuery } from '@apollo/client'
import Loader from '../../../Components/Loader/Loader'
import Axios from 'axios'
import { motion } from 'framer-motion'


const initState = {
  debutEventName: "",
  debutEventDescription: "",
  debutEventDate: Date,
  debutEventLocation: "",
  debutRegistryStatus: false,
  debutEventImage: "",
  debutRegistry: [],
  debutEventAttendees: [],
  debutInvitationLink: "",
  otherRelatedLinks: []
}

function NewEvent() {
  const [canvas, setCanvas] = useState(false);
  const [imageSelected, setImageSelected] = useState("")
  const [newEventData, setNewEventData] = useState(initState)
  const { userID, hasCompany, companyID } = useSelector((store: RootState) => store.identfiers)
  const { data, loading, error } = useQuery(CHECK_IF_USER_HAS_COMPANY, {
    variables: { userId: userID }
  })
  const { data: dataCompany, loading: loadingCompany, error: errorCompany
  } = useQuery(FETCH_COMPANY, {
    variables: { userId: userID }
  })


  const [createDebutEvent, createDebutEventRes] = useMutation(CREATE_EVENT, {

    update(cache, { data: { createDebutEvent } }) {
      console.log("apollo cache", cache)
      const { getDebutEventsWithUserId }: any = cache.readQuery({
        query: MY_DEBUT_EVENTS,
        variables: { userId: userID }
      })
      cache.writeQuery({
        query: MY_DEBUT_EVENTS,
        variables: { userId: userID },
        data: { getDebutEventsWithUserId: [...getDebutEventsWithUserId, createDebutEvent] }
      })
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEventData({ ...newEventData, [name]: value })
  }

  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    createDebutEvent({
      variables: {
        debutEventInput: {
          ...newEventData,
          createdBy: userID,
          belongsTo: dataCompany?.getCompanyWithUserId._id,
        }
      }
    })

  }

  const handleFileSelected = () => {
    const formData = new FormData
    formData.append('file', imageSelected)
    // file is the file object
    // first one is the preset and the second one is name  for cloudnary api
    formData.append('upload_preset', 'debutClient')
    Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
      .then((response) => {
        setNewEventData({ ...newEventData, debutEventImage: response.data.secure_url })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    handleFileSelected()
  }, [imageSelected])

  const toggle = () => setCanvas(!canvas);
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className='btn   m-4 px-5 py-2  bg-success text-white bg-opacity-75   '
        color='light'
        onClick={toggle}
        disabled={data?.checkIfUserHasCompany ? false : true}
      >
        {data?.checkIfUserHasCompany == true ? <>
          <FaPlus className='mx-3' size={20} style={{ backgroundColor: 'transparent', }} />
          add new event
        </> :
          <>
            <FaPlus className='mx-3' size={30} style={{ backgroundColor: 'transparent', }} />
            create a company first
          </>
        }

      </motion.button>
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
                    placeholder="event name"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="debutEventDate"> event date </Label>
                  <Input type="date"
                    name="debutEventDate"
                    id="debutEventDate"
                    placeholder="event date"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="debutEventDescription">  description </Label>
                  <Input type="textarea"
                    name="debutEventDescription"
                    id="debutEventDescription"
                    placeholder="description"
                    onChange={handleChange}
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
                    placeholder="location"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup>
                  <Label for="otherRelatedLinks"> links </Label>
                  <Input type="text"
                    name="otherRelatedLinks"
                    id="otherRelatedLinks"
                    placeholder="links"
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className='m-3 ' >
              <Button color='light' outline
                onClick={(e: any) => { submitHandler(e) }}
              >
                <FaPlus className='mx-3' size={20}
                  style={{ backgroundColor: 'transparent', }}
                />
                create event
              </Button>
            </Row>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  )
}

export default function CompanyEvents() {
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
    <div className=' mx-5 px-5  w-100 '>
      <div className='d-flex justify-content-between align-items-center' >
        <div >
          <p className=' fs-1 fw-light mt-4 mb-1 mx-3' > your events  </p>
          <p className='text-muted fs-6 mt-0 mb-2 mx-3'>
            your events are listed here
          </p>
        </div>
        <NewEvent />
      </div>

      {
        data?.getDebutEventsWithUserId?.map((event: any) => {
          return <MyEventCard
            key={event.id}
            _id={event._id}
            debutEventName={event.debutEventName}
            debutEventDate={event.debutEventDate}
            debutEventDescription={event.debutEventDescription}
            debutEventImage={event.debutEventImage}
            debutEventLocation={event.debutEventLocation}
            otherRelatedLinks={event.otherRelatedLinks}
            createdBy={event.createdBy}
            belongsTo={event.belongsTo}
            debutInvitationLink={event.debutInvitationLink}
            debutRegistry={event.debutRegistry}
          />
        })
      }



      <div>
      </div>
    </div>

  )
}
