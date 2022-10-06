import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./styles.css";
import { cardDataDetails } from './landingCarddata'
/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */


type CardProps = {
    title: string,
    icon: any,
    id: number,
    cardDescriptions: any

}


export default function LandingDetailCards() {
    console.log(cardDataDetails)


    return (
        <AnimateSharedLayout>
            <motion.ul
                className="d-flex justify-content-center align-items-center 
            flex-wrap
            flex-row 
            "
                layout initial={{ borderRadius: 25 }}>
                {cardDataDetails.map(item => (
                    <Item key={item.id}
                        title={item.title}
                        icon={item.icon}
                        id={item.id}
                        cardDescriptions={item.cardDescriptions}

                    />
                ))}
            </motion.ul>
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
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li
            className="w-25 h-75 p-3   mx-3 d-flex justify-content-center align-items-center"
            layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            {/* <motion.div className="circleShimmer" layout > */}
            {!isOpen && <p
                className="fs-5 fw-light text-center  text-light"
            >  {title}  </p>}
            {/* </motion.div> */}
            <AnimatePresence>{isOpen && <Content
                title={title}
                icon={icon}
                id={id}
                cardDescriptions={cardDescriptions}
            />}</AnimatePresence>
        </motion.li>
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
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                {cardDescriptions?.map((item: any) => (
                    <div key={item.id} className=" flex-column" >

                        {/* <p className=" fw-bolder text-center  text-light">  {title}  </p> */}
                        <div className="d-flex justify-content-start  align-items-center"  >
                            {/* <div className='' > {item.icon} </div> */}
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

const items = [0, 1, 2, 6, 4, 2];
