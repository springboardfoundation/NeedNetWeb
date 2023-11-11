import React from 'react';
import './App.css';
import SignIn from "./screens/user_registration/SignIn";
import SignUpMobileNumberForm from "./screens/user_registration/SignUpMobileNumberForm";
import SignUpOtpForm from "./screens/user_registration/SignUpOtpForm";
import SignUpUserProfileForm from "./screens/user_registration/SignUpUserProfileForm";
import ForgetPassword from "./screens/forget_password/ForgetPassword";
import ForgetPasswordOtpForm from "./screens/forget_password/ForgetPasswordOtpForm";
import SetNewPassword from "./screens/forget_password/SetNewPassword";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
    ROUTE_FORGOT_PASSWORD_CONFIRM_PASSWORD,
    ROUTE_FORGOT_PASSWORD_MOBILE_FORM, ROUTE_FORGOT_PASSWORD_OTP_FORM,
    ROUTE_SIGN_UP_MOBILE_FORM,
    ROUTE_SIGN_UP_OTP_FORM,
    ROUTE_SIGN_UP_REGISTRATION_PROFILE
} from "./routes/RouteConstants";
import MainPage from "./screens/main_page/MainPage";
import CreateNeed from "./screens/main_page/CreateNeed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<CreateNeed />} />
         <Route path={ROUTE_SIGN_UP_MOBILE_FORM} element={<SignUpMobileNumberForm />} />
         <Route path={ROUTE_SIGN_UP_OTP_FORM} element={<SignUpOtpForm />} />
         <Route path={ROUTE_SIGN_UP_REGISTRATION_PROFILE} element={<SignUpUserProfileForm />} />
         <Route path={ROUTE_FORGOT_PASSWORD_MOBILE_FORM} element={<ForgetPassword />} />
         <Route path={ROUTE_FORGOT_PASSWORD_OTP_FORM} element={<ForgetPasswordOtpForm />} />
         <Route path={ROUTE_FORGOT_PASSWORD_CONFIRM_PASSWORD} element={<SetNewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
