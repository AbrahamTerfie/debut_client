
import React, { useState, useEffect } from 'react'
import {
    Row, Offcanvas, OffcanvasBody, OffcanvasHeader, Button, Modal, ModalBody, ModalFooter, ModalHeader,
    Pagination, PaginationItem, PaginationLink,
} from 'reactstrap'
// components
import ForumCards from '../../../Components/ForumCards/ForumCards'
import NewForumPost from './NewForumPost'
import './Forum.css'
import Loader from '../../../Components/Loader/Loader'
// icons
import { IoMdAdd, IoMdClose } from 'react-icons/io'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { FaRegHandPaper, FaRegHandshake } from 'react-icons/fa'
// graphql
import { useQuery } from '@apollo/client'
import { FETCH_ALL_FORUM_POSTS } from '../../../GraphQl/index'

import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'

import MotionContainer from '../../../Components/MotionContainer/MotionContainer'
import { notifyError } from '../../../Components/Notification/Toast'
import { useNavigate } from 'react-router-dom'
import { appRoutes } from '../../../Routes/routes'
import OnBoardingForm from '../../../Components/OnBoarding/OnBoardingForm'

import Footer from '../../../Components/Footer/Footer'

const channelNames = {
    'general': 'general',
    'collaboration': 'collabration',
    'community': 'community',
}



