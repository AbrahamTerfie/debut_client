import React, { useState, useEffect } from 'react'
import { Label, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes, EmailHeaders } from '../../Email/EmailTypes'
import { Row, Col, Input, FormGroup } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'






export default function Emailcanvas() {


    const [editorState, setEditorState] = useState({
        emailfrom: 'abrahamTerfe',
        emailto: '',
        emailsubject: '',
        emailbody: '\n email body goes here \n',
        companyName: "company name",
        name: "name name ",
        companyDescripton: "company description",
        itemName: "item name",
        goalName: "goal name",
        emailIntro: 'introo intorro introo introooo \n',
        userBiography: 'this is a biography placeholder' + " \n some more data here",
        userContributions: 'this is a contributions placeholder',
    })


    const dispatch = useDispatch()
    const { emailPopup, emailType } = useSelector((store: RootState) => store.uiStore)

    useEffect(() => {

        setEditorState({
            ...editorState,
            emailIntro: EmailHeaders(editorState.emailfrom, emailType, editorState.userBiography, editorState.companyName, editorState.name, editorState.companyDescripton, editorState.itemName, editorState.goalName)
        })
    }, [EmailTypes])




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
                            className="fw-bolder"
                            rows={18}

                        onChange={(e) =>
                            setEditorState({
                                ...editorState,
                                emailbody: e.target.value

                            })

                        }
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
