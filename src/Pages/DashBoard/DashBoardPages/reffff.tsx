
import React, { useState, useEffect } from 'react'
import { Button, Col, FormGroup, Input, Label, Offcanvas, OffcanvasBody, OffcanvasHeader, Row } from 'reactstrap'
import MyEventCard from '../../../Components/MyEventCard/MyEventCard'
import { FaPlus } from 'react-icons/fa'
import { MY_DEBUT_EVENTS, CREATE_EVENT, CHECK_IF_USER_HAS_COMPANY, FETCH_COMPANY } from '../../../GraphQl/index'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import { setCompanyID } from '../../../Store/identfiers/identfiers'
import { useMutation, useQuery } from '@apollo/client'
import Loader from '../../../Components/Loader/Loader'
import Axios from 'axios'
import { motion } from 'framer-motion'

import NewEvent from '../../../Components/DashBoard/NewEvent'




export default function CompanyEvents() {
    const { userID } = useSelector((store: RootState) => store.identfiers)

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
