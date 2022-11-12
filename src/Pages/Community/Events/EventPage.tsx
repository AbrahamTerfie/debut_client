import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function EventPage() {

    const { id } = useParams()

    return (
        <div
        className='mt-5 pt-5'
        >

            <h1>
                Event Page

                {id}
            </h1>
            EventPage
        </div>
    )
}
