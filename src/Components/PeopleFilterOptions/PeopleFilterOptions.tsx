import React, { useState } from 'react'
import { Row, Col, FormGroup, Input } from 'reactstrap'

export default function PeopleFilterOptions() {
    const [expertise, setExpertise] = useState([] as any)
    const [region, setRegion] = useState([] as any)


    const handleExpertise = (e: any) => {
        if (e.target.checked) {
            setExpertise([...expertise, e.target.name])
        } else {
            setExpertise(expertise.filter((item: any) => item !== e.target.name))
        }
    }
    const handleRegion = (e: any) => {
        if (e.target.checked) {
            setRegion([...region, e.target.name])
        } else {
            setRegion(region.filter((item: any) => item !== e.target.name))
        }
    }


    return (
        <Row className="shadow-sm border-light m-4 ">

            <Col md={4} className="mx-5" >
                <p> expertise</p>

                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="businessStratigy"
                            id="businessStratigy"
                            onChange={handleExpertise}
                        />
                        <span>Business Strategy</span>
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="teamBuilding"
                            id="teamBuilding"
                            onChange={handleExpertise}

                        />
                        Team Building
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between ' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="financing"
                            id="financing"
                            onChange={handleExpertise}
                        />
                        Financing/Invenstment
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light mx-5' >
                        <Input type="checkbox"

                            name="mentoring"
                            id="mentoring"
                            onChange={handleExpertise} />
                        Coaching/Mentoring
                    </FormGroup>

                </div>
            </Col>
            <Col md={4} className="mx-5 my-3">
                <p> region</p>
                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="northAmerica"
                            id="northAmerica"
                            onChange={handleRegion}
                        />
                        North America
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="southAmerica"
                            id="southAmerica"
                            onChange={handleRegion}
                        />{' '}
                        South America
                    </FormGroup>
                </div>

                <div className=' d-flex justify-content-between ' >

                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="asia"
                            id="asia"
                            onChange={handleRegion}

                        />
                        Asia
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="middleEast"
                            id="middleEast"
                            onChange={handleRegion}

                        />
                        Middle East
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="africa"
                            id="africa"
                            onChange={handleRegion}
                        />
                        Africa
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="europe"
                            id="europe"
                            onChange={handleRegion}
                        />
                        Europe
                    </FormGroup>
                </div>
            </Col>
        </Row>
    )
}
