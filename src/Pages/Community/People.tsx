import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import PeopleCards from '../../Components/PeopleCards/PeopleCards'
import FilterPeople from '../../Components/FilterPeople/FilterPeople'
import './People.css'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
import { useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATED_USER } from '../../GraphQl/index'
import { useAuth0 } from '@auth0/auth0-react'
import PersonDetail from '../../Components/PersonDetail/PersonDetail'
export default function People() {
    const { user } = useAuth0();
    const [authenticatedUser, authenticatedUsrRes] = useMutation(AUTHENTICATED_USER)
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

            <SearchComponent />
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
