import React, { useEffect, useState, useContext } from 'react'
import { Row, Col, Button, Collapse, FormGroup, Label, Input } from 'reactstrap'
import PeopleCards from '../../Components/PeopleCards/PeopleCards'
import FilterPeople from '../../Components/FilterPeople/FilterPeople'
import './People.css'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
import { useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATED_USER } from '../../GraphQl/index'
import { useAuth0 } from '@auth0/auth0-react'
import PersonDetail from '../../Components/PersonDetail/PersonDetail'
import PeopleFilterOptions from '../../Components/PeopleFilterOptions/PeopleFilterOptions'
import { IoMdSettings } from 'react-icons/io'
//context
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer'
export default function People() {

    const { user } = useAuth0();
    const { activePersonId } = useSelector((store: RootState) => store.uiStore)

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
            <p className='fw-light fs-3  mx-5'> People directory
                {activePersonId}
            </p>
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
                    <PeopleFilterOptions />
                </Row>
            </Collapse>
            <Row className='mt-4' >
                <Col md={6} className="overflow-scroll vh-100" >
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />
                    <PeopleCards />  <PeopleCards />
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
