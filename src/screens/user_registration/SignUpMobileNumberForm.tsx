import React, {useState} from 'react';
import './UserRegistration.css';
import SignUpBg from '../../assets/signup_bg.png'; // gives image path
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";

function SignUpMobileNumberForm () {
    const [values, setValues] = useState({
        mobileNumber:'',
    })
    const [errors,setErrors] = useState({
        mobileNumber:undefined,
    })
    const handleMobileNumber = (event:any) => {
        setValues(event);
    }

    const handleValidate = (event:any) => {
        event.preventDefault();
        setErrors(Validation(values));
    }
    function Validation(values:any){
        const errors:any={};
        console.log(values);
        //const mobileNumberRegex = /^[0-9]{10}$/g;

        if(values.mobileNumber === ""){
            errors.mobileNumber="Mobile number is required";
        }

        return errors;
    }
    const changeColor = (event:any) => {
        event.target.style.borderColor = '#DC3545';
        event.target.style.boxShadow = '0 0 0 0.25rem rgb(220 53 69 / 25%)';
    }
    const changeColor_1 = (event:any) => {
        event.target.style.borderColor = '#DC3545';
        event.target.style.boxShadow = 'none';
    }
    return (
        <div className="flex-container-signup-mobile-number">
            <div className="flex-item-left-signup-mobile-number">
                   <h1 className="networkForNeedTitle">  Network for need </h1>
            </div>
            <div className="flex-item-right-signup-mobile-number">
                <Form onClick={handleValidate}>
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
                        <PhoneInput country={'in'}
                                    onChange={(value) => handleMobileNumber(value)}
                                    onFocus={changeColor}
                                    onBlur={changeColor_1}/><br/>
                        <div className="error"><small>{errors.mobileNumber}</small></div>
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
