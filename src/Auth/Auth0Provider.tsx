import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react';
import { Auth0Variables } from '../environment';

export const Auth0ProviderWithHistory = ({ children }:
    { children: any }) => {


    const domain = Auth0Variables.REACT_APP_AUTH0_DOMAIN
    const clientId = Auth0Variables.REACT_APP_AUTH0_CLIENT_ID;
    const audience = Auth0Variables.REACT_APP_AUTH0_AUDIENCE;

    return <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        audience={audience}
        cacheLocation='localstorage'
        useRefreshTokens={true}
        



    >
        {children}
    </Auth0Provider >
}