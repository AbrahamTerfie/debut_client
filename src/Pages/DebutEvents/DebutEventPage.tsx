import React from 'react'
import { Row, Col, Button, } from 'reactstrap'
import RegistryItemCard from '../../Components/RegistryItemCard/RegistryItemCard'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'

export default function DebutEventPage() {

    return (
        <div>
            <Row    >
                <img className='rounded-4 w-50 h-25 mx-auto my-2  m-4 shadow-sm img-fluid '
                    src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                />
                <div className='d-flex  justify-content-between'>
                    <div className='d-flex justify-content-start flex-column mx-5 px-5 my-3' >
                        <span className='text-muted fw-lighter fs-6' >date</span>
                        <span className='fs-2 fw-light ' >event name</span>
                        <span className='fs-6 fw-light ' >event company</span>
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
                        <p className='text-muted my-1  fw-lighter' >created by  <span className='px-2 ' > creator name   </span>  </p>
                        <p className='text-muted my-1 fw-lighter' >  company  <span className='px-2 '> creator name   </span>  </p>
                        <p className='text-muted my-1 fw-lighter' >  invitation link  <span className='px-2 '> creator name   </span>  </p>
                        <p className='text-muted my-1 fw-lighter' > description  <span className='px-2 '>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis esse id quibusdam ratione veniam facere veritatis pariatur. Veritatis, placeat officiis. Voluptate esse optio fugiat earum, ea dolorem delectus ex reiciendis.   </span>  </p>
                        <p className='text-muted my-1 fw-lighter' >  related links  <span className='px-2 '> creator name   </span>  </p>

                    </div>
                </Col>
                <Col md={7} className='mx-3 rounded border border-light  border-opacity-25 py-4 shadow' >

                    <p className='fs-6' > registry  <span className='px-2 fs-4 text-muted ' >  registry name    </span>   </p>
                    <Row className='d-flex shadow-sm mx-2 rounded-3 p-2' >
                        <Col md={3}>
                            <img className=' mx-auto shadow-sm img-fluid '
                                src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
                            />
                        </Col>

                        <Col md={9} >
                            <Row>
                                <Col md={10} >
                                    <p className='fs-5 fw-lighter m-0' > item name </p>
                                    <p className='text-muted fw-lighter text-wrap' > item description </p>
                                </Col>
                                <Col md={2} >
                                    <p className='fs-5 fw-lighter m-0' >  9999$ </p>
                                    <p className='text-muted fw-lighter text-wrap' > #4454  </p>
                                </Col>
                                <Col md={9}   >
                                    <p className='' > item link </p>
                                </Col>
                                <Col md={3} >
                                    <Button className='mx-4' color="link" outline size='sm' >
                                        message
                                    </Button>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    )
}


{ /*

    createdBy: UserAccount!
    belongsTo: Business!
    debutEventName: String!
    debutEventDescription: String!
    debutEventDate: String!
    debutRegestryStatus: Boolean
    debutRegestry: [DebutRegistry]
    attending: [UserAccount]
    debutInvitationLink: String  
}
}
type DebutRegistry {
    _id: ID!
    createdBy: UserAccount!
    belongsTo: Business!
    debutRegistryName: String!
    debutEvent: DebutEvent!
    debutRegistryStatus: Boolean
    debutRegistryItems: [registryItem]
}
*/ }