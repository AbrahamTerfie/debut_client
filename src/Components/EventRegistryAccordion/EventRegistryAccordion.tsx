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
                userBioGraphy: "this is placeholder biography  ",

            }
        }))
    }


    return (
        <Col sm={12} md={4} lg={4} xl={3} xxl={3}
            className={classNames('  rounded-3 d-flex flex-column  justify-content-start  border border-muted  ', 'm-2',
                item.registryItemFullfiled ? 'border border-success' : '')} >
            <Emailcanvas />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.01 }}>
                <Row
                    className=''
                    style={{
                        height: '250px', backgroundSize: 'cover', backgroundPosition: 'center',
                        backgroundImage: `url(${item.registryItemImage})`, backgroundBlendMode: 'darken',
                        backgroundColor: 'rgba(0,0,0,0.6)', objectFit: 'fill', objectPosition: 'center', borderRadius: ' 10px 10px 0 0',
                        overflow: 'hidden',
                    }}>
                    <p className='text-light fs-3  text-end p-5 align-self-end'> {item.registryItemName} </p>
                </Row>
                <Row className='px-3 py-2 my-4' >
                    <p className='text-info m-0'> description</p>
                    <p className='text-muted fs-5 '>
                        {item.registryItemDescription}
                    </p>
                    <p className='text-info m-0'> item link</p>
                    <MotionContainer>
                        <a href={item.registryItemLink} target={item.registryItemLink} rel="noreferrer" className=' m-2 mt-0  text-start text-primary  m-1 py-2 flex-wrap  my-3'>
                            {item.registryItemLink}
                        </a>
                    </MotionContainer>
                    <div className='d-flex justify-content-between align-items-center flex-row my-3'>
                        <div>
                            <p className='text-info m-0'> price</p>
                            <p className='text-success fs-4 '> ${item.registryItemPrice} </p>
                        </div>
                        <div>
                            <p className='text-info m-0'> quantity</p>
                            <p className=' fs-4 text-warning'> #{item.registryItemQuantity} </p>
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

