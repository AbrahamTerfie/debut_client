import React from "react";
import styles from "../styles/App.module.css";

import { Button } from "../components/Button";
import { Note } from "../components/Note";
import { Form } from "../components/Form";
import { NoteProvider } from "../contexts/NoteContext";

export default function HomePage() {
  return (
    <NoteProvider>
      <div className={styles.app}>
        <h1> Notes app</h1>
        <Form>
          <Button />
        </Form>
        <Note />
      </div>
    </NoteProvider>
  );
}
