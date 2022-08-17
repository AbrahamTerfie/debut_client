import React, { useState } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import './Peoplecards.css'
import MyVentureCard from '../MyVentureCard/MyVentureCard';
import DebutEventCards from '../DebutEventCards/DebutEventCards';
import RequestPeopleIntriductionForm from './RequestPeopleIntriductionForm'
export default function PeopleCards() {
    const [modal, setModal] = useState(false);
    const [canvas, setCanvas] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleCanvas = () => setCanvas(!canvas);

    return (
        <>

            <Offcanvas style={{ width: '50%', top: '10%' }}
                direction="end"
                isOpen={canvas}
                toggle={toggleCanvas}
                scrollable={true}>
                <OffcanvasHeader toggle={toggleCanvas}>
                    <p className='fs-5 mx-3 px-3 fw-light' > Request introduction to Selected user  </p>
                </OffcanvasHeader>
                <OffcanvasBody >
                    <RequestPeopleIntriductionForm />
                </OffcanvasBody>
            </Offcanvas>
            <Modal
                backdrop={false}
                centered
                fullscreen
                scrollable
                size="xl"
                isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <p className='fs-3 mx-4 fw-light' >
                        user profile name
                        <p className='text-muted fs-5'>
                            @UserName
                        </p>
                    </p>

                </ModalHeader>
                <ModalBody>
                    {/* email , usename , phone numwe , ventures , following, followers , expertise , attended events , events to attend  */}

                    <Row>
                        <Col xm='12' sm='12' md='12' lg='8' xl='8'  >

                            <div>
                                <p className='fs-4 m-3' > Expertise </p>
                                <div className='d-flex  flex-row flex-wrap m-4'>
                                    <div className='pillStyle'  >  Available</div>
                                    <div className='pillStyle'   >AvailableAvailable</div>
                                    <div className='pillStyle'  >Available</div>
                                    <div className='pillStyle'  >Available</div>
                                    <div className='pillStyle' >Available</div>
                                    <div className='pillStyle'  >Available</div>
                                </div>

                            </div>
                            <div  >
                                <p className='fs-4 m-3 pt-4' > Ventures </p>
                                <div className='d-flex flex-wrap'>
                                    <MyVentureCard />
                                    <MyVentureCard />
                                    <MyVentureCard />
                                    <MyVentureCard />
                                    <MyVentureCard />
                                    <MyVentureCard />
                                </div>
                            </div>

                            <div  >
                                <p className='fs-4 m-3 pt-4' > Attended Events  </p>
                                <div className='d-flex flex-wrap  mx-4'>
                                    <DebutEventCards />
                                    <DebutEventCards />
                                    <DebutEventCards />
                                    <DebutEventCards />
                                    <DebutEventCards />
                                    <DebutEventCards />
                                </div>
                            </div>

                        </Col>

                        <Col xs='12' sm='12' md='12' lg='4' xl='4' >
                            <Button color='light' className='w-75 m-5' outline size='lg'
                                onClick={() => toggleCanvas()}
                            >
                                Request introductin
                            </Button>

                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>

                    <Button color="light" outline onClick={toggle}>close</Button>
                </ModalFooter>
            </Modal>

            <Row className='shadow  border-info rounded-4 p-3 mx-2 my-2 MyeventCard' onClick={toggle} >
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
            </Row>
        </>

    )
}
