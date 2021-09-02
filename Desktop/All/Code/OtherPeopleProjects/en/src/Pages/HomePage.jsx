import React, { useState } from "react";
import styles from "../styles/App.module.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import { Button } from "../components/Button";
import { Note } from "../components/Note";
import { Form } from "../components/Form";
import { NoteProvider } from "../contexts/NoteContext";
import AuthTabs from "../components/AuthTabs";

export default function HomePage() {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);
  return (
    <NoteProvider>
      <div className={styles.app}>

        <h1> Notes app</h1>
        <Form>
          <Button style={{
            width: "100%",
          }}
            outline
            color="success" >  new note </Button>
        </Form>
        <Note />

        <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>authentication</ModalHeader>
          <ModalBody>
            <AuthTabs />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>Cancel</Button>
            <Button color="success" onClick={toggle}>login</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </NoteProvider>
  );
}
