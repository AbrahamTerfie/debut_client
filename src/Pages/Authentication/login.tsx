import React, { useState } from 'react'
import { Button, FormGroup, Input } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { appRoutes } from '../../Routes/routes';
import { useAuth0 } from '@auth0/auth0-react';
export default function Login() {



    const {
        loginWithRedirect, isLoading, isAuthenticated, user, logout
    } = useAuth0();
    console.log("user from auth0", user)
    const navigate = useNavigate()
    const [loginformData, setLoginformData] = useState({
        email: '',
        password: ''

    })
    return (

        <div>
            <FormGroup>
                <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="email "
                    value={loginformData.email}
                    onChange={(e) => setLoginformData({ ...loginformData, email: e.target.value })}

                />
            </FormGroup>

            <FormGroup>
                <Input
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="password "
                    value={loginformData.password}
                    onChange={(e) => setLoginformData({ ...loginformData, password: e.target.value })}
                />
            </FormGroup>

            <Button
                color='warning'
                outline
                size='lg'
                onClick={() => {
                    loginWithRedirect(
                        {
                            redirectUri: "http://localhost:3000/forum"
                        }
                    )
                    //  navigate(appRoutes.forum)
                }}>

                login

            </Button>


        </div>



    )
}
