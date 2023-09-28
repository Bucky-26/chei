module.exports = {
 run: async function ({ args, event, api, prefix, config }){
	 const botname = config.botname;
 const message = `[📣]Bot Update[📣]\n[🎗️] ${botname} is Added on New Group Chat\n
 [🎗️]GroupName:\nAdded By\nDate:`;
	 api.sendMessage(,event.threadID);
	 
 },
};