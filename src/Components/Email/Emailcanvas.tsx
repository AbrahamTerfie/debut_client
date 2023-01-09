import React, { useState, useEffect } from 'react'
import { Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes, EmailStatticValues } from '../../Email/EmailTypes'
import { Row, Input, FormGroup } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Heading from '@tiptap/extension-heading'
import emailjs from '@emailjs/browser';
import { notifySuccess, notifyError } from '../Notification/Toast'


export default function Emailcanvas() {

    const dispatch = useDispatch()
    const { emailPopup, emailType, emailBody, emailTo } = useSelector((store: RootState) => store.uiStore)
    const { userEmail } = useSelector((store: RootState) => store.identfiers)
    const [headers, setHeaders] = useState(EmailStatticValues.empty)

    // console.log("my email", userEmail)

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph.configure({ HTMLAttributes: { class: 'paragraph', }, }),
            Text,
            Heading.configure({ levels: [1, 2, 3, 4, 5, 6], }),
        ],
        content: emailBody,
        // onUpdate: ({ editor }) => {
        //     const dataToSend = editor.getText()
        //     console.log(dataToSend)
        // },
    })

    useEffect(() => {
        editor?.commands.setContent(emailBody)
    }, [emailBody, editor])



    const closeCanvasHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(toggleEmailPopup({
            emailData: {
                emailType: EmailTypes.clear,
                name: "", userEmail: "",
                userBioGraphy: "", emailTo: "",
                emailSubject: "", emailBody: "",
                companyName: "", companyDescription: "",
                itemName: "", goalName: ""
            }
        }))
    }


    useEffect(() => {
        switch (emailType) {
            case EmailTypes.peopleIntroduction:
                setHeaders(EmailStatticValues.peopleIntroduction)
                break;
            case EmailTypes.companyIntroduction:
                setHeaders(EmailStatticValues.companyIntroduction)
                break;
            case EmailTypes.helpWithGoal:
                setHeaders(EmailStatticValues.HelpWithGoal)
                break;
            case EmailTypes.helpWiithItem:
                setHeaders(EmailStatticValues.HelpWithItem)
                break;
            default:
                break;
        }
    }, [emailType])

    const emailJsInfo = {
        service_id: "service_st0qe55",
        template_id: "template_c1f7n49",
        public_key: "rO7tJ3s1smQ3YT5Vb"
    }


    const sendEmail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        emailjs.send(
            emailJsInfo.service_id,
            emailJsInfo.template_id,
            {
                from_name: userEmail,
                email_subject: headers.subject,
                message: editor?.getText(),
                reply_to: emailTo,
            },
            emailJsInfo.public_key
        ).then((result) => { notifySuccess(result.text.toString() + "email sent") })
            .catch((error) => { notifyError(error.text.toString() + "email not sent") })

    }



    return (
        <Offcanvas
            direction="end"
            scrollable
            isOpen={emailPopup}
            className=" text-success  "
            style={{
                width: window.innerWidth < 576 ? "100%" : window.innerWidth < 768 ? "70%" :
                    window.innerWidth < 992 ? "60%" : window.innerWidth < 1200 ? "50%" : "50%",
            }}
        >
            <OffcanvasHeader toggle={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => closeCanvasHandler(e)}
                className="bg-secondary bg-gradient"
                toggleClassName="text-primary">
                {headers.title}
            </OffcanvasHeader>
            <OffcanvasBody className='p-0 border border-dark border-2   justify-content-between d-flex flex-column'>
                <Row>
                    <Row className=' d-flex justify-content-center align-items-center py-1 bg-secondary'>

                        <FormGroup className='  d-flex '>
                            <Label for="emailfrom" className='text-center text-dark d-flex justify-content-center align-items-center  mx-4' > FROM</Label>
                            <Input disabled type="text" name="emailfrom" id="emailfrom" placeholder=" your email  " value={userEmail} />
                        </FormGroup>
                    </Row>
                    <Row className='  p-0 border-2 py-1  bg-secondary' >
                        <FormGroup className='   d-flex '>
                            <Label for="emailTo" className='text-center text-dark d-flex justify-content-center align-items-center  mx-4' > TO</Label>
                            <Input type="text" name="emailTo" id="emailTo" placeholder=" email to " value={emailTo} disabled />
                        </FormGroup>
                    </Row>
                    <Row className='  p-0  py-1  bg-secondary' >
                        <FormGroup className='   d-flex '>
                            <Label for="emailTo" className='text-center text-dark d-flex justify-content-center align-items-center  mx-4' > SUBJECT</Label>
                            <Input type="text" name="emailTo" id="emailTo" placeholder={headers.subject} disabled />
                        </FormGroup>
                    </Row>
                </Row>
                <Row>

                    <EditorContent
                        style={{ minHeight: '70vh', border: "1px solid black", padding: "2em", paddingLeft: "4em" }}
                        editor={editor} />
                </Row>
                <Row onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => sendEmail(e)}>
                    <MotionContainer>
                        <p className='text-center text-primary bg-success bg-opacity-10 p-3 text-success fw-bold m-3'>
                            send
                        </p>
                    </MotionContainer>
                </Row>
            </OffcanvasBody>
        </Offcanvas >
    )
}
