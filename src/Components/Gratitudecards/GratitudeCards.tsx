import React, { useState, useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import './GratitudeCards.css'
import { RootState } from '../../Store/RootReducer'
import { useSelector } from 'react-redux'
import moment from 'moment'


export default function GratitudeCards(
    { createdBy, sentTo, subject, message, createdAt }: {
        createdBy: any, sentTo: any, subject: String, message: String,
        createdAt: any
    }


) {
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const [isAdressedToMe, setIsAdressedToMe] = useState(false)


    useEffect(() => {

        if (sentTo._id === userID) {
            setIsAdressedToMe(true)
        }
    }, [createdBy, sentTo, userID])

    return (
        <Row className='  p-3 shadow-sm border border-light m-2'>
            <p className=' fw-light m-0'>
                <small className='text-muted text-light' >
                    {isAdressedToMe ? 'From: ' : 'To: '}

                </small>
                {sentTo?.firstName} {sentTo?.lastName}
            </p>
            <p className='text-muted  fw-light'>
                {createdAt ? moment(createdAt).format('MMMM Do YYYY') : ""}
            </p>
            <p className='m-0' > {subject ? subject : ""} </p>
            <p className='fw-light px-2 m-0' >
                {message ? message : ""}
            </p>
        </Row>
    )
}
