import React, { useState, useRef } from 'react'
import { Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes } from '../../Email/EmailTypes'
import { Row, Col, Input, FormGroup } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'






export default function Emailcanvas() {


    const [editorState, setEditorState] = useState({
        emailfrom: '',
        emailto: '',
        emailsubject: '',
        emailbody: '',
        emaildefatultPlaceholder: 'this is an email placeholder'
    })


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
            <OffcanvasBody className='p-0 border border-dark border-2  
            justify-content-between d-flex flex-column'>

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
                    <FormGroup>
                        <Input type="textarea" name="emailTo" id="emailTo" placeholder={` email body ${emailType} `}
                            rows={18}
                            value={

                                editorState.emaildefatultPlaceholder.concat(
                                    editorState.emailbody.includes(editorState.emaildefatultPlaceholder) ?
                                        editorState.emailbody.replace(editorState.emaildefatultPlaceholder, '') :
                                        editorState.emailbody
                                )
                            }
                            onChange={(e) => setEditorState({ ...editorState, emailbody: e.target.value })}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <MotionContainer>
                        <p className='text-center text-primary bg-success bg-opacity-10 p-3 text-success fw-bold m-3'>
                            send email
                        </p>
                    </MotionContainer>
                </Row>

            </OffcanvasBody>

        </Offcanvas>
    )
}
