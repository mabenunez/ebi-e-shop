import React from 'react';
import './session-page.styles.scss';

import SignIn from "../../components/sign-in/SignIn";

const SessionPage = () => {
    return (
        <div className="sign-in-and-sign-up">

            Sign in
            <SignIn></SignIn>
        </div>
    )
}
export default SessionPage;