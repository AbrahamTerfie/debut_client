import React from 'react'
import '../../Styles/Landing.css'
import { motion } from "framer-motion";
import { Col } from 'reactstrap';
// helop , point , gratitide
export default function LandingCard({ icon, title }:
    { icon: any, title: string }) {
    return (
        <Col
            sm={12} md={4} lg={4} xl={4}
            className='d-flex justify-content-center align-items-center  '>

            <motion.div className="   "
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                style={{
                    // responsive img  for all screen sizes 
                    width: "100%",
                    height: "100%",
                    minHeight: "200px",
                    minWidth: "200px",
                    maxHeight: "350px",
                    maxWidth: "300px",
                }}>

                <div className='img-fluid'>
                    {icon}
                </div>
                <p className='fs-6 fw-light text-center  text-light' >
                    {title}
                </p>
            </motion.div>
        </Col>

    )
}
