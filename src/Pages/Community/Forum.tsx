
import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import ForumCards from '../../Components/ForumCards/ForumCards'
import './Forum.css'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'
import { IoMdAdd } from 'react-icons/io'
import { IoChatbubblesOutline } from 'react-icons/io5'
import { FaRegHandPaper, FaRegHandshake } from 'react-icons/fa'
export default function Forum() {
    return (

        <Row className=' d-flex page' >
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
