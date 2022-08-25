import React, { useState } from 'react'
import { Row, Col, FormGroup, Input, Button } from 'reactstrap'
import { peopleExpertiseFilterHandler, peopleRegionFilterHandler, clearPeopleFilter } from '../../Store/UI/sidebarController'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
export default function PeopleFilterOptions() {
    const dispatch = useDispatch()
    const { peopleExpertiseFilter, peopleRegionFilter } = useSelector((store: RootState) => store.uiStore)
    const handleExpertise = (e: any) => {
        dispatch(peopleExpertiseFilterHandler(e.target.name))
    }
    const handleRegion = (e: any) => {
        dispatch(peopleRegionFilterHandler(e.target.name))
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
                            checked={peopleExpertiseFilter.includes('businessStratigy')}
                            onChange={handleExpertise}
                        />
                        <span>Business Strategy</span>
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="teamBuilding"
                            id="teamBuilding"
                            checked={peopleExpertiseFilter.includes('teamBuilding')}
                            onChange={handleExpertise} />
                        Team Building
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between ' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="financing"
                            id="financing"
                            checked={peopleExpertiseFilter.includes('financing')}
                            onChange={handleExpertise} />
                        Financing/Invenstment
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light mx-5' >
                        <Input type="checkbox"
                            name="mentoring"
                            id="mentoring"
                            checked={peopleExpertiseFilter.includes('mentoring')}
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
                            checked={peopleRegionFilter.includes('northAmerica')}
                            onChange={handleRegion} />
                        North America
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="southAmerica"
                            id="southAmerica"
                            checked={peopleRegionFilter.includes('southAmerica')}
                            onChange={handleRegion} />
                        South America
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between ' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="asia"
                            id="asia"
                            checked={peopleRegionFilter.includes('asia')}
                            onChange={handleRegion} />
                        Asia
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="middleEast"
                            id="middleEast"
                            checked={peopleRegionFilter.includes('middleEast')}
                            onChange={handleRegion} />
                        Middle East
                    </FormGroup>
                </div>
                <div className=' d-flex justify-content-between' >
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="africa"
                            id="africa"
                            checked={peopleRegionFilter.includes('africa')}
                            onChange={handleRegion} />
                        Africa
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light' >
                        <Input type="checkbox"
                            name="europe"
                            id="europe"
                            checked={peopleRegionFilter.includes('europe')}
                            onChange={handleRegion} />
                        Europe
                    </FormGroup>
                </div>
            </Col>
            <Col md={12} className="my-3 text-center">
                <Button color='link' outline
                    onClick={() => dispatch(clearPeopleFilter())}>
                    clear filters
                </Button>
            </Col>
        </Row>
    )
}
