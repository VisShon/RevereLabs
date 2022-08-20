// react functional component

import React from "react";

export default function Login() {

    let callback_url = "http://localhost:3000/demo/login/cognitocallback";

    // url encode
    callback_url = encodeURIComponent(callback_url);
    return (
        <div>
            <a href={`https://reverelabs.auth.ap-south-1.amazoncognito.com/login?client_id=69li1ve6kfpq02uv7vo3fhvgb6&response_type=token&redirect_uri=${callback_url}`}>
                <button>Login</button></a>
        </div>
    );
}

