
import React, { useState, useEffect } from 'react'
import { Row, Offcanvas, OffcanvasBody, OffcanvasHeader, Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
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
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATED_USER, CHECK_IF_USER_HAS_COMPANY, FETCH_ALL_FORUM_POSTS } from '../../../GraphQl/index'
// auth and redux
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import { saveAuth0UserInfo } from '../../../Store/Auth/AuthSlice'
import { setHasCompany, setPersonaldata } from '../../../Store/identfiers/identfiers'
import MotionContainer from '../../../Components/MotionContainer/MotionContainer'
import { notifyError } from '../../../Components/Notification/Toast'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../../Routes/routes'
// types


const channelNames = {
    'general': 'general',
    'collaboration': 'collabration',
    'community': 'community',
}



export default function Forum() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { auth0UserInfo } = useSelector((store: RootState) => store.auth)
    const { hasCompany } = useSelector((store: RootState) => store.identfiers)
    // console.log(userID , userEmail)
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);
    const { user } = useAuth0();
    const [authenticatedUser, authenticatedUsrRes] = useMutation(AUTHENTICATED_USER)
    const { data, loading, error } = useQuery(FETCH_ALL_FORUM_POSTS)
    const [isNewUser, setIsNewUser] = useState(true)
    const toggleIsNewUser = () => setIsNewUser(!isNewUser)
    const [channelFilter, setChannelFilter] = useState('')


    // console.log("channelFilter", channelFilter)
    // saves the user information when the user logs in to keep it in sybc with store 
    useEffect(() => { if (user) { dispatch(saveAuth0UserInfo(user)) } }, [user, dispatch])

    //gets the user from the server if it exists and if it doesn't it creates a new user
    // console.log(data.allForumPosts)
    useEffect(() => {
        if (user && auth0UserInfo) authenticatedUser({
            variables: {
                userInput: {
                    email: auth0UserInfo.email,
                    userName: auth0UserInfo.name,
                    firstName: auth0UserInfo.nickname,
                }
            }
        })
    }, [auth0UserInfo.email, auth0UserInfo.name, auth0UserInfo.nickname, authenticatedUser])



    const [checkIsNewUser,] = useLazyQuery(CHECK_IF_USER_HAS_COMPANY, {
        // variables: { userId: userID },
        onCompleted: (data) => {

            // ********** is not checkeing for new user but instead for company **********
            if (data?.checkIfUserHasCompany === true) {
                dispatch(setHasCompany(true))

            } else if (data?.checkIfUserHasCompany === false) {

                dispatch(setHasCompany(false))
            }
        }
    })


    useEffect(() => {
        if (authenticatedUsrRes.data) {
            const { authenticatedUser } = authenticatedUsrRes.data;
            dispatch(setPersonaldata({
                userID: authenticatedUser._id,
                userEmail: authenticatedUser.email,
                myBiography: authenticatedUser.yourBiography || '',
                userFullName: `${authenticatedUser.firstName} ${authenticatedUser.lastName}`,
                myCompanyDescription: authenticatedUser.company?.companyDescription,
            }));
            checkIsNewUser({
                variables: {
                    userId: authenticatedUser._id,
                },
            });
        }
    }, [authenticatedUsrRes?.data, dispatch, checkIsNewUser]);


    if (loading || authenticatedUsrRes.loading) { return <Loader /> }
    if (error) { notifyError("soething went wrong ") }


    return (
        <div>
            <Modal centered size='lg' isOpen={!hasCompany} toggle={toggleIsNewUser}  >
                <ModalHeader
                    className='bg-success bg-opacity-10 text-success'
                    toggle={toggleIsNewUser}>
                    <p className='m-0'>Welcome to Debut </p>
                </ModalHeader>
                <ModalBody className='bg-success bg-opacity-10 text-muted text-start p-5 d-flex flex-column  '>
                    {/* welcome prompt to the app and tell them to set up profile and compnay infomation */}
                    <h3 className='m-0'> We are glad to have you here</h3>
                    <h5 className='text-success'>Please set up your profile and company information to continue </h5>
                </ModalBody>
                <ModalFooter className='bg-success bg-opacity-10 text-muted'>
                    <Button color="success " size="sm" outline onClick={() => navigate(appRoutes.dashboard)}>
                        <p className='mx-5 my-0'>set up</p>
                    </Button>{' '}
                </ModalFooter>
            </Modal>

            <Offcanvas Offcanvas style={{ width: '50%' }}
                direction="end" isOpen={canvas}
                toggle={toggle} scrollable={true}
            >
                <OffcanvasHeader toggle={toggle}>
                    <h1 className='fs-3 m-3 px-5 fw-light' >Create New Post</h1>
                    <p className='fs-5 m-3 px-5 fw-light ' > share your events , ideas , or anything you want to share with the community</p>
                </OffcanvasHeader>
                <OffcanvasBody >
                    <NewForumPost toggler={toggle} />
                </OffcanvasBody>
            </Offcanvas >

            <Row className='searchInput mb-1 my-4 pt-5 mt-5 px-5 mx-5  ' >
                <p className='fw-light fs-1'> Fellow Forum </p>
                <p className="text-muted" >
                    A place to discuss and share
                    ideas with fellow members of the
                    community.
                </p>
                <SearchComponent />
            </Row>

            <div className='d-flex justify-content-around mx-5  flex-row flex-wrap sticky-xxl-top px-5 py-3 '
                style={{ zIndex: 1, top: '10%', backgroundColor: 'white', }}>
                <MotionContainer>
                    <p onClick={() => toggle()}
                        className='  my-1 p-3 py-2 px-5 shadow-sm  bg-success bg-opacity-10 rounded-pill text-success  d-flex justify-content-center align-items-center'>
                        <IoMdAdd size={20} className='mx-3 ' />
                        <span  > New Post </span>
                    </p>
                </MotionContainer>

                <MotionContainer>
                    <p
                        className={`  my-1 p-3 py-2 px-5 shadow-sm  bg-warning bg-opacity-10 rounded-pill text-warning  d-flex justify-content-center align-items-center
                                    ${channelFilter === channelNames.general ? 'shadow border border-2 border-warning  ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.general)}  >
                        <IoChatbubblesOutline size={20} className='mx-3' />
                        General
                    </p>
                </MotionContainer>
                <MotionContainer>
                    <p
                        className={` my-1 p-3 py-2 px-5 shadow-sm  bg-info bg-opacity-10 rounded-pill text-info  d-flex justify-content-center align-items-center
                                ${channelFilter === channelNames.collaboration ? 'shadow border border-2 border-info  ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.collaboration)} >
                        <FaRegHandPaper size={15}
                            style={{ backgroundColor: 'transparent', }}
                            className='mx-2' />
                        Collabration
                    </p>
                </MotionContainer>
                <MotionContainer>
                    <p className={` my-1 p-3 py-2 px-5 shadow-sm  bg-primary bg-opacity-10 rounded-pill text-primary  d-flex justify-content-center align-items-center
                            ${channelFilter === channelNames.community ? 'shadow border border-2 border-primary  ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.community)} >
                        <FaRegHandshake size={15}
                            style={{ backgroundColor: 'transparent', }}
                            className='mx-2' />
                        Community
                    </p>
                </MotionContainer>

                <MotionContainer>
                    <span className='py-2  text-muted px-5  my-2  bg-dark bg-opacity-10 rounded-pill text-dark  d-flex justify-content-center align-items-center'
                        onClick={() => setChannelFilter('')} >
                        clear filter
                    </span>
                </MotionContainer>

            </div>

            <Row className='m-3 mx-5 px-5'>
                {data.getForumPosts.map((post: any, index: number) => {
                    if (channelFilter === '') {
                        return (
                            <ForumCards
                                key={index}
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
                        return (
                            <ForumCards
                                key={index}
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

        </div >


    )
}
