// import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { EmailTypes } from '../../Email/EmailTypes';



interface EmailBodyInterface {
    userEmail: string,
    emailTo: string,
    emailSubject: string,
    emailBody: string,
    userBiography: string,
    name?: string,
    companyName?: string,
    companyDescription?: string,
    itemName?: string,
    goalName?: string

}

const initalState = {

    activePersonId: '',
    peopleExpertiseFilter: [] as any,
    peopleRegionFilter: [] as any,
    emailPopup: false,
    emailType: "",
    emailBody: "",
    emailTo: '',

}


const uiStore = createSlice({
    name: 'sidebar',
    initialState: initalState,
    reducers: {
        toggleEmailPopup(state: any, action?: EmailBodyInterface | any) {
            const { emailData } = action?.payload
            state.emailPopup = !state.emailPopup
            // chanhe email type 
            action ? (state.emailType = emailData.emailType) : (emailData.emailType === EmailTypes.clear && (state.emailType = EmailTypes.clear && state.emailPopup === false))
            if (state.emailType === EmailTypes.peopleIntroduction) {
                state.emailTo = emailData.emailTo
                state.emailBody = ` <h5> Hi ${emailData.name},</h5></br> <p>  I would like to introduce my self ... a bit of information about  my self <h6>  ${emailData.userBiography}</h6> </p> </br><P>  a bit more about my compnay ... ${emailData.companyDescription} </br> </p><p> ${emailData.emailBody ? emailData.emailBody : ' '}</br> </p>I hope we can connect and work together and make sure to reply to me with this email adress  \n <h6> ${emailData.userEmail} </h6>    `
            }
            else if (state.emailType === EmailTypes.companyIntroduction) {
                state.emailTo = emailData.emailTo
                state.emailBody = `<h5> Hi ${emailData.name},</h5></br><p>  I would like to introduce my self and my company  ... a bit of information abpit my self <h6> ${emailData.userBiography}  </h6>  </br> </p></br><p>  a bit more about my compnay ...<h6> ${emailData.companyDescription}</h6> </br> </p><p>${state.emailBody ? emailData.emailBody : ' '} </br> I hope we can connect and work together and make sure to reply to me with this email adress   </p></br><h6>   ${emailData.userEmail} . </h6>  `
            }
            else if (state.emailType === EmailTypes.helpWithGoal) {
                state.emailTo = emailData.emailTo
                state.emailBody = `<h5> Hi there,</h5></br><p>  I would like to help you with your goal <h6>  ${emailData.goalName} </h6> </br> I have a lot of experience in this field and hope to work with you on it  </br>a bit more about my self ... <h6> ${emailData.userBiography}  </h6> </br> ${emailData.emailBody ? emailData.emailBody : ''} </br> </p><p> I hope we can connect and work together and make sure to reply to me with this email adress <h6> ${emailData.userEmail} </h6>  </p></br>`
            }
            else if (state.emailType === EmailTypes.helpWiithItem) {
                state.emailTo = emailData.emailTo
                state.emailBody = `<h5> Hi there,</h5></br><p>  I would like to help you with your item posted on Debut -  <h6> ${emailData.itemName}</h6> </br>I have a lot of experience in this field and hope to work with you on it and help you with it  </br>a bit more about my self ... <h6> ${emailData.userBiography}  </h6> </br>  ${emailData.emailBody ? emailData.emailBody : ''} </br></p><p> I hope we can connect and work together and make sure to reply to me with this email adress <h6> ${emailData.userEmail} </h6>  </br> </p>`
            }


        },



        setActivePersonId: (state, action) => {
            state.activePersonId = action.payload;
        },
        peopleExpertiseFilterHandler: (state, action) => {
            if (state.peopleExpertiseFilter.includes(action.payload)) {
                state.peopleExpertiseFilter = state.peopleExpertiseFilter.filter((item: any) => item !== action.payload)
            } else {
                state.peopleExpertiseFilter = [...state.peopleExpertiseFilter, action.payload]
            }
        },
        peopleRegionFilterHandler: (state, action) => {
            if (state.peopleRegionFilter.includes(action.payload)) {
                state.peopleRegionFilter = state.peopleRegionFilter.filter((item: any) => item !== action.payload)
            } else {
                state.peopleRegionFilter = [...state.peopleRegionFilter, action.payload]
            }
        },
        clearPeopleFilter: (state) => {
            state.peopleExpertiseFilter = [] as any
            state.peopleRegionFilter = [] as any
        }
    }
})



export const { toggleEmailPopup, setActivePersonId,
    peopleExpertiseFilterHandler, peopleRegionFilterHandler, clearPeopleFilter } = uiStore.actions;

export default uiStore.reducer;