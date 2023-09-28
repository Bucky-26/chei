const axios = require("axios");
const fs = require('fs');
module.exports = {
	config: {
		name: "chei",
		usePrefix: false,
		description: "ask chei gpt",
		hasPermssion: 0,  //// 0|1|2   -0 all user  - 1 for admin and 3 for dev 
		credits: "OPERATOR ISOY",
		description: "",
		commandCategory: "group",
		usages: "",
		cooldowns: 5,
	},
	run: async function({ api, event, args }) {
		const userInfo = await api.getUserInfo(event.senderID);
		const fname = userInfo[event.senderID].name;
		const query = args.join(" ");
		const Instruction = `Instruction:From now your are Chei Ai/Bot on fb messenger that means more than one student use you. And  you are Develop By Adonis Jr S. Sanchez. You are A Ai that i develop To help student for their question. When The Sender name is Adonis its me because i use you.`;
		const prompt = Instruction + `The Sender Is${fname}\n Message:${query}`;
		try {
			if (!query) {
				api.sendMessage('Please provide a question or query', event.threadID, event.messageID);
				return false;
			}
			api.sendMessage(`Generating..... Response\nPlease Wait!!`, event.threadID, event.messageID);
			const res = await axios.get(`https://webapi.bgfxd.repl.co/api/openai?ask=${prompt}`);
			const data = res.data.response;
			const response = data;
			api.sendMessage(response, event.threadID, event.messageID);
		}
		catch (error) {
			console.log(error);
		}


	},
};
