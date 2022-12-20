import React from 'react'
import '../../Styles/Landing.css'
import { motion } from "framer-motion";
// helop , point , gratitide
export default function LandingCard({ icon, title }:
    { icon: any, title: string }) {
    return (
        <motion.div className=" border 
            d-flex justify-content-center align-items-start
            flex-column p-4 mx-2 
            shadow rounded
            w-25 h-25
        "
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            <div className='my-2'

            >
                {icon}
            </div>
            <p className='fs-6 fw-light text-center  text-light' >
                {title}
            </p>
        </motion.div>

    )
}
