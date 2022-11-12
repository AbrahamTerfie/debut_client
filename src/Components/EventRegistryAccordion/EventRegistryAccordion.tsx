import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionHeader, AccordionBody, UncontrolledAccordion, Col, Row } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer';




function ItemCard() {
    return (
        <Col md={3} className=' shadow-sm rounded-3 d-flex flex-column  justify-content-between m-3   '>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                whileHover={{ scale: 1.01 }}

            >
                <Row
                    className='shadow-lg'
                    style={{
                        height: '200px', backgroundSize: 'cover', backgroundPosition: 'center',
                        backgroundImage: `url(https://images.unsplash.com/photo-1667715191315-351400a5789a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`, backgroundBlendMode: 'darken',
                        backgroundColor: 'rgba(0,0,0,0.6)', objectFit: 'cover', objectPosition: 'center', borderRadius: ' 10px 10px 0 0',
                        overflow: 'hidden',
                    }}>
                    <p className='text-light fs-3  text-end p-5 align-self-end'> item name </p>
                </Row>
                <Row className='px-3 py-2' >
                    <p className='text-muted'> description</p>
                    <p className=' '>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem in odio voluptatum blanditiis tempora magni fuga obcaecati, vitae, alias laboriosam voluptate dolorum ad ullam voluptatibus consequatur vel reiciendis assumenda itaque!
                    </p>

                    <div className='d-flex justify-content-around align-items-center'>
                        <div>
                            <p className='text-muted'> price</p>
                            <p className='text-success '>   9999 </p>
                        </div>
                        <div>
                            <p className='text-muted'> quantity</p>
                            <p className=' '> 9999 </p>
                        </div>
                    </div>

                </Row>

                <Row className='px-3'>
                    <MotionContainer>
                        <p className='text-center text-success bg-success  bg-opacity-10  py-1'> let me help with this </p>
                    </MotionContainer>
                </Row>


            </motion.div >
        </Col >
    )
}



export default function EventRegistryAccordion(


) {

    const [open, setOpen] = useState('');
    const toggle = (id: string) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };
    return (
        <div>
            <UncontrolledAccordion flush open={open} >

                <AccordionItem>
                    <AccordionHeader targetId="1"> registry name</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Row className=' d-flex justify-content-around align-items-center flex-wrap'>



                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                            <ItemCard />
                        </Row>

                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />

                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
                    <AccordionBody accordionId="3">
                        <ItemCard />
                        <ItemCard />
                        <ItemCard />
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        </div>
    )
}
