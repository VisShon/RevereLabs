// react functional component

import axios from "axios";
import {useRouter} from "next/router";
import React, {useContext, useEffect} from "react";
import { CognitoIdentityProviderClient, GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import {BlockchainContext} from "../../../context/BlockchainContext"; // ES Modules import

export default function CognitoCallback() {
    const {data, setData} = useContext(BlockchainContext);
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
                cognitoIdentityProviderClient.send(getUserCommand).then(async (user, err) => {
                    if (err) {
                        console.log("err", err);
                    } else {
                        if (user?.UserAttributes) {
                            const email = user.UserAttributes.find((item) => item.Name === "email")?.Value;
                            if (email !== "") {
                                console.log("Calling cognitoAPI")
                                const response = await axios.post("/api/handleInitialLogin", {
                                    email,
                                    name: data?.user?.name,
                                    skills: [],
                                    links: [],
                                    address : data.user.address,
                                    addType: data.user.addType
                                });

                                setData({
                                    ...data,
                                    user: response.data
                                })

                                console.log("halla", response.data);
                                window.location.href = "/";
                            }
                        }
                    }
                });
            };
            handleActualLogin();
        }
    }, [asPath, data, setData]);

    return (
        <div>
          Please wait...
        </div>
    );
}

