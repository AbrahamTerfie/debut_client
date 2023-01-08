import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from 'reactstrap'
import ItemCard from '../../../Components/EventRegistryAccordion/EventRegistryAccordion'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer'
import { useQuery } from '@apollo/client'
import { GET_EVENT_WITH_ID } from '../../../GraphQl/index'
import Loader from '../../../Components/Loader/Loader'
import { notifyError } from '../../../Components/Notification/Toast'
import { EventPageType, DebutRegistry, DebutRegistryItem } from '../../../types/EventPageTypes'
import moment from 'moment'

export default function EventPage() {

    const { id } = useParams()
    const [open] = useState('');

    const { data, loading, error } = useQuery(GET_EVENT_WITH_ID, {
        variables: { getDebutEventWithIdId: id }
    })
    if (loading) return <Loader />
    if (error || !data) { notifyError('Error fetching event') }
    const { getDebutEventWithId: event }: EventPageType = data

    return (
        <div className=' w-100 '>

            <Row className=' mb-1 my-auto pt-5 mt-5 px-0 mx-5  ' >
                <h1 className='fw-light fs-1  m-5 mb-3 text-start text-info'>
                    {event?.debutEventName}
                </h1>


            </Row>
            <Row className='d-flex  shadow-sm  p-3 mx-5  border border-info ' style={{ borderRadius: '20px' }}>
                {/* style={{ overflow: 'hidden', flexWrap: 'wrap', }}> */}
                <Col md={8} className='d-flex flex-column justify-content-start align-items-start'>
                    <small className='text-muted ' > description </small>
                    <p  >  {event?.debutEventDescription} </p>
                    <small className='text-muted ' > date  </small>
                    <p  > {moment(event?.debutEventDate).format('MMMM Do YYYY, h:mm:ss ')}</p>
                    <small className='text-muted ' > location </small>
                    <p  >  {event?.debutEventLocation} </p>
                    <div>
                        <small className='text-muted ' > related links  </small>
                        <div className='d-flex flex-wrap m-2' >
                            {event?.otherRelatedLinks?.map((link: string, index: number) => {
                                return (<MotionContainer key={index}>
                                    <p className=' mx-1 bg-success text-success bg-opacity-10 p-2 px-4 rounded-pill '> {link} </p>
                                </MotionContainer>
                                )
                            })}
                        </div>
                    </div>
                </Col>
                <Col md={3} className=' text-wrap  justify-content-center align-items-center d-flex flex-column'>
                    <img src={event?.debutEventImage} alt='event'
                        className="img-fluid h-75 rounded-5 shadow-sm p-3 mb-5 bg-body rounded border border-muted"
                        style={{
                            maxHeight: '200px',
                            maxWidth: '200px',
                            objectFit: 'cover',
                            minHeight: '200px',
                            minWidth: '200px',
                            objectPosition: 'center',
                        }}

                    />
                </Col>
            </Row>

            <p className='text-start fs-4 fw-light  mx-5 px-5 mt-4' > registries </p>
            <Row className='shadow-sm p-3 mx-5 border border-muted ' >
                <UncontrolledAccordion flush open={open} >
                    {event?.debutRegistry.length === 0 ? <p className='text-center' > no registries yet </p> :
                        event?.debutRegistry.map((registry: DebutRegistry, index: number) => {
                            return (
                                <AccordionItem key={index} >
                                    <AccordionHeader targetId="1">
                                        <p className='text-warning m-0'>
                                            {registry.debutRegistryName}
                                        </p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        {registry.debutRegistryItems?.length === 0 ? <p className='text-center' > no items yet </p> :
                                            (<Row className=' d-flex justify-content-start align-items-start flex-wrap'>
                                                {registry.debutRegistryItems?.map((item: DebutRegistryItem, index: number) => {
                                                    return (<ItemCard key={index} item={item}
                                                        createdBy={event?.createdBy}
                                                    />)
                                                }
                                                )}
                                            </Row>)
                                        }
                                    </AccordionBody>
                                </AccordionItem>
                            )
                        })}
                </UncontrolledAccordion>
            </Row>
        </div>
    )
}
