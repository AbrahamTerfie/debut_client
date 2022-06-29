import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'
export default function AboutTab() {
  return (
    <>
      <Row>
        <p className='fs-2 my-4 fw-normal' > description title </p>

        <p className='fs-6 px-5 fw-light ' >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quae eius eveniet voluptates minima itaque laborum quam
          inventore recusandae quasi fugit necessitatibus hic explicabo
          architecto, voluptas ipsa. Expedita quisquam quia ab?
        </p>
      </Row>


      <div className='d-flex flex-row my-5' >
        <div className='profileImage ' >
          <img src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />
        </div>
        <div className='py-2 mx-3' >
          <p className='fs-5 fw-semibold mx-2'> UserName
            <p className='text-muted fs-6'> owner ttile  </p>
          </p>
        </div>
      </div>


      <Row  >
        <Col>
          <span className='fs-5 fw-normal text-muted' > year founded </span>
          <p className='fs-3 fw-normal ' >2020 </p>
          <br />
          <span className='fs-5 fw-normal text-muted' > adress </span>
          <p className='fs-3 fw-normal ' >  state, city, streetNo , 909090 </p>
          <br />

        </Col>

        <Col>

          <span className='fs-5 fw-normal text-muted' > Company size  </span>
          <p className='fs-3 fw-normal ' >  100 -200  </p>


          <br />
          <span className='fs-5 fw-normal text-muted' > social links   </span>
          <p className='fs-3 fw-normal ' >
            <AiOutlineFacebook className='mx-3' size={20} />
            <AiOutlineTwitter className='mx-3' size={20} />
            <AiOutlineInstagram className='mx-3' size={20} />
            <AiOutlineYoutube className='mx-3' size={20} />
          </p>
        </Col>


        <Row>
          <p className='fs-3 fw-light' > company achivements    </p>

          <p className='fs-5 fw-light' >
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Enim, porro ipsum? Maxime
            praesentium amet dolores animi autem! Provident,
            debitis corrupti? Eveniet animi dignissimos voluptatum
            debitis atque, expedita quisquam dolorum reprehenderit.

          </p>
        </Row>

        <Row>
          <Col>
            <p className='fs-3 fw-light' >impacts </p>
            <div className='mx-3'>
              <p className='fs-6 fw-light ' > this impacr ajdsjf</p>
              <p className='fs-6 fw-light'> this impacr ajdsjf</p>
              <p className='fs-6 fw-light'> this impacr ajdsjf</p>
            </div></Col>

          <Col>
            <p className='fs-3 fw-light' >operating aera</p>
            <div>
              <p className='fs-6 fw-light' > city ,country  </p>
            </div>
          </Col>
        </Row>

      </Row>
    </>
  )
}
