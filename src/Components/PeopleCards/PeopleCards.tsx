import React, { useState, useContext } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import './Peoplecards.css'
import { setActivePersonId } from '../../Store/UI/sidebarController'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
export default function PeopleCards() {


    const { activePersonId } = useSelector((store: RootState) => store.uiStore)
    const dispatch = useDispatch()
    function updatePeopleDirectoryState(newname: string) {
        dispatch(setActivePersonId(newname))
    }
    console.log("activePersonId", activePersonId)
    return (
        <Row className='shadow  border-info rounded-4 p-3 mx-2 my-2 MyeventCard'
            onClick={() => updatePeopleDirectoryState('asss')}>
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
