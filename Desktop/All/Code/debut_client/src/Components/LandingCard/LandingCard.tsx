import React from 'react'
import '../../Styles/Landing.css'
import { FaHandsHelping } from 'react-icons/fa'

// helop , point , gratitide
export default function LandingCard({ icon, title }:
    { icon: any, title: string }) {
    return (
        <div className="landingCard"    >
            <div>
                {icon}
            </div>
            <div className='landing-card-title' >
                {title}
            </div>
        </div>

    )
}
