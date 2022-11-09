import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { Row, Col } from 'reactstrap'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer';

const background: React.CSSProperties = {
    backgroundImage: `url(https://images.unsplash.com/photo-1667715191315-351400a5789a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
    objectFit: 'cover', objectPosition: 'center', borderRadius: '10px', backgroundBlendMode: 'multiply', backgroundColor: 'rgba(0,0,0,0.6)',
    width: '100%', height: '100%', minHeight: '200px', maxHeight: '300px', minWidth: '200px', maxWidth: '300px',
}

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



            {/* company events and registries  */}
            <p className='fs-6 fw-light text-muted  m-3 mt-5' > Events and registries  </p>

            <Row
                className='shadow p-4   d-flex justify-content-between'>


                <Col className="m-2" >
                    <MotionContainer>
                        <div className='d-flex justify-content-end align-items-end flex-column p-4 rounded shadow-sm'
                            style={background}>
                            <div className='d-flex justify-content-end align-items-end flex-column'>
                                <p className='fs-1 m-0' > event title </p>
                                <p className='text-light' > event description </p>
                            </div>
                        </div>
                    </MotionContainer>
                </Col>
                <Col className=" m-2">
                    <MotionContainer>
                        <div className='d-flex justify-content-end align-items-end flex-column p-4 rounded shadow-sm'
                            style={background}>
                            <div className='d-flex justify-content-end align-items-end flex-column'>
                                <p className='fs-1 m-0' > event title </p>
                                <p className='text-light' > event description </p>
                            </div>
                        </div>
                    </MotionContainer>
                </Col>
                <Col className="m-2">
                    <MotionContainer>
                        <div className='d-flex justify-content-end align-items-end flex-column p-4 rounded shadow-sm'
                            style={background}>
                            <div className='d-flex justify-content-end align-items-end flex-column'>
                                <p className='fs-1 m-0' > event title </p>
                                <p className='text-light' > event description </p>
                            </div>
                        </div>
                    </MotionContainer>
                </Col>
                <Col className="m-2" >
                    <MotionContainer>
                        <div className='d-flex justify-content-end align-items-end flex-column p-4 rounded shadow-sm'
                            style={background}>
                            <div className='d-flex justify-content-end align-items-end flex-column'>
                                <p className='fs-1 m-0' > event title </p>
                                <p className='text-light' > event description </p>
                            </div>
                        </div>
                    </MotionContainer>
                </Col>
            </Row>
            <Row>
                company goals and milestones
            </Row>
        </div >
    )
}
