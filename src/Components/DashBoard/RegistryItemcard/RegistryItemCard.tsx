import react from 'react';
import { motion } from 'framer-motion';
import { Row, Col } from 'reactstrap';

interface registryItem {
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
        itemOfRegistry, registryItemName, registryItemDescription, registryItemImage,
        registryItemPrice, registryItemLink, registryItemQuantity, registryItemFullfiled
    }: registryItem) {

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
                    <img src={registryItemImage} alt="registryItemImage" className='rounded rounded-5 img-fluid'
                        style={{ height: '200px' }} />
                </Row>

                <Row className='p-4 '>
                    <Col md={8}>
                        <p className='fs-5 fw-light m-0' > {registryItemName} </p>
                        <p className='text-muted text-wrap' > {registryItemDescription} </p>
                        <p className='text-muted text-wrap' >  {registryItemLink}  </p>

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
