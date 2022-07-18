import React, { useEffect } from 'react'
import { Row, Col } from 'reactstrap'
import PeopleCards from '../../Components/PeopleCards/PeopleCards'
import FilterPeople from '../../Components/FilterPeople/FilterPeople'
import './People.css'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
import { useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATED_USER } from '../../GraphQl/index'
import { useAuth0 } from '@auth0/auth0-react'

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
        <Row className='px-5 d-flex page ' >
            <Col className='filterContainer m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
                <FilterPeople />
            </Col>
            <Col className=' mainPageContainer' xs='10' sm='10' md='8' lg='8' xl='8' >
                <Row className='searchInput mb-1 mt-4' >
                    <h5> People Directory </h5>
                    <SearchComponent />
                </Row>
                <Row className='m-3'>
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                </Row>
            </Col>
        </Row>
    )
}
