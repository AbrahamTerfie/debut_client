
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
        return `Hi ${name}, I would like to introduce my self ... a bit of information about  my self ${userBioGraphy} \n
         a bit more about my compnay ... ${companyDescription} \n
         ${emailBody ? emailBody : ' add your message here'} \n
         I hope we can connect and work together and make sure to reply to me with this email adress  \n ${userEmail} `
    }
    if (emailType === EmailTypes.companyIntroduction) {
        return `Hi ${companyName}, I would like to introduce my self and my company  ... a bit of information abpit my self ${userBioGraphy} \n 
        a bit more about my compnay ... ${companyDescription} \n
        ${emailBody ? emailBody : ' add your message here'} \n

         I hope we can connect and work together and make sure to reply to me with this email adress  \n ${userEmail} `
    }
    if (emailType === EmailTypes.helpWithGoal) {
        return `hello there \n        
        I would like to help you with your goal ${goalName} \n I have a lot of experience in this field and hope to work with you on it  \n. 
        a bit more about my self ... ${userBioGraphy} \n
        ${emailBody ? emailBody : ' add your message here'} \n

        please reach out to me with this email adress  \n ${userEmail} `
    }
    if (emailType === EmailTypes.helpWiithItem) {
        return `hello there \n        
        I would like to help you with your item ${itemName} \n. 
        a bit more about my self ... ${userBioGraphy} \n
        ${emailBody ? emailBody : ' add your message here'} \n

        please reach out to me with this email adress  \n ${userEmail} and lets discuss it`
    }
    return ""
}