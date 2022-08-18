import React, { useEffect, useState } from 'react'
import { Row, Col, Button, Collapse, FormGroup, Label, Input } from 'reactstrap'
import PeopleCards from '../../Components/PeopleCards/PeopleCards'
import FilterPeople from '../../Components/FilterPeople/FilterPeople'
import './People.css'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
import { useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATED_USER } from '../../GraphQl/index'
import { useAuth0 } from '@auth0/auth0-react'
import PersonDetail from '../../Components/PersonDetail/PersonDetail'
// settings icons
import { IoMdSettings } from 'react-icons/io'


function FilterOptions() {
    return (
        <Row className="shadow-sm border-light m-4 ">
            <Col md={5} className=" mx-5">
                <p> roles</p>
                <div className='d-flex justify-content-between' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        Fellow
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light'  >
                        <Input type="checkbox" />{' '}
                        Mentor
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        Speciallist
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        Investor
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        Collective
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light mx-5' >
                        <Input type="checkbox" />
                        Staff
                    </FormGroup>
                </div>
                <div>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        Program Guest
                    </FormGroup>
                </div>
            </Col>
            <Col md={4} className="mx-5" >
                <p> expertise</p>

                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        <span>Business Strategy</span>
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        Team Building
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between ' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        Financing/Invenstment
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light mx-5' >
                        <Input type="checkbox" />
                        Coaching/Mentoring
                    </FormGroup>

                </div>
            </Col>
            <Col md={4}  className="mx-5 my-3">
                <p> region</p>
                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />
                        North America
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        Europe
                    </FormGroup>
                </div>

                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        East Asia
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox" />{' '}
                        South Asia
                    </FormGroup>
                </div>
            </Col>
        </Row>
    )
}


export default function People() {
    const { user } = useAuth0();
    const [authenticatedUser, authenticatedUsrRes] = useMutation(AUTHENTICATED_USER)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    useEffect(() => {
        authenticatedUser({
            variables: {
                userInput: {
                    email: user?.email,
                    userName: user?.name,
                    firstName: user?.nickname,
                }

            }
        })
        if (authenticatedUsrRes.data) {
            return console.log(authenticatedUsrRes.data)
        }
        if (authenticatedUsrRes.error) {
            return console.log(authenticatedUsrRes.error)
        }
        if (authenticatedUsrRes.loading) {
            return console.log('getching user......,,,,,')
        }
    }, [])


    return (
        <div className=' d-flex flex-column w-100 m-4 p-4' >

            <p className='fw-light fs-3  mx-5'> People directory </p>
            <Row className='mx-4' >

                <Col md={11}>
                    <SearchComponent />
                </Col>
                <Col md={1}>
                    <Button onClick={toggle} outline color="light" >
                        <IoMdSettings className='bg-transparent' />
                    </Button>
                </Col>
            </Row>
            <Collapse isOpen={modal} toggle={toggle} >
                <Row>

                    <FilterOptions />


                </Row>
            </Collapse>
            <Row className='mt-4' >
                <Col md={6} className="overflow-scroll h-50" >
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards /> <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                </Col>
                <Col md={6} className='overflow-scroll' >
                    <PersonDetail />
                </Col>
            </Row>



        </div>
    )
}
