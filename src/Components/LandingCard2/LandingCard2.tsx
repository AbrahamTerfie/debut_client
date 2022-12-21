import React from 'react'
import { motion } from "framer-motion";

export function LandingCard2({
    number, title, text,
}: { number: number, title: string, text: string }) {

    return (
        <motion.div className="  d-flex  justify-content-center align-items-center
        bg-dark bg-opacity-25 flex-column  mx-2 mt-5 p-4  shadow rounded
"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            style={{
                width: '30%',
                height: '100%',
            }}
        >
            <p className='fs-3 fw-bold text-center text-light  ' >
                {title}
            </p>
            <p className='fs-6 fw-bold text-center  text-light' >
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
            bg-light bg-opacity-75 flex-column  mx-2 mt-5 p-4 shadow rounded"
            style={{
                width: '30%',
                height: '100%',
                color: '#1985a1'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }} >
            <p className='fs-3 fw-bold text-center  ' >
                {/* {number}  */}
                {title}
            </p>
            <span className=' fw-light fs-4 text-center  ' >
                {text}
            </span>
        </motion.div>
    )
}
