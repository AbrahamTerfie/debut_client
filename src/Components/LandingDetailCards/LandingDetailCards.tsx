import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./styles.css";
import { cardDataDetails } from './landingCarddata'
import { Col } from "reactstrap";

type CardProps = {
    title: string,
    icon: any,
    id: number,
    cardDescriptions: any
}

const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
}
export default function LandingDetailCards() {
    return (
        <AnimateSharedLayout>
            <motion.div
                className="d-flex justify-content-center   align-items-center  flex-wrap flex-row mb-5"
                layout initial={{ borderRadius: 25 }}>

                {cardDataDetails.map(item => (

                    <Item key={item.id}
                        title={item.title}
                        icon={item.icon}
                        id={item.id}
                        cardDescriptions={item.cardDescriptions}
                    />

                ))}

            </motion.div>
        </AnimateSharedLayout>
    );
}

function Item(
    {
        title,
        icon,
        id,
        cardDescriptions

    }: CardProps) {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <Col
            sm={12} md={5} lg={5} xl={5}
        >
            <motion.div
                className=" p-3 m-3  bg-muted bg-opacity-10 rounded-3  border border-info border-2 shadow-lg"
                layout
                onClick={toggleOpen}
                initial={{ borderRadius: 10 }}
                animate={{ borderRadius: isOpen ? 25 : 10 }}
                transition={spring}
                whileHover={{ scale: 1.08 }}
            >
                <p className="fs-4 fw-bold text-center  text-light">
                    {title}
                </p>
                <AnimatePresence

                >{isOpen && <Content
                    title={title}
                    icon={icon}
                    id={id}
                    cardDescriptions={cardDescriptions}

                />}
                </AnimatePresence>
            </motion.div>
        </Col>
    );
}

function Content(
    {
        // title,
        // icon,
        // id,
        cardDescriptions
    }: CardProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0, }}
        >
            <div>
                {cardDescriptions?.map((item: any) => (
                    <div key={item.id} className=" flex-column" >

                        <p className=' fw-light text-center  text-light'>
                            {item.description}
                        </p>

                    </div>
                ))}
            </div>
        </motion.div>
    );
}

