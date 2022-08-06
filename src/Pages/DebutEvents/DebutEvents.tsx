
import React from 'react'
import { Row, Col } from 'reactstrap'
import DebutEventCards from '../../Components/DebutEventCards/DebutEventCards'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
export default function DebutEvents() {
    return (

        <div className='my-5  mx-5 px-5  w-100 '>

            <p className='fs-2  fw-lighter mx-5 '>
                debut events

            </p>
            <span className='fs-6 text-muted mx-5 d-flex flex-wrap' >
                Explore the events that are happening in  your community.
                and join the ones that you like. and show your support.
            </span>
            <div className='mx-4 my-3' >
                <SearchComponent />
            </div>
            <div className='d-flex flex-wrap shadow p-4'>
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
                <DebutEventCards />
            </div>


            {/* </Col> */}
            {/* </Row> */}
        </div>


    )
}
