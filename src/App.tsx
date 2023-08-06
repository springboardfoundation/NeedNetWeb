import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignInForm from "./screens/user_registration/SignIn";
import SignInBg from "./assets/signin_bg.png";
import BackgroundWallpaper from "./screens/sign_in/BackgroundWallpaper";
import SignIn from "./screens/user_registration/SignIn";
import SignUpMobileNumberForm from "./screens/user_registration/SignUpMobileNumberForm";
import SignUpOtpForm from "./screens/user_registration/SignUpOtpForm";
import SignUpUserProfileForm from "./screens/user_registration/SignUpUserProfileForm";
import ForgetPassword from "./screens/forget_password/ForgetPassword";
import ForgetPasswordOtpForm from "./screens/forget_password/ForgetPasswordOtpForm";
import SetNewPassword from "./screens/forget_password/SetNewPassword";
import SignUpBg from "./assets/signup_bg.png";
import SignUpBackgroundWallpaper from "./screens/sign_up/SignUpBackgroundWallpaper";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<SignIn />} />
         <Route path="/signupmobilenumberform" element={<SignUpMobileNumberForm />} />
         <Route path="/signupotpform" element={<SignUpOtpForm />} />
         <Route path="/signupuserprofileform" element={<SignUpUserProfileForm />} />
         <Route path="/src/screens/forget_password/forgetpassword" element={<ForgetPassword />} />
         <Route path="/src/screens/forget_password/forgetpasswordotpform" element={<ForgetPasswordOtpForm />} />
         <Route path="/src/screens/forget_password/setnewpassword" element={<SetNewPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
