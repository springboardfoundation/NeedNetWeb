import React from 'react';
import '../user_registration/UserRegistration.css';
import SignUpBg from './../../assets/signup_bg.png'; // gives image path

function SignUpBackgroundWallpaper () {
    return (
        <div>
            <img src={SignUpBg} className="SignUpRegistrationBg" />        </div>
    );
}

export default SignUpBackgroundWallpaper;
