import React from 'react'
import { Row, Col, } from 'reactstrap'
import RegistryItemCard from '../../Components/RegistryItemCard/RegistryItemCard'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'




function attengingProfile() {
    return (

        <div className='d-flex flex-row my-1 border border-light' >
            <div className='profileImage ' >
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                 alt='userprofilephoto' />
            </div>
            <div className='py-2 mx-3' >
                <p className='fs-5 fw-semibold mx-2'> UserName
                    <p className='text-muted fs-6'> owner ttile  </p>
                </p>
            </div>
        </div>

    )
}

export default function DebutEventPage() {

    return (
        <Row className='w-100 p-5' >
            <Col xs='12' sm='12' md='8' lg='8' xl='8'  >
                <p className='fs-1 fw-light px-4' >  debut event name
                    <span className='fs-5 fw-light text-muted mx-4'  > owned by this comoany of this company </span>
                </p>
                <p className='fs-3 px-4 fw-light text-muted' >   saturday  december 32 99999   </p>
                <p className='p-4 pb-0 fw-light fs-4' > debut event description </p>
                <p className='px-4 fw-light fs-5' >

                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam nemo tempora autem, eaque nobis dicta ad cumque eos
                    minima magni veniam animi quae dolores necessitatibus incidunt et.
                    Ipsa, dicta necessitatibus?


                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam nemo tempora autem, eaque nobis dicta ad cumque eos
                    minima magni veniam animi quae dolores necessitatibus incidunt et.
                    Ipsa, dicta necessitatibus?
                </p>

            </Col>


            <Col xs='12' sm='12' md='3' lg='3' xl='3' className='px-5'    >
                <div className='d-flex flex-row my-1' >
                    <div className='profileImage ' >
                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
                        alt='userprofilephoto' />
                    </div>
                    <div className='mx-3' >
                        <p className='fs-6 fw-light text-muted' >   created by   </p>
                        <p className='fs-4 fw-semibold mx-2'> UserName
                            <p className=' fs-6'> owner ttile  </p>
                        </p>
                    </div>
                </div>

                <br />
                <span className='fs-5 fw-normal text-muted' > social links   </span>
                <p className='fs-3 fw-normal ' >
                    <AiOutlineFacebook className='mx-3' size={20} />
                    <AiOutlineTwitter className='mx-3' size={20} />
                    <AiOutlineInstagram className='mx-3' size={20} />
                    <AiOutlineYoutube className='mx-3' size={20} />
                </p>
                <br />
                <span className='fs-5 fw-normal text-muted' > invitation link  </span>
                <br />
                <a href="#" className="text-decoration-none">This link has its text decoration removed</a>
            </Col>


            <Col xs='12' sm='12' md='3' lg='8' xl='8' className='mt-5'  >

                <p className=' fs-4  border border-light px-5 py-2 w-100' color='light' >
                    Registry
                    <span className='mx-4  fs-6 text-muted fw-light'  >
                        by : james mohammed
                    </span>
                </p>


                <Row className='d-flex flex-wrap' >


                    <RegistryItemCard />
                    <RegistryItemCard />
                    <RegistryItemCard />
                    <RegistryItemCard />

                    <RegistryItemCard />
                    <RegistryItemCard />
                    <RegistryItemCard />
                    <RegistryItemCard />
                </Row>

            </Col>


            <Col xs='12' sm='12' md='3' lg='3' xl='3' className='px-5' >

                <span className='fs-5 fw-normal text-muted' > attending this event  </span>
                <br />
                {attengingProfile()}
                {attengingProfile()}
                {attengingProfile()}


                <p className='fs-5 fw-normal text-muted ' > + 100 more</p>
            </Col>


        </Row>
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