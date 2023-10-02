import React from 'react';
import './ForgetPassword.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
function ForgetPasswordOtpForm() {
    return(
        <div className="flex-container-forgetpassword-otp-form">
            <div className="flex-item-left-signup-otp-form">
                <h3 className="networkForNeedTitle">  Network for need</h3>
            </div>
            <div className="flex-item-right-signup-otp-form">
                <Form>
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
                        <PhoneInput country={'in'} disabled={true} />
                    </Form.Group><br/>
                    <Form.Group>
                        <Form.Label>one Time password(OTP)</Form.Label>
                        <Form.Label style={{float: 'right'}}><a href="/forgetsetpasswordform"> Resend OTP</a></Form.Label>
                        <Form.Control type="text" placeholder="Enter OTP" />
                    </Form.Group><br/>
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            <Link to="/src/screens/forget_password/setnewpassword" className="nav-link">Create a new password</Link>
                        </Button>
                    </div>
                </Form>
            </div>
        </div>

    )
}
export default ForgetPasswordOtpForm;