export default function Forum() {

    const navigate = useNavigate()
    const { hasCompany } = useSelector((store: RootState) => store.identfiers)
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);
    const [isNewUser, setIsNewUser] = useState(true)
    const toggleIsNewUser = (): void => setIsNewUser(!isNewUser)
    const [channelFilter, setChannelFilter] = useState('')
    const [pagination, setPagination] = useState({
        limit: 15,
        offset: 0,
        TotalAmount: 0,
    })
    const { data, loading, error } = useQuery(FETCH_ALL_FORUM_POSTS, {
        variables: {
            limit: pagination.limit,
            offset: pagination.offset
        },
    })

    useEffect(() => {
        setPagination({ ...pagination, TotalAmount: data?.getForumPosts.TotalAmount })
    }, [data?.getForumPosts.TotalAmount])


    const nextPage = () => {
        pagination.offset + pagination.limit < pagination.TotalAmount &&
            setPagination({ ...pagination, offset: pagination.offset + pagination.limit })
    }
    const prevPage = () => {
        pagination.offset > 0 &&
            setPagination({ ...pagination, offset: pagination.offset - pagination.limit })
    }
    const firstPage = () => {
        pagination.offset > 0 &&
            setPagination({ ...pagination, offset: 0 })
    }
    const lastPage = () => {
        pagination.offset + pagination.limit < pagination.TotalAmount &&
            setPagination({
                ...pagination, offset: Math.floor(
                    pagination.TotalAmount / pagination.limit) * pagination.limit
            })
    }

    if (loading) { return <Loader /> }
    if (error) { notifyError("soething went wrong ") }


    return (
        <div className='w-100'>
            <Modal centered size='lg' isOpen={hasCompany === false} toggle={toggleIsNewUser}  >
                <ModalHeader
                    toggle={toggleIsNewUser}>
                    <p className='m-0'>Welcome to Debut </p>
                </ModalHeader>
                <ModalBody
                    className=' text-muted text-start p-5 d-flex flex-column  '>
                    {/* welcome prompt to the app and tell them to set up profile and compnay infomation */}
                    <h3 className='m-0'> We are glad to have you here</h3>
                    <h5 className='text-success'>Please set up your profile and company information to continue </h5>
                    <OnBoardingForm />
                </ModalBody>
                <ModalFooter className=' text-muted'>
                    <Button color="success " size="sm" outline onClick={() => navigate(appRoutes.dashboard)}>
                        <p className='mx-5 my-0'>set up</p>
                    </Button>{' '}
                </ModalFooter>
            </Modal>

            <Offcanvas
                responsive={true}
                fade={true}
                keyboard
                backdrop={true}
                md={6} lg={6} xl={6} sm={8} xs={10}
                direction="end" isOpen={canvas}
                toggle={toggle} scrollable={true}
            >
                <OffcanvasHeader toggle={toggle}
                    close={<MotionContainer>
                        <IoMdClose className=' text-danger-emphasis' onClick={toggle} size={20} />
                    </MotionContainer>}
                >
                    <p className='fs-1 m-0 ps-2  text-success-emphasis ' >
                        post to forun
                    </p>
                    <p className='fs-5 me-3 ps-3 fw-light ' > share your events , ideas , or anything you want to share with the community</p>
                </OffcanvasHeader>
                <OffcanvasBody >
                    <NewForumPost toggler={toggle} />
                </OffcanvasBody>
            </Offcanvas >

            <Row className=' mb-1 my-auto pt-5 mt-5 px-5 mx-5  ' >
                <h1 className='fw-light fs-1  m-5 mb-3'> Forum </h1>
                <p className="text-muted ms-5" >
                    A place to discuss and share
                    ideas with fellow members of the
                    community.
                </p>
                {/* <SearchComponent /> */}
            </Row>

            <div className='d-flex justify-content-evenly   flex-row flex-wrap sticky-xxl-top  ms-5 mt-5 mb-3  ' style={{ zIndex: 1, top: '10%', }}>
                <MotionContainer>
                    <p onClick={() => toggle()}
                        className='   p-2 py-auto px-3 shadow-sm  text-success-emphasis bg-success  bg-opacity-10  border border-success-subtle rounded-pill '>
                        <IoMdAdd
                            size={15}
                            style={{ backgroundColor: 'transparent', }}
                            className='mx-2'

                        />
                        <span className='d-none d-md-inline-block'>New Post</span>
                    </p>
                </MotionContainer>

                <MotionContainer>
                    <p className={`  p-2 py-auto px-3  border border-2  rounded-pill   d-flex justify-content-center align-items-center text-warning-emphasis bg-warning-emphasis  border-warning-emphasis 
                                    ${channelFilter === channelNames.general ? '   text-warning-emphasis bg-warning-subtle border border-warning-subtle    ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.general)}  >
                        <IoChatbubblesOutline size={20} className='mx-3' />
                        <span className='d-none d-md-inline-block'>General </span>

                    </p>
                </MotionContainer>
                <MotionContainer>
                    <p className={`  p-2 py-auto px-3   border border-2 rounded-pill   d-flex justify-content-center align-items-center text-info-emphasis bg-info-emphasis  border-info-emphasis 
                                ${channelFilter === channelNames.collaboration ? '   text-info-emphasis bg-info-subtle border border-info-subtle   ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.collaboration)} >
                        <FaRegHandPaper size={15}
                            style={{ backgroundColor: 'transparent', }}
                            className='mx-2' />
                        <span className='d-none d-md-inline-block'> Collaboration</span>
                    </p>
                </MotionContainer>
                <MotionContainer>
                    <p className={`   p-2 py-auto px-3  border border-2  rounded-pill   d-flex justify-content-center align-items-center text-primary-emphasis bg-primary-emphasis  border-primary-emphasis 
                            ${channelFilter === channelNames.community ? '  text-primary-emphasis bg-primary-subtle border border-primary-subtle   ' : ''}`}
                        onClick={() => setChannelFilter(channelNames.community)} >
                        <FaRegHandshake size={15}
                            style={{ backgroundColor: 'transparent', }}
                            className='mx-2' />
                        <span className='d-none d-md-inline-block'>Community </span>

                    </p>
                </MotionContainer>

                <MotionContainer>
                    <p className={`   p-2 py-auto px-3  border border-2  rounded-pill   d-flex justify-content-center align-items-center text-secondary-emphasis bg-secondary-emphasis  border-secondary-emphasis`}
                        onClick={() => setChannelFilter('')} >
                        <IoMdClose size={15}
                            style={{ backgroundColor: 'transparent', }}
                            className='mx-2' />
                        <span className='d-none d-md-inline-block'>clear </span>

                    </p>
                </MotionContainer>

            </div>

            <Row className='mx-auto ms-5 ps-5 px-auto overflow-y-auto  '>
                {data?.getForumPosts.Posts?.map((post: any, index: number) => {
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
            <Row>
                {/* paginaton  */}
                <Pagination className='d-flex justify-content-center align-items-center  my-5 ' size="md">
                    <PaginationItem>
                        <PaginationLink first onClick={firstPage}>
                            first
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={prevPage}>
                        <PaginationLink previous />
                    </PaginationItem>
                    <PaginationItem onClick={nextPage}>
                        <PaginationLink next />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last onClick={lastPage}>
                            last
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </Row>
            <Footer />
        </div >


    )
}
