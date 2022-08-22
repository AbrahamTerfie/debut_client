import React, { useState, useContext } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import './Peoplecards.css'
import { setActivePersonId } from '../../Store/UI/sidebarController'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
export default function PeopleCards({ people }: any) {
    // console.log("people", people.company[0]?.companyName)

    const { activePersonId } = useSelector((store: RootState) => store.uiStore)
    const dispatch = useDispatch()
    function updatePeopleDirectoryState(newname: string) {
        dispatch(setActivePersonId(newname))
    }
    return (
        <Row className='shadow  border-info rounded-4 p-3 mx-2 my-2 MyeventCard'
            onClick={() => updatePeopleDirectoryState(people._id)}>
            <Col md={2}  >
                <img
                    className='rounded w-100'
                    src={people.profileImage}
                    alt='user profile photo' />
            </Col>
            <Col md={10} >
                <p className=' fw-bold fs-5 m-0' > {people.firstName}  {people.lastName}  </p>
                <p className='fs-6 fw-lighter m-0 text-muted' >
                    {people.titleAtCompany}
                </p>
                <p className='fw-lighter'>

                    {people.company[0]?.companyName}

                </p>
            </Col>
        </ Row >
    )
}
