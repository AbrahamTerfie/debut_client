import React from 'react'
import { useParams } from 'react-router-dom'

export default function RegistryPage() {
    const { id } = useParams()

    return (
        <div
            style={{ marginTop: '10vh' }}
        >RegistryPage

            {id}
        </div>
    )
}
