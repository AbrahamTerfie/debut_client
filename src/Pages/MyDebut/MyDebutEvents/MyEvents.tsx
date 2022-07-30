import React from 'react'
import MyEventCard from '../../../Components/MyEventCard/MyEventCard'
export default function MyEvents() {
  return (
    <div className='my-5  mx-5 px-5  w-100 '>
      <p className='fs-2  fw-lighter mx-5 '>
        your events
      </p>
      <div className='d-flex justify-content-around flex-wrap shadow-lg p-4' >
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
        <MyEventCard /><MyEventCard />
        <MyEventCard />
        <MyEventCard />
        <MyEventCard />
      </div>

    </div>

  )
}
