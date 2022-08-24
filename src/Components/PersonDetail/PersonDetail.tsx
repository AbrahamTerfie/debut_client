import React from 'react'
import { Col, Row } from 'reactstrap'
import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaEnvelope,
} from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { useQuery } from '@apollo/client';
import { FETCH_USER_WITH_ID } from '../../GraphQl/index'
import Loader from '../Loader/Loader';
export default function PersonDetail() {
    const { activePersonId } = useSelector((store: RootState) => store.uiStore)
    const { loading, error, data } = useQuery(FETCH_USER_WITH_ID, {
        variables: {
            getDebutUserWithIdId: activePersonId
        }
    })
    if (loading) {
        <Loader />
    }
    console.log(data)
    if (activePersonId === "") {
        return <p className='text-center p-4 shadow-sm h-auto rounded   my-2 ' > select user </p>
    }

    if (error) {
        return <p className='text-center p-4 shadow-sm h-auto rounded   my-2 ' > something went wrong  </p>
    }

    return (
        <div className='p-4 shadow h-auto rounded border border-light my-2 overflow-scroll' >
            <Row>
                <Col md={4}>
                    <img src={data?.getDebutUserWithId.profileImage}
                        alt="profile" className="img-fluid rounded shadow" />
                </Col>
                <Col md={8}>
                    <p className='fs-2 fw-lighter m-0'>  {data?.getDebutUserWithId.firstName} {data?.getDebutUserWithId.lastName}
                        <span className='fs-6 fw-bold text-muted mx-2'>
                            {data?.getDebutUserWithId.pronouns}
                        </span>
                    </p>
                    <p className='fs-6 fw-bold  m-0'>
                        {data?.getDebutUserWithId.userName}
                        / <span className='text-muted' >
                            {data?.getDebutUserWithId.preferredName}
                        </span>
                    </p>
                    <p>
                        <FaEnvelope className='text-muted mx-2 my-2' />
                        {data?.getDebutUserWithId.email}
                    </p>
                    <div className='d-flex justify-content-start my-2' >
                        {data?.getDebutUserWithId.linkedinUrl ? <a href={data?.getDebutUserWithId.linkedinUrl}>
                            <FaLinkedin className='text-muted mx-1' size={20} />
                        </a> : null}
                        {data?.getDebutUserWithId.twitterUrl ? <a href={data?.getDebutUserWithId.twitterUrl}>
                            <FaTwitter className='text-muted mx-2' size={20} />

                        </a> : null}
                        {data?.getDebutUserWithId.facebookUrl ? <a href={data?.getDebutUserWithId.facebookUrl}>
                            <FaFacebook className='text-muted mx-2' size={20} />
                        </a> : null}
                        {data?.getDebutUserWithId.instagramUrl ? <a href={data?.getDebutUserWithId.instagramUrl}>
                            <FaInstagram className='text-muted mx-2' size={20} />
                        </a> : null}
                    </div>
                </Col>
            </Row>
            <Row className='mt-4 '>
                <Col md={12}>
                    <p className='fs-5 fw-light m-0'>
                        <span >
                            {data?.getDebutUserWithId.titleAtCompany}
                        </span>
                        <span className='text-muted mx-2'>
                            at
                        </span>
                        <span >
                            {data?.getDebutUserWithId.company[0]?.companyName}
                        </span>
                    </p>
                </Col>

                <Col md={12}   >
                    <p className="mt-4 mb-0 " > biography</p>
                    <p className=' fw-light m-0'>
                        <span className='text-muted'>
                            {data?.getDebutUserWithId.yourBiography}
                        </span>
                    </p>
                </Col>

                <Col md={12}   >
                    <p className="mt-4 mb-0 " > your contribution</p>
                    <p className=' fw-light m-0'>
                        <span className='text-muted'>
                            {data?.getDebutUserWithId.howyouContribute}
                        </span>
                    </p>
                </Col>

                <Col md={12}>
                    <p className="mt-4 mb-0 ">
                        Area of Expertise
                        <div>
                            {data?.getDebutUserWithId.aeraOfExpertise.map((item: any) => {
                                return <span className='text-muted mx-1'> {item}, </span>
                            })}
                        </div>
                    </p>
                </Col>
                <Col md={12}>
                    <p className="mt-4 mb-0 ">
                        Regions
                        <div>
                            {data?.getDebutUserWithId.regions.map((item: any) => {
                                return <span className='text-muted mx-1'> {item}, </span>
                            })}
                        </div>
                    </p>
                </Col>
                <Col md={12}>
                    <p className="mt-4 mb-0 ">company</p>
                </Col>
                <Col md={2} className="my-2" >
                    <img src={data?.getDebutUserWithId.company[0]?.companyLogo}
                        alt="profile" className="img-fluid rounded shadow" />
                </Col>
                <Col md={10}>
                    <p className='m-0 fs-4 fw-lighter' > {data?.getDebutUserWithId.company[0]?.companyName}
                        <span className='m-0 text-muted mx-3 fs-6 fw-light'>
                            {data?.getDebutUserWithId.company[0]?.companyHeadquarters}
                        </span>
                    </p>
                    <p className='m-0'>
                        {data?.getDebutUserWithId.company[0]?.companyWebsite}
                    </p>
                </Col>
            </Row>
        </div>
    )
}
