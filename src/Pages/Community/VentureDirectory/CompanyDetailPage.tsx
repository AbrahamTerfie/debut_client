import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
import { Row, Col, AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from 'reactstrap'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer';
import GoalsBody from '../../../Components/GoalsBody/GoalsBody';
import EventCard from '../../../Components/EventCard/EventCard';
import { COMPANY_PAGE } from '../../../GraphQl/index'
import { useQuery } from '@apollo/client';
import Loader from '../../../Components/Loader/Loader';
import { notifyError } from '../../../Components/Notification/Toast';
import { companyGoals } from '../../../types/Goals_MileStones';
import { eventCard } from '../../../types/eventCardType'

export default function CompanyDetailPage() {

    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useQuery(COMPANY_PAGE, {
        variables: { getDebutCompanyWithIdId: id }
    })
    const [open, setOpen] = useState('');
    if (loading) return <Loader />
    if (error || !data) { notifyError('Error fetching company details') }
    // console.log("company data", data)
    const { getDebutCompanyWithId: company } = data;

    return (
        <div className='m-5 p-5  '>
            <div className='mt-5 '>
                <p className='fs-6 fw-light text-muted  '> Name </p>
                <h1 className=""> {company?.companyName} </h1>
                <h6 className="text-start "   >  {company?.companyWebsite} </h6>
                <div className="d-flex justify-content-start mb-5 mt-3">
                    {company.linkedInUrl ?
                        <MotionContainer>
                            <FaLinkedin className='text-primary mx-2 bg-primary bg-opacity-10 p-2 rounded-circle' size={35}
                                onClick={() => window.open(company.linkedInUrl, '_blank')} />
                        </MotionContainer> : null}
                    {company.twitterUrl ?
                        <MotionContainer>
                            <FaTwitter className='text-info mx-2 bg-info bg-opacity-10 p-2 rounded-circle' size={35}
                                onClick={() => window.open(company.twitterUrl, '_blank')} />
                        </MotionContainer> : null}
                    {company.facebookUrl ?
                        <MotionContainer>
                            <FaFacebook className='text-primary mx-2 bg-primary bg-opacity-10 p-2 rounded-circle' size={35}
                                onClick={() => window.open(company.facebookUrl, '_blank')} />
                        </MotionContainer>
                        : null}
                    {company.instagramUrl ?
                        <MotionContainer>
                            <FaInstagram className='text-danger mx-2 bg-danger bg-opacity-10 p-2 rounded-circle' size={35}
                                onClick={() => window.open(company.instagramUrl, '_blank')} />
                        </MotionContainer> : null}
                </div>
            </div>
            <p className='fs-6 fw-light text-muted  m-3' > company details </p>
            <Row className='shadow p-4   d-flex justify-content-between'>
                <Col md={6} className='m-2 text-wrap overflow-auto'>
                    <p className='fs-6 fw-light text-muted  m-0' > company description </p>
                    <p> {company?.companyDescription} </p>
                    <p className='fs-6 fw-light text-muted  m-0'> mission statement </p>
                    <p> {company?.companyMissionStatement} </p>
                    <Col md={12} >
                        <p className='text-muted' >major achivements</p>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            {company.majorAchivements?.map((achivement: string, index: number) => {
                                return (<MotionContainer key={index}>
                                    <p className=' mx-1 bg-success text-success bg-opacity-10 p-2 px-4 rounded-pill '>
                                        {achivement}
                                    </p>
                                </MotionContainer>)
                            })}
                        </div>
                    </Col>
                    <Col md={12} >
                        <p className='text-muted' > active regions </p>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            {company.companyCategory?.map((category: string, index: number) => {
                                return (<MotionContainer key={index}>
                                    <p className='text-warning mx-1 bg-warning bg-opacity-10 p-2 px-4 rounded-pill '>
                                        {category}
                                    </p>
                                </MotionContainer>)
                            })}
                        </div>
                    </Col>
                    <Col md={12} >
                        <p className='text-muted' > aera of operation </p>
                        <div className='d-flex justify-content-start align-items-center flex-wrap'>
                            {company.aeraOfOperation?.map((aera: string, index: number) => {
                                return (<MotionContainer key={index} >
                                    <p className='text-muted mx-1 bg-dark bg-opacity-10 p-2 px-4 rounded-pill '>
                                        {aera}
                                    </p>
                                </MotionContainer>
                                )
                            })}
                        </div>
                    </Col>
                </Col>

                <Col md={5} className=' text-wrap overflow-auto justify-content-start align-items-center d-flex flex-column'>
                    <img src={company?.companyLogo} alt="" className='img-fluid rounded shadow m-2 p-3 mb-5 w-50 h-50 '
                        style={{
                            objectFit: 'contain', objectPosition: 'center',
                            minWidth: '30rem', minHeight: '100px', maxWidth: '300px', maxHeight: '300px'
                        }} />

                    <div>
                        <p className='text-muted' > created by</p>
                        <MotionContainer>
                            <div className='d-flex justify-content-start align-items-center p-2 rounded shadow-sm'>
                                <img src={company?.companyOwner?.profileImage}
                                    alt="" className='img-fluid rounded-circle shadow m-2'
                                    style={{ width: '50px', height: '50px' }} />

                                <div className='mx-2 px-2 '>
                                    <p className='m-0 fs-5' > {company.companyOwner?.firstName} , {company.companyOwner?.lastName}  </p>
                                    <p className='text-muted' > {company.companyOwner?.role}  </p>
                                </div>
                            </div>
                        </MotionContainer>
                    </div>
                </Col>

            </Row>
            <p className='fs-6 fw-light text-muted  m-3 mt-5' > Goals and milestones  </p>
            <Row className='shadow p-4   d-flex justify-content-between'>
                <div>
                    <UncontrolledAccordion flush open={open} stayOpen={true} >
                        {company.companyGoals?.length === 0 ? <p className='text-muted text-center' > no goals added yet </p> :
                            company.companyGoals?.map((goal: companyGoals, index: number, ownerEmail: string) => {
                                return (<AccordionItem key={index}>
                                    <AccordionHeader targetId={goal._id}
                                        className="shadow-sm d-flex justify-content-between align-items-center  my-3  MyeventCard  ">
                                        {goal.goalTitle}
                                    </AccordionHeader>
                                    <AccordionBody accordionId={goal._id}>
                                        <GoalsBody
                                            ownerEmail={company.companyOwner?.email}
                                            goals={{
                                                _id: goal._id,
                                                goalDescription: goal.goalDescription,
                                                goalTitle: goal.goalTitle,
                                                goalStatus: goal.goalStatus,
                                                mileStones: goal.mileStones,
                                            }} />
                                    </AccordionBody>
                                </AccordionItem>
                                )
                            })}
                    </UncontrolledAccordion>
                </div>
            </Row >


            {/* company events and registries  */}
            < p className='fs-6 fw-light text-muted  m-3 mt-5' > Events and registries  </ p>
            <Row className='shadow p-4   d-flex justify-content-start'>
                {company.debutEvents?.length === 0 ? <p className='text-muted text-center' > no events added yet </p> :
                    company.debutEvents?.map((event: eventCard, index: number) => {
                        return (<EventCard key={index}
                            event={{
                                _id: event._id,
                                debutEventImage: event.debutEventImage,
                                debutEventName: event.debutEventName,
                                debutEventDescription: event.debutEventDescription,
                            }}
                        />
                        )
                    })}
            </Row>
        </div >
    )
}
