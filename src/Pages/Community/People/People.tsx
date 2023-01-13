import React, { useState, useEffect } from 'react'
import { Row, Col, Collapse, Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import PeopleCards from '../../../Components/PeopleCards/PeopleCards'
import './People.css'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { useQuery } from '@apollo/client'

import PersonDetail from '../../../Components/PersonDetail/PersonDetail'
import PeopleFilterOptions from '../../../Components/PeopleFilterOptions/PeopleFilterOptions'
import { IoMdSettings } from 'react-icons/io'
import { FaSearch } from 'react-icons/fa'

//context
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/RootReducer'
import { All_USERS } from '../../../GraphQl/index'
import Loader from '../../../Components/Loader/Loader'
import { motion } from 'framer-motion'
import { notifyError } from '../../../Components/Notification/Toast'
import { v4 as uuid } from 'uuid'
export default function People() {
    const [pagination, setPagination] = useState<{ limit: number, offset: number, allPeople: number }>({
        limit: 25,
        offset: 0,
        allPeople: 0,
    })
    const { peopleExpertiseFilter, peopleRegionFilter, activePersonId } = useSelector((store: RootState) => store.uiStore)
    const [modal, setModal] = useState(false);
    const toggle = (): void => setModal(!modal);
    const { loading, data, error } = useQuery(All_USERS, {
        variables: {
            limit: pagination.limit,
            offset: pagination.offset,
        }
    })


    useEffect(() => {
        setPagination({
            ...pagination,
            allPeople: data?.getdebutUsers.TotalAmount ?? 0

        })
    }, [data?.getdebutUsers.TotalAmount])


    const nextPage = () => {
        pagination.offset + pagination.limit < pagination.allPeople &&
            setPagination({ ...pagination, offset: pagination.offset + pagination.limit })
    }
    const prevPage = () => {
        pagination.offset > 0 &&
            setPagination({ ...pagination, offset: pagination.offset - pagination.limit })
    }
    const firstPage = () => {
        pagination.offset > 0 &&
            setPagination({ ...pagination, offset: 0 })
    }
    const lastPage = () => {
        pagination.offset + pagination.limit < pagination.allPeople &&
            setPagination({
                ...pagination, offset: Math.floor(
                    pagination.allPeople / pagination.limit) * pagination.limit
            })
    }


    if (error) { notifyError("something went wrong") }
    if (loading) { return <Loader /> }

    return (

        <div
            className='w-100'
        >
            <Row className=' mb-1 my-auto pt-5 mt-5 px-5 mx-5  ' >
                <h1 className='fw-light fs-1  m-5 mb-3'>
                    People directory
                </h1>
                <p className="text-muted ms-5" >
                    Find people you will love to work with and help grow
                </p>

            </Row>
            <Row
                className='d-flex justify-content-evenly   flex-row flex-wrap sticky-xxl-top  ms-5 ps-5 mb-3 ' style={{ zIndex: 1, top: '10%', }}>



                <Col md={10} sm={8} xs={8} >
                    <SearchComponent />
                </Col>
                <Col md={1} sm={4} xs={4}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className='shadow-sm rounded rounded-5   p-2 m-1  me-2 bg-success bg-opacity-10   text-success align-items-center justify-content-center d-flex'>
                        <FaSearch />
                    </motion.div>

                </Col>
                <Col md={1} >

                    <div onClick={toggle}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            className='shadow-sm rounded rounded-5   p-2 m-1  me-2 bg-warning bg-opacity-10   text-warning align-items-center justify-content-center d-flex'
                        >
                            <IoMdSettings />
                        </motion.div>
                    </div>

                </Col>
            </Row>
            <Collapse isOpen={modal} toggle={toggle} >

                <PeopleFilterOptions />

            </Collapse>
            <Row className='mx-auto ms-5  px-auto overflow-y-auto '>
                <Col className={`overflow-scroll  ${activePersonId === "" ? '' : 'd-none d-sm-block'}`}
                    style={{ maxHeight: '80vh' }}>

                    {data?.getdebutUsers.Users.map((user: any) => {
                        if (peopleExpertiseFilter.length === 0 && peopleRegionFilter.length === 0) {
                            return <PeopleCards key={uuid()}
                                people={user} />
                        }
                        // comapre  user.aeraOfExpertise array with peopleExpertiseFilter array and if they match return only those users
                        if (peopleExpertiseFilter.length !== 0 && user.aeraOfExpertise.some((expertise: String) => peopleExpertiseFilter.includes(expertise))) {
                            return <PeopleCards key={uuid()}
                                people={user} />
                        }
                        // comapre  user.regions  array with peopleRegionsFilter array and if they match return only those users
                        if (peopleRegionFilter.length !== 0 && user.regions.some((region: String) => peopleRegionFilter.includes(region))) {
                            return <PeopleCards key={uuid()}
                                people={user} />
                        }
                    })}
                </Col>
                <Col className={`overflow-auto ${activePersonId === "" ? 'd-none d-block' : ''}`}>
                    <PersonDetail />
                </Col>
            </Row>
            <Row>
                {/* paginaton  */}
                <Pagination className='d-flex justify-content-center align-items-center  my-5 ' size="md">
                    <PaginationItem>
                        <PaginationLink first onClick={firstPage}>
                            first
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={prevPage}>
                        <PaginationLink previous />
                    </PaginationItem>
                    <PaginationItem onClick={nextPage}>
                        <PaginationLink next />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last onClick={lastPage}>
                            last
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
            </Row>
        </div>

    )
}
