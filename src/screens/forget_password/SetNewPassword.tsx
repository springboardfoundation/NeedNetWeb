import React from 'react';
import './ForgetPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

function SetNewPassword(){
    return(
        <div className="flex-container-forgetpassword-otp-form">
            <div className="flex-item-left-signup-otp-form">
                <h3 className="networkForNeedTitle">  Network for need</h3>
            </div>
            <div className="flex-item-right-signup-otp-form">
                <Form>
                    <Form.Group>
                        <Alert.Heading>Set a Password</Alert.Heading>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Praesent semper velit vitae leo molestie eleifend.<br/>
                            Nam porta urna vel fermentum maximus.</Form.Label>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                        <Form.Label>Min 8,Max 50 characters</Form.Label>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group><br/>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            <Link to="/setnewpasswordform" className="nav-link">Sign In</Link>
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default SetNewPassword;