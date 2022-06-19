import React, { useState } from 'react'
import { Button, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../Routes/routes';
export default function Login() {


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
            <Link to={appRoutes.debutBusiness}   >
                <Button
                    color='warning'
                    outline
                    size='lg'
                    onClick={() => { console.log(loginformData) }}
                >login</Button>

            </Link>
        </div>
        // {/* </Form> */}


    )
}
