import React from 'react'
import '../../Styles/Landing.css'
import { motion } from "framer-motion";
import { Col } from 'reactstrap';
// helop , point , gratitide
export default function LandingCard({ icon, title }:
    { icon: any, title: string }) {
    return (
        <Col
            xs='12' sm='12' md='4' lg='3' xl='3'
            className='d-flex justify-content-center align-items-center'
        >

            <motion.div className="   "
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
                <h3 className='text-center'>{title}</h3>

                <div className='img-fluid'
                    style={{
                        // same size for all screen sizes cover 
                        maxWidth: '300px',
                        maxHeight: '300px',
                        objectFit: 'cover',
                        // same size for all screen sizes cover


                    }}
                >
                    {icon}
                </div>

            </motion.div>
        </Col>

    )
}
