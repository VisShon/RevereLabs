import axios from "axios";
import {Moralis} from 'moralis-v1';

const ROCKETCHAT_SERVER_URL = process.env.ROCKETCHAT_SERVER_URL;
const ROCKETCHAT_ADMIN_ID = process.env.ROCKETCHAT_ADMIN_ID;
const ROCKETCHAT_ADMIN_TOKEN = process.env.ROCKETCHAT_ADMIN_TOKEN;

const ROCKETCHAT_ADMIN_HEADERS = {
    'X-Auth-Token': ROCKETCHAT_ADMIN_TOKEN,
    'X-User-Id': ROCKETCHAT_ADMIN_ID
};

// TODO: need better way to do this
async function random_string(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   return result;
}

export class CustomUser extends Moralis.Object {
  constructor(email, name, skills, links) {
    super("CustomUser");
    this.email = email;
    this.name = name;
    this.skills = skills;
    this.links = links;
    this.rocketChatId = null;
    this.rocketChatUsername = null;
    this.rocketChatPassword = null;
  }

  async assignChat() {
    this.rocketChatPassword = await random_string(20);
    const response = await axios.post(`${ROCKETCHAT_SERVER_URL}/api/v1/users.create`, {
          email: `user-${this.id}@reverelabs.org`,
          name: this.name,
          password: this.rocketChatPassword,
          username: `user-${this.id}`,
          joinDefaultChannels: false,
          verified: true,
        },
        {
      headers: ROCKETCHAT_ADMIN_HEADERS,
    });

  }


  async assignChatAndSave() {
    await this.save();
    await this.assignChat();
  }


}
Moralis.Object.registerSubclass("_User", CustomUser);
