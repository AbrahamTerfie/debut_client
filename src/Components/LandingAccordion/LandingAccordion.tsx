

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";


const accordoindata = [
    {
        id: 1,
        title: "user",
        titleDescription: "Set Startup/Project Stage and Needs",
        descriprion: "Set your stage and select from needs you need to address. Download your LinkedIn or Email contact list and select different groups for your custom invitation. ",
    },
    {
        id: 2,
        title: "debut",
        titleDescription: "goes to work ",
        descriprion: "Debut turns your needs into different size commitment cards your community can sing up to. Now you are ready to mobilize your community.  and Set the date and send out for your startup babyshower. Reach out individually or host an in-person or virtual event. Different events for friends, family, college buddies, professional network.",

    },
    {
        id: 3,
        title: "user",
        titleDescription: "choose actionable recommendations",
        descriprion: "Make milestones recommendations to mobilize your community at the various stages of your startup and keep everyone in the loop. With different types of gratitude. ",
    }

]


const Accordion = ({ i, expanded, setExpanded,
    title, titleDescription, descriprion
}: {
    i: number, expanded: any, setExpanded: any,
    title: string, titleDescription: string, descriprion: string
}) => {
    const isOpen = i === expanded;
    return (
        <>
            <motion.header
                initial={false}
                animate={{
                    backgroundColor: isOpen ? "#1985a1" : "darkgray",
                    color: isOpen ? "white" : "black",
                    height: "5em",
                    borderRadius: isOpen ? "1rem" : "0.5rem",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="d-flex justify-content-center align-items-start px-5 flex-column shado w-100"
                onClick={() => setExpanded(isOpen ? false : i)}>
                <p className="fs-3 fw-bold text-center  text-light m-0 mx-3">
                    {isOpen ? "👇" : "👉"}  {"   "}  {title}
                </p>
                <span className=" fs-6 fw-bold text-center  text-light mx-5">
                    {titleDescription}
                </span>

            </motion.header>
            <AnimatePresence initial={false}>
                {isOpen && (

                    <motion.section
                        transition={{ type: "spring", stiffness: 400, damping: 70, }}

                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}>

                        <p style={{ color: "#1985a1" }}
                            className="d-flex justify-content-center align-items-start px-5 flex-column shado w-100">
                            {descriprion}
                        </p>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};

export function LandingAccordion() {
    // This approach is if you only want max one section open at a time. If you want multiple
    // sections to potentially be open simultaneously, they can all be given their own `useState`.
    const [expanded, setExpanded] = useState<false | number>(0);

    return (
        <>
            {accordoindata.map((item: any) => (
                <Accordion i={item.id}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    title={item.title}
                    titleDescription={item.titleDescription}
                    descriprion={item.descriprion}

                />
            ))
            }
        </>

    )
};

const accordionIds = [0, 1, 2, 3];
