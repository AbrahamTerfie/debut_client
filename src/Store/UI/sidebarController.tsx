// import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { EmailTypes } from '../../Email/EmailTypes';



interface EmailBodyInterface {
    userEmail: string,
    emailTo: string,
    emailSubject: string,
    emailBody: string,
    userBiography?: string,
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
                state.emailBody = ` 
               <h5>   Dear ${emailData.name}, </h5>   </br>
            <p>I hope this email finds you well. My name is ${emailData.userEmail} and I came across your work in the field and was incredibly impressed by your accomplishments and insights.I am particularly interested in a specific aspect of your work.</p>
            </br>
            <p>I am reaching out to you because I am currently <p>[briefly describe your current situation, such as a student, professional in a related field, etc.]</p> and would love the opportunity to learn more about your work and potentially connect with you in the future.</p> 
           </br>
            <p>  I would be honored if you could introduce me to someone in your network who is knowledgeable in the same field, and I would be grateful for any advice or guidance you could provide.</p>                
           </br>                <p> I am also open to any potential opportunities to learn more about this specific aspect of your work that you may know of.</p></br>
            <h6>  Thank you for your time and consideration. I look forward to hearing from you.</h6>
            </br>
           <h5> Best regards,${emailData.userEmail}</h5>
                 `
            }
            else if (state.emailType === EmailTypes.companyIntroduction) {
                state.emailTo = emailData.emailTo
                state.emailBody = `
               <h6>   Dear ${emailData.name}, </h6>
        <p>I hope this email finds you well. My name is ${emailData.userEmail} and I came across [Company Name] and was impressed by the work they do in [specific field or aspect of their work].</p>
        <p> I am reaching out to you because I am currently  <b>[briefly describe your current situation, such as a student, professional in a related field, etc.]</b> and would love the opportunity to learn more about the work that [Company Name] does and potentially connect with them in the future.</p>
        <p> I would be honored if you could introduce me to someone at your company  who could provide more information about their work, and I would be grateful for any advice or guidance you could provide. I am also open to any potential opportunities to learn more about [Company Name] that you may know of.</p>
           <h6> 
           Thank you for your time and consideration. I look forward to hearing from you.
           Best regards,${emailData.userEmail}</h6>  `
            }
            else if (state.emailType === EmailTypes.helpWithGoal) {
                state.emailTo = emailData.emailTo
                state.emailBody = `
                <h6>   Dear ${emailData.name}, </h6>                
            <p> I hope this email finds you well. My name is ${emailData.userEmail} and I came across that you are currently working towards a goal of ${emailData.goalName}. I have experience and knowledge in the field that is relevant to your goal and I would like to offer my help and guidance to assist you in achieving it.</p>
            <p>  I understand that you are busy, and I would like to take as little of your time as possible. I would be honored if you would let me know how i could assist you with your goal, or potentially introduce you to someone who could assist you further.</p>
            <p>  I am open to any potential opportunities to help you and i am willing to make any effort needed to help you reach your goal.</p>
            <p> Thank you for your time and consideration. I look forward to hearing from you.</p>
            <h6>Best regards,
            <br/>${emailData.userEmail}</h6>
            `
            }
            else if (state.emailType === EmailTypes.helpWiithItem) {
                state.emailTo = emailData.emailTo
                state.emailBody = `
            <h6>   Dear ${emailData.name}, </h6>
            <p> I hope this email finds you well. My name is ${emailData.userEmail} and I came across that you are currently in need of ${emailData.itemName}. I have access to ${emailData.itemName} and I would like to offer my help and assistance to provide it to you.</p>
            <p> I understand that you are busy, and I would like to take as little of your time as possible. I would be honored if you would let me know how i could assist you with providing the ${emailData.itemName}, or potentially introduce you to someone who could assist you further.</p>
            <p> I am open to any potential opportunities to help you and i am willing to make any effort needed to help you get the ${emailData.itemName}.</p>
            <p> Thank you for your time and consideration. I look forward to hearing from you.</p>

            <h6> 
            Best regards,
            ${emailData.userEmail} 
            </h6>`
            }
            else if (state.emailType === EmailTypes.inviteToEvent) {
                state.emailTo = emailData.emailTo
                state.emailBody = `
                <h6>   Dear ${emailData.name}, </h6>
                <p>  You are invited to ${emailData.eventName} on ${emailData.eventDate} at .</p>
                <p> please use code <h3> ${emailData.eventCode} </h3> to register for debut as a <h4> supporter </h4> .</p>
                <p>  Thank you for your time and consideration. I look forward to hearing from you.</p>
                <h6>Best regards, </h6>
                <br/>${emailData.userEmail}</h6>`
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