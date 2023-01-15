
import React from 'react'
import { Col, Row } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../Routes/routes'
export default function VentureResults(
    { ventures }: {
        ventures: any,
    }
) {
    const navigate = useNavigate()
    return (
        <MotionContainer>
            <Row className='border border-muted  ps-0  bg-secondary  text-muted  '
                onClick={() => navigate(`${appRoutes.ventures}/${ventures._id}`)}
            >
                <Col md={3}
                    sm={4}
                    xs={4}
                    lg={2}
                    className='d-flex flex-column justify-content-center align-items-center  mx-auto flex-wrap overflow-hidden  '>
                    <img
                        src={ventures?.companyLogo}
                        alt='profile'
                        className='rounded-2 img-fluid  '
                        style={{
                            width: '100px', height: '100px', objectFit: 'cover',
                            maxHeight: '100%', minWidth: '100px', minHeight: '100px'
                        }} />
                </Col>
                <Col md={9} sm={8} xs={8} lg={10}
                    className='d-flex flex-column justify-content-center align-items-start mx-auto flex-wrap overflow-hidden  text-light '>
                    <p className='fw-bolder fs-5 m-0' > {ventures.companyName} </p>
                    <span className=' text-muted' >{
                        ventures.companyDescription?.length > 150 ? ventures.companyDescription?.slice(0, 150) + "..." : ventures.companyDescription
                    } </span>
                    <p className=' fw-bold'>  {ventures.companyHeadquarters} </p>
                    <div className='d-flex flex-row ' >
                        <img src={ventures.companyOwner?.profileImage}
                            className='rounded-circle img-fluid'
                            style={{ width: '30px', height: '30px', objectFit: 'cover', maxHeight: '100%' }}
                            alt='company owner profile  ' />
                        <p className='mx-2  fs-6  fw-normal' > {ventures.companyOwner?.firstName + "  " + ventures.companyOwner?.lastName} </p>
                    </div>
                </Col>

            </ Row>
        </MotionContainer >
    )
}
