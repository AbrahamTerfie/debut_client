import React from 'react'
import { useParams } from 'react-router-dom'
export default function VenturePage() {
    const { id } = useParams()
    return (
        <div style={{ marginTop: '100px', }}>
            venture page if this id is
            <br />

            {id}

            <br />


        </div>
    )
}
