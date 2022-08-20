// react functional component

import axios from "axios";
import {useRouter} from "next/router";
import React, {useContext, useEffect} from "react";
import { CognitoIdentityProviderClient, GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import {BlockchainContext} from "../../context/BlockchainContext.tsx";

export default function CognitoCallback() {
    const {data, setData} = useContext(BlockchainContext);
    console.log("data",data);
    const {asPath} = useRouter();
    useEffect(() => {


        const access_token = asPath.split("#")[1]?.split("access_token=")[1]?.split("&")[0];
        if (access_token) {
            if (Object.keys(data).length === 0){
                if (localStorage.getItem("data")) {
                    console.log("setting data", data, Boolean(localStorage.getItem("data")))
                    setData(JSON.parse(localStorage.getItem("data")));
                    console.log("setting ", JSON.parse(localStorage.getItem("data")));

                    localStorage.removeItem("data");
                }
                return;
            }
            console.log("access_token",data);
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
                        console.log("asds");
                        if (user?.UserAttributes) {
                            const email = user.UserAttributes.find((item) => item.Name === "email")?.Value;
                            if (email !== "") {
                                console.log("Calling cognitoAPI",data);
                                const response = await axios.post("/api/handleInitialLogin", {
                                    email,
                                    name: data.user.name,
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

