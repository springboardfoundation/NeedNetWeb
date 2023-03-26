import React from 'react';
import './UserRegistration.css';
import SignUpBg from '../../assets/userprofile_bg.png'; // gives image path
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SignUpUserProfileForm () {
    return (
        <div className="flex-container-user-profile-form">
            <div className="flex-item-left-user-profile-form">
                   <h1 className="networkForNeedTitle">  Network for need </h1>
            </div>
            <div className="flex-item-right-user-profile-form">
                <Form>
                    <Form.Group>
                        <Alert.Heading>User profile</Alert.Heading>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Praesent semper velit vitae leo molestie eleifend. <br />
                        Nam porta urna vel fermentum maximus.</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Full name</Form.Label>
                       <Form.Control type="text" placeholder="Enter a full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter a valid email address" />
                    </Form.Group>
                    <Row>
                     <Col>
                        <Form.Label>Age</Form.Label>
                     </Col>
                     <Col>
                        <Form.Label>Gender</Form.Label>
                     </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Control type="text" placeholder="Enter your age" />
                      </Col>
                      <Col>
                        <Form.Check label="Male" type="radio" />
                        <Form.Check label="Female" type="radio" />
                        <Form.Check label="Other" type="radio" />
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Check label="I accept Terms & Conditions" name="female" type="radio"/>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            Complete registration
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

export default SignUpUserProfileForm;