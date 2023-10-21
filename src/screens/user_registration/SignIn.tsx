import React, {useState} from 'react';
import './UserRegistration.css';
import SignInBg from '../../assets/signin_bg.png'; // gives image path
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import forgetPassword from "../forget_password/ForgetPassword";

function SignInForm () {


    const navigate = useNavigate()
    const [mobileNumber, setMobileNumber] = useState('');
    const [values, setValues] = useState({
        password: '',
    })
    const [errors,setErrors] = useState({
        mobileNumber:undefined,
        password:undefined,
    })

    const handleMobileNumber = (event:any) => {
        setMobileNumber(event);
    }

    const handleChange = (event:any) => {
        const newObj={...values,[event.target.name]:event.target.value};
        console.log(newObj);
        setValues(newObj);
    }

    //validate mobilenumber and password
    const handleValidate = async (event: any) => {
        event.preventDefault();

        let error = validation(mobileNumber,values);
        setErrors(error);

        // If there are any errors, then don't proceed with the API call
        if (error.mobileNumber !== "" || error.password !== "") {
            return;
        }

        // Call the API to validate the mobile number and password
        try {
            // Send a POST request
            const response = await axios.post(
                `http://localhost:9001/api/v1/auth/getOtp/`,
                {// Send the mobile number and password in the request body as JSON
                    mobileNumber: mobileNumber,
                    password:values,
                    },
                {// Set the content type to JSON
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            // If the response is 200 OK, then the mobile number and password is valid
            if (response.status === 200) {
                // Mobile number and password is valid, navigate to the main screen
                navigate(`/mainscreen`, {state: {mobileNumber: response.data.mobileNumber}});
            }  else if (response.status === 404) {
                // Handle 404 not found error (e.g., show an error message to the user)
                console.error("Mobile number not found");
            } else if (response.status === 401) {
                // Handle incorrect password (e.g., show an error message to the user)
                console.error("Incorrect password");
            } else {
                // Handle other response statuses or errors
                console.error("Unexpected response status:", response.status);
            }
        } catch (error) {
            // Handle any errors here
            console.error(error);
        }
    }

    //validate mobilenumber and password
    function validation(mobileNumber:any,values:any){

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
        if(values.password=== ""){
            errors.password="Password is required";
        }
        else{
            errors.password="";
        }
        return errors;
    }
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
                        <PhoneInput country={'in'}
                                    onChange={(value) => handleMobileNumber(value)}/><br/>
                        <div className="error"><small>{errors.mobileNumber}</small></div>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <Form.Label style={{float:'right'}} ><a href="src/screens/forget_password/forgetpassword">Forgot password</a></Form.Label>

                        <Form.Control type="password" placeholder="Enter password"
                                      name="password"
                                      onChange={handleChange}
                                      isInvalid={errors.password}/>
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg" onClick={handleValidate}>
                            Sign in
                        </Button>
                    </div>
                    <Form.Group>
                        <Form.Label></Form.Label>
                    </Form.Group>
                    <Alert variant="light" style={{display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',}} >
                        Don't have an account?
                        <Alert.Link href="/signupmobilenumberform">sign_up</Alert.Link>
                    </Alert>

                </Form>
            </div>
        </div>
    );
}

export default SignInForm;
