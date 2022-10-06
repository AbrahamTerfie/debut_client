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
                {items.map(item => (
                    <Item key={item} />
                ))}
            </motion.ul>
        </AnimateSharedLayout>
    );
}

function Item() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.li
            className="w-25 h-75 p-3   mx-3
        d-flex justify-content-start align-items-center
        "
            layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
            {/* <motion.div className="circleShimmer" layout > */}
            {!isOpen && <p> some title</p>}
            {/* </motion.div> */}
            <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
        </motion.li>
    );
}

function Content() {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div>
                this is content
                <p>hello</p>
                and another ocntent
            </div>
        </motion.div>
    );
}

const items = [0, 1, 2, 6, 4, 2];
