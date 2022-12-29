import React, { useState } from 'react'
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
export default function OnBoardingForm() {
    const [userNeeds, setUserNeeds] = useState<{ isNewUser: boolean | null, hasCmpany: boolean | null, }>
        ({ isNewUser: false, hasCmpany: false, })

    return (
        <div>OnBoardingForm</div>
    )
}
