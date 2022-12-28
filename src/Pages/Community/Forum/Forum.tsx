
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
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);
    const { user } = useAuth0();
    const [authenticatedUser, authenticatedUsrRes] = useMutation(AUTHENTICATED_USER)
    const { data, loading, error } = useQuery(FETCH_ALL_FORUM_POSTS)
    const [isNewUser, setIsNewUser] = useState(true)
    const toggleIsNewUser = (): void => setIsNewUser(!isNewUser)
    const [channelFilter, setChannelFilter] = useState('')

    console.log("userID", authenticatedUsrRes)

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
                    profileImage: hasCompany === false ? auth0UserInfo.picture : '',
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
            <Modal centered size='lg' isOpen={hasCompany === false} toggle={toggleIsNewUser}  >
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

            <div className='d-flex justify-content-around   flex-row flex-wrap sticky-xxl-top  mx-5 mt-5 mb-3 ' style={{ zIndex: 1, top: '10%', }}>
                <MotionContainer>
                    <p onClick={() => toggle()}
                        className='   p-2 py-auto px-5 shadow-sm  text-success-emphasis bg-success  bg-opacity-10  border border-success-subtle rounded-pill '>
                        <IoMdAdd size={20} className='mx-auto ' />
                        <span  > New Post </span>
                    </p>
                </MotionContainer>

                <MotionContainer>
                    <p className={`  p-2 py-auto px-5  border border-2  rounded-pill   d-flex justify-content-center align-items-center text-warning-emphasis bg-warning-emphasis  border-warning-emphasis 
                                    ${channelFilter === channelNames.general ? '   text-warning-emphasis bg-warning-subtle border border-warning-subtle    ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.general)}  >
                        <IoChatbubblesOutline size={20} className='mx-3' />
                        General
                    </p>
                </MotionContainer>
                <MotionContainer>
                    <p className={`  p-2 py-auto px-5   border border-2 rounded-pill   d-flex justify-content-center align-items-center text-info-emphasis bg-info-emphasis  border-info-emphasis 
                                ${channelFilter === channelNames.collaboration ? '   text-info-emphasis bg-info-subtle border border-info-subtle   ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.collaboration)} >
                        <FaRegHandPaper size={15}
                            style={{ backgroundColor: 'transparent', }}
                            className='mx-2' />
                        Collabration
                    </p>
                </MotionContainer>
                <MotionContainer>
                    <p className={`   p-2 py-auto px-5  border border-2  rounded-pill   d-flex justify-content-center align-items-center text-primary-emphasis bg-primary-emphasis  border-primary-emphasis 
                            ${channelFilter === channelNames.community ? '  text-primary-emphasis bg-primary-subtle border border-primary-subtle   ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.community)} >
                        <FaRegHandshake size={15}
                            style={{ backgroundColor: 'transparent', }}
                            className='mx-2' />
                        Community
                    </p>
                </MotionContainer>

                <MotionContainer>
                    <span className='p-2 py-auto px-5  text-muted    bg-opacity-10 rounded-pill text-dark  d-flex justify-content-center align-items-center border border-muted'
                        onClick={() => setChannelFilter('')} >
                        clear filter
                    </span>
                </MotionContainer>

            </div>

            <Row className='mx-auto ms-5 ps-5 px-auto overflow-y-auto '

            >
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
