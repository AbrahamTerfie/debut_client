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
    const [open, setOpen] = useState('');
    // const toggle = (id: string) => {
    //     if (open === id) {
    //         setOpen('');
    //     } else {
    //         setOpen(id);
    //     }
    // };
    const { data, loading, error } = useQuery(GET_EVENT_WITH_ID, {
        variables: { getDebutEventWithIdId: id }
    })
    if (loading) return <Loader />
    if (error || !data) { notifyError('Error fetching event') }
    const { getDebutEventWithId: event }: EventPageType = data
    return (
        <div className='mt-5 pt-5 '>
            <div className='m-5 px-5'>
                <h1 className='text-start'>  {event?.debutEventName} </h1>
            </div>
            <Row className='d-flex justify-content-around  shadow p-3 m-5'
                style={{ overflow: 'hidden', flexWrap: 'wrap', }}>
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
                <Col md={3} className=' text-wrap overflow-auto justify-content-center align-items-center d-flex flex-column'>
                    <img src={event?.debutEventImage} alt='event'
                        className='img-fluid rounded shadow-sm mx-3 my-3'
                        style={{
                            objectFit: 'contain', objectPosition: 'center',
                            minWidth: '30rem', minHeight: '100px', maxWidth: '300px', maxHeight: '300px'
                        }} />
                </Col>
            </Row>

            <p className='text-start fs-4 fw-light  mx-5 px-5 mt-4' > registries </p>
            <Row className='shadow p-3 mx-5' >
                <UncontrolledAccordion flush open={open} >
                    {event?.debutRegistry.map((registry: DebutRegistry, index: number) => {
                        return (
                            <AccordionItem key={index} >
                                <AccordionHeader targetId="1">  {registry.debutRegistryName} </AccordionHeader>
                                <AccordionBody accordionId="1">
                                    <Row className=' d-flex justify-content-start align-items-center flex-wrap'>
                                        {registry.debutRegistryItems?.map((item: DebutRegistryItem, index: number) => {
                                            return (<ItemCard key={index} item={item} />)
                                        })}
                                    </Row>
                                </AccordionBody>
                            </AccordionItem>
                        )
                    })}
                </UncontrolledAccordion>
            </Row>
        </div>
    )
}
