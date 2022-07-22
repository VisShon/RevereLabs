import { ethers } from 'ethers';
import User from '../../../models/User'
import { checkCookies, getCookie, getCookies } from "cookies-next";
import Web3Modal from 'web3modal'
import providerOptions from '../../../config/provider'

export async function getServerSideProps(){
  const web3Modal = new Web3Modal({
    network: "mainnet", 
    cacheProvider: true, 
    providerOptions 
  });
}

export default async function() {

  try {
    const provider = await web3Modal.connect();
    const library = new ethers.providers.Web3Provider(provider);
    const accounts = await library.listAccounts();
    const network = await library.getNetwork();

    const user = getCookie("token", { req, res });
    const obj = await User.findOne({_id: user.id});

    obj.w3Account= accounts;
    obj.w3Network= network;
    obj.w3Provider=provider;
  
    await obj.save()
    
  } catch (error) {
    console.error(error);
  }
}