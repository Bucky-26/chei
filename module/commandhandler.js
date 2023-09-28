const fs = require("fs");
const path = require("path");

const commands = {};

fs.readdirSync(__dirname + "/commands").forEach((file) => {
  if (file.endsWith(".js")) {
    const command = require(path.join(__dirname + `/commands/${file}`));
    commands[command.config.name] = command;
  }
});

module.exports = {
  run: async function ({ args, event, api, prefix, config }) {
    const input = event.body.trim();
    
    if (config.maintenance.enable && !config.userVIPs.includes(event.senderID)) {
      api.sendMessage(
        "The BOT is Under Maintenance.\nTo Serve You Better\n Sorry for the inconvenience.",
        event.threadID
      );
      return;
    }

   
      handleCommandWithPrefix();
   
      handleCommandWithoutPrefix();

    function handleCommandWithPrefix() {
      const parts = input.slice(prefix.length).split(" ");
      const commandName = parts[0].toLowerCase();
      const args = parts.slice(1);
      const user = event.senderID;

      const command = commands[commandName];
				if(event.body.startsWith(prefix)){
      if (command) {
        const userPermission = config.userVIPs.includes(user) ? 1 : 0;
				if(!command.config.usePrefix && event.body.startsWith(prefix)){
					api.sendMessage("This Command didn't need a prefix",event.threadID,event.messageID);
					return false;
					}
        if (userPermission >= command.config.hasPermssion) {
          command.run({ api, event, args, commandModules: commands, config });
				
        } else {
          api.sendMessage(
            "You do not have permission to use this command.",
            event.threadID
          );
        }
      } else {
        api.sendMessage("Invalid command.", event.threadID);
      }
				}
    }

    function handleCommandWithoutPrefix() {
			
      const input = event.body.trim();
      if (config.maintenance.enable && !config.userVIPs.includes(event.senderID)) {
        api.sendMessage(
          "The BOT is Under Maintenance.\nTo Serve You Better\n Sorry for the inconvenience.",
          event.threadID
        );
        return;
      }
		
      const parts = input.split(" ");
      const commandName = parts[0].toLowerCase();
      const args = parts.slice(1);
      const user = event.senderID;

      const command = commands[commandName];

      if (command) {
        const userPermission = config.userVIPs.includes(user) ? 1 : 0;
				if(command.config.usePrefix){
					api.sendMessage("This Command didn't need a prefix",event.threadID,event.messageID);
					return false;
				}
        if (userPermission >= command.config.hasPermssion) {
          command.run({ api, event, args, commandModules: commands, config });
        } else {
          api.sendMessage(
            "You do not have permission to use this command.",
            event.threadID
          );
        }
      } 
    }
    },
  };
