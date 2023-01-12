import React from 'react'
import { motion } from "framer-motion";
import { Col } from 'reactstrap';

export function LandingCard2({
    number, title, text, icon
}: { number: number, title: string, text: string, icon: any }) {

    return (
        <Col
            sm={12} md={6} lg={3} xl={3}
            className=" d-flex  justify-content-center align-items-center border border-muted p-4 "
        >
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}

            >
                <div className='m-1  text-center h-75'>
                    {icon}
                </div>
                <p className='fs-4 fw-bold text-center text-light m-0  ' >
                    {title}
                </p>
                <p className=' fw-bold text-center  ' >
                    {text}
                </p>
            </motion.div>
        </Col>
    )
}

export function LandingCard3({ number, title, text, icon
}: { number: number, title: string, text: string, icon: any }
) {
    return (
        <Col
            sm={12} md={6} lg={3} xl={3}
            className=" bg-light d-flex  justify-content-center align-items-center  border border-muted p-4"
            style={{
                // constacnt size foe all cards 
                height: "300px",
                width: "300px",
                minHeight: "300px",
                // minWidth: "300px",
            }}
        >
            <motion.div


                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }} >
                <div className='my-3 text-center'>
                    {icon}
                </div>
                <p className='fs-3 fw-bold text-center m-0 ' >
                    {/* {number}  */}
                    {title}
                </p>
                <p className=' fw-bold text-center  ' >
                    {text}
                </p>
            </motion.div></Col>
    )
}
