import {Moralis} from 'moralis-v1';


const moralisServerUrl = process.env.MORALIS_SERVER_URL;
const moralisAppId = process.env.MORALIS_APP_ID;
const moralisMasterKey = process.env.MORALIS_MASTER_KEY;

const moralis = Moralis.start({
    serverUrl: moralisServerUrl,
    appId: moralisAppId,
    masterKey: moralisMasterKey})

export const sendTokenToChat = (rocketChatRef, token) => {
  rocketChatRef.current.contentWindow.postMessage({
            externalCommand: 'login-with-token',
              token: token
            }, '*')
}

export const goToDirectChat = (rocketChatRef, chatId) => {
  rocketChatRef.current.contentWindow.postMessage({
            externalCommand: 'go',
            path: `/direct/${chatId}`
          }, '*')
}

export const sendApplication = (rocketChatRef, gigId) => {
  // get gig_owner from gig NFT
  // get gig_owner's chat handle from Moralis DB
  // get my chat handle from Moralis DB
  // create room with me and owner using Rocket API
  // register room with gig onto Moralis DB
  // return room id
}

export const createUser = async (email, name, skills, links) => {
  await moralis;


}
