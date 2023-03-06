import React from 'react'
import { emailJsInfo } from './emailJsInfo'
import emailjs from '@emailjs/browser';
import { EmailStatticValues } from '../../Email/EmailTypes';




export default function InvitationEmail(
    { invitationToEmail, InvitationCode, eventName, userEmail, eventDate }: {
        invitationToEmail: string, InvitationCode: string, eventName: string,
        eventDate: string, userEmail: string
    }): boolean {

    const EmailTemplate = ` <h6>   Dear   ${invitationToEmail}, </h6>
<p>  You are invited to ${eventName}   on  ${eventDate} .</p>
<p> please use code <h3>  ${InvitationCode}  </h3> to register for debut as a <h4> supporter </h4> .</p>
<p>  Thank you for your time and consideration. I look forward to hearing from you.</p>
<h6>Best regards, </h6>
<br/>  ${userEmail}  </h6>`

    emailjs.send(
        emailJsInfo.service_id,
        emailJsInfo.template_id,
        {
            from_name: userEmail,
            email_subject: EmailStatticValues.InviteToEvent.subject,
            message: EmailTemplate,
            reply_to: invitationToEmail,
        },
        emailJsInfo.public_key
    ).then((result) => {
        console.log(result.text);
        return true
    }, (error) => {
        console.log(error.text);
        return false
    });

    //  return back to the caller 
    return false && console.log("didn't send email")


}
