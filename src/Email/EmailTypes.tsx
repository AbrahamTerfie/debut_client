
interface EmailTypeInterface {
    peopleIntroduction: string,
    companyIntroduction: string,
    helpWithGoal: string,
    helpWiithItem: string,
    clear: string

}

export const EmailTypes: EmailTypeInterface = {
    peopleIntroduction: "INTRODIUCE_PEOPLE",
    companyIntroduction: "INTRODUCE_COMPANY",
    helpWithGoal: "HELP_WITH_GOAL",
    helpWiithItem: "HELP_WITH_ITEM",
    clear: "CLEAR"
}



export const EmailHeaders = (
    userEmail: String, emailType: String, emailBody: String,
    userBioGraphy?: String, companyName?: String, name?: string,
    companyDescription?: String, itemName?: String, goalName?: String): string => {

    if (emailType === EmailTypes.peopleIntroduction) {
        return `<h5> Hi ${name},</h5></br>
        <p>  I would like to introduce my self ... a bit of information about  my self ${userBioGraphy} </p> </br>
         <P>  a bit more about my compnay ... ${companyDescription} </br> </p>
        <p> ${emailBody ? emailBody : ' '}</br> </p>
         I hope we can connect and work together and make sure to reply to me with this email adress  \n <h6> ${userEmail} </h6>    `
    }
    if (emailType === EmailTypes.companyIntroduction) {
        return `<h5> Hi ${companyName},</h5></br>
        <p>  I would like to introduce my self and my company  ... a bit of information abpit my self ${userBioGraphy}  </br> </p></br>
        <p>  a bit more about my compnay ... ${companyDescription} </br> </p>
        <p>
        ${emailBody ? emailBody : ' '} </br> I hope we can connect and work together and make sure to reply to me with this email adress   </p></br>
       <h6>   ${userEmail} . </h6>   `
    }
    if (emailType === EmailTypes.helpWithGoal) {
        return `<h5> Hi there,</h5></br>
        <p>  I would like to help you with your goal ${goalName} </br> I have a lot of experience in this field and hope to work with you on it  </br>
        a bit more about my self ... ${userBioGraphy}  </br> ${emailBody ? emailBody : ''} </br> </p>
       <p> I hope we can connect and work together and make sure to reply to me with this email adress ${userEmail}  </p></br>`
    }
    if (emailType === EmailTypes.helpWiithItem) {
        return `<h5> Hi there,</h5></br>
        <p>  I would like to help you with your item posted on Debut -  ${itemName} </br>
        I have a lot of experience in this field and hope to work with you on it and help you with it  </br>

        a bit more about my self ... ${userBioGraphy}  </br>  ${emailBody ? emailBody : ''} </br></p>
       <p> I hope we can connect and work together and make sure to reply to me with this email adress ${userEmail}  </br> </p>`
    }
    return "can't find email template ....."
}