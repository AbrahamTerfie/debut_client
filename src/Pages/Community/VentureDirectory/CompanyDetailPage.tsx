import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom'
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
import { appRoutes } from '../../../Routes/routes';
import { useDispatch } from 'react-redux';
import { setActivePersonId } from '../../../Store/UI/sidebarController';


export default function CompanyDetailPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();
    const { data, loading, error } = useQuery(COMPANY_PAGE, {
        variables: { getDebutCompanyWithIdId: id }
    })
    const [open] = useState('');
    if (loading) return <Loader />
    if (error || !data) { notifyError('Error fetching company details') }
    // console.log("company data", data)
    const { getDebutCompanyWithId: company } = data;

    // console.log("company data", company)

    const showUserProfile = (id: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
        e.preventDefault();
        // set the active person id in the store the navigate to the user profile page
        dispatch(setActivePersonId(id)) &&
            navigate(appRoutes.people);

    }

    return (
        <div className='m-5 p-5 w-100 '>
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
            <p className='fs-6 fw-light text-info  m-3' > company details </p>
            <Row className='shadow-sm border border-info-subtle py-3  d-flex justify-content-center'>
                <Col
                    md={6} sm={12} lg={6} xl={6} xs={12}
                    className='m-2 text-wrap overflow-auto'>
                    <p className='fs-6 fw-light text-muted  m-0' > company description </p>
                    <p> {company?.companyDescription} </p>
                    <p className='fs-6 fw-light text-muted  m-0'> mission statement </p>
                    <p> {company?.companyMissionStatement} </p>

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

                    <p className='text-muted' > aera of operation </p>
                    <div className='d-flex justify-content-start align-items-center flex-wrap'>
                        {company.aeraOfOperation?.map((aera: string, index: number) => {
                            return (<MotionContainer key={index} >
                                <p className='text-muted mx-1  p-2 px-4 rounded-pill bg-light-subtle text-muted bg-opacity-10'>
                                    {aera}
                                </p>
                            </MotionContainer>
                            )
                        })}
                    </div>

                </Col>

                <Col md={5} className=' text-wrap overflow-auto justify-content-start align-items-center d-flex flex-column'>
                    <img src={company?.companyLogo} alt="" className='img-fluid rounded shadow-sm '
                        style={{
                            objectFit: 'cover', objectPosition: 'center',
                            // responsive image
                            width: '100%', height: 'auto',
                            maxHeight: '300px', maxWidth: '300px', minHeight: '200px', minWidth: '200px'

                        }} />

                    <div
                        className='d-flex justify-content-center align-items-start flex-column mt-5'
                    >
                        <p className='text-muted m-0' > created by</p>
                        <MotionContainer>
                            <div className='d-flex justify-content-start align-items-center px-3 rounded shadow-sm border border-tertiary'
                                onClick={
                                    (e: React.MouseEvent<HTMLDivElement, MouseEvent>
                                    ) => showUserProfile(company?.companyOwner?.id, e)}
                            >
                                <img src={company?.companyOwner?.profileImage}
                                    alt="" className='img-fluid rounded-circle mx-2 me-3 border border-tertiary '
                                    style={{ width: '50px', height: '50px' }} />

                                <div className='
                                    d-flex justify-content-start align-items-start flex-column
                                '>
                                    <p className='m-0 fs-5 text-wrap' > {company.companyOwner?.firstName} {company.companyOwner?.lastName}  </p>
                                    <p className='text-muted text-wrap' > {company.companyOwner?.titleAtCompany}  </p>
                                </div>
                            </div>
                        </MotionContainer>
                    </div>
                </Col>

            </Row>






            <p className='fs-6 fw-light text-info  m-3 mt-5' > Goals and milestones  </p>
            <Row className='shadow-sm border border-info-subtle p-0  d-flex justify-content-start'>
                <div>
                    <UncontrolledAccordion flush open={open} stayOpen={true} >
                        {company.companyGoals?.length === 0 ? <p className='text-muted text-center' > no goals added yet </p> :
                            company.companyGoals?.map((goal: companyGoals, index: number, ownerEmail: string) => {
                                return (<AccordionItem key={index}>
                                    <AccordionHeader targetId={goal._id}
                                        className=" d-flex justify-content-between align-items-center  my-2  "
                                    >
                                        <MotionContainer>

                                            <p
                                                className='text-info-emphasis  m-0 bg-info-subtle bg-opacity-10 p-2 px-4 
                                              rounded-pill '
                                            >
                                                {goal.goalTitle}

                                            </p>

                                        </MotionContainer>
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
            < p className='fs-6 fw-light text-info  m-3 mt-5' > Events and registries  </ p>
            <Row className='shadow-sm p-4  d-flex justify-content-start border border-info-subtle'>
                {company.debutEvents?.length === 0 ? <p className='text-muted text-center' > no events added yet </p>
                    :
                    <div className='d-flex justify-content-start align-items-start flex-wrap'>
                        {
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
                            })
                        }
                    </div>


                }
            </Row>
        </div >
    )
}

