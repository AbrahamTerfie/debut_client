import React, { useState } from 'react'
import { Row, Col, Input, FormGroup, Label, Button } from 'reactstrap'
import { useSelector } from 'react-redux'



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



export default function OnboardingPersonal() {

    const { } = useSelector((state: any) => state.user)

    return (
        <div>OnboardingPersonal</div>
    )
}
