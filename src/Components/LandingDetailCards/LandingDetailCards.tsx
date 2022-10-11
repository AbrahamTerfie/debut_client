import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./styles.css";
import { cardDataDetails } from './landingCarddata'

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
            <motion.div className="d-flex justify-content-center LandingDetailCards  align-items-center  flex-wrap flex-row "
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
        <motion.div 
            className="w-10 p-3  itemList  mx-3 "
            layout
            onClick={toggleOpen}
            initial={{ borderRadius: 10 }}
            animate={{ borderRadius: isOpen ? 25 : 10 }}
            transition={spring}
            whileHover={{ scale: 1.08 }}
        >
            <p className="fs-4 fw-light text-center  text-light">
                {title}
            </p>
            <AnimatePresence>{isOpen && <Content
                title={title}
                icon={icon}
                id={id}
                cardDescriptions={cardDescriptions}
            />}</AnimatePresence>
        </motion.div>
    );
}

function Content(
    {
        title,
        icon,
        id,
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
                        <div className="d-flex justify-content-start  align-items-center"  >
                            <div className='d-flex justify-content-center align-items-center' >
                                <p className=' fw-lighter text-center  text-light'>
                                    - {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

