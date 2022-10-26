import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap'


interface debutRegistryInterface {
    _id: string
    debutRegistryName: String
    debutRegistryStatus: Boolean
    debutRegistryItems: any[]


}

export default function RegistryAccordion(
    {
        _id, debutRegistryName, debutRegistryStatus, debutRegistryItems
    }: debutRegistryInterface) {

    const [open, setOpen] = useState('');


    return (
        <div>
            <UncontrolledAccordion
                open={open}
                flush
                defaultOpen={[
                    '1',
                    '2'
                ]}
                stayOpen
            >
                <AccordionItem>
                    <motion.div
                        whileHover={{ scale: 1.008 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <AccordionHeader
                            className=' accordionHeader fw-light shadow-sm my-2  '
                            targetId={_id.toString()} >
                            {debutRegistryName}

                        </AccordionHeader>
                    </motion.div>

                    <AccordionBody accordionId={_id.toString()}>
                        <strong>
                            This is the first item's accordion body.
                        </strong>
                        You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                        <code>
                            .accordion-body
                        </code>
                        , though the transition does limit overflow.
                    </AccordionBody>
                </AccordionItem>


            </UncontrolledAccordion>
        </div>
    )
}
