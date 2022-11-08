import React from 'react'
import { useParams } from 'react-router-dom'
export default function CompanyDetailPage() {

    const { id } = useParams<{ id: string }>();
    return (
        <div
            className='mt-5 pt-5 '
        >
            this is company of id {id}
            this is company detail page
        </div>
    )
}
