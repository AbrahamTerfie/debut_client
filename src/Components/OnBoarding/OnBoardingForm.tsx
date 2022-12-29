import React, { useState } from 'react'
import OnBoardingCompany from './OnBoardingCompany'
import OnboardingPersonal from './OnboardingPersonal'
import {
    Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import { GiDividedSpiral } from 'react-icons/gi';
import MotionContainer from '../MotionContainer/MotionContainer';
// firstName: firstName || '', lastName: lastName || '',
// preferredName: preferredName || '', pronouns: pronouns || '',
// titleAtCompany: titleAtCompany || '', linkedinUrl: linkedinUrl || '',
// twitterUrl: twitterUrl || '', instagramUrl: instagramUrl || '',
// facebookUrl: facebookUrl || '',
// mailingAddress: mailingAddress || '', profileImage: profileImage || '',
// email: email || '', mobilePhone: mobilePhone || '',
// officePhone: officePhone || '', preferedContactMethod: preferedContactMethod || '',
// hasAssistat: hasAssistat || true, assistantName: assistantName || '',
// assistantEmail: assistantEmail || '', assistantPhone: assistantPhone || '',

function Component(Number: string) {
    return (
        <div>
            this is comppinent {Number}
        </div>
    )
}


export default function OnBoardingForm(
    { ...props }: any
) {
    const [userNeeds, setUserNeeds] = useState<{ isNewUser: boolean | null, hasCmpany: boolean | null, }>
        ({ isNewUser: false, hasCmpany: false, })
    const [userData, setUserData] = useState(props)



    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const steps = [
        {
            label: 'Select campaign settings',
            Component: Component('1'),
        },
        {
            label: 'Create an ad group',
            Component: Component('2'),
        },
        {
            label: 'Create an ad',
            Component: Component('3'),
        },
    ];






    return (
        <div>
            <p>let's get you set up </p>

            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            icon={index === activeStep || index <= activeStep ? (<GiDividedSpiral className='text-success' />) : (<GiDividedSpiral className='text-muted' />)}
                        // optional={index === 2 ? (<p className='text-success ' >Last step</p>) : null}
                        >
                            <span className={index === activeStep || index <= activeStep ? 'text-success' : 'text-muted'} >{step.label}</span>
                        </StepLabel>

                        <StepContent>
                            <>{step.Component}</>
                            <Box sx={{ mb: 2 }}>
                                <div className='d-flex justify-content-start '>
                                    <MotionContainer>
                                        <div onClick={index === 0 ? undefined : handleBack}
                                            className={` rounded-3  px-3 py-2 mx-2 ${index === 0 ? 'disabled' : 'text-warning-emphasis bg-warning-subtle border border-warning-subtle'}`}>
                                            back
                                        </div>
                                    </MotionContainer>
                                    <MotionContainer>
                                        <div onClick={
                                            activeStep === steps.length - 1 ? () => null : handleNext

                                        }
                                            className='text-success-emphasis bg-success-subtle border border-success-subtle rounded-3  px-3 py-2 mx-2' >
                                            {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                        </div>
                                    </MotionContainer>



                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
                {/* {activeStep === steps.length && (

            <div>
                 <Typography>All steps completed - you&apos;re finished</Typography>
                 <Button onClick={() => toggle('2')}
                     className='text-success-emphasis bg-success-subtle border border-success-subtle rounded-3  px-3 py-2 mx-2'
                 >
                     set up company
                 </Button>

             </div>
         )} */}

            </Stepper>






















        </div >
    )
}
