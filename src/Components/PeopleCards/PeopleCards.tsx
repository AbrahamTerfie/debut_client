import React from 'react'
import { Row, Col, } from 'reactstrap'
import './Peoplecards.css'
import { setActivePersonId } from '../../Store/UI/sidebarController'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
export default function PeopleCards({ people }: any) {
    const dispatch = useDispatch()
    const { activePersonId } = useSelector((store: RootState) => store.uiStore)

    function updatePeopleDirectoryState(newname: string) {
        dispatch(setActivePersonId(newname))
    }


    // console.log('people', people)
    // console.log('activePersonId', activePersonId)

    return (
        <Row
            className={activePersonId === people._id ?
                '  shadow  border-info rounded-4 p-3 mx-2 my-2 MyeventCard '
                : '  shadow-sm  border-info  rounded-4 p-3 mx-2 my-2 MyeventCard'}
            onClick={() => updatePeopleDirectoryState(people._id)}>
            <Col md={2}  >
                <img
                    className='rounded w-100'
                    src={people.profileImage}
                    alt='user profile photo' />
            </Col>
            <Col md={10} >
                <p className=' fw-bold fs-5 m-0' > {people.firstName}  {people.lastName}  </p>
                <p className='fs-6 fw-lighter m-0 text-muted' >
                    {people.titleAtCompany}
                </p>
                <p className='fw-lighter'>
                    {people.company[0]?.companyName}
                </p>
            </Col>
        </ Row >
    )
}
