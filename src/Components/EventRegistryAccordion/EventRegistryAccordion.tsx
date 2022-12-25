import { motion } from 'framer-motion';
import React from 'react'
import { Col, Row } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer';
import { DebutRegistryItem } from '../../types/EventPageTypes'
import classNames from 'classnames'
import { EmailTypes } from '../../Email/EmailTypes';
import { toggleEmailPopup } from '../../Store/UI/sidebarController';
import { useDispatch, useSelector } from 'react-redux';
import Emailcanvas from '../Email/Emailcanvas';
import { RootState } from '../../Store/RootReducer';

export default function ItemCard({ item, createdBy }: { item: DebutRegistryItem, createdBy: any }) {
    const dispatch = useDispatch()


    const { userEmail } = useSelector((store: RootState) => store.identfiers)


    const EmailHandler = () => {
        dispatch(toggleEmailPopup({
            emailData: {
                emailType: EmailTypes.helpWiithItem,
                itemName: item.registryItemName,
                userEmail: userEmail,
                emailTo: createdBy.email,
                userBioGraphy: "this is plaveholder biography  ",

            }
        }))
    }


    return (
        <Col
            md={4}
            sm={12}
            className={classNames(' shadow-sm rounded-3 d-flex flex-column  justify-content-start m-3  border border-muted  ', 'm-2',
                item.registryItemFullfiled ? 'border border-success' : '')} >
            <Emailcanvas />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.01 }}>
                <Row
                    className='shadow-lg'
                    style={{
                        height: '250px', backgroundSize: 'cover', backgroundPosition: 'center',
                        backgroundImage: `url(${item.registryItemImage})`, backgroundBlendMode: 'darken',
                        backgroundColor: 'rgba(0,0,0,0.6)', objectFit: 'fill', objectPosition: 'center', borderRadius: ' 10px 10px 0 0',
                        overflow: 'hidden',
                    }}>
                    <p className='text-light fs-3  text-end p-5 align-self-end'> {item.registryItemName} </p>
                </Row>
                <Row className='px-3 py-2' >
                    <p className='text-muted'> description</p>
                    <p className=' '>
                        {item.registryItemDescription}
                    </p>
                    <p className='text-muted m-0'> item link</p>
                    <MotionContainer>
                        <p className=' m-2 mt-0 bg-primary text-start text-primary rounded-pill px-4 m-1 mx-1 bg-opacity-10  py-2 flex-wrap'>
                            {item.registryItemLink}
                        </p>
                    </MotionContainer>
                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                            <p className='text-muted'> price</p>
                            <p className='text-success '>   {item.registryItemPrice} </p>
                        </div>
                        <div>
                            <p className='text-muted'> quantity</p>
                            <p className=' '> {item.registryItemQuantity} </p>
                        </div>
                    </div>
                </Row>
                <Row className='px-3'>
                    <MotionContainer>
                        {item.registryItemFullfiled ? <p className='text-center text-dark bg-dark  bg-opacity-10  py-1'> fulfilled </p> :
                            <p className='text-center text-warning bg-warning  bg-opacity-10  py-1'
                                onClick={() => EmailHandler()}> let me help with this </p>}
                    </MotionContainer>
                </Row>
            </motion.div >
        </Col >
    )
}

