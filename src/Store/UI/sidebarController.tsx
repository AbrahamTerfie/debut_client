import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { EmailTypes } from '../../Email/EmailTypes';


// emial body types 
// userEmail: String, emailType: String, emailBody: String,
//     userBioGraphy?: String, companyName?: String, name?: string,
//     companyDescription?: String, itemName?: String, goalName?: String

interface EmailBodyInterface {
    userEmail: string,

    name?: string,
    emailBody: string,
    userBioGraphy: string,
    companyName?: string,
    companyDescription?: string,
    itemName?: string,
    goalName?: string

}

const initalState = {
    isSidebarOpen: true,
    myDebutTab: '1',
    activePersonId: '',
    peopleExpertiseFilter: [] as any,
    peopleRegionFilter: [] as any,
    emailPopup: false,
    emailType: "",
    emailBody: "",

}


const uiStore = createSlice({
    name: 'sidebar',
    initialState: initalState,
    reducers: {
        toggleEmailPopup(state: any, action?: any) {
            state.emailPopup = !state.emailPopup
            // chanhe email type 
            action ? (state.emailType = action?.payload) : (state.emailType = EmailTypes.clear)


            if (state.emailType === EmailTypes.peopleIntroduction) {
                state.emailBody = ` <h5> Hi ${action.name},</h5></br> <p>  I would like to introduce my self ... a bit of information about  my self ${action.userBioGraphy} </p> </br><P>  a bit more about my compnay ... ${action.companyDescription} </br> </p><p> ${action.emailBody ? action.emailBody : ' '}</br> </p>I hope we can connect and work together and make sure to reply to me with this email adress  \n <h6> ${action.userEmail} </h6>    `
            }
            else if (state.emailType === EmailTypes.companyIntroduction) {
                state.emailBody = `<h5> Hi ${action.companyName},</h5></br><p>  I would like to introduce my self and my company  ... a bit of information abpit my self ${action.userBioGraphy}  </br> </p></br><p>  a bit more about my compnay ... ${action.companyDescription} </br> </p><p>${state.emailBody ? action.emailBody : ' '} </br> I hope we can connect and work together and make sure to reply to me with this email adress   </p></br><h6>   ${action.userEmail} . </h6>  `
            }
            else if (state.emailType === EmailTypes.helpWithGoal) {
                state.emailBody = `<h5> Hi there,</h5></br><p>  I would like to help you with your goal ${action.goalName} </br> I have a lot of experience in this field and hope to work with you on it  </br>a bit more about my self ... ${action.userBioGraphy}  </br> ${action.emailBody ? action.emailBody : ''} </br> </p><p> I hope we can connect and work together and make sure to reply to me with this email adress ${action.userEmail}  </p></br>`
            }
            else if (state.emailType === EmailTypes.helpWiithItem) {
                state.emailBody = `<h5> Hi there,</h5></br><p>  I would like to help you with your item posted on Debut -  ${action.itemName} </br>I have a lot of experience in this field and hope to work with you on it and help you with it  </br>a bit more about my self ... ${action.userBioGraphy}  </br>  ${action.emailBody ? action.emailBody : ''} </br></p><p> I hope we can connect and work together and make sure to reply to me with this email adress ${action.userEmail}  </br> </p>`
            }
            // if (state.emailType === EmailTypes.clear) {
            //     state.emailBody = ""
            // }
        },
        updateEmailBody(state, action: EmailBodyInterface | any) {
            // if (state.emailType == EmailTypes.peopleIntroduction) {
            //     state.emailBody = ` <h5> Hi ${action.name},</h5></br> <p>  I would like to introduce my self ... a bit of information about  my self ${action.userBioGraphy} </p> </br><P>  a bit more about my compnay ... ${action.companyDescription} </br> </p><p> ${action.emailBody ? action.emailBody : ' '}</br> </p>I hope we can connect and work together and make sure to reply to me with this email adress  \n <h6> ${action.userEmail} </h6>    `
            // }
            // if (state.emailType == EmailTypes.companyIntroduction) {
            //     state.emailBody = `<h5> Hi ${action.companyName},</h5></br><p>  I would like to introduce my self and my company  ... a bit of information abpit my self ${action.userBioGraphy}  </br> </p></br><p>  a bit more about my compnay ... ${action.companyDescription} </br> </p><p>${state.emailBody ? action.emailBody : ' '} </br> I hope we can connect and work together and make sure to reply to me with this email adress   </p></br><h6>   ${action.userEmail} . </h6>  `
            // }
            // if (state.emailType == EmailTypes.helpWithGoal) {
            //     state.emailBody = `<h5> Hi there,</h5></br><p>  I would like to help you with your goal ${action.goalName} </br> I have a lot of experience in this field and hope to work with you on it  </br>a bit more about my self ... ${action.userBioGraphy}  </br> ${action.emailBody ? action.emailBody : ''} </br> </p><p> I hope we can connect and work together and make sure to reply to me with this email adress ${action.userEmail}  </p></br>`
            // }
            // if (state.emailType == EmailTypes.helpWiithItem) {
            //     state.emailBody = `<h5> Hi there,</h5></br><p>  I would like to help you with your item posted on Debut -  ${action.itemName} </br>I have a lot of experience in this field and hope to work with you on it and help you with it  </br>a bit more about my self ... ${action.userBioGraphy}  </br>  ${action.emailBody ? action.emailBody : ''} </br></p><p> I hope we can connect and work together and make sure to reply to me with this email adress ${action.userEmail}  </br> </p>`
            // }
            // if (state.emailType == EmailTypes.clear) {
            //     state.emailBody = ""
            // }
            // state.emailBody = "can't find email template ....."

        },

        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        setMyDebutTab: (state, action) => {
            state.myDebutTab = action.payload;
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



export const { toggleEmailPopup, updateEmailBody, toggleSidebar, setMyDebutTab, setActivePersonId,
    peopleExpertiseFilterHandler, peopleRegionFilterHandler, clearPeopleFilter } = uiStore.actions;

export default uiStore.reducer;