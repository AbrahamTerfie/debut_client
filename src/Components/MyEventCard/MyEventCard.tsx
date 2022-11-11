import React, { useState } from 'react'
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Col, Row, FormGroup, Input, Label } from 'reactstrap'
import './MyEventCard.css'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { CREATE_DEBUT_REGISTRY, EVENT_REGISTRIES } from '../../GraphQl'
import { useMutation, useQuery } from '@apollo/client'
import Loader from '../Loader/Loader'
import { motion } from 'framer-motion'

export default function MyEventCard(
  { _id,
    createdBy,
    belongsTo,
    debutEventName,
    debutEventDescription,
    debutEventDate,
    debutEventLocation,
    debutEventImage,
    debutRegistry,
    debutEventAttendees,
    debutInvitationLink,
    otherRelatedLinks,
  }: any
) {
  const navigate = useNavigate()
  const { userID } = useSelector((store: RootState) => store.identfiers)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [newRegistry, setNewRegistry] = useState({
    debutRegistryName: "",
    createdBy: userID,
    belongsTo: belongsTo?._id,
    debutEvent: _id,

  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRegistry({ ...newRegistry, [name]: value })
  }

  const { data, loading, error } = useQuery(EVENT_REGISTRIES, {
    variables: { eventId: _id }
  })

  // console.log("event registries", data)
  const [createDebutRegistry, createDebutRegistryRes] = useMutation(CREATE_DEBUT_REGISTRY,
    {
      update(cache, { data: { createDebutRegistry } }) {
        const { getEventRegistriesWithEventId }: any = cache.readQuery({
          query: EVENT_REGISTRIES,
          variables: { eventId: _id }
        })
        cache.writeQuery({
          query: EVENT_REGISTRIES,
          variables: { eventId: _id },
          data: { getEventRegistriesWithEventId: [createDebutRegistry, ...getEventRegistriesWithEventId] }
        })
      }
    }

  )
  // console.log("createDebutRegistryRes", createDebutRegistryRes)

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    createDebutRegistry({
      variables: { debutRegistryInput: newRegistry },
    })

  }


  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}

        onClick={() => navigate(_id.toString())}
        className='d-flex m-3 h-50 shadow rounded flex-column  align-items-end w-25  ' >
        <img src={debutEventImage}
          style={{ maxHeight: "200px" }}
          className='w-100 h-50 rounded-top' />

        <div className='px-4 py-3' >
          <p className='fs-5 d-flex justify-content-end ' >  {debutEventName}  </p>
          <small className=' text-muted fw-light  d-flex justify-content-end ' >
            {moment(debutEventDate).format('MMMM Do YYYY')}
          </small>
        </div>
      </motion.div>
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
                <p className='fw-light' > {createdBy?.firstName} / {belongsTo?.companyName} </p>
              </Col>
              <Col md={12}>
                <small className='text-muted fw-light'>event description </small>
                <p className='fw-light' >
                  {debutEventDescription}
                </p>
              </Col>
              <Col md={6}>
                <small className='text-muted  text-small fw-light' > date </small>
                <p className='fw-light' > {moment(debutEventDate).format('MMMM Do YYYY')}</p>
              </Col>
              <Col md={6}>
                <small className='text-muted  text-small fw-light' > location </small>
                <p className='fw-light' >  {debutEventLocation ? debutEventLocation : " - "} </p>
              </Col>
              <Col md={12}>
                <small className='text-muted  text-small fw-light' > event link </small>
                <p className='fw-light' >  {debutInvitationLink ? debutInvitationLink : "-"} </p>
              </Col>
              <Col md={12}>
                <small className='text-muted  text-small fw-light' > related links </small>
                {otherRelatedLinks?.map((link: any) => {
                  <a className='fw-light' href={link}  > link </a>
                })}
                <p className='fw-light' >
                  add link resolver abraham
                </p>
              </Col>
              <br />
              <br />
              <br />
              <p className=' fw-light' > registriry </p>
              {loading ? <Loader /> :
                <>
                  <p className=' fw-light my-3' > create new registry boyy </p>
                  <Row >
                    <Col md={12}>
                      <FormGroup>
                        <Label for="debutRegistryName"> registry name </Label>
                        <Input type="text"
                          name="debutRegistryName"
                          id="debutRegistryName"
                          placeholder="registry name"
                          onChange={handleChange} />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className='px-3' >
                    <Button outline color="light"
                      onClick={(e: any) => handleSubmit(e)}>
                      create
                    </Button>
                  </Row>
                  {data.getEventRegistriesWithEventId?.map((registry: any) => {
                    return (
                      <Row className='shadow-sm  m-2 MyeventCard'
                        // onClick={() => navigate(`${appRoutes.myEvents}/${registry._id}`)}
                        >
                        <Col md={8}>
                          <small className='text-muted  text-small fw-light' >name</small>
                          <p className='fw-light' > {registry?.debutRegistryName}  </p>
                        </Col>
                        <Col md={2}>
                          <small className='text-muted  text-small fw-light' >status</small>
                          <p className='fw-light' > {registry.debutRegistryStatus
                            ? registry.debutRegistryStatus.toString() : " - "} </p>
                        </Col>
                        <Col md={2}>
                          <small className='text-muted  text-small fw-light' > items </small>
                          <p className='fw-light' >
                            {/* {registry?.debutRegistryItems.length} */}

                            {registry.debutRegistryItems?.length}
                          </p>
                        </Col>
                      </Row>
                    )
                  })}
                </>
              }
            </Row>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </>
  )
}
