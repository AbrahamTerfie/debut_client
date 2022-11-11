import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import EventRegistryAccordion from '../EventRegistryAccordion/EventRegistryAccordion'
export default function VentureEventModal(
    { isEventModalOpen, toggleEventModal }: {
        isEventModalOpen: boolean,
        toggleEventModal: () => any,
    }
) {
    return (
        <Modal isOpen={isEventModalOpen} toggle={toggleEventModal}
            fullscreen={true}
            scrollable={true}
            fade
            // backdropTransition={{ timeout: 700 }}
            className='App'
        >
            <ModalHeader className='px-5 py-4   shadow' toggle={toggleEventModal}>
                <h1 className="text-center">  "event title" </h1>
                <p className='text-center text-muted fs-6 fw-light' > event date </p>

            </ModalHeader>
            <ModalBody className='p-5' >
                <Row>
                    <Col md={8} className='d-flex flex-column justify-content-start align-items-start'>
                        <small className='text-muted ' > description </small>
                        <p  > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus magni eos impedit fuga alias aliquam quo, vero aliquid, facere tempora illo eveniet facilis officia temporibus. Itaque culpa deserunt illum qui. </p>

                        <small className='text-muted ' > date  </small>
                        <p  > "2021-08-08"</p>

                        <small className='text-muted ' > location </small>
                        <p  >  "location" </p>
                        <div>
                            <small className='text-muted ' > related links  </small>
                            <div className='d-flex flex-wrap m-2' >
                                <MotionContainer>
                                    <p className=' mx-1 bg-success text-success bg-opacity-10 p-2 px-4 rounded-pill '>link 1</p>
                                </MotionContainer>
                                <MotionContainer>
                                    <p className=' mx-1 bg-success text-success bg-opacity-10 p-2 px-4 rounded-pill '>link 2</p>
                                </MotionContainer>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <img src="https://images.unsplash.com/photo-1667715191315-351400a5789a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            alt="" className='w-100 h-100 img-fluid shadow mx-2 rounded-5'
                            style={{ maxHeight: '400px', objectFit: 'cover', objectPosition: 'center', maxWidth: '400px' }} />
                    </Col>
                </Row>


                <p className='text-start fs-4 fw-light  mx-5 my-4' > registries </p>
                <Row>

                    {/* collapse goes here  */}
                    <EventRegistryAccordion />


                </Row>



            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggleEventModal}>
                    Do Something
                </Button>{' '}
                <Button color="secondary" onClick={toggleEventModal}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}
