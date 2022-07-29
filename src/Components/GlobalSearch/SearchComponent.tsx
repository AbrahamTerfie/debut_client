import React from 'react'
import { Input } from 'reactstrap'
export default function SearchComponent() {
    return (
        <div><Input
            // color='primary'
            type="text"
            name="textarea-input"
            placeholder='Search'
            prepend="Search"
        /></div>
    )
}
