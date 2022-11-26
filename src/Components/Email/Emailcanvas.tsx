import React from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../Store/RootReducer'
import { toggleEmailPopup } from '../../Store/UI/sidebarController'
import { EmailTypes } from '../../Email/EmailTypes'
export default function Emailcanvas() {
    const dispatch = useDispatch()
    const { emailPopup, emailType } = useSelector((store: RootState) => store.uiStore)
    return (
        <Offcanvas
            direction="bottom"
            scrollable
            isOpen={emailPopup}
            style={{
                height: '80%',
                width: '50%',
                // center it on the screen
                // position: 'absolute',
                top: '60%',
                left: '50%',
                bottom: "0%",
                transform: 'translate(-50%, -50%)',

            }}

        >
            <OffcanvasHeader toggle={() => dispatch(toggleEmailPopup(EmailTypes.clear))}
                className="bg-primary text-primary bg-opacity-10"
                toggleClassName="text-primary"
            // canvas close button 

            >

                Offcanvas || {emailType}
            </OffcanvasHeader>
            <OffcanvasBody>
                <strong>
                    This is the Offcanvas body.
                </strong>
            </OffcanvasBody>

        </Offcanvas>
    )
}
