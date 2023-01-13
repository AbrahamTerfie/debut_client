import React from 'react'
import { Col, Row } from 'reactstrap'
import { setActivePersonId } from '../../Store/UI/sidebarController'
import MotionContainer from '../MotionContainer/MotionContainer'
import { useDispatch } from 'react-redux'
export default function UserResults({ people, setSearch }: {
    people: any,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}) {
    const dispatch = useDispatch()
    return (
        <MotionContainer>
            <Row className='border border-muted  ps-0  bg-secondary  text-muted  '
                onClick={() => { dispatch(setActivePersonId(people._id)) && setSearch('') }}>
                <Col md={3}
                    sm={4}
                    xs={4}
                    lg={2}
                    className='d-flex flex-column justify-content-center align-items-center  mx-auto flex-wrap overflow-hidden  '>
                    <img
                        src={people?.profileImage}
                        alt='profile'
                        className='rounded-2 img-fluid  '
                        style={{
                            width: '100px', height: '100px', objectFit: 'cover',
                            maxHeight: '100%', minWidth: '100px', minHeight: '100px'
                        }} />
                </Col>
                <Col md={9} sm={8} xs={8} lg={10}
                    className='d-flex flex-column justify-content-center align-items-start mx-auto flex-wrap overflow-hidden  text-light '>
                    <p className=' fw-bold m-0   me-auto d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start' >
                        {people?.firstName}  {people?.lastName}

                    </p>
                    <p className='fs-6 m-0 fw-lighter me-auto text-muted  d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start' >
                        {people?.titleAtCompany}

                    </p>
                    <p className='fw-lighter m-0  me-auto   d-flex flex-wrap align-items-start justify-content-center justify-content-sm-start'>
                        {people?.company.length > 0 && people.company[0]?.companyName}

                    </p>
                </Col>

            </ Row>
        </MotionContainer>
    )
}
