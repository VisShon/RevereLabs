import React, {useEffect, useContext} from 'react'
import Image from 'next/image'
import axios from 'axios'
import web3 from "web3";
import {
    AppContextProps,
    BlockchainContext,
} from "../context/BlockchainContext.tsx";
import {login_redirect} from "../pages/demo/login";
import { sequence } from "0xsequence";


function LoginButton({APIlink,data,setStepsDone,stepsDone}) {

    const {connectedAccount, connectWallet, disconnect, loggedin, settingLoggedin} =
      useContext(BlockchainContext);
    const wallet = sequence.initWallet('polygon');


    async function handlCheck() {
        let chainId = 80001;

        if (window.ethereum.networkVersion !== chainId) {
            try {
                console.log("trying to connect to network");
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{chainId: web3.utils.toHex(chainId)}],
                });
            } catch (err) {
                console.log(err, "error");
                // This error code indicates that the chain has not been added to MetaMask.
                if (err.code === 4902) {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [
                            {
                                chainName: "Mumbai Testnet",
                                chainId: web3.utils.toHex(chainId),
                                nativeCurrency: {
                                    name: "MATIC",
                                    decimals: 18,
                                    symbol: "MATIC",
                                },
                                rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
                                blockExplorerUrls: ["https://polygonscan.com/"],
                            },
                        ],
                    });
                }
            }
        }
    }

    // useEffect(() => {
    //     handlCheck();
    // // if (connectedAccount) {
    // //   console.log(connectedAccount);
    // //   router.push("/Profile");
    // // }
    // });

    const onClicked = async () => {
        console.log("metamask", data);
        if (data.titleHighlighted === " Metamask wallet") {
            console.log("dsf");
            connectWallet(true);
        } else if (data.titleHighlighted === ' Sequence wallet'){
            console.log("here is sequence");
            wallet = sequence.getWallet();
            const connectDetails = await wallet.connect({
                app: 'RevereLabs',
                authorize: true,
                // And pass settings if you would like to customize further
                settings: {
                    theme: "light",
                    bannerUrl: "https://yoursite.com/banner-image.png",  // 3:1 aspect ratio, 1200x400 works best
                    includedPaymentProviders: ["moonpay", "ramp"],
                    defaultFundingCurrency: "matic",
                    lockFundingCurrencyToDefault: false,
                }
            })


            console.log('user accepted connect?', connectDetails.connected, connectDetails);
            console.log('users signed connect proof to valid their account address:', connectDetails.proof);

        }
        else if (data.titleHighlighted === "AWS Cognito") {
            login_redirect();
            return;
        }
        const result = await axios.get(APIlink)
        if (stepsDone === 2) {
            const user = {
                name: 'Vishnu Shon',
                email: 'vishnu@gmail.com',
                profilePicture: '/profilepic.png',
                projects: [{
                    "title": "TestGig2",
                    "description": "Need to Design a website",
                    "bounty": "USD400",
                    "time": "2 months",
                    "completed": false,
                    "category": "Design"
                }, {
                    "title": "TestGig2",
                    "description": "Need to Design a website",
                    "bounty": "USD400",
                    "time": "2 months",
                    "completed": false,
                    "category": "Design"
                }, {
                    "title": "TestGig2",
                    "description": "Need to Design a website",
                    "bounty": "USD400",
                    "time": "2 months",
                    "completed": false,
                    "category": "Design"
                }],
                work: [{
                    "title": "TestGig2",
                    "description": "Need to Design a website",
                    "bounty": "USD400",
                    "time": "2 months",
                    "completed": false,
                    "category": "Design"
                },],
                link: [],
                Daos: [
                    {title: 'odysseydao', color: '#CBA3FF'},
                    {title: 'StatesDao', color: '#88BBEB'}
                ],
            }
            window.localStorage.setItem('user', JSON.stringify(user))
            window.history.back()
        }
    }


    return (
        <>
            <button onClick={onClicked}
                className="w-[20rem] h-[5rem] mt-5 flex justify-center items-center rounded-[8px] hover:drop-shadow-[5px_5px_0px_rgba(159,159,159,1)]"
                style={{backgroundColor: data.backgroundColor}}>
                <Image src={data.logo}
                    height="40"
                    width="50"/>
                <span className="ml-10 font-mada font-[600] text-textMain">{data.title} <span
                    style={{color: data.color}}>{" " + data.titleHighlighted}</span></span>
            </button>
        </>
    )
}

export default LoginButton;
