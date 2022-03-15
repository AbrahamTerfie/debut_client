import React from 'react'
import { signInWithGooglePopup } from '../../firebase/firebaseConfig.mjs'




export default function SignInComponent() {

    const logGoogleUser = async () => {
        const res = await signInWithGooglePopup();
        console.log(res)
    };

    return (
        <div>
            this is sign in component
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>

        </div>
    )
}
