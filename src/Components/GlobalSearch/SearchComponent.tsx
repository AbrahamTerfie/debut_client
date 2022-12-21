import React from 'react'
import { Input } from 'reactstrap'
export default function SearchComponent() {
    return (
        <Input

            size={200}
            type="text"
            name="textarea-input"
            placeholder='Search'
            prepend="Search ... "
        />

    )
}
