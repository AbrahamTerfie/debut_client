import React from 'react'
import { Row, Col, } from 'reactstrap'
import './Peoplecards.css'
import { setActivePersonId } from '../../Store/UI/sidebarController'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { motion } from 'framer-motion';
export default function PeopleCards({ people }: any) {
    const dispatch = useDispatch()
    const { activePersonId } = useSelector((store: RootState) => store.uiStore)

    function updatePeopleDirectoryState(newname: string) {
        dispatch(setActivePersonId(newname))
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        people._id === activePersonId ? updatePeopleDirectoryState('') : updatePeopleDirectoryState(people._id)
    }

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ cursor: 'pointer' }}
            className={activePersonId === people._id ?
                '  shadow-lg  rounded-3   my-2  bg-dark  bg-opacity-10 border-muted '
                : '  shadow-sm rounded-5   my-2  border border-muted '}
        >
            <Row onClick={(e: any) => handleClick(e)}>
                <Col md={3} >
                    <img
                        src={people.profileImage}
                        alt='profile'
                        className='rounded img-fluid h-100 w-75'
                        style={{ width: '75px', height: '75px', objectFit: 'cover', maxHeight: '7em', minHeight: '7em' }}
                    />
                </Col>
                <Col md={9}
                    className='d-flex flex-column justify-content-center align-items-start p-2'>
                    <p className=' fw-bold fs-5 m-0' > {people.firstName}  {people.lastName}  </p>
                    <p className='fs-6 fw-lighter m-0 text-muted' >
                        {people.titleAtCompany}
                    </p>
                    <p className='fw-lighter'>
                        {people.company[0]?.companyName}
                    </p>
                </Col>
            </ Row >
        </motion.div>
    )
}
