import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, Company } from '../../types/index';


interface OnBoardingState {
    userId: string;
    isNewUser: boolean;
    hasCompany: boolean;
    user: User;
    company: Company;
}
const initalOnBoardingState = {
    userId: '',
    isNewUser: false,
    hasCompany: false,
    user: {
        firstName: '',
        lastName: '',
        preferredName: '',
        titleAtCompany: '',
        linkedinUrl: '',
        biography: '',
        howWillYouHelp: '',
        aeraOfExpertise: [],
        userRegion: [],

    },
    company: {
        companyName: '',
        companyWebsite: '',
        companyLocation: '',
        descriptionOfCompany: '',
        companyAchivemtns: '',
        companyRegion: [],
        aeraOfOperation: [],
    }
}


const onBoardingSlice = createSlice({
    name: 'onBoarding',
    initialState: initalOnBoardingState,
    reducers: {
        // set isNewUser and has company 
        setUser(state, action: PayloadAction<{ isNewUser: boolean, hasCompany: boolean }>) {
            state.isNewUser = action.payload.isNewUser;
            state.hasCompany = action.payload.hasCompany;
        },
        // set user info on onboarding form
        setUserInfo(state, action) {
            state.user = {
                ...state.user,
                ...action.payload
            }
        },
        // set company info on onboarding form
        setCompanyInfo(state, action) {
            state.company = {
                ...state.company,
                ...action.payload
            }
        },

    }
})


export const { setUser, setUserInfo, setCompanyInfo } = onBoardingSlice.actions;
export default onBoardingSlice.reducer;