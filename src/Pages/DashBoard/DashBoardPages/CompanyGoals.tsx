import React, { useState } from 'react';
import GoalsAccordion from '../../../Components/DashBoard/GoalsAccordion';

function AccordionBody() {
  return (
    <div>
      this is some accordion body
    </div>
  )
}

export const accordionData = [
  {
    id: 1,
    accordionTitle: "Accordion Item 1",
    accordionBody: <AccordionBody />
  },
  {
    id: 2,
    accordionTitle: "Accordion Item 2",
    accordionBody: <AccordionBody />
  },
  {
    id: 3,
    accordionTitle: "Accordion Item 3",
    accordionBody: <AccordionBody />
  },
  {
    id: 4,
    accordionTitle: "Accordion Item 4",
    accordionBody: <AccordionBody />
  },
]


export default function CompanyGolas(props: any) {
  const [open, setOpen] = useState('1');


  return (
    <div>
      <div className='mx-5'>
        <p className=' fs-1 fw-light mt-4 mb-1 mx-3' > company goals </p>
        <p className='text-muted fs-6 mt-0 mb-2 mx-3'>  once  your complete  it will be marked as achivement </p>
      </div>

      <div className='mx-3 p-3' >
        <GoalsAccordion accordionData={accordionData}
        />
      </div>
    </div>
  );
}

