



import React from 'react'
import { Row, Col, Container, Input, Button } from 'reactstrap'
import ForumCards from '../../Components/ForumCards/ForumCards'
import './Forum.css'
import SearchComponent from '../../Components/GlobalSearch/SearchComponent'

export default function Forum() {
    return (
        <div  >
            <Row>
                <Col className='mt-4 m-3' xs='10' sm='10' md='8' lg='2' xl='2' >
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
                            outline color='light' className='mt-3 w-100' size='md' >
                            New Post
                        </Button>
                    </div>
                    <div className='ChanelsContainer w-100 h-25 mt-4' >
                        <h4 className='mt-4' > Channels</h4>
                        <div className='channels' >
                            <h6 color='light' className='w-100 my-1 mx-3 h-25 text-left px-4 ' >
                                General
                            </h6>
                            <h6 color='light' className='w-100 my-1 mx-3 h-25 text-left px-4' >
                                Collabration
                            </h6>
                            <h6 color='light' className='w-100 my-1 mx-3 h-25 text-left px-4' >
                                Community Board
                            </h6>
                        </div>
                    </div>
                </Col>

                <Col className='mainPageContainer ' xs='10' sm='10' md='8' lg='8' xl='8' >
                    <Row className='searchInput mb-1 mt-4' >
                        <h5> Forum </h5>
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

        </div>
    )
}
