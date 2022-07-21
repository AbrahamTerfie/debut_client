import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Store/RootReducer';
import { setMyDebutTab } from '../../Store/UI/sidebarController';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
export default function MyEvents() {
  const { userID } = useSelector((store: RootState) => store.identfiers)
  const dispatch = useDispatch();
  const { myDebutTab } = useSelector((store: RootState) => store.uiStore)

  return (
    <div>
      <Row>
        <Button className='my-4 py-2 w-100' outline color="success"
          onClick={() => console.log("savedd")} >
          Save 
        </Button>

      </Row>
    </div>
  )
}
