import React from 'react'
import { Row, Col } from 'reactstrap'
import MyVentureCard from '../../Components/MyVentureCard/MyVentureCard'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
import { FramerImageSlide } from '../../Components/FramerImageSlide/FramerImageSlide'



const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png"
];

export default function DebutEventPage() {
    return (
        <Row className='w-100 p-5' >

            <Col >

                <p className='fs-1 fw-light' >  debut event name  </p>
                <p className='fs-5 px-4 fw-light text-muted' >   saturday  december 32 99999   </p>
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


            <Col >
                <div className='d-flex flex-row my-1' >
                    <div className='profileImage ' >
                        <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
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



                <FramerImageSlide
                    images={images}
                />


            </Col>


        </Row>
    )
}


{ /*

input DebutEventInput {
    createdBy: String   #user who created the debut event
    belongsTo: String!   # belongsTo is the business id
    debutEventName: String!
    debutEventDescription: String!
    debutEventDate: String!
    debutRegestryStatus: Boolean
    debutRegestry: [String]  # this is the debut regestry id 
    debutInvitationLink: String
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