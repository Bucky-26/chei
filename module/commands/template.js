const axios = require("axios");
const fs = require('fs')
module.exports = {
  config: {
    name: "test" ,
    usePrefix: true,
    description: "An example command",
    hasPermssion: 0,  //// 0|1|2   -0 all user  - 1 for admin and 3 for dev 
	credits: "OPERATOR ISOY",
	description: "",
	commandCategory: "group",
	usages: "",
	cooldowns: 5,
  },
  run: async function({ api, event, args }) {

try{
   api.sendMessage('test',event.threadID,event.messageID);
}
catch(error){
  console.log(error);
}

   
  },
};
