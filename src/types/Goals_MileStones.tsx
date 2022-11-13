

export interface mileStones {
    _id: string,
    mileStoneTitle: string,
    mileStoneDescription: string,
    milestoneDueDate: string,
    milestoneCompleted: boolean,
    milestoneCompletedDate: string,
    needHelpWith: [string],
    additionalLinks: [string],
}

export interface companyGoals {
    _id: string,
    goalDescription: string,
    goalTitle: string,
    goalStatus: string,
    mileStones: [mileStones]
}



