import React, { useState } from 'react'
import { Row, Col, Button, FormGroup, Input } from 'reactstrap';

export default function SignUp() {
    const [signupformData, setSignupformData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        confirmPassword: '',
        phone: '',
        hasBusiness: false,


    })

    const hasBusinessToggler = () => {
        setSignupformData({
            ...signupformData,
            hasBusiness: !signupformData.hasBusiness
        })
    }
    return (
        <div>
            <Row className='mb-4' >
                <Col>
                    <Button color="info"
                        onClick={() => {
                            hasBusinessToggler()
                        }}
                        outline={signupformData.hasBusiness}
                    >
                        supporter
                    </Button>
                </Col>
                <Col>
                    <Button
                        onClick={() => { hasBusinessToggler() }}
                        outline={!signupformData.hasBusiness}
                        color='warning'
                    >
                        business
                    </Button>
                </Col>
            </Row>
            <FormGroup>
                <Input

                    type="text"
                    name="firstName"
                    id="exampleFirstName"
                    placeholder="First Name"
                    value={signupformData.firstName}
                    onChange={(e) => setSignupformData({ ...signupformData, firstName: e.target.value })}

                />
            </FormGroup>

            <FormGroup>
                <Input

                    type="text"
                    name="lastName"
                    id="exampleLastName"
                    placeholder="Last Name"
                    value={signupformData.lastName}
                    onChange={(e) => setSignupformData({ ...signupformData, lastName: e.target.value })}

                />
            </FormGroup>

            <FormGroup>
                <Input

                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Email"
                    value={signupformData.email}
                    onChange={(e) => setSignupformData({ ...signupformData, email: e.target.value })}

                />
            </FormGroup>

            <FormGroup>
                <Input

                    type="text"
                    name="userName"
                    id="exampleUserName"
                    placeholder="User Name"
                    value={signupformData.userName}
                    onChange={(e) => setSignupformData({ ...signupformData, userName: e.target.value })}

                />
            </FormGroup>

            <FormGroup>
                <Input

                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="Password"
                    value={signupformData.password}
                    onChange={(e) => setSignupformData({ ...signupformData, password: e.target.value })}

                />
            </FormGroup>

            <FormGroup>
                <Input

                    type="password"
                    name="confirmPassword"
                    id="exampleConfirmPassword"
                    placeholder="Confirm Password"
                    value={signupformData.confirmPassword}
                    onChange={(e) => setSignupformData({ ...signupformData, confirmPassword: e.target.value })}

                />
            </FormGroup>

            <FormGroup>
                <Input


                    type="text"
                    name="phone"
                    id="examplePhone"
                    placeholder="Phone"
                    value={signupformData.phone}
                    onChange={(e) => setSignupformData({ ...signupformData, phone: e.target.value })}

                />
            </FormGroup>

            <Button
                color='warning'
                outline
                size='lg'
                onClick={() => { console.log(signupformData) }}
            >Sign Up</Button>


        </div>
    )
}
