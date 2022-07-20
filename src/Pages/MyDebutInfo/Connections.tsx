import React from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


function UserCardPreview() {
  return (

    <div className="d-flex shadow-lg my-3 px-3 py-3">
      <img src="https://via.placeholder.com/75" alt="user"
        className="rounded  mx-3 " />
      <div>
        <h5 className="card-title"> Person Name </h5>
        <p className="card-text text-muted">
          title and company
          title and company
          title and company
        </p>
      </div>
    </div>
  )

}

export default function Connections() {
  return (
    <Row>

      <Col md={6}>
      <p className='fs-3 fw-light text-muted px-5'  > Following </p>
        <div className="h-50" style={{ overflowY: 'auto' }} >
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
        </div>
      </Col>
      <Col md={6}>
        <p className='fs-3 fw-light text-muted px-5'  > Followers </p>
        <div className="h-50" style={{ overflowY: 'auto' }} >
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
          <UserCardPreview />
        </div>
      </Col>
    </Row>
  )
}
