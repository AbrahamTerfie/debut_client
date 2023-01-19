import React from 'react'
import { Input } from 'reactstrap'
export default function SearchComponent() {
    return (
        <Input
            className='App'
            type="text"
            name="textarea-input"
            placeholder='Search'
            prepend="Search ... "
        />

    )
}
