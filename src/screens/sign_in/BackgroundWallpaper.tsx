import React from 'react';
import '../user_registration/UserRegistration.css';
import SignInBg from './../../assets/signin_bg.png'; // gives image path

function BackgroundWallpaper () {
    return (
        <div>
            <img src={SignInBg} className="SignInRegistrationBg" />        </div>
    );
}

export default BackgroundWallpaper;
