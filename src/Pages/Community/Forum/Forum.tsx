
import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Input } from 'reactstrap'
// components
import ForumCards from '../../../Components/ForumCards/ForumCards'
import NewForumPost from './NewForumPost'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import './Forum.css'
// icons
import { IoMdAdd } from 'react-icons/io'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { FaRegHandPaper, FaRegHandshake } from 'react-icons/fa'
// graphql
import { useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATED_USER } from '../../../GraphQl/index'
// auth and redux
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import { saveAuth0UserInfo } from '../../../Store/Auth/AuthSlice'
import { setUserID } from '../../../Store/identfiers/identfiers'
export default function Forum() {
    const dispatch = useDispatch()
    const { auth0UserInfo } = useSelector((store: RootState) => store.auth)
    const { userID } = useSelector((store: RootState) => store.identfiers)
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);
    const { user } = useAuth0();
    const [authenticatedUser, authenticatedUsrRes] = useMutation(AUTHENTICATED_USER)


    // saves the user information when the user logs in to keep it in sybc with store 
    useEffect(() => {
        if (user) {
            dispatch(saveAuth0UserInfo(user))
        }
    }, [user])


    //gets the user from the server if it exists and if it doesn't it creates a new user

    useEffect(() => {
        authenticatedUser({
            variables: {
                userInput: {
                    email: auth0UserInfo.email,
                    userName: auth0UserInfo.name,
                    firstName: auth0UserInfo.nickname,
                }

            }
        })


    }, [auth0UserInfo.email])

    if (authenticatedUsrRes.data) {
        // saves user id in steore to be used in other components
        dispatch(setUserID(authenticatedUsrRes.data.authenticatedUser._id))
    }
    if (authenticatedUsrRes.error) {
        console.log(authenticatedUsrRes.error)
    }
    if (authenticatedUsrRes.loading) {
        console.log('loading ')
    }


    return (
        <Row className=' d-flex page mt-4' >
            <Offcanvas style={{ width: '50%' }}
                direction="end"
                isOpen={canvas}
                toggle={toggle}
                scrollable={true}
            >
                <OffcanvasHeader toggle={toggle}>
                    <p className='fs-3 m-3 px-5 fw-light' >
                        Create New Post
                    </p>

                    <p className='fs-5 m-3 px-5 fw-light text-muted' >
                        share your events , ideas , or anything you want to share with the community
                    </p>
                </OffcanvasHeader>
                <OffcanvasBody >
                    <NewForumPost />
                </OffcanvasBody>
            </Offcanvas>

            <Col className=' mt-4 m-3' xs='10' sm='10' md='8' lg='2' xl='2' >

                <h4> Fellow Forum </h4>
                <p>
                    A place to discuss and share
                    ideas with fellow members of the
                    community.
                </p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }} >
                    <Button
                        onClick={() => toggle()}

                        outline color='light' className='mt-3 w-100' size='sm' >
                        <IoMdAdd size={20}
                            style={{
                                backgroundColor: 'transparent',
                            }}
                            className='mx-1 ' />
                        New Post
                    </Button>
                </div>
                <div className='ChanelsContainer w-100 h-25 mt-4' >
                    <h4 className='mt-4' > Channels</h4>
                    <div className='channels w-100' >
                        <h6 color='light' className='w-100 py-2  m-2 ' >
                            <IoChatbubblesOutline size={15}
                                style={{ backgroundColor: 'transparent', }}
                                className='mx-3' />
                            General
                        </h6>
                        <h6 color='light' className='py-2 w-100  m-2 ' >
                            <FaRegHandPaper size={15}
                                style={{ backgroundColor: 'transparent', }}
                                className='mx-3' />
                            Collabration
                        </h6>
                        <h6 color='light' className='py-2 w-100  m-2 ' >
                            <FaRegHandshake size={15}
                                style={{ backgroundColor: 'transparent', }}
                                className='mx-3' />
                            Community Board
                        </h6>
                    </div>
                </div>
            </Col>

            <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >
                <Row className='searchInput mb-1 mt-4' >
                    <p className='fw-bolder fs-3'> Fellow Forum </p>

                    <SearchComponent />
                </Row>
                <Row className='m-3'>
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />  <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />
                    <ForumCards />


                </Row>


            </Col>
        </Row>


    )
}
