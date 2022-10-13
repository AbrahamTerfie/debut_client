import React, { useState } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import GoalsAccordion from '../../../Components/DashBoard/GoalsAccordion/GoalsAccordion';
import NewGoalForm from '../../../Components/DashBoard/NewGoalForm/NewGoalForm';



export const accordionData = [
  {
    id: 1,
    accordionTitle: "Accordion Item 1",
    goalDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nunc sit amet nisl. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nunc sit amet nisl.",
    accordionBody: [
      <AccordionBody />,
      <AccordionBody />,
      <AccordionBody />,

    ],
  },
  {
    id: 2,
    accordionTitle: "Accordion Item 2",
    goalDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nunc sit amet nisl. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nunc sit amet nisl.",

    accordionBody: [
      <AccordionBody />,
      <AccordionBody />,
      <AccordionBody />,
      <AccordionBody />,
      <AccordionBody />,
    ],
  },
  {
    id: 3,
    accordionTitle: "Accordion Item 3",
    goalDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nunc sit amet nisl. Sed euismod, nisl nec aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nunc sit amet nisl.",

    accordionBody: [
      <AccordionBody />,
      <AccordionBody />,

    ],
  },

]


function AccordionBody() {
  return (
    <Col md={5} className=" shadow-sm p-4 m-3  MyeventCard">
      <p className='fw-bolder' >  this is a milestone tilte </p>
      <p className='text-muted fw-light' > this is a milestone description Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis obcaecati debitis necessitatibus ratione reprehenderit assumenda quo ipsa dolor, blanditiis repellat perspiciatis impedit? Suscipit porro ut, explicabo dolorum cum adipisci qui.</p>
      {/* pills  */}
      <p className='m-2'> need help with </p>
      <div className="d-flex justify-content-start flex-wrap ">

        <p className="text-muted mx-2"> some text </p>
        <p className="text-muted mx-2"> some text </p>
        <p className="text-muted mx-2"> some text </p>
        <p className="text-muted mx-2"> some text </p>
        <p className="text-muted mx-2"> some text </p>
        <p className="text-muted mx-2"> some text </p>
        <p className="text-muted mx-2"> some text </p>
        <p className="text-muted mx-2"> some text </p>
        <p className="text-muted mx-2"> some text </p>

      </div>

      {/* checkbox and a button to mark item completed  */}
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            mark as achived
          </label>
        </div>
        <Button color="success" size="sm" outline className='px-4' > save </Button>
      </div>


    </Col>
  )
}


export default function CompanyGolas(props: any) {


  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='mx-5'>
          <p className=' fs-1 fw-light mt-4 mb-1 mx-3' > company goals </p>
          <p className='text-muted fs-6 mt-0 mb-2 mx-3'>  once  your complete  it will be marked as achivement </p>
        </div>
        <Button className=' mx-5' outline color='success' onClick={toggle}>
          add new goal
        </Button>
        <Modal isOpen={modal} toggle={toggle} size="lg"  >
          <ModalHeader toggle={toggle}>
            <p className="fw-light m-0 fs-3">
              create new goal for your company
            </p>
          </ModalHeader>
          <ModalBody>
            <NewGoalForm />
          </ModalBody>
          <ModalFooter>
            <Button size="sm" color="secondary" outline className='px-4' onClick={toggle}>
              Cancel
            </Button>
            <Button size="sm" color="success" outline className='px-4' onClick={toggle}>
              create
            </Button>{' '}

          </ModalFooter>
        </Modal>
      </div>

      <div className='mx-3 p-3' >
        <GoalsAccordion accordionData={accordionData}
        />
      </div>
    </div>
  );
}

