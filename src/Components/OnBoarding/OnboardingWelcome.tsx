import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import MotionContainer from '../MotionContainer/MotionContainer'
import classNames from 'classnames'
export default function OnboardingWelcome({ onBoardingPersonalform, setOnBoardingPersonalform }: {
    onBoardingPersonalform: any,
    setOnBoardingPersonalform: any
}
) {
    const [fouder, setFounder] = useState(onBoardingPersonalform?.isFounder)


    return (
        <Row>
            <Col onClick={() => { setOnBoardingPersonalform({ ...onBoardingPersonalform, isFounder: true }) }}>
                <MotionContainer>

                    <div
                        className={classNames('text-warning-emphasis bg-primary-subtle rounded-3  px-3 py-2 m-2 text-center', {
                            ' border  border-primary border-3 ': onBoardingPersonalform?.isFounder
                        })
                        }

                    >
                        <span className='text-muted ' > I'm  </span>
                        <p className='m-0 fs-1' > Founder</p>
                        <span className='text-muted' > Busiess owner  </span>
                    </div>
                </MotionContainer></Col>
            <Col onClick={() => { setOnBoardingPersonalform({ ...onBoardingPersonalform, isFounder: false }) }}>
                <MotionContainer>
                    <div
                        className={classNames('text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-3  px-3 py-2 m-2 text-center', {
                            'border  border-primary border-3': !onBoardingPersonalform?.isFounder
                        })
                        }
                    >
                        <span className='text-muted'> I'm  </span>
                        <p className='m-0 fs-1' > supporter</p>
                        <span className='text-muted'> here to help </span>
                    </div>
                </MotionContainer></Col>

        </Row >
    )
}
