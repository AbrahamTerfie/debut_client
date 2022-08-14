import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { useQuery } from '@apollo/client'
import Loader from '../../Components/Loader/Loader'
import { useParams } from 'react-router-dom'
import {
    DEBUT_EVENT_DETAILS,
    EVENT_PAGE_REGISTRY
} from '../../GraphQl/index'
import moment from 'moment'
export default function DebutEventPage() {
    const { id } = useParams()
    const { data, loading, error } = useQuery(DEBUT_EVENT_DETAILS, {
        variables: { getDebutEventWithIdId: id }
    })
    const { data: dataRegistry, loading: loadingRegistry, error: errorRegistry } = useQuery(EVENT_PAGE_REGISTRY, {
        variables: {
            getDebutRegistryWithIdId: data?.getDebutEventWithId.debutRegistry[0]._id
        }
    })
    if (loading || loadingRegistry) return <Loader />
    return (
        <div>
            <Row >
                <img className='rounded-4 w-25 h-25 mx-auto my-2  m-4 shadow-sm img-fluid '
                    src={data?.getDebutEventWithId.debutEventImage} />

                <div className='d-flex  justify-content-between'>
                    <div className='d-flex justify-content-start flex-column mx-5 px-5 my-3' >
                        <span className='text-muted fw-lighter fs-6' >
                            {moment(data?.getDebutEventWithId.debutEventDate).format('MMMM Do YYYY')}
                        </span>
                        <span className='fs-2 fw-light'>
                            {data?.getDebutEventWithId.debutEventName}
                        </span>
                        <span className='fs-6 fw-light'>
                            {data?.getDebutEventWithId.belongsTo.companyName}
                        </span>
                    </div>
                    <div>
                        <Button className='mx-5' outline color="success" size='md' >
                            donate
                        </Button>
                    </div>

                </div>
            </Row>

            <Row className=' my-1 p-5 pt-0' >
                <Col md={4} className='mx-3 rounded border border-light  border-opacity-25 py-4 shadow' >
                    <p className='fs-4' > details</p>
                    <div className='d-flex flex-column' >
                        <p className='text-muted my-1  fw-lighter ' >created by  <span className='px-2 ' >  {data?.getDebutEventWithId.createdBy.firstName}  </span>  </p>
                        <p className='text-muted my-1 fw-lighter' >  company  <span className='px-2 '>   {data?.getDebutEventWithId.belongsTo.companyName}  </span>  </p>
                        <p className='text-muted my-1 fw-lighter' >  invitation link  <span className='px-2 '>
                            {data?.getDebutEventWithId.debutInvitationLink}
                        </span>  </p>
                        <p className='text-muted my-1 fw-lighter' > description  <span className='px-2 '>
                            {data?.getDebutEventWithId.debutEventDescription}
                        </span>  </p>
                        <p className='text-muted my-1 fw-lighter' >  related links
                            {data?.getDebutEventWithId.otherRelatedLinks.map((item: any) => {
                                return (<span className='px-2'> {item}</span>)
                            })}
                        </p>
                    </div>
                </Col>
                <Col md={7} className='mx-3 rounded border border-light  border-opacity-25 py-4 shadow' >
                    <p className='fs-6' > registry  <span className='px-2 fs-4 text-muted ' >  {dataRegistry?.getDebutRegistryWithId.debutRegistryName}    </span>   </p>
                    {dataRegistry?.getDebutRegistryWithId.debutRegistryItems.length === 0 ?

                        <p className='text-muted fw-lighter' > no items in registry </p> :

                        dataRegistry?.getDebutRegistryWithId.debutRegistryItems.map((item: any) => {
                            return (
                                <Row className='d-flex shadow-sm mx-2 rounded-3 p-2 my-3' >
                                    <Col md={3}>
                                        <img className=' mx-auto shadow-sm img-fluid '
                                            src={item.registryItemImage}
                                        />
                                    </Col>
                                    <Col md={9} >
                                        <Row>
                                            <Col md={10} >
                                                <p className='fs-5 fw-lighter m-0' > {item.registryItemName} </p>
                                                <p className='text-muted fw-lighter text-wrap' > {item.registryItemDescription} </p>
                                            </Col>
                                            <Col md={2} >
                                                <p className='fs-5 fw-lighter m-0' >  {item.registryItemPrice} $ </p>
                                                <p className='text-muted fw-lighter text-wrap' > # {item.registryItemQuantity}  </p>
                                            </Col>
                                            <Col md={9}   >
                                                <p className='' > {item.registryItemLink} </p>
                                            </Col>
                                            <Col md={3} >
                                                <Button className='mx-4' color="link" outline size='sm' >
                                                    message
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            )
                        })





                    }
                </Col>
            </Row>
        </div>
    )
}
                // }
//                 </Col>
//             </Row>
//         </div>
//     )
// }
