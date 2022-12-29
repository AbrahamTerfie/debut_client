import React, { useState } from 'react'
import OnBoardingCompany from './OnBoardingCompany'
import OnboardingPersonal from './OnboardingPersonal'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
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


    const [open, setOpen] = useState('1');
    const toggle = (id: string) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };


    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    console.log(open)
    const steps = [
        {
            label: 'Select campaign settings',
            description: `For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.`,
            Component: Component('1'),
        },
        {
            label: 'Create an ad group',
            description:
                'An ad group contains one or more ads which target a shared set of keywords.',
            Component: Component('2'),
        },
        {
            label: 'Create an ad',
            description: `Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.`,
            Component: Component('3'),
        },
    ];
    return (
        <div>
            <p>let's get you set up </p>


            <Accordion flush open={open}

            >

                <AccordionItem>
                    <AccordionHeader
                        onClick={() => toggle('1')}
                        targetId="1">Accordion Item 1</AccordionHeader>
                    <AccordionBody accordionId="1">
                        <Box sx={{ maxWidth: '100%' }}>
                            <Stepper activeStep={activeStep} orientation="vertical">
                                {steps.map((step, index) => (
                                    <Step key={step.label}>
                                        <StepLabel
                                            optional={index === 2 ? (<Typography variant="caption">Last step</Typography>) : null}
                                        >
                                            {step.label}
                                        </StepLabel>
                                        <StepContent>
                                            <>{step.Component}</>
                                            <Box sx={{ mb: 2 }}>
                                                <div>
                                                    <Button
                                                        variant="contained"
                                                        onClick={handleNext}
                                                        sx={{ mt: 1, mr: 1 }}
                                                    >
                                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                    </Button>
                                                    <Button
                                                        disabled={index === 0}
                                                        onClick={handleBack}
                                                        sx={{ mt: 1, mr: 1 }}
                                                    >
                                                        Back
                                                    </Button>
                                                </div>
                                            </Box>
                                        </StepContent>
                                    </Step>
                                ))}
                            </Stepper>
                            {activeStep === steps.length && (
                                <Paper square elevation={0} sx={{ p: 3 }}>
                                    <Typography>All steps completed - you&apos;re finished</Typography>
                                    <Button onClick={() => toggle('2')}
                                        sx={{ mt: 1, mr: 1 }}>
                                        set up company
                                    </Button>
                                </Paper>
                            )}
                        </Box>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader
                        onClick={() => toggle('2')}
                        targetId="2">Accordion Item 2</AccordionHeader>
                    <AccordionBody accordionId="2">
                        <strong>This is the second item&#39;s accordion body.</strong>
                        You can modify any of this with custom CSS or overriding our default
                        variables. It&#39;s also worth noting that just about any HTML can
                        go within the <code>.accordion-body</code>, though the transition
                        does limit overflow.
                    </AccordionBody>
                </AccordionItem>

            </Accordion>




























        </div>
    )
}
