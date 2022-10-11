
import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Input } from 'reactstrap'
// components
import ForumCards from '../../../Components/ForumCards/ForumCards'
import NewForumPost from './NewForumPost'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import './Forum.css'
import Loader from '../../../Components/Loader/Loader'
// icons
import { IoMdAdd } from 'react-icons/io'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { FaRegHandPaper, FaRegHandshake } from 'react-icons/fa'
// graphql
import { useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATED_USER, FETCH_ALL_FORUM_POSTS } from '../../../GraphQl/index'
// auth and redux
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import { saveAuth0UserInfo } from '../../../Store/Auth/AuthSlice'
import { setUserID, setUserEmail } from '../../../Store/identfiers/identfiers'
// types


const channelNames = {
    'general': 'general',
    'collaboration': 'collabration',
    'community': 'community',
}

export default function Forum() {
    const dispatch = useDispatch()
    const { auth0UserInfo } = useSelector((store: RootState) => store.auth)
    const { userID, userEmail } = useSelector((store: RootState) => store.identfiers)
    // console.log(userID , userEmail)
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);
    const { user } = useAuth0();
    const [authenticatedUser, authenticatedUsrRes] = useMutation(AUTHENTICATED_USER)
    const { data, loading, error } = useQuery(FETCH_ALL_FORUM_POSTS)
    const [channelFilter, setChannelFilter] = useState('')


    console.log("channelFilter", channelFilter)
    // saves the user information when the user logs in to keep it in sybc with store 
    useEffect(() => {
        if (user) {
            dispatch(saveAuth0UserInfo(user))
        }
    }, [user])

    //gets the user from the server if it exists and if it doesn't it creates a new user
    // console.log(data.allForumPosts)
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
        dispatch(setUserEmail(authenticatedUsrRes.data.authenticatedUser.email))

    }
    if (authenticatedUsrRes.error) {
        console.log(authenticatedUsrRes.error)
    }
    if (authenticatedUsrRes.loading) {
        console.log('loading ')
    }


    if (loading) {
        return <Loader />
    }
    if (error) {
        return <div>Error!</div>
    }
    // if (data) {
    //     console.log("data res ", data)
    // }


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
                        outline color='light' className='my-3 p-3 w-100 shadow-sm MyeventCard' size='sm' >
                        <IoMdAdd size={20}
                            style={{ backgroundColor: 'transparent' }}
                            className='mx-1 ' />
                        <span className='m-0' > New Post </span>
                    </Button>
                </div>
                <div className='ChanelsContainer w-100 h-25 mt-4' >
                    <h4 className='mt-4' > Channels</h4>
                    <div className='channels w-100' >
                        <p role="button" color='light'
                            className={`w-100 py-2  my-2 MyeventCard ${channelFilter === channelNames.general ? 'shadow-sm border-bottom border-5  border-info  p-2' : ''}`}

                            onClick={() => setChannelFilter(channelNames.general)}  >
                            <IoChatbubblesOutline size={15}
                                style={{ backgroundColor: 'transparent', }}
                                className='mx-2' />
                            General
                        </p>
                        <p role="button" color='light'
                            className={`w-100 py-2  my-2 MyeventCard ${channelFilter === channelNames.collaboration ? 'shadow-sm border-bottom border-5  border-info  p-2' : ''}`}
                            onClick={() => setChannelFilter(channelNames.collaboration)} >
                            <FaRegHandPaper size={15}
                                style={{ backgroundColor: 'transparent', }}
                                className='mx-2' />
                            Collabration
                        </p>
                        <p role="button" color='light'
                            className={`w-100 py-2  my-2 MyeventCard ${channelFilter === channelNames.community ? 'shadow-sm border-bottom border-5  border-info  p-2' : ''}`}
                            onClick={() => setChannelFilter(channelNames.community)} >
                            <FaRegHandshake size={15}
                                style={{ backgroundColor: 'transparent', }}
                                className='mx-2' />
                            Community 
                        </p>
                        <span role="button" color='light' className='py-2 w-100 text-muted px-5  my-2  MyeventCard'
                            onClick={() => setChannelFilter('')} >
                            clear filter
                        </span>
                    </div>
                </div>
            </Col>

            <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >
                <Row className='searchInput mb-1 mt-4' >
                    <p className='fw-bolder fs-3'> Fellow Forum </p>

                    <SearchComponent />
                </Row>
                <Row className='m-3'>
                    {data.getForumPosts.map((post: any) => {

                        if (channelFilter === '') {
                            return (
                                <ForumCards
                                    key={post._id}
                                    _id={post._id}
                                    channel={post.channel}
                                    postTitle={post.postTitle}
                                    postContent={post.postContent}
                                    comments={post.comments}
                                    createdBy={post.createdBy}
                                />
                            )
                        }
                        if (channelFilter === post.channel) {
                            // display only the posts that match the channel filter
                            return (
                                <ForumCards

                                    key={post._id}
                                    _id={post._id}
                                    channel={post.channel}
                                    postTitle={post.postTitle}
                                    postContent={post.postContent}
                                    comments={post.comments}
                                    createdBy={post.createdBy}
                                />
                            )
                        }


                    })}
                </Row>
            </Col>
        </Row>


    )
}
