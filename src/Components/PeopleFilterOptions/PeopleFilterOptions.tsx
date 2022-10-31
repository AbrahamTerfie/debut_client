import React, { useState } from 'react'
import { Row, Col, FormGroup, Input, Button } from 'reactstrap'
import { peopleExpertiseFilterHandler, peopleRegionFilterHandler, clearPeopleFilter } from '../../Store/UI/sidebarController'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { motion } from 'framer-motion'
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
        <Row className="shadow border-light p-4  mt-5 rounded-1 ">
            <Col md={12}>
                <p className="fw-light text-center text-muted fs-5">Filter by</p>
            </Col>
            <Col md={6}  >

                <p className='text-center fs-4 ' > expertise</p>
                <div className='d-flex flex-wrap justify-content-center align-items-start '>

                    <FormGroup check className='fs-6 fw-light m-2 mx-3' >
                        <Input type="checkbox"
                            name="businessStratigy"
                            id="businessStratigy"

                            checked={peopleExpertiseFilter.includes('businessStratigy')}
                            onChange={handleExpertise}
                        />
                        <span>Business Strategy</span>
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light m-2 mx-3' >
                        <Input type="checkbox"
                            name="teamBuilding"
                            id="teamBuilding"
                            checked={peopleExpertiseFilter.includes('teamBuilding')}
                            onChange={handleExpertise} />
                        Team Building
                    </FormGroup>


                    <FormGroup check className='fs-6 fw-light m-2 mx-3' >
                        <Input type="checkbox"
                            name="financing"
                            id="financing"
                            checked={peopleExpertiseFilter.includes('financing')}
                            onChange={handleExpertise} />
                        Financing/Invenstment
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light m-2 mx-3' >
                        <Input type="checkbox"
                            name="mentoring"
                            id="mentoring"
                            checked={peopleExpertiseFilter.includes('mentoring')}
                            onChange={handleExpertise} />
                        Coaching/Mentoring
                    </FormGroup>


                    <FormGroup check className='fs-6 fw-light m-2 mx-3' >
                        <Input type="checkbox"
                            name="advertizing"
                            id="advertizing"
                            checked={peopleExpertiseFilter.includes('advertizing')}
                            onChange={handleExpertise} />
                        advertizing
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light m-2 mx-3' >
                        <Input type="checkbox"
                            name="agriculture"
                            id="agriculture"
                            checked={peopleExpertiseFilter.includes('agriculture')}
                            onChange={handleExpertise} />
                        agriculture
                    </FormGroup>
                </div>

            </Col>
            <Col md={6} >
                <p className='text-center fs-4 ' > region</p>
                <div className='d-flex flex-wrap justify-content-center align-items-start '>

                    <FormGroup check className='fs-6 fw-light m-2 mx-4' >
                        <Input type="checkbox"
                            name="northAmerica"
                            id="northAmerica"
                            checked={peopleRegionFilter.includes('northAmerica')}
                            onChange={handleRegion} />
                        North America
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light m-2 mx-4' >
                        <Input type="checkbox"
                            name="southAmerica"
                            id="southAmerica"
                            checked={peopleRegionFilter.includes('southAmerica')}
                            onChange={handleRegion} />
                        South America
                    </FormGroup>


                    <FormGroup check className='fs-6 fw-light m-2 mx-4' >
                        <Input type="checkbox"
                            name="asia"
                            id="asia"
                            checked={peopleRegionFilter.includes('asia')}
                            onChange={handleRegion} />
                        Asia
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light m-2 mx-4' >
                        <Input type="checkbox"
                            name="middleEast"
                            id="middleEast"
                            checked={peopleRegionFilter.includes('middleEast')}
                            onChange={handleRegion} />
                        Middle East
                    </FormGroup>


                    <FormGroup check className='fs-6 fw-light m-2 mx-4' >
                        <Input type="checkbox"
                            name="Africa"
                            id="Africa"
                            checked={peopleRegionFilter.includes('Africa')}
                            onChange={handleRegion} />
                        Africa
                    </FormGroup>
                    <FormGroup check className='fs-6 fw-light m-2 mx-4' >
                        <Input type="checkbox"
                            name="Europe"
                            id="Europe"
                            checked={peopleRegionFilter.includes('Europe')}
                            onChange={handleRegion} />
                        Europe
                    </FormGroup>


                    <FormGroup check className='fs-6 fw-light m-2 mx-4' >
                        <Input type="checkbox"
                            name="Oceania"
                            id="Oceania"
                            checked={peopleRegionFilter.includes('Oceania')}
                            onChange={handleRegion} />
                        Oceania
                    </FormGroup>

                </div>
            </Col>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='d-flex justify-content-center align-items-center'
                onClick={() => dispatch(clearPeopleFilter())}
            >
                <p className='tex-center  bg-danger bg-opacity-10 p-1 px-5 rounded-pill fs-5 fw-light text-danger m-2' > clear filter</p>


            </motion.div>

        </Row>
    )
}
