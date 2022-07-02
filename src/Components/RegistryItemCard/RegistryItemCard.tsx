import React, { useState } from 'react'
import {  Row, Collapse, Col } from 'reactstrap'
import { FaDollarSign } from 'react-icons/fa'
import { AiOutlineFieldNumber, AiFillCheckCircle } from 'react-icons/ai'


export default function RegistryItemCard() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <>
            <div className='m-2 p-2 bg-none myVentureContainer '
                onClick={toggle}
                style={{ height: "20% ", maxWidth: '30%', }} >
                <div className='my-3' >An item Name </div>

                    <small className="text-muted">Last updated 3 mins ago</small>

            </div>
            <Collapse isOpen={isOpen} className=" border border-info m-2 p-2 " >
                <Row >
                    <span className='mx-3 fs-4 fw-bold text-muted  ' > Card Name
                        <AiFillCheckCircle className='mx-3' size={20} />
                    </span>
                    <Col>
                        <div className='d-flex flex-row justify-content-between px-3 mb-3' >
                            <span>
                                <FaDollarSign className='mx-2' size={15} />
                                989898
                            </span>
                            <span>
                                <AiOutlineFieldNumber className='mx-2' size={20} />
                                999
                            </span>
                        </div>
                        <span className='mx-3  fs-5 fw-light' > description</span>
                        <p className=' m-3 fs-6 fw-light' >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quia reprehenderit totam non nemo reiciendis, sapiente ratione?
                            Veniam, tempore voluptate minus ipsam explicabo,
                            accusantium rem ex animi nam, harum aut cum?
                        </p>
                    </Col>
                    <Col>
                        <div>
                            <img
                                className='m-3 w-75 '
                                src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='user profile photo' />

                        </div>
                    </Col>
                </Row>
            </Collapse>

        </>


    )
}



{ /*

 _id: ID!
    itemOfRegistry: DebutRegistry!
    registryItemName: String!
    registryItemDescription: String!
    registryItemPrice: String!
    registryItemQuantity: String!
    registryItemImage: String!
    registryItemFullfiled: Boolean
*/ }