import React, { useEffect, useState } from 'react'
import { Row, Col, Collapse } from 'reactstrap'
import PeopleCards from '../../../Components/PeopleCards/PeopleCards'
import './People.css'
import SearchComponent from '../../../Components/GlobalSearch/SearchComponent'
import { useMutation, useQuery } from '@apollo/client'
import { AUTHENTICATED_USER } from '../../../GraphQl/index'
import { useAuth0 } from '@auth0/auth0-react'
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

    const { user } = useAuth0();
    const { peopleExpertiseFilter, peopleRegionFilter, activePersonId } = useSelector((store: RootState) => store.uiStore)
    const [authenticatedUser, authenticatedUsrRes] = useMutation(AUTHENTICATED_USER)
    const [modal, setModal] = useState(false);
    const toggle = (): void => setModal(!modal);
    const { loading, data, error } = useQuery(All_USERS)



    useEffect(() => {
        authenticatedUser({
            variables: {
                userInput: {
                    email: user?.email,
                    userName: user?.name,
                    firstName: user?.nickname,
                }

            }
        })

    }, [user?.email, user?.name, user?.nickname, authenticatedUser])
    if (authenticatedUsrRes.error) { (notifyError(authenticatedUsrRes.error.message)) }
    if (authenticatedUsrRes.loading || loading) { return <Loader /> }

    if (error) {
        console.log(error)
        notifyError(error.message.toString())
    }

    return (

        <div className=' d-flex flex-column m-5  p-5 ' >
            <p className='fw-light fs-1  mx-5'> People directory</p>
            <Row className=''>

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

                    <div
                        onClick={toggle}
                    >
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
            <Row className='mt-5 '  >
                <Col className={`overflow-scroll  ${activePersonId === "" ? '' : 'd-none d-sm-block'}`}
                //    make col scrollable  on y axis
                style={{ maxHeight: '80vh' }}

                >

                    {data?.getdebutUsers.map((user: any) => {
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
                    }
                    )}
                </Col>
                <Col
                    className={`overflow-auto ${activePersonId === "" ? 'd-none d-sm-block' : ''}`}



                // on small screens if person is selected fhow it full screen otherwise hide it

                >
                    <PersonDetail />
                </Col>
            </Row>
        </div>

    )
}
