

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";


const textStyles: {} = { color: "#1985a1" }

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
    },
    {
        id: 4,
        title: "contributors",
        titleDescription: "how tou can help as a contributor ",
        descriprion: "starting from donating money to time to anything you might have to offer and the debutor willing to accept. no kind of help is a small help  ",
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
                <p className=" text-center  text-muted m-3  mb-0 mx-3">
                    {isOpen ? "👇" : "👉"}  {"  "}
                    <span className="ms-2 " >{title}</span> </p>
                <p className="  text-start text-muted mx-5"> {titleDescription}
                </p>

            </motion.header>
            <AnimatePresence initial={true}>
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
                            },
                            collapsed: { opacity: 0, height: 0, width: "100%", },
                        }}>

                        <p style={textStyles} className="text-start  shadow-sm  m-1 p-3 border border-muted ">
                            {descriprion}
                        </p>
                    </motion.section>
                )}
            </AnimatePresence>
        </>
    );
};

export function LandingAccordion() {

    const [expanded, setExpanded] = useState<false | number>(1);

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

