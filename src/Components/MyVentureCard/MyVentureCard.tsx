import React from 'react'
import { appRoutes } from '../../Routes/routes'
import { useNavigate } from 'react-router-dom'
import './MyVentureCard.css'
export default function MyVentureCard() {
    const navigate = useNavigate()

    const itemlink = "fromMyVentureswithid"
    return (
        <div className='myVentureContainer m-3 w-25 h-25 p-3'
            onClick={() => navigate(`${appRoutes.ventures}/${itemlink}`)}>
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
