
interface EmailTypeInterface {
    peopleIntroduction: string,
    companyIntroduction: string,
    helpWithGoal: string,
    helpWiithItem: string,
    clear: string

}

export const EmailTypes: EmailTypeInterface = {
    peopleIntroduction: "INTRODUCE_PEOPLE",
    companyIntroduction: "INTRODUCE_COMPANY",
    helpWithGoal: "HELP_WITH_GOAL",
    helpWiithItem: "HELP_WITH_ITEM",
    clear: "CLEAR"
}


export const EmailStatticValues = {
    peopleIntroduction: {
        title: "People Introduction",
        subject: "Request of introduction (Debut)",
    },
    companyIntroduction: {
        title: "Company Introduction",
        subject: "Request of introduction to company (Debut) ",
    },
    HelpWithGoal: {
        title: "Help with goal",
        subject: "Request of help with goal (Debut) ",
    },
    HelpWithItem: {
        title: "Help with item",
        subject: "Request of help with item (Debut) ",
    },
    empty: {
        title: "",
        subject: "",
    }
}
