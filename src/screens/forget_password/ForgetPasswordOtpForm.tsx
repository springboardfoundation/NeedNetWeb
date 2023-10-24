import React, {useState} from 'react';
import './ForgetPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {ROUTE_FORGOT_PASSWORD_CONFIRM_PASSWORD} from "../../routes/RouteConstants";
import httpApi from "../../services/HttpApi";
import {VALIDATE_OTP_ENDPOINT} from "../../services/HttpApiConstants";
function ForgetPasswordOtpForm() {
    const navigate = useNavigate()
    const location = useLocation();
    const [otp, setOtp] = useState('');
    const [error, setError] = useState();
    const [validated, setValidated] = useState(false);

    const handleChange = (event: any) => {
        setOtp(event.target.value);
    }

    function validation(value:any){
        let error:any = "";
        const otpRegex = /^[0-9]{6}$/g;

        if(value === ""){
            error = "OTP is required";
        } else if(otpRegex.test(value) === false){
            error = "OTP must be valid";
        } else {
            error = "";
        }

        return error
    }

    const handleValidate = (event:any) => {
        event.preventDefault();
        setValidated(true);

        const mobileNumber = location.state.mobileNumber;

        let error = validation(otp);
        setError(error);

        if(error !== ""){
            return;
        }

        try {
            httpApi.post(VALIDATE_OTP_ENDPOINT(mobileNumber,otp))
                .then(res => {
                    let status = res.data.status;
                    if (status) {
                        navigate(ROUTE_FORGOT_PASSWORD_CONFIRM_PASSWORD,{state:{mobileNumber:mobileNumber}})
                    } else {
                        alert("Invalid OTP");
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

    return(
        <div className="flex-container-forgetpassword-otp-form">
            <div className="flex-item-left-signup-otp-form">
                <h3 className="networkForNeedTitle">  Network for need</h3>
            </div>
            <div className="flex-item-right-signup-otp-form">
                <Form noValidate validated={validated} onSubmit={handleValidate}>
                    <Form.Group>
                        <Alert.Heading>Forget Password</Alert.Heading>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter registered mobile number to receive <br />
                            the OTP</Form.Label>
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile number</Form.Label>
                        <PhoneInput country={'in'} disabled={true} value={location.state.mobileNumber}/>
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label>one Time password(OTP)</Form.Label>
                        <Form.Label style={{float: 'right'}}><a href="/forgetsetpasswordform"> Resend OTP</a></Form.Label>
                        <Form.Control type="password" placeholder="Enter one time password" minLength={6} maxLength={6}
                                      onChange={handleChange} required/>
                        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
                    </Form.Group><br/>
                    <div className="d-grid gap-2">
                        <Button type="submit" variant="primary" size="lg">
                         Create a new password
                        </Button>
                    </div>
                </Form>
            </div>
        </div>

    )
}
export default ForgetPasswordOtpForm;