import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer';



export default function CompanyDetailPage() {

    const { id } = useParams<{ id: string }>();
    return (
        <div className='m-5 p-5  '>

            <p className='fs-6 fw-light text-muted  m-0  '> Name </p>
            <h1 className="">
                {id} complany name
            </h1>
            <h6 className="text-start "   >  website.com </h6>
            <div className="d-flex justify-content-start mb-5 mt-3">
                <MotionContainer>
                    <FaLinkedin className='text-primary mx-2 bg-primary bg-opacity-10 p-2 rounded-circle' size={35}
                    // onClick={() => window.open(linkedInUrl ? linkedInUrl : "", "_blank")} 
                    />
                </MotionContainer>
                <MotionContainer>
                    <FaTwitter className='text-info mx-2 bg-info bg-opacity-10 p-2 rounded-circle' size={35}
                    // onClick={() => window.open(twitterUrl ? twitterUrl : "", "_blank")} 
                    />
                </MotionContainer>
                <MotionContainer>
                    <FaFacebook className='text-primary mx-2 bg-primary bg-opacity-10 p-2 rounded-circle' size={35}
                    // onClick={() => window.open(facebookUrl ? facebookUrl : "", "_blank")} 
                    />
                </MotionContainer>
                <MotionContainer>
                    <FaInstagram className='text-danger mx-2 bg-danger bg-opacity-10 p-2 rounded-circle' size={35}
                    // onClick={() => window.open(instagramUrl ? instagramUrl : "", "_blank")} 
                    />
                </MotionContainer>
            </div>
            <p className='fs-6 fw-light text-muted  m-3' > company details </p>
            <Row className='shadow p-4   d-flex justify-content-between'>

                <Col md={6} className='m-2 text-wrap overflow-auto'>
                    <p className='fs-6 fw-light text-muted  m-0' > company description </p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate architecto facilis voluptatum aliquid porro fuga a repellendus neque laudantium adipisci reiciendis exercitationem accusamus vitae sapiente facere repudiandae, esse debitis! </p>

                    <p className='fs-6 fw-light text-muted  m-0'> mission statement </p>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cupiditate architecto facilis voluptatum aliquid porro fuga a repellendus neque laudantium adipisci reiciendis exercitationem accusamus vitae sapiente facere repudiandae, esse debitis! </p>
                    <Col md={12} >
                        <p className='text-muted' >major achivements</p>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <MotionContainer > <p className=' mx-1 bg-success text-success bg-opacity-10 p-2 px-4 rounded-pill '> itemm nmaeee </p> </MotionContainer>
                            <MotionContainer ><p className=' mx-1 bg-success text-success bg-opacity-10 p-2 px-4 rounded-pill '> itemm nmaeee </p> </MotionContainer>
                            <MotionContainer > <p className=' mx-1 bg-success text-success bg-opacity-10 p-2 px-4 rounded-pill '> itemm nmaeee </p> </MotionContainer>
                        </div>
                    </Col>
                    <Col md={12} >
                        <p
                            className='text-muted' > active regions </p>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <MotionContainer> <p className='text-warning mx-1 bg-warning bg-opacity-10 p-2 px-4 rounded-pill '>regions</p></MotionContainer>
                            <MotionContainer> <p className='text-warning mx-1 bg-warning bg-opacity-10 p-2 px-4 rounded-pill '>regions</p></MotionContainer>
                            <MotionContainer> <p className='text-warning mx-1 bg-warning bg-opacity-10 p-2 px-4 rounded-pill '>regions</p></MotionContainer>
                        </div>
                    </Col>
                    <Col md={12} >
                        <p className='text-muted' > aera of operation </p>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            <MotionContainer> <p className='text-muted mx-1 bg-dark bg-opacity-10 p-2 px-4 rounded-pill '> categoryyyyy</p></MotionContainer>
                            <MotionContainer> <p className='text-muted mx-1 bg-dark bg-opacity-10 p-2 px-4 rounded-pill '> categoryyyyy</p></MotionContainer>
                            <MotionContainer> <p className='text-muted mx-1 bg-dark bg-opacity-10 p-2 px-4 rounded-pill '> categoryyyyy</p></MotionContainer>
                            <MotionContainer> <p className='text-muted mx-1 bg-dark bg-opacity-10 p-2 px-4 rounded-pill '> categoryyyyycategoryyyyycategoryyyyy</p></MotionContainer>
                        </div>
                    </Col>
                </Col>

                <Col md={5}>
                    <img src="https://via.placeholder.com/400x400" alt="" className='img-fluid rounded shadow m-2 mb-5' />
                    <div>
                        <p className='text-muted' > created by</p>
                        <MotionContainer>
                            <div className='d-flex justify-content-start align-items-center p-2 rounded shadow-sm'>
                                <img src="https://via.placeholder.com/75x75" alt="" className='img-fluid rounded-circle shadow m-2' />
                                <div className='mx-4'>
                                    <p className='m-0 fs-5' > firstName lastname  </p>
                                    <p className='text-muted' > rolse at company  </p>
                                </div>
                            </div>
                        </MotionContainer>
                    </div>
                </Col>

            </Row>

            <Row>
                company events and registries
            </Row>
            <Row>
                company goals and milestones
            </Row>
        </div >
    )
}
