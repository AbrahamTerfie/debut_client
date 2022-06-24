import React from 'react'
// import './ForumCards.css'
import { Row, Col, Container, Input } from 'reactstrap'
import './GratitudeCards.css'
export default function GratitudeCards() {
    return (
        <Row className='gratitudeCardContainer'>
            <Col xs='2' sm='2' md='2' lg='1' xl='1'  className='profileImage' >
                <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />

            </Col>

            <Col xs='10' sm='10' md='10' lg='11' xl='11' >

                <h4 className='gratitudeUserName' > gratitudeposter UserName   <small>posted time  .  Channel  .  99 comments</small>  </h4> 

              

                <div className='ventureOwner'>
                    <p>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quia,
                        tempora itaque! Illum, molestias.
                        Quisquam temporibus iusto quae amet,
                        ullam, velit ducimus porro quas, vel
                        necessitatibus repudiandae cupiditate sunt
                        enim voluptatibus.
                    </p>

                </div>
            </Col>


        </Row>
    )
}
