import React from 'react'
import '../../Styles/Landing.css'
import { FaHandsHelping } from 'react-icons/fa'

// helop , point , gratitide
export default function LandingCard({ icon, title }:
    { icon: any, title: string }) {
    return (
        <div className=" border 
            d-flex justify-content-center align-items-center
            flex-column p-3 mx-2 my-5
            shadow-sm rounded
            w-25 h-50
        "    >
            <div
                className='my-4'
            >
                {icon}
            </div>
            <div className=' 
                d-flex justify-content-center align-items-center
            ' >

                <p className='fs-5 fw-lighter text-center'>
                    {title}
                </p>
            </div>
        </div>

    )
}
