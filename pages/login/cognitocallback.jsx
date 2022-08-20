// react functional component

import axios from "axios";
import {useRouter} from "next/router";
import React, {useContext, useEffect} from "react";
import { CognitoIdentityProviderClient, GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import {BlockchainContext} from "../../context/BlockchainContext.tsx";
export default function CognitoCallback() {
    const {data, setData} = useContext(BlockchainContext);
    const router = useRouter()
    useEffect(() => {
        const access_token = router.asPath.split("#")[1]?.split("access_token=")[1]?.split("&")[0];
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
            console.log("data",data);
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
                                console.log("Calling cognitoAPI",data);
                                const response = await axios.post("/api/handleInitialLogin", {
                                    email,
                                    name: data.user.name,
                                    skills: [],
                                    links: [],
                                    address : data.user.address,
                                    addType: data.user.addType
                                });
                                const {next, } = data;
                                setData({
                                    ...data,
                                    user: response.data,
                                    isLoggedIn: true
                                })
                                localStorage.setItem("userdata",JSON.stringify(response.data));
                                if (next)
                                    router.push(next);
                                else {
                                    router.push("/");
                                }
                            }
                        }
                    }
                });
            };
            handleActualLogin();
        }
    }, [router, data, setData]);

    return (
        <div>
          Please wait...
        </div>
    );
}

