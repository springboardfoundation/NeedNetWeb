import React from 'react';
import './UserRegistration.css';
import SignUpBg from '../../assets/signup_bg.png'; // gives image path
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

function SignUpMobileNumberForm () {
    return (
        <div className="flex-container-signup-mobile-number">
            <div className="flex-item-left-signup-mobile-number">
                   <h1 className="networkForNeedTitle">  Network for need </h1>
            </div>
            <div className="flex-item-right-signup-mobile-number">
                <Form>
                    <Form.Group>
                        <Alert.Heading>Sign up</Alert.Heading>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter registered mobile number to receive <br />
                        the OTP</Form.Label>
                    </Form.Group>
                    <Form.Group>
                       <Form.Label></Form.Label>
                       </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile number</Form.Label>
                        <PhoneInput country={'in'}/>
                    </Form.Group>
                    <Form.Group>
                       <Form.Label></Form.Label>
                       </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            <Link to="/signupotpform" className="nav-link">Send One Time Password (OTP)</Link>
                        </Button>
                    </div>
                    <Form.Group>
                        <Form.Label></Form.Label>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}

export default SignUpMobileNumberForm;
