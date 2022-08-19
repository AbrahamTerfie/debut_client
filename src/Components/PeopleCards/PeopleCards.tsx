import React, { useState, useContext } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import './Peoplecards.css'
import MyVentureCard from '../MyVentureCard/MyVentureCard';
import DebutEventCards from '../DebutEventCards/DebutEventCards';
import RequestPeopleIntriductionForm from './RequestPeopleIntriductionForm'
import { PeopleDirectoryContext } from '../../Context/PeopleDirectoryContext'
export default function PeopleCards() {
    const { peopleDirectorystate, setPeopleDirectoryState } = useContext(PeopleDirectoryContext)
    // const UpdatePeopleDirectoryState = (newState: any) => {
    //     setPeopleDirectoryState(newState)

    // }
    return (

        <Row className='shadow  border-info rounded-4 p-3 mx-2 my-2 MyeventCard'
//             onClick={() => {
//                 UpdatePeopleDirectoryState({
//                     ...peopleDirectorystate,
//                     selectedPersonID: ''
//                 })
//             }

// }

>

            <Col md={2}  >
                <img
                    className='rounded w-100'
                    src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                    alt='user profile photo' />

            </Col>

            <Col md={10} >

                <p className=' fw-bold fs-5 m-0' >Name fill</p>

                <p className='fs-6 fw-lighter m-0' >
                    user title , tilte expands and more

                </p>
                <p className='fw-lighter'>  user profile description  </p>



            </Col>
        </ Row >


    )
}
