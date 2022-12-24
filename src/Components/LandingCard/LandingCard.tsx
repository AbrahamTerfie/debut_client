import React from 'react'
import '../../Styles/Landing.css'
import { motion } from "framer-motion";
// helop , point , gratitide
export default function LandingCard({ icon, title }:
    { icon: any, title: string }) {
    return (
        <motion.div className=" border  d-flex justify-content-center align-items-center flex-column p-2 mx-4 my-3 shadow rounded  "
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ height: window.innerWidth * 0.12, width: window.innerWidth * 0.28, cursor: "default", }}>
            <div className='my-2 ' style={{ height: window.innerWidth * 0.2, width: window.innerWidth * 0.2, cursor: "default" }}>
                {icon}
            </div>
            <p className='fs-6 fw-light text-center  text-light' >
                {title}
            </p>
        </motion.div>

    )
}
