import React from 'react';
import * as QueryString from "query-string";
import { useLocation} from "react-router-dom";

function ForgotPasswordConfirmation() {
    const location = useLocation();
    const params = QueryString.parse(location.search);
    return (
        <div className="forget-password-confirmation">
            <h1>Email has been sent to:</h1>
            <h2>{params.email}</h2>
            <h3>Please check your email to reset your password!</h3>
        </div>
    )
}

export default ForgotPasswordConfirmation;