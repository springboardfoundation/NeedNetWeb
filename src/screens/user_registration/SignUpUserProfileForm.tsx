import React, {useState} from 'react';
import './UserRegistration.css';
// gives image path
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import {Form} from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from "axios/index";

function SignUpUserProfileForm () {

    const navigate = useNavigate()
    const location = useLocation();
    const [validated, setValidated] = useState(false);


    const [values, setValues] = React.useState({
        fullName: '',
        email: '',
        age: '',
        gender: '',
        terms: '',
    })

    const [errors,setErrors] = React.useState({
        fullName: undefined,
        email: undefined,
        age: undefined,
        gender: undefined,
        terms: undefined,
    })
    const handleChange = (event: any) => {
        const newObj={...values,[event.target.name]:event.target.value};
        console.log(newObj);
        setValues(newObj);
    }
    const handleValidate = (event: any) => {
        event.preventDefault();

        // @ts-ignore
        setValidated(true);
        const mobileNumber = location.state.mobileNumber;

        let error = validation(values);
        setErrors(error);

        if(error !== ""){
            return;
        }
        try {
            axios.post(`http://localhost:9001/api/v1/user/register/${mobileNumber}`)
                .then(res => {
                    let status = res.data.status;
                    if (status) {
                        navigate(`/signupuserprofileform`,{state:{mobileNumber:mobileNumber}})
                    } else {
                        alert("Invalid Details");
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
        const mobileNumber = location.state.mobileNumber;

        const errors:any={};
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const ageRegex = /^[0-9]+$/;

        if(values.fullName === ""){
            errors.fullName="Full name is required";
        }
        if(values.email === ""){
            errors.email="Email is required";
        }
        else if(!emailRegex.test(values.email)){
            errors.email="Email must be valid";
        }
        if(values.age === ""){
            errors.age="Age is required";
        }
        else if(!ageRegex.test(values.age)){
            errors.age="Age must be valid";
        }
        if(values.gender === ""){
            errors.gender="Please select an option"
        }
        if(values.terms === ""){
            errors.terms="Please accept terms and conditions"
        }
        return errors;
    }
    return (
        <div className="flex-container-user-profile-form">
            <div className="flex-item-left-user-profile-form">
                   <h1 className="networkForNeedTitle">  Network for need </h1>
            </div>
            <div className="flex-item-right-user-profile-form">
                <Form noValidate validated={validated} onSubmit={handleValidate}>
                    <Form.Group>
                        <Alert.Heading>User profile</Alert.Heading>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Praesent semper velit vitae leo molestie eleifend. <br />
                        Nam porta urna vel fermentum maximus.</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Full name</Form.Label>
                       <Form.Control type="text" placeholder="Enter a full name"
                                     name="fullName"
                                     onChange={handleChange}
                                     isInvalid={errors.fullName} required/>
                        <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Label>Email address</Form.Label>
                       <Form.Control type="email" placeholder="Enter a valid email address"
                                     name="email"
                                     onChange={handleChange}
                                     isInvalid={errors.email} required/>
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
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
                        <Form.Control type="text" placeholder="Enter your age"
                                      name="age"
                                      onChange={handleChange}
                                      isInvalid={errors.age} required/>
                          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
                      </Col>
                      <Col>
                        <Form.Check label="Male" type="radio" onChange={handleChange}
                                    name="gender"
                                    value="Male" required/>
                        <Form.Check label="Female" type="radio" onChange={handleChange}
                                    name="gender"
                                    value="Female" required/>
                        <Form.Check label="Other"type="radio" onChange={handleChange}
                                    name="gender"
                                    value="Other"
                                    isInvalid={errors.gender}
                                    feedback={errors.gender}
                                    feedbackType="invalid" required/>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Check label="I accept Terms & Conditions" type="radio"  onChange={handleChange}
                                   name="terms" value="Accepted"
                                   checked={false}
                                   isInvalid={errors.terms}
                                   feedback={errors.terms}
                                   feedbackType="invalid" required/>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button type="submit" variant="primary" size="lg" onClick={handleValidate}>
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