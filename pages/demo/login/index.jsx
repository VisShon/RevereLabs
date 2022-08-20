// react functional component

import React from "react";
export function login_redirect() {
    const callback_url = "http://localhost:3000/demo/login/cognitocallback";
    window.location = `https://reverelabs.auth.ap-south-1.amazoncognito.com/login?client_id=69li1ve6kfpq02uv7vo3fhvgb6&response_type=token&redirect_uri=${callback_url}`;
}
export default function Login() {

    return (
        <div>
            <a href={`https://reverelabs.auth.ap-south-1.amazoncognito.com/login?client_id=69li1ve6kfpq02uv7vo3fhvgb6&response_type=token&redirect_uri=${callback_url}`}>
                <button>Login</button></a>
        </div>
    );
}

