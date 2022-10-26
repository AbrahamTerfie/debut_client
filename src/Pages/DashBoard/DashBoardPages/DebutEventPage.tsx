import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_EVENT_WITH_ID } from '../../../GraphQl/index'
import { Row, Col, } from 'reactstrap'
import { motion } from 'framer-motion'
import { notifyError, notifyLoading, notifySuccess, notifyWarning } from '../../../Components/Notification/Toast'
import Loader from '../../../Components/Loader/Loader'
import moment from 'moment'
import RegistryAccordion from '../../../Components/DashBoard/RegistryAccordion/RegistryAccordion'
export default function DebutEventPage() {
    const { id } = useParams<{ id: string }>()
    const { data, loading, error } = useQuery(GET_EVENT_WITH_ID, {
        variables: { getDebutEventWithIdId: id },
        onCompleted: (data) => {
            console.log("event data", data)
        },
        onError: (error) => {
            console.log(error)
            notifyError(error.toString())
        }


    })
    if (loading) return <Loader />

    return (
        <div className='px-5' >
            <Row>
                <Col md={8}>
                    <span className='text-muted' > event name </span>
                    <p className='fs-1 fw-light mb-0' > {data?.getDebutEventWithId?.debutEventName} </p>
                    <p className='text-muted ' > {data && moment(data.getDebutEventWithId.debutEventDate).format('DD MMMM YYYY')} </p>


                    <p className='text-muted m-0' > event description </p>
                    <p>{data?.getDebutEventWithId?.debutEventDescription}</p>


                    <p className='text-muted m-0' > location  </p>
                    <p> {data?.getDebutEventWithId?.debutEventLocation} </p>


                    <p className='text-muted m-0' >  related liknks   </p>
                    {data?.getDebutEventWithId?.otherRelatedLinks.map((link: any, index: number) => {
                        return (
                            <motion.a
                                href={window.location.origin + link}
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.9 }}
                                style={{ cursor: 'default' }}
                                className='border border-info rounded-pill bg-dark bg-opacity-10 p-1  px-4  m-1 me-2'>
                                <span> {link} </span>
                            </motion.a>
                        )
                    }
                    )}
                </Col>
                <Col md={4}>
                    <img
                        className='img-fluid shadow-lg rounded '
                        style={{ height: '300px', width: '100%' }}
                        src={data?.getDebutEventWithId?.debutEventImage} alt="event image " />
                </Col>
            </Row>

            <Row>
                <p className='fs-3  fw-light mt-5' >  Registries  </p>

                {data?.getDebutEventWithId?.debutRegistry.map((registry: any, index: number) => {
                    return (
                        <RegistryAccordion
                            key={index}
                            _id={registry._id}
                            debutRegistryName={registry.debutRegistryName}
                            debutRegistryStatus={registry.debutRegistryStatus}
                            debutRegistryItems={registry.debutRegistryItems}

                        />
                    )
                }
                )}

                {/* <RegistryAccordion
                    eventRegistry={data?.getDebutEventWithId?.debutRegistry}
                /> */}
            </Row>
        </div >
    )
}
