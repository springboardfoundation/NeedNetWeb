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
import httpApi from '../../services/HttpApi';
import {REGISTER_USER_ENDPOINT} from "../../services/HttpApiConstants";


function SignUpUserProfileForm () {

    const navigate = useNavigate()
    const location = useLocation();
    const [validated, setValidated] = useState(false);


    const [values, setValues] = React.useState({
        fullName: '',
        password:'',
        conPassword:'',
        age: '',
        gender: '',
        terms: '',
    })

    const [errors,setErrors] = React.useState({
        fullName: undefined,
        password:undefined,
        conPassword:undefined,
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
        console.log("handleValidate called");

        // @ts-ignore
        setValidated(true);
        const mobileNumber = location.state.mobileNumber;

        let error = validation(values);
        setErrors(error);

        if(error !== ""){
            return;
        }
        try {
            httpApi.post(REGISTER_USER_ENDPOINT(mobileNumber))
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
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        const ageRegex = /^[0-9]+$/;

        if(values.fullName === ""){
            errors.fullName="Full name is required";
        }
        if(values.password === ""){
            errors.password="Password is required";
        }
        else if(passwordRegex.test(values.password) === false){
            errors.password="Password must be Strong";
        }
        if(values.conPassword === ""){
            errors.conPassword="Confirm password is required";
        }
        else if(values.conPassword !== values.password){
            errors.conPassword="Password didnt match";
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
        console.log(errors.gender);
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
                                     onChange={handleChange} required/>
                        <Form.Control.Feedback type="invalid">{errors.fullName}</Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Label>Password</Form.Label>
                        </Col>
                        <Col>
                            <Form.Label>Confirm password</Form.Label>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Control type="password"  placeholder="Enter password"
                                          name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                          onChange={handleChange} required/>
                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                        </Col>
                        <Col>
                           <Form.Control type="password"  placeholder="Enter password"
                                         name="conPassword"  pattern={values.password}
                                         onChange={handleChange} required/>
                            <Form.Control.Feedback type="invalid">{errors.conPassword}</Form.Control.Feedback>
                        </Col>
                    </Row><br/>
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
                                      name="age"  pattern="^[0-9]+$"
                                      onChange={handleChange} required/>
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
                                    value="Other" required
                                    feedback={errors.gender}
                                    feedbackType="invalid"/>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                       <Form.Check label="I accept Terms & Conditions" type="radio"  onChange={handleChange}
                                   name="terms" value="Accepted" required
                                   feedback={errors.terms}
                                   feedbackType="invalid" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button type="submit"  variant="primary" size="lg">
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