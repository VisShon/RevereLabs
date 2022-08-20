// TODO: Change import for REACT

// import { ethers } from "ethers";
import { ethers } from "./ethers-5.2.esm.min.js";

import { bytecode, abi } from "./abi.js";




async function deployContract(checkpoints, freelancer, clientAmount, freelancerStake, RGCNFTAddress, RTNAddress) {

    // Create an instance of a Contract Factory

    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    let factory = new ethers.ContractFactory(abi, bytecode, signer);
    console.log("reached1");
    let contract = await factory.deploy(checkpoints, freelancer, clientAmount, freelancerStake, RGCNFTAddress, RTNAddress, freelancerCompensationIfClientCancels);
    console.log("reached2");
   
    // "0x2bD9aAa2953F988153c8629926D22A6a5F69b14E"
    console.log("reached3");
    // The transaction that was sent to the network to deploy the Contract
    // See: https://ropsten.etherscan.io/tx/0x159b76843662a15bd67e482dcfbee55e8e44efad26c5a614245e12a00d4b1a51
    console.log(contract.deployTransaction.hash);
    // "0x159b76843662a15bd67e482dcfbee55e8e44efad26c5a614245e12a00d4b1a51"
    console.log("reached4");
    // The contract is NOT deployed yet; we must wait until it is mined
    await contract.deployed()
    console.log("reached5");
    // Done! The contract is deployed.
}

// Testing
// deployContract([0, 10, 25, 100], "0x8ad27F8D2185e0e4c412D70cCE7ebbc9C27859F0", "10000000000000000000", "2000000000000000000", "0x8945731dd4c0118d7d4b543ae2825b3de84ce728", "0xe1f74c2d2bacb54ea5edc8b4c564b2c0effd2457");