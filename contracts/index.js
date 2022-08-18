// TODO: Change import for REACT

// import { ethers } from "ethers";
import { ethers } from "./ethers-5.2.esm.min.js";

import { bytecode, abi } from "./abi.js";

// Connect to the network
let provider = ethers.getDefaultProvider('ropsten');



async function deployContract(checkpoints, freelancer, clientAmount, freelancerStake, RGCNFTAddress, RTNAddress) {

    // Create an instance of a Contract Factory

    const provider = new ethers.providers.Web3Provider(window.ethereum)

// MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner()
    let factory = new ethers.ContractFactory(abi, bytecode, signer);
    console.log("reached1");
    let contract = await factory.deploy(checkpoints, freelancer, clientAmount, freelancerStake, RGCNFTAddress, RTNAddress);
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
};

deployContract([1, 2], "ahe", 400, 400, "40", "asd");