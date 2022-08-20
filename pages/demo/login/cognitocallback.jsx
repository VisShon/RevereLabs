// react functional component

import axios from "axios";
import {useRouter} from "next/router";
import React, {useEffect} from "react";
import { CognitoIdentityProviderClient, GetUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import

export default function CognitoCallback() {
    const {asPath} = useRouter();
    useEffect(() => {
        const access_token = asPath.split("#")[1]?.split("access_token=")[1]?.split("&")[0];
        if (access_token) {
            // get user details using AWS cognito code
            const cognitoIdentityProviderClient = new CognitoIdentityProviderClient({
                region: "ap-south-1",
            });
            const getUserCommand = new GetUserCommand({
                AccessToken: access_token,
            });

            const handleActualLogin = async () => {
                cognitoIdentityProviderClient.send(getUserCommand).then(async (data, err) => {
                    if (err) {
                        console.log("err", err);
                    } else {
                        const user=data;
                        if (user?.UserAttributes) {
                            const email = user.UserAttributes.find((item) => item.Name === "email")?.Value;
                            if (email !== "") {
                                console.log("Calling cognitoAPI")
                                const response = await axios.post("/api/handleInitialLogin", {
                                    email,
                                    name: "Hardcoded",
                                    skills: ["Hardcoded"],
                                    links: ["Hardcoded"],
                                });
                                console.log("halla", response.data);
                            }
                        }
                    }
                });
            };
            handleActualLogin();
        }
    }, [asPath]);

    return (
        <div>
          Please wait...
        </div>
    );
}

