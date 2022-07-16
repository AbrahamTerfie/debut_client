
import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Input } from 'reactstrap'
import ForumCards from '../../../Components/ForumCards/ForumCards'
import './Forum.css'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { IoMdAdd } from 'react-icons/io'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { FaRegHandPaper, FaRegHandshake } from 'react-icons/fa'
import NewForumPost from './NewForumPost'
import { useMutation } from '@apollo/client'
import { CHECK_EMAIL_VALIDITY } from '../../../GraphQl/index'
import { useAuth0 } from '@auth0/auth0-react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
export default function Forum() {
    const { user } = useAuth0()
    const [canvas, setCanvas] = useState(false);
    const toggle = () => setCanvas(!canvas);
    const [checkIfUserExists, checkEmailResponnce] = useMutation(CHECK_EMAIL_VALIDITY)
    const [email, setEmail] = useState('')
    console.log("email input ", email)

    useEffect(() => {
        user && user.email && setEmail(user.email)
        checkIfUserExists({ variables: { email: email } })

    }, [user])

    if (checkEmailResponnce.loading) {
        console.log("loading ")
    }
    if (checkEmailResponnce.data) {
         checkEmailResponnce.data.checkUserExistsByEmail === true ?
            console.log("user exists so wont create new user") :
            console.log("setting up new user")
        
    }
    if (checkEmailResponnce.error) {
        console.log("checkEmailResponnce.error", checkEmailResponnce.error)
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
