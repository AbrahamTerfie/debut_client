import React from 'react'
import DebutEventCards from '../../Components/DebutEventCards/DebutEventCards'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
import { EVENTS_PAGES } from '../../GraphQl/index'
import { useQuery } from '@apollo/client'
import Loader from '../../Components/Loader/Loader'
export default function DebutEvents() {

    const { data, loading, error } = useQuery(EVENTS_PAGES)
    if (loading) return <Loader />
    if (error) return <p>Error...</p>

    console.log("events", data.getdebutEvents)
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
                {data?.getdebutEvents.map((event: any) => {
                    return (
                        <DebutEventCards
                            key={event.id}
                            _id={event._id}
                            debutEventName={event.debutEventName}
                            debutEventDate={event.debutEventDate}
                            debutEventDescription={event.debutEventDescription}
                            debutEventImage={event.debutEventImage}
                            belongsTo={event.belongsTo}
                            createdBy={event.createdBy}

                        />
                    )
                }
                )}
            </div>


            {/* </Col> */}
            {/* </Row> */}
        </div>


    )
}
