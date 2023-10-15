import React, {useState} from 'react';
import './ForgetPassword.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function SetNewPassword(){

    const navigate = useNavigate()
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
        password: '',
        conPassword:'',
    })
    const [errors,setErrors] = useState({
        password: undefined, conPassword: undefined

    })

    const handleChange = (event: any) => {
        const newObj={...values,[event.target.name]:event.target.value};
        console.log(newObj);
        setValues(newObj);

    }
    const handleValidate = (event: any) => {
        event.preventDefault();
        setValidated(true);


        let error = validation(values);
        setErrors(errors);

        if(error !== ""){
            return;
        }

        try {
            axios.post(`http://localhost:9001/api/v1/auth/validate`)
                .then(res => {
                    let status = res.data.status;
                    if (status) {
                        navigate(`src/screens/user_registration/signin`)
                    } else {
                        alert("Set password");
                    }
                })
                .catch(err => {
                    console.log(err);
                });

        } catch (error) {
            // Handle any errors here
            console.error(error);
        }
    }


    function validation(values:any){
        const errors:any={};
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if(values.password === ""){
            errors.password="Password is required";
        }
        else if(!passwordRegex.test(values.password)){
            errors.password="Password must be Strong";
        }
        if(values.conPassword === ""){
            errors.conPassword="Confirm password is required";
        }
        else if(values.conPassword !== values.password){
            errors.conPassword="Password didnt match";
        }
        return errors;
    }
    return(
        <div className="flex-container-forgetpassword-otp-form">
            <div className="flex-item-left-signup-otp-form">
                <h3 className="networkForNeedTitle">  Network for need</h3>
            </div>
            <div className="flex-item-right-signup-otp-form">
                <Form noValidate validated={validated} onSubmit={handleValidate}>
                    <Form.Group>
                        <Alert.Heading>Set a Password</Alert.Heading>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Praesent semper velit vitae leo molestie eleifend.<br/>
                            Nam porta urna vel fermentum maximus.</Form.Label>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"  placeholder="Enter password"
                                      name="password"
                                      onChange={(handleChange)}
                                      isInvalid={errors.password} required/>
                        <Form.Label>Min 8,Max 50 characters</Form.Label><br/>
                        <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type="password"  placeholder="Enter password"
                                      name="conPassword"
                                      onChange={handleChange}
                                      isInvalid={errors.conPassword} required/>
                        <Form.Control.Feedback type="invalid">{errors.conPassword}</Form.Control.Feedback>
                    </Form.Group><br/>
                    <div className="d-grid gap-2">
                        <Button  type="submit" variant="primary" size="lg">
                            Sign In
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}


export default SetNewPassword;