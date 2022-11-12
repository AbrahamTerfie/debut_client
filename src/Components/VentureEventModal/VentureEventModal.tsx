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
