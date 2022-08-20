// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React, { useEffect, useState, createContext, } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

export type AppContextProps = {
    connectedAccount: string | undefined;
    connectWallet: Function;
    disconnect: Function;
    getProvider: Function;
    data : object;
    setData: Function;
};

export const BlockchainContext = createContext<AppContextProps>(
  {} as AppContextProps
);

type Props = {
  children: React.ReactNode;
};

export const BlockchainProvider = ({ children }: Props) => {
    const [connectedAccount, setConnectedAccount] = useState<
    string | undefined
  >();

    const [data, setData] = useState<object>({});
    const connectWallet = async (firstTime = false) => {
        try {
            console.log("Connecting metamask...");
            const web3Modal = new Web3Modal({ cacheProvider: true });
            const connection = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
            const accounts = await provider.listAccounts();
            console.log(accounts)
            if (accounts) {
                setConnectedAccount(accounts[0]);
                setData({...data ,
                    user :{
                        ...(data.user),
                        address:accounts[0],
                        addType: 'metamask'
                    }
                })

                if (firstTime) {
                    localStorage.setItem("connected", accounts[0]);
                }
            }
        } catch (error) {
            console.log("Error ", error);
        }
    };

    const getProvider = async () => {
        if (connectedAccount == undefined) {
            return;
        }
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        return new ethers.providers.Web3Provider(connection);
    };

    const disconnect = async () => {
        const web3Modal = new Web3Modal({ cacheProvider: true });
        if (web3Modal.cachedProvider) {
            web3Modal.clearCachedProvider();
            setConnectedAccount(undefined);
            localStorage.removeItem("connected");
        }
    };

    const checkIsWalletConnected = async () => {
        const connected = localStorage.getItem("connected");

        if (connected != null) {
            console.log("connected ", connected);
            // connectWallet();
        }
    };

    useEffect(() => {

        console.log(data, "is data")
        checkIsWalletConnected();
        try {
            if(data.address && connectedAccount === data.address){
                console.log("Working perfectly, Both accounts are same");
                console.log(connectedAccount,data.address);
            }

        } catch (error) {
            console.log("Different accounts");
            console.log(connectedAccount,data.address);

        }
    }, [checkIsWalletConnected]);

    return (
        <BlockchainContext.Provider
            value={{ connectWallet, data, disconnect, getProvider, connectedAccount, setData }}
        >
            {children}
        </BlockchainContext.Provider>
    );
};
