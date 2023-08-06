// @ts-ignore
import React from 'react';
import './ForgetPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";


function ForgetPassword(){
    return (
        <div className="flex-container-forgetpassword-otp-form">
            <div className="flex-item-left-signup-otp-form">
                <h3 className="networkForNeedTitle">  Network for need</h3>
            </div>
            <div className="flex-item-right-signup-otp-form">
                <Form>
                    <Form.Group>
                        <Alert.Heading>Forget Password</Alert.Heading>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label>Enter registered mobile number to receive <br />
                            the OTP</Form.Label>
                    </Form.Group><br/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile number</Form.Label>
                        <PhoneInput country={'in'}/>
                    </Form.Group><br/>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            <Link to="/src/screens/forget_password/forgetpasswordotpform" className="nav-link">Send One Time Password (OTP)</Link>
                        </Button>
                    </div>
                    <Form.Group>
                        <Form.Label></Form.Label>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default ForgetPassword;