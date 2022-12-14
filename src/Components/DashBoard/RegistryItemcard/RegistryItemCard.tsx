import react, { useState } from 'react';
import { motion } from 'framer-motion';
import { Row, Col, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { BsTrash } from 'react-icons/bs';
import { useMutation } from '@apollo/client';
import { DELETE_REGISTRY_ITEM, GET_EVENT_WITH_ID, MARK_ITEM_AS_FULFILLED } from '../../../GraphQl/index';
import { useParams } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../Notification/Toast';
interface registryItem {
    _id: string;
    itemOfRegistry: string
    registryItemName: string
    registryItemDescription: string
    registryItemImage: string
    registryItemPrice: string
    registryItemLink: string
    registryItemQuantity: string
    registryItemFullfiled: Boolean
}


export default function RegistryItem(
    {
        _id, itemOfRegistry, registryItemName, registryItemDescription, registryItemImage,
        registryItemPrice, registryItemLink, registryItemQuantity, registryItemFullfiled
    }: registryItem) {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { id } = useParams<{ id: string }>()
    const [deleteRegistryItem] = useMutation(DELETE_REGISTRY_ITEM, {
        refetchQueries: [{ query: GET_EVENT_WITH_ID, variables: { getDebutEventWithIdId: id } }],
        onCompleted: () => {
            notifySuccess("Item deleted")
            toggle()
        },
        onError: (error) => { notifyError(error.toString()) }
    })

    const [markItemAsFulfilled] = useMutation(MARK_ITEM_AS_FULFILLED, {
        refetchQueries: [{ query: GET_EVENT_WITH_ID, variables: { getDebutEventWithIdId: id } }],
        variables: { toggleRegistryItemAsFullfiledId: _id },
        onCompleted: () => {
            notifySuccess(registryItemFullfiled ? "Item marked as not fulfilled" : "Item marked as fulfilled")
        },
        onError: (error) => { notifyError(error.toString()) }

    })

    const handleDeleteItem = () => {
        deleteRegistryItem({ variables: { deleteRegistryItemId: _id } })

    }

    return (
        <Col md={6}>


            <Modal isOpen={modal} toggle={toggle}
                centered size='lg'>

                <ModalHeader toggle={toggle}>
                    are you sure you want to delete this item?
                </ModalHeader>
                <ModalBody className='px-5'>

                    <p className='text-danger fw-light m-0 fs-1'> {registryItemName} </p>
                    <p className='text-danger fw-light '> {registryItemDescription} </p>
                    <span className='text-warning  fw-light '> this action cannot be undone</span>

                </ModalBody>
                <ModalFooter>

                    <Button color="warning" size="sm" outline className="text-warningƒ" onClick={toggle}>
                        Cancel
                    </Button>
                    <Button color="danger" outline size="sm" className='text-danger  px-5' onClick={() => { handleDeleteItem() }}>
                        yes delete
                    </Button>{' '}
                </ModalFooter>
            </Modal>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.009 }}
                // whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, duration: 0.5 }}
                className=' shadow-sm rounded rounded-5   pt-0   m-2 me-2'>
                <Row>
                    {/* placeholder image  */}
                    <img src={registryItemImage} alt="registryItemImage" className='rounded rounded-5 img-fluid '
                        style={{
                            height: '200px',
                            objectFit: 'cover'

                        }} />
                </Row>

                <Row className='p-4 '>
                    <Col md={8}>
                        <p className='fs-5 fw-light m-0' > {registryItemName} </p>
                        <p className='text-muted text-wrap' > {registryItemDescription} </p>
                        <p className='text-muted text-wrap' >  {registryItemLink}  </p>

                    </Col>
                    <Col md={4}>
                        <p className='m-0 text-success '> $<span  >  {registryItemPrice} </span>  </p>
                        <p className='m-0 text-warning '> #<span  >  {registryItemQuantity} </span>  </p>


                    </Col>
                </Row>
                <div
                    className='px-2 pb-3 mx-3  d-flex   flex-row justify-content-between align-items-center'>
                    <motion.div
                        whileHover={{ scale: 1.009 }}
                        whileTap={{ scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 300, duration: 0.5 }}
                        style={{ cursor: 'default' }}
                        onClick={() => { markItemAsFulfilled() }}
                        className={!registryItemFullfiled ? ' shadow-sm rounded bg-success bg-opacity-10 p-2  px-4 w-100 m-1 me-2  text-success text-center' : ' shadow-sm rounded bg-dark bg-opacity-10 p-2  px-4 w-100 m-1 me-2  text-dark text-center'}>
                        {!registryItemFullfiled ? 'mark as fullfiled' : 'fullfiled'}
                    </motion.div>
                    {!registryItemFullfiled &&
                        <motion.div
                            whileHover={{ scale: 1.009 }}
                            whileTap={{ scale: 1.08 }}
                            transition={{ type: 'spring', stiffness: 300, duration: 0.5 }}
                            style={{ cursor: 'default' }}
                            onClick={toggle}
                            className=' shadow-sm rounded bg-danger bg-opacity-10 p-2  px-4 w-25 m-1 me-2  text-danger text-center'>
                            <BsTrash className='text-danger' />
                        </motion.div>
                    }
                </div>
            </motion.div>
        </Col>
    )
}
