import react from 'react';
import { motion } from 'framer-motion';
import {  Row, Col } from 'reactstrap';


export default function RegistryItem() {
    return (
        <Col md={6}>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.009 }}
                // whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, duration: 0.5 }}
                className=' shadow-sm rounded rounded-5   pt-0   m-2 me-2'>
                <Row>
                    {/* placeholder image  */}
                    <img src='https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                        alt="registry item" className='img-fluid rounded-5' style={{ height: '200px' }} />
                </Row>

                <Row className='p-4 '>
                    <Col md={8}>
                        <p className='fs-5 fw-light m-0' > registry item name </p>
                        <p className='text-muted text-wrap' > registry item description </p>
                        <p className='text-muted text-wrap' > item Linkkkkkkk </p>

                    </Col>
                    <Col md={4}>
                        <p className='m-0 text-success '> $<span  > this price</span>  </p>
                        <p className='m-0 text-warning '> #<span  > this price</span>  </p>


                    </Col>
                </Row>
                <Row
                    className='px-2 pb-3 mx-3 '>

                    <motion.div
                        whileHover={{ scale: 1.009 }}
                        whileTap={{ scale: 1.08 }}
                        transition={{ type: 'spring', stiffness: 300, duration: 0.5 }}
                        style={{ cursor: 'default' }}
                        className=' shadow-sm rounded bg-success bg-opacity-10 p-2  px-4  m-1 me-2  text-success text-center'>

                        mark item as fullfilled
                    </motion.div>
                </Row>
            </motion.div>
        </Col>
    )
}
