import React, {useState} from 'react';
import './UserRegistration.css';
// gives image path
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import httpApi from '../../services/HttpApi';
import {GET_OTP_ENDPOINT} from "../../services/HttpApiConstants";
import { useNavigate } from "react-router-dom"
import {ROUTE_SIGN_UP_OTP_FORM} from "../../routes/RouteConstants";


function SignUpMobileNumberForm () {
    const navigate = useNavigate()
    const [mobileNumber, setMobileNumber] = useState('');
    const [errors,setErrors] = useState({
        mobileNumber:undefined,
    })
    const handleMobileNumber = (event:any) => {
        setMobileNumber(event);
    }

    //validate mobilenumber and password
    const handleValidate = (event:any) => {
        event.preventDefault();

        let error = validation(mobileNumber);
        setErrors(error);

        // If there are any errors, then don't proceed with the API call
        if(error.mobileNumber !== ""){
            return;
        }

        // Call the API to validate the mobile number and password
        try {
            // Send a POST request
            httpApi.post(GET_OTP_ENDPOINT(mobileNumber))
                .then(res => {
                    console.log(res);
                    navigate(ROUTE_SIGN_UP_OTP_FORM,{state:{mobileNumber:res.data.mobileNumber}})
                })
                .catch(err => {
                    console.log(err);
                });

        } catch (error) {
            // Handle any errors here
            console.error(error);
        }
    }
    function validation(mobileNumber:any){
        const errors:any={};
        const mobileNumberRegex = /^[0-9]{12}$/g;
        if(mobileNumber === ""){
            errors.mobileNumber="Mobile number is required";
        }
        else if(mobileNumberRegex.test(mobileNumber) === false){
            errors.mobileNumber="Mobile number must be valid";
        }
        else{
            errors.mobileNumber="";
        }
        return errors;
    }
    return (
        <div className="flex-container-signup-mobile-number">
            <div className="flex-item-left-signup-mobile-number">
                <h1 className="networkForNeedTitle">  Network for need </h1>
            </div>
            <div className="flex-item-right-signup-mobile-number">
                <Form >
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
                                    onChange={(value) => handleMobileNumber(value)}/><br/>
                        <div className="error"><small>{errors.mobileNumber}</small></div>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label></Form.Label>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={handleValidate}>
                            Send One Time Password (OTP)
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