import React, { useState, useEffect } from 'react'
import { Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes } from '../../Email/EmailTypes'
import { Row, Input, FormGroup } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'

export default function Emailcanvas() {

    const dispatch = useDispatch()
    const { emailPopup, emailType, emailBody } = useSelector((store: RootState) => store.uiStore)
    const [editorState, setEditorState] = useState({
        emailfrom: 'abrahamTerfe',
        emailto: '',
        emailsubject: '',
        emailbody: emailBody,
        companyName: "company name",
        name: "name name ",
        companyDescripton: "company description",
        itemName: "item name",
        goalName: "goal name",
        emailIntro: '',
        userBiography: 'this is a biography placeholder' + " \n some more data here",
        userContributions: 'this is a contributions placeholder',
    })

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph.configure({ HTMLAttributes: { class: 'paragraph', }, }),
            Text,
            Heading.configure({ levels: [1, 2, 3, 4, 5, 6], }),
        ],
        content: emailBody,
        onUpdate: ({ editor }) => {
            const json = editor.getJSON()
            console.log("json", json.content)
        },
    })

    useEffect(() => {
        editor?.commands.setContent(emailBody)
    }, [emailBody])


    console.log(EmailTypes.peopleIntroduction === emailType)
    console.log(emailType, emailBody)

    return (
        <Offcanvas
            direction="bottom"
            scrollable
            isOpen={emailPopup}
            style={{ height: '80%', width: '50%', left: '50%', }}>
            <OffcanvasHeader toggle={() => dispatch(toggleEmailPopup(EmailTypes.clear))}
                className="bg-success text-success bg-opacity-10 "
                toggleClassName="text-primary">
                Offcanvas || {emailType}
            </OffcanvasHeader>
            <OffcanvasBody className='p-0 border border-dark border-2   justify-content-between d-flex flex-column'>
                <Row>
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
                </Row>
                <Row>

                    <EditorContent
                        style={{ minHeight: '30em', border: "1px solid black", padding: "2em", paddingLeft: "4em" }}
                        editor={editor} />
                </Row>
                <Row>
                    <MotionContainer>
                        <p className='text-center text-primary bg-success bg-opacity-10 p-3 text-success fw-bold m-3'>
                            show preview
                        </p>
                    </MotionContainer>
                </Row>

            </OffcanvasBody>

        </Offcanvas >
    )
}
