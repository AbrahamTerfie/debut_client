import React from 'react'
import MyEventCard from '../../../Components/MyEventCard/MyEventCard'
import {
  MY_DEBUT_EVENTS,
  // CREATE_EVENT, CHECK_IF_USER_HAS_COMPANY, FETCH_COMPANY
} from '../../../GraphQl/index'
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
// import { setCompanyID } from '../../../Store/identfiers/identfiers'
import { useQuery } from '@apollo/client'
import Loader from '../../../Components/Loader/Loader'
import { Outlet } from 'react-router-dom'
import NewEvent from '../../../Components/DashBoard/NewEvent'
import { notifyError } from '../../../Components/Notification/Toast'
import Footer from '../../../Components/Footer/Footer'
import { motion } from 'framer-motion'
import { v4 as uuid } from 'uuid'
export default function CompanyEvents() {
  const { userID } = useSelector((store: RootState) => store.identfiers)
  const { data, loading, error } = useQuery(MY_DEBUT_EVENTS, {
    variables: {
      userId: userID
    }
  })

  if (loading) return <Loader />
  if (error) {
    notifyError(error.message.toString())
    // console.log(error)
  }
  // if (data) {
  // console.log(data.getDebutEventsWithUserId)
  // }


  return (
    <div  >
      <div className='d-flex justify-content-between align-items-center' >
        <div
          className='d-flex flex-column justify-content-center align-items-center'
        >
          <p className=' fs-1 fw-light mt-4 mb-1 mx-3' > your events  </p>
          <p className='text-muted fs-6 mt-0 mb-2 mx-3'>
            your events are listed here
          </p>
        </div>
        <NewEvent />
      </div>

      <div className='d-flex flex-row flex-wrap' >
        {data.getDebutEventsWithUserId?.length === 0 ?


          <motion.div className='m-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.009 }}
            whileTap={{ scale: 0.9 }}
          >
            <p className='text-muted text-center fs-4 '>  you have no goals yet </p>
            <p className=' text-center fs-6 '>  click on the button above to create one </p>
          </motion.div >


          :
          data.getDebutEventsWithUserId?.map((event: any, index: number) => {
            return <MyEventCard
              key={uuid()}
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

      </div>
      <Footer />
      <Outlet />

    </div>
  )
}
