import React from 'react'

import './MyVentureCard.css'
export default function MyVentureCard() {
    return (
        <div className='myVentureContainer m-3 w-25 h-25 p-3' >
            <div className='h6 fw-bold' >
                Venture Name ventureName
            </div>
            <div className='font-size-sm fw-light'>
                venture descriptin description description descriptin
            </div>
            <p className="fw-lighte text-muted">
                date created : DD/MM/YYYY
            </p>
        </div>



    )
}
