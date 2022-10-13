import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    UncontrolledAccordion,
} from 'reactstrap';


interface AccordionData {
    id: number;
    accordionTitle: string;
    accordionBody: JSX.Element;
}
export default function GoalsAccordion(
    props: { accordionData: AccordionData[] }
) {
    const [open, setOpen] = useState('');

    return (
        <div>
            <UncontrolledAccordion
                open={open}
                defaultOpen={['1', '2']}
                stayOpen>
                {props.accordionData.map((item) => {
                    return (
                        <AccordionItem  >
                            <AccordionHeader
                                targetId={item.id.toString()} >
                                {item.accordionTitle}
                            </AccordionHeader>
                            <AccordionBody accordionId={item.id.toString()}>
                                {item.accordionBody}
                            </AccordionBody>
                        </AccordionItem>
                    )
                })}
            </UncontrolledAccordion>
        </div>
    )
}
