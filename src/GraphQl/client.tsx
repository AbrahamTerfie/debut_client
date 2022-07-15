import React, { useState, useEffect } from 'react';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider, gql, HttpLink
} from '@apollo/client';

import { apiLink } from '../Constants/apiLink';
import { useAuth0 } from '@auth0/auth0-react';
import { setContext } from '@apollo/client/link/context';

function ApolloWrapper({ children }: { children: any }) {

    const { isAuthenticated, getAccessTokenSilently, user } = useAuth0();
    const [bearerToken, setBearerToken] = useState('');

    useEffect(() => {
        const getToken = async () => {
            const token = await getAccessTokenSilently();
            setBearerToken(token);
        }
        getToken();

    }, [isAuthenticated, getAccessTokenSilently]);

    console.log(" user object form auth0 hook  ", user)

    const authLink = setContext((request, { headers, ...rest }) => {

        return {
            ...rest,
            headers: {
                ...headers,
                authorization: bearerToken ? `Bearer ${bearerToken}` : ''
            }
        }
    })

    // console.log("authlink ", authLink)

    console.log("bearerToken", bearerToken)


    const link = new HttpLink({ uri: apiLink });
    const cache = new InMemoryCache()


    const client = new ApolloClient({
        link: authLink.concat(link),
        cache: cache
    });

    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}



export default ApolloWrapper;