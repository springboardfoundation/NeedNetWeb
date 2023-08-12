import React from 'react';
import './UserRegistration.css';
import '.src/screens/forgot_password/ForgetPasswordMain.tsx';
import SignInBg from '../../assets/signin_bg.png'; // gives image path
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

function SignInForm () {
    return (
        <div className="flex-container">
            <div className="flex-item-left">
                <div >
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58">
                        <g fill="none" fill-rule="evenodd">
                            <g>
                                <g transform="translate(-118 -265) translate(118 265)">
                                    <rect width="58" height="58" fill="#FFF" rx="9"/>
                                    <g fill="#2056FF" transform="translate(13 20)">
                                        <circle cx="9" cy="9" r="9"/>
                                        <circle cx="24" cy="9" r="9"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>

                </div>
                <div >
                    <h1 className="networkForNeedTitle">  Network for need </h1>
                </div>
                <div >
                <p className="titleDescription">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas elit est, hendrerit ut aliquet sed, sollicitudin nec enim.
                </p>
                </div>
            </div>


            <div className="flex-item-right">
                <Form>
                    <Form.Group>
                        <Alert.Heading>Sign in</Alert.Heading>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label></Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile number</Form.Label>
                        <PhoneInput country={'in'}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <Form.Label style={{float:'right'}} ><a href="src/screens/forget_password/forgetpassword">Forgot password</a></Form.Label>

                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Sign in
                        </Button>
                    </div>
                    <Form.Group>
                        <Form.Label></Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Don't have an account?<Alert variant="light"><Alert.Link href="/signupmobilenumberform">sign_up</Alert.Link></Alert></Form.Label>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default SignInForm;
