import React, { useState, useRef } from 'react'
import { Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes } from '../../Email/EmailTypes'
import { Row, Col, Input, FormGroup } from 'reactstrap'
import { Editor, EditorState } from "draft-js";
export default function Emailcanvas() {
    const [editorState, setEditorState] = React.useState(() =>
        EditorState.createEmpty()
    );

    const editor = useRef(null as any);
    function focusEditor() {
        editor.current.focus();
    }
    const dispatch = useDispatch()
    const { emailPopup, emailType } = useSelector((store: RootState) => store.uiStore)
    return (
        <Offcanvas
            direction="bottom"
            scrollable
            isOpen={emailPopup}
            style={{ height: '80%', width: '50%', left: '50%', }}>
            <OffcanvasHeader toggle={() => dispatch(toggleEmailPopup(EmailTypes.clear))}
                className="bg-success text-success bg-opacity-10 "
                toggleClassName="text-primary"
            >

                Offcanvas || {emailType}
            </OffcanvasHeader>
            <OffcanvasBody className='p-0 border border-dark border-2  '>
                <Row className='border border-light border-2 d-flex justify-content-center align-items-center py-1  bg-dark bg-opacity-25'>

                    <FormGroup className='  d-flex '>
                        <Label for="emailfrom" className='text-center d-flex justify-content-center align-items-center  mx-4' > FROM</Label>
                        <Input type="text" name="emailfrom" id="emailfrom" placeholder=" username (useremail) " />
                    </FormGroup>
                </Row>
                <Row className='border border-light border-2 p-0 border-2 py-1  bg-dark bg-opacity-25' >
                    <FormGroup className='   d-flex '>
                        <Label for="emailTo" className='text-center d-flex justify-content-center align-items-center  mx-4' > TO</Label>
                        <Input type="text" name="emailTo" id="emailTo" placeholder=" recepient name (email) " />
                    </FormGroup>
                </Row>
                <Row className='border border-light border-2 p-0  py-1  bg-dark bg-opacity-10' >
                    <FormGroup className='   d-flex '>
                        <Label for="emailTo" className='text-center d-flex justify-content-center align-items-center  mx-4' > SUBJECT</Label>
                        <Input type="text" name="emailTo" id="emailTo" placeholder={` email subject ${emailType} `} />
                    </FormGroup>
                </Row>


                <Row>
                    <div
                        style={{ border: "1px solid black", minHeight: "6em", cursor: "text" }}
                        onClick={focusEditor}
                    >
                        <Editor
                            ref={editor}
                            editorState={editorState}
                            onChange={setEditorState}
                            placeholder="Write something!"
                        />
                    </div>
                </Row>
            </OffcanvasBody>

        </Offcanvas>
    )
}
