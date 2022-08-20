// react functional component

import {useRouter} from "next/router";
import React, {useEffect} from "react";
import { CognitoIdentityProviderClient, GetUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import

export default function CognitoCallback() {
    const {asPath} = useRouter();
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        const access_token = asPath.split("#")[1]?.split("access_token=")[1]?.split("&")[0];
        if (access_token) {
            console.log(access_token);
            // get user details using AWS cognito code
            const cognitoIdentityProviderClient = new CognitoIdentityProviderClient({
                region: "ap-south-1",
            });
            const getUserCommand = new GetUserCommand({
                AccessToken: access_token,
            });
            cognitoIdentityProviderClient.send(getUserCommand).then((data, err) => {
                if (err) {
                    console.log("err", err);
                } else {
                    console.log(data);
                    setUser(data);
                }
            });
        }
    }, [asPath])

    let email=null;

    if (user?.UserAttributes)
        email = user.UserAttributes.find((item) => item.Name === "email")?.Value;
    console.log(email, user);



    return (
        <div>
          hi {email}
        </div>
    );
}

