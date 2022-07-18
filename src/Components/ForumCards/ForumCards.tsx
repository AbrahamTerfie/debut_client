import React from 'react'
import './ForumCards.css'
import { Row, Col, Container, Input } from 'reactstrap'
export default function ForumCards(
  {
    _id , createdBy, channel, postTitle, comments, postContent,
  } : {
    _id: String,
    createdBy: {
        _id: String,
        firstName: String,
        email: String,
    },
    channel: String,
    postTitle: String,
    comments: [],
    postContent: String,
  }

) {
    return (
        <Row className='forumCardsContainer p-3'>
            <Col xs='2' sm='2' md='2' lg='1' xl='1' className='profileImage' >
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />

            </Col>

            <Col className='mx-1' xs='10' sm='10' md='10' lg='10' xl='10' >

                <p className='fw-bolder fs-5 ' > {postTitle} </p>


                <p className='fs-6 text-muted' >   posted time  .  {channel}  .  {comments.length}  </p>

                <p className='fw-light' >
                    {postContent}
                </p>
            </Col>


        </Row>
    )
}
