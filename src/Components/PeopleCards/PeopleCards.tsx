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
                '  my-2 text-info-emphasis bg-info-subtle border border-info-subtle '
                : ' bg-tertiary  rounded-1   my-2 border-2 border border-muted  '}
        >
            <Row onClick={(e: any) => handleClick(e)}>
                <Col md={3}
                    sm={4}
                    xs={4}
                    lg={2}
                    className='d-flex flex-column justify-content-center align-items-center p-2 mx-auto flex-wrap overflow-hidden  '
                >
                    <img
                        src={people.profileImage}
                        alt='profile'
                        className='rounded-2 img-fluid  '
                        style={{
                            width: '100px', height: '100px', objectFit: 'cover', maxHeight: '100%',
                            minWidth: '100px', minHeight: '100px'
                        }}
                    />
                </Col>
                <Col md={9} sm={8} xs={8} lg={10}
                    className='d-flex flex-column justify-content-center align-items-start p-2 mx-auto flex-wrap overflow-hidden  '>
                    <p className=' fw-bold m-0  fs-5 me-auto d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start' >
                        {people.firstName}  {people.lastName}  </p>
                    <p className='fs-6 m-0 fw-lighter me-auto text-muted  d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start' >
                        {people.titleAtCompany}
                    </p>
                    <p className='fw-lighter m-0  me-auto   d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start'>
                        {people.company[0]?.companyName}
                    </p>
                </Col>
            </ Row >
        </motion.div>
    )
}
