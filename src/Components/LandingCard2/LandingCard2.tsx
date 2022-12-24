import React from 'react'
import { motion } from "framer-motion";

export function LandingCard2({
    number, title, text, icon
}: { number: number, title: string, text: string, icon: any }) {

    return (
        <motion.div className="  d-flex  justify-content-center align-items-center
        bg-muted bg-opacity-75 flex-column  mx-2 mt-2 mb-5 p-4 shadow-lg rounded"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{ width: window.innerWidth * 0.3, height: window.innerWidth * 0.13, }} >
            <div className='my-3'>
                {icon}
            </div>
            <p className='fs-4 fw-bold text-center text-light m-0  ' >
                {title}
            </p>
            <span className=' fw-bold text-center  text-light' >
                {text}
            </span>
        </motion.div>
    )
}

export function LandingCard3({ number, title, text, icon
}: { number: number, title: string, text: string, icon: any }
) {
    return (
        <motion.div
            className="  d-flex  justify-content-center align-items-center
            bg-light bg-opacity-75 flex-column  mx-2 mt-2 mb-5 p-4 shadow rounded"
            style={{
                width: window.innerWidth * 0.3, height: window.innerWidth * 0.13,
                color: '#1985a1'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }} >
            <div className='my-3'>
                {icon}
            </div>
            <p className='fs-3 fw-bold text-center m-0 ' >
                {/* {number}  */}
                {title}
            </p>
            <span className=' fw-light  text-center  ' >
                {text}
            </span>
        </motion.div>
    )
}
