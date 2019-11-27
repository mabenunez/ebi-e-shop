import React from 'react';
import './session-page.styles.scss';

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const SessionPage = () => {
    return (
        <div className="sign-in-and-sign-up">

            Sign in
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}
export default SessionPage;