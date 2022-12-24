

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";


const textStyles: {} = {
    color: "#1985a1",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textAlign: "center",
    padding: "1rem 0",
    maxWidth: "100%",
    minWidth: "100%",
    margin: "0",
    lineHeight: "1.5",
    // textTransform: "uppercase",
    letterSpacing: "0.2rem",


}

const accordoindata = [
    {
        id: 1,
        title: "your startup",
        titleDescription: "Set Startup/Project Stage and Needs",
        descriprion: "Set the stage of your startup and the needs you have at that stage. Debut will make recommendations on how to get the most out of your community. ",
    },
    {
        id: 2,
        title: "debut",
        titleDescription: "get your name out there, .  ",
        descriprion: " Debut will make recommendations on how to get the most out of your community.  ",

    },
    {
        id: 3,
        title: "community",
        titleDescription: "You are your community ",
        descriprion: "Make milestones recommendations to mobilize your community at the various stages of your startup and keep everyone in the loop. With different types of gratitude.",
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
                    height: "max-content",
                    borderRadius: isOpen ? "1.5rem" : "0.5rem",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={textStyles}
                className="d-flex justify-content-start align-items-start px-5 my-3 flex-column shadow  "
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
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: {
                                opacity: 1, height: "min-content",
                                animation: "fadeIn 1s ease-in-out",
                                width: "50vh", margin: "0", padding: "0", borderRadius: "1.5rem"
                            },
                            collapsed: {
                                opacity: 0, height: 0, width: "50vh",
                                margin: "0", padding: "0", borderRadius: "1.5rem"
                            },
                        }}>

                        <p style={textStyles} className="text-start text-dark p-5">
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
        <div

        >
            {accordoindata.map((item: any) => (
                <Accordion
                    key={item.id}
                    i={item.id}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    title={item.title}
                    titleDescription={item.titleDescription}
                    descriprion={item.descriprion}

                />
            ))
            }
        </div>

    )
};

