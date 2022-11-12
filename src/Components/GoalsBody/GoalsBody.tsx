import { motion } from 'framer-motion'
import React from 'react'
import { Row, Col } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'




function MileStoneCard() {
    return (
        <Col md={5}
            className='shadow-sm  m-2 '
        >
            <Row className='p-3'>
                <motion.div
                    initial={{ opacity: 0, x: -1000 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 40 }}
                    whileHover={{ scale: 1.01 }}
                // whileTap={{ scale: 0.95 }}
                >
                    <Col md={12}>
                        <h6 className='fw-bold' > milestone name

                            {/* pill that shows if it is completed or pending  */}
                            <span className='badge rounded-pill bg-success text-success ms-3 p-2 px-4 bg-opacity-10 ' > completed </span>

                        </h6>
                        <p className='fw-light' > milestone description </p>
                    </Col>
                    <Col md={6}>
                        <small className='text-muted  text-small fw-light' >due date</small>
                        <p className='fw-light' > 12/12/2021 </p>
                    </Col>
                    <Col md={12}  >
                        <small className='text-muted  text-small fw-light' >need help with </small>
                        <div className='d-flex flex-wrap my-2' >
                            <MotionContainer>
                                <p className='  bg-danger bg-opacity-10 text-danger rounded rounded-pill  p-1 px-4  m-2' >linkss </p>
                            </MotionContainer>
                        </div>

                    </Col>
                    <Col md={12}>
                        <small className='text-muted  text-small fw-light' >links  </small>
                        <div className='d-flex flex-wrap my-2' >
                            <MotionContainer>
                                <p className='  bg-primary bg-opacity-10 text-primary rounded rounded-pill  p-1 px-4  m-2' >linkss </p>
                            </MotionContainer>
                        </div>
                    </Col>
                    <Col md={12}>
                        <MotionContainer>
                            <p
                                className='text-center bg-success m-3 text-success rounded rounded-1 bg-opacity-10  p-2 px-4  m-2'
                            >
                                let me help you with this
                            </p>
                        </MotionContainer>
                    </Col>

                </motion.div>
            </Row>
        </Col >
    )
}



export default function GoalsBody() {
    return (
        <div className='p-4'>
            <small className=' fw-bold text-muted text-start m-0 p-0' >  goal description </small>
            <p className='fw-light t text-start m-0 p-0'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, incidunt quod. Ratione quidem itaque consequatur perferendis corrupti. Assumenda sint illo rem minima, ipsum maxime sunt atque labore doloribus amet molestiae.
            </p>

            <Row className='p-4'>
                <MileStoneCard />
                <MileStoneCard />
                <MileStoneCard />
                <MileStoneCard />

            </Row>

        </div>

    )
}
