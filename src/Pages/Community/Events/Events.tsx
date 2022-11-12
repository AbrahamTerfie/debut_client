import React from 'react'
import { useNavigate, } from 'react-router-dom'
import { Button } from 'reactstrap'
import { appRoutes } from '../../../Routes/routes'
export default function Events() {

    const itemlink = "fromEvents"
    const navigate = useNavigate()
    return (
        <div className='mt-5 pt-5'>

            Events

            <Button onClick={() => navigate(`${itemlink}`)}>
                this buttton
            </Button>
        </div>

    )
}
