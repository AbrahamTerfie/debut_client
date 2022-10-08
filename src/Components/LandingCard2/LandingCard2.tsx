import React from 'react'
import { motion } from "framer-motion";

export function LandingCard2({
    number, title, text,
}: { number: number, title: string, text: string }) {


    return (
        <motion.div className="  d-flex  justify-content-center align-items-center
        bg-dark bg-opacity-25 flex-column  mx-2 mt-5 p-4  shadow rounded
        w-25 h-100"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}>
            <p className='fs-6 fw-light text-center  text-light' >
                {number}   {title}
            </p>

            <p className='fs-6 fw-bold text-center  text-light' p-3 >
                {text}
            </p>
        </motion.div>
    )
}


export function LandingCard3({ number, title, text,
}: { number: number, title: string, text: string }
) {
    return (
        <motion.div
            className="  d-flex  justify-content-center align-items-center
        bg-light  bg-opacity-75 flex-column  mx-2 mt-5 p-4 shadow rounded"
            style={{ width: '30%', height: "10em",  color: '#1985a1' }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
            <p className='fs-6 fw-light text-center  ' >
                {number}   {title}
            </p>
            <span className=' fw-bold text-center  ' p-3 >
                {text}
            </span>
        </motion.div>
    )
}
