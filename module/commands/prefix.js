const axios = require("axios");
const fs = require('fs')
module.exports = {
  config: {
    name:  "prefix",
    usePrefix: false,
    description: "Show The Bot Prefix",
    hasPermssion: 0,  //// 0|1|2   -0 all user  - 1 for admin and 3 for dev 
	credits: "OPERATOR ISOY",
	description: "",
	commandCategory: "group",
	usages: "",
	cooldowns: 5,
  },
  run: async function({ api, event, args,config }) {
const prefix = config.prefix;
try{
   api.sendMessage(`Hi Idol my prefix is [ ${prefix} ]`,event.threadID,event.messageID);
}
catch(error){
  console.log(error);
}

   
  },
};
