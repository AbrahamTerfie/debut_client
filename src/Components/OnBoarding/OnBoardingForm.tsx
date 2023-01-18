import React, { useState, useEffect } from 'react'
import OnBoardingCompany from './OnBoardingCompany'
import OnboardingPersonal from './OnboardingPersonal'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Axios from 'axios';
import { GiDividedSpiral } from 'react-icons/gi';
import MotionContainer from '../MotionContainer/MotionContainer';

import { CREATE_COMPANY, FETCH_COMPANY, FETCH_USER_WITH_ID, UPDATE_DEBUT_USER_WITH_ID } from '../../GraphQl/index';
import { useMutation, useQuery } from '@apollo/client';
import { notifyError, notifySuccess } from '../Notification/Toast';
import { RootState } from '../../Store/RootReducer';
import { useSelector, useDispatch } from 'react-redux';
import { togglehasCompany } from '../../Store/identfiers/identfiers';


// dummy place holder component
function FinalComponent() {
    return (
        <div>
            {/* icon and text showing the they successfully signed up  */}
            {/* <Loader /> */}
            <h2> you're all set!</h2>
        </div>
    )
}


export default function OnBoardingForm() {
    const dispatch = useDispatch()
    const { userID, userEmail } = useSelector((store: RootState) => store.identfiers)

    const [imageSelected, setImageSelected] = useState<any>()

    const [onBoardingPersonalform, setOnBoardingPersonalform] = useState({
        firstName: '',
        lastName: '',
        email: userEmail,
        preferredName: '',
        titleAtCompany: '',
        linkedinUrl: '',
        yourBiography: '',
        howyouContribute: '',
        aeraOfExpertise: [] as string[],
        regions: [] as string[],
    })

    const [onBoardingCompanyform, setOnBoardingCompanyform] = useState({
        companyName: '',
        companyWebsite: '',
        companyHeadquarters: '',
        companyDescription: '',
        // majorAchivements: string[],
        majorAchivements: [] as string[],
        companyServivesGeography: [] as string[],
        aeraOfOperation: [] as string[],
        companyLogo: '',

    })
    const { data,
        //  loading, error 
    } = useQuery(FETCH_USER_WITH_ID, {
        variables: { getDebutUserWithIdId: userID }
    })
    const { data: dataCompany,
        //  loading: loadingCompany, error: errorCompany
    } = useQuery(FETCH_COMPANY, { variables: { userId: userID }, })



    const [updatePersonalInfo] = useMutation(UPDATE_DEBUT_USER_WITH_ID,
        {
            // refetchQueries: [{ query: FETCH_USER_WITH_ID, variables: { getDebutUserWithIdId: userID } }],
            onCompleted: () => {
                // console.log('Personal Information Updated Successfully')
                notifySuccess('Personal Information Updated Successfully')
            },
            onError: (error) => {
                notifyError(error.message.toString())
            }
        })



    const [createMyCompany] = useMutation(CREATE_COMPANY, {
        onCompleted: (data) => {
            dispatch(togglehasCompany(true))
            notifySuccess("Company created successfully")
        },
        onError: (error) => { notifyError(" failed to create" + error.message.toString()) }
    })

    useEffect(() => {
        if (data) {
            const { firstName, lastName, preferredName, titleAtCompany, linkedinUrl, email,
                yourBiography, howyouContribute, aeraOfExpertise, regions } = data.getDebutUserWithId;
            setOnBoardingPersonalform({
                firstName: firstName || '', lastName: lastName || '',
                preferredName: preferredName || '', email: userEmail,
                titleAtCompany: titleAtCompany || '', linkedinUrl: linkedinUrl || '',
                yourBiography: yourBiography || '', howyouContribute: howyouContribute || '',
                aeraOfExpertise: aeraOfExpertise || [], regions: regions || []


            });
        }
        if (dataCompany) {
            const { companyName, companyWebsite, companyHeadquarters, companyDescription,
                majorAchivements, companyServivesGeography, aeraOfOperation, companyLogo } = dataCompany.getCompanyWithUserId
            setOnBoardingCompanyform({
                companyName: companyName || '', companyWebsite: companyWebsite || '',
                companyHeadquarters: companyHeadquarters || '', companyDescription: companyDescription || '',
                majorAchivements: majorAchivements || [], companyServivesGeography: companyServivesGeography || [],
                aeraOfOperation: aeraOfOperation || [], companyLogo: companyLogo || ''
            })
        }

    }, [data, dataCompany]);

    const handleProfileUpdate = () => {
        updatePersonalInfo({
            variables: {
                userInput: {
                    ...onBoardingPersonalform,
                }, updateDebutUserId: userID
            }
        })
    }

    const handleCompanySubimt = () => {

        const formData = new FormData();
        formData.append('file', imageSelected)
        // file is the file object
        formData.append('upload_preset', 'debutCompanyProfilePicture')
        imageSelected && Axios.post('https://api.cloudinary.com/v1_1/djpiwnxwl/image/upload', formData)
            .then((response) => {
                createMyCompany({
                    variables: {
                        companyInput: {
                            ...onBoardingCompanyform,
                            companyLogo: response.data.secure_url,
                            companyOwner: userID,
                        }
                    }
                })
            })
            .catch((error) => { notifyError("Error uploading image" + error.message.toString()) })

    }

    // stepper controller
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 0) { return (handleProfileUpdate()) }
        if (activeStep === 1) { return (handleCompanySubimt()) }

    };
    const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1); };

    const steps = [
        {
            label: 'Personal Information',
            Component: <OnboardingPersonal onBoardingPersonalform={onBoardingPersonalform}
                setOnBoardingPersonalform={setOnBoardingPersonalform} />,
        },
        {
            label: 'Your Business',
            Component: <OnBoardingCompany
                onBoardingCompanyform={onBoardingCompanyform}
                setOnBoardingCompanyform={setOnBoardingCompanyform}
                imageSelected={imageSelected}
                setImageSelected={setImageSelected}
            />,
        },
        {
            label: 'All done !',
            Component: FinalComponent(),
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
                        >
                            <span className={index === activeStep || index <= activeStep ? 'text-success' : 'text-muted'} >{step.label}</span>
                        </StepLabel>

                        <StepContent>
                            {step.Component}

                            <Box sx={{ mb: 2 }}>
                                <div className='d-flex justify-content-start '>
                                    <MotionContainer>
                                        <div onClick={index === 0 ? undefined : handleBack}
                                            className={` rounded-3  px-3 py-2 m-2 ${index === 0 ? 'disabled' : 'text-warning-emphasis bg-warning-subtle border border-warning-subtle'}`}>
                                            back
                                        </div>
                                    </MotionContainer>
                                    <MotionContainer>
                                        <div
                                            className='text-success-emphasis bg-success-subtle border border-success-subtle rounded-3  px-3 py-2 m-2'
                                            onClick={
                                                index === steps.length - 1 ? undefined : handleNext
                                            }
                                        >
                                            {index === steps.length - 1 ? 'Finish' : 'save & Continue'}
                                        </div>
                                    </MotionContainer>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}

            </Stepper>
        </div >
    )
}
