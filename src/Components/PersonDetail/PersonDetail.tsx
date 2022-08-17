import React from 'react'
import { Col, Row } from 'reactstrap'
// linked in , github , twitter , facebook , instagram ,Email , phone number ,
import {
    FaLinkedin,
    FaGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
    FaPhone,


} from 'react-icons/fa'
{/*
 _id: ID
    firstName: String
    lastName: String
    email: String
    userName: String
    preferredName: String
    pronouns: String
    currentCompany: Company
    titleAtCompany: String
    linkedinUrl: String
    twitterUrl: String
    instagramUrl: String
    mailingAddress: String
    mobilePhone: String
    officePhone: String
    preferedContactMethod: String
    hasAssistat: Boolean
    assistantName: String
    assistantPhone: String
    assistantEmail: String
    howyouContribute: String
    aeraOfExpertise: [String]
    regions: [String]
    yourBiography: String
    personalDescription: String
    profileImage: String
    role: String
    company: Company
    companiesFollowing: [Company]
    companiesFollowed: [Company]
    ForumPost: [ForumPost]
    gratitudes: [Gratitude]
    eventsToAttend: [debutEvents]
    eventsAttended: [debutEvents]


*/}

export default function PersonDetail() {
    return (
        <div className='p-4 shadow h-50 rounded border border-light my-2 overflow-scroll' >
            <Row>
                <Col md={4}>
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        alt="profile" className="img-fluid rounded shadow" />
                </Col>
                <Col md={8}>
                    <p className='fs-2 fw-lighter m-0'>John Doe
                        <span className='fs-6 fw-bold text-muted mx-2'> they/them</span>

                    </p>
                    <p className='fs-6 fw-bold  m-0'>@johndoe  / <span className='text-muted' >nickname</span> </p>

                    <p>
                        <FaEnvelope className='text-muted mx-2 my-2' />email</p>

                    <div className='d-flex justify-content-start my-2' >
                        <FaLinkedin className='text-muted mx-1' size={20} />
                        <FaGithub className='text-muted mx-2' size={20} />
                        <FaTwitter className='text-muted mx-2' size={20} />
                        <FaFacebook className='text-muted mx-2' size={20} />
                        <FaInstagram className='text-muted mx-2' size={20} />

                    </div>
                </Col>
            </Row>
            <Row className='mt-4 '>
                <Col md={12}>
                    <p className='fs-5 fw-light m-0'>
                        <span className='text-muted'>Title</span> at <span className='text-muted'>Company</span>
                    </p>
                </Col>

                <Col md={12}   >
                    <p className="mt-4 mb-0 " > biography</p>
                    <p className=' fw-light m-0'>
                        <span className='text-muted'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ea cum, natus doloribus eligendi dolore alias enim eius dolorem non ullam tenetur omnis quasi asperiores dicta dignissimos expedita quidem ducimus?
                        </span>
                    </p>
                </Col>

                <Col md={12}   >
                    <p className="mt-4 mb-0 " > your contribution</p>
                    <p className=' fw-light m-0'>
                        <span className='text-muted'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ea cum, natus doloribus eligendi dolore alias enim eius dolorem non ullam tenetur omnis quasi asperiores dicta dignissimos expedita quidem ducimus?
                        </span>
                    </p>
                </Col>

                <Col md={12}>
                    <p className="mt-4 mb-0 ">
                        Area of Expertise
                        <div>
                            <span className='text-muted mx-2'>this </span>
                            <span className='text-muted mx-2'>this </span>
                            <span className='text-muted mx-2'>this </span>
                        </div>
                    </p>
                </Col>
                <Col md={12}>
                    <p className="mt-4 mb-0 ">
                        Regions
                        <div>
                            <span className='text-muted mx-2'> region 1  </span>
                            <span className='text-muted mx-2'> region 2  </span>
                            <span className='text-muted mx-2'> region 3  </span>
                        </div>
                    </p>
                </Col>
                <Col md={12}>
                    <p className="mt-4 mb-0 ">company</p>
                </Col>
                <Col md={2} className="my-2" >
                    <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                        alt="profile" className="img-fluid rounded shadow" />
                </Col>
                <Col md={10}>
                    <p className='m-0 fs-4 fw-lighter' > company name
                        <span className='m-0 text-muted mx-3 fs-6 fw-light'> company location </span>
                    </p>
                    <p className='m-0'> company website </p>
                </Col>
            </Row>



           

        </div>
    )
}
