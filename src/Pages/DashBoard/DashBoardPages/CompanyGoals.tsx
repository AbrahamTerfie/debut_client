import React, { useState } from 'react';
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, FormGroup, Input, Label, } from 'reactstrap';
import GoalsAccordion from '../../../Components/DashBoard/GoalsAccordion/GoalsAccordion';
// import NewGoalForm from '../../../Components/DashBoard/NewGoalForm/NewGoalForm';

import { useMutation, useQuery } from '@apollo/client';
import { FETCH_COMPANY_GOALS_WITH_COMPANY_ID, CREATE_COMPANY_GOAL } from '../../../GraphQl/Goals/goals';
import { useSelector } from 'react-redux'
import { RootState } from '../../../Store/RootReducer'
import Loader from '../../../Components/Loader/Loader';

import { notifySuccess, notifyError } from '../../../Components/Notification/Toast'
import { motion } from 'framer-motion';



export default function CompanyGolas(props: any) {

  const { userID, companyID } = useSelector((store: RootState) => store.identfiers)
  const { data, loading } = useQuery(FETCH_COMPANY_GOALS_WITH_COMPANY_ID, {
    variables: { companyId: companyID }
  })

  const [createCompanyGoal, { loading: createCompanyGoalLoading }] = useMutation(CREATE_COMPANY_GOAL, {
    refetchQueries: [{ query: FETCH_COMPANY_GOALS_WITH_COMPANY_ID, variables: { companyId: companyID } }],
    onCompleted: () => {
      toggle()
      setNewGoal(initState)
      notifySuccess('Goal created successfully')
    },
    onError: (err) => {
      notifyError("something went wrong" + err.toString())
    },
  })
  const initState = {
    createdBy: userID,
    belongsTo: companyID,
    goalTitle: "",
    goalDescription: "",

  }
  const [newGoal, setNewGoal] = useState(initState)
  const inputHndler = (e: any) => {
    const { name, value }: { name: string, value: string } = e.target;
    setNewGoal({ ...newGoal, [name]: value })
  }
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);


  function checkInput() {
    if (newGoal.goalTitle === "" || newGoal.goalDescription === "") {
      notifyError("Please fill all the fields")
      return false
    }
    return true
  }


  const submitHandler = (e: any) => {
    e.preventDefault();
    checkInput() && createCompanyGoal({ variables: { companyGoalInput: newGoal } })
    if (loading || createCompanyGoalLoading) { return <Loader /> }
  }


  // console.log("error", error)

  return (
    <Row className="page">

      <div className='d-flex justify-content-between align-items-center page'>
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

            <Row className='App' >
              <Col md={12} >
                <FormGroup>
                  <Label for="goalTitle">  title </Label>
                  <Input
                    required
                    value={newGoal.goalTitle}
                    onChange={inputHndler}
                    type="text"
                    name="goalTitle"
                    id="goalTitle"
                    placeholder=" name your goal" />
                </FormGroup>
              </Col>
              <Col md={12} >
                <FormGroup>
                  <Label for="goalDescription">  description </Label>
                  <Input
                    required
                    type="textarea"
                    rows={10}
                    value={newGoal.goalDescription}
                    onChange={inputHndler}
                    name="goalDescription"
                    id="goalDescription"
                    placeholder=" describe your goal in deatil" />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button size="sm" color="secondary" outline className='px-4' onClick={() => { toggle() }}>
              Cancel
            </Button>
            <Button size="sm" color="success" outline className='px-4'

              onClick={submitHandler}>
              create
            </Button>{' '}
          </ModalFooter>
        </Modal>
    </div>

      <div className='mx-3 p-3' >

        {data?.getCompanyGoalWithCompanyId?.length === 0 ?
          <motion.div className='m-5'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.009 }}
            whileTap={{ scale: 0.9 }}
          >
            <p className='text-muted text-center fs-4 '>  you have no goals yet </p>
            <p className=' text-center fs-6 '>  click on the button above to create one </p>
          </motion.div > :

          data?.getCompanyGoalWithCompanyId?.map((goal: any) => {
            return <GoalsAccordion
              key={goal.id}
              _id={goal._id}
              goalTitle={goal.goalTitle}
              goalDescription={goal.goalDescription}
              mileStones={goal.mileStones}
              goalStatus={goal.goalStatus}
            />
          })
        }
      </div>
      {/* <Toaster /> */}
    </Row >
  )
}