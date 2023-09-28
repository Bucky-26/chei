module.exports = {
  run: async function ({ api, config ,prefix}) {
		const path = require("path");
const fs = require("fs");

  ///   const greetwelcome = require(__dirname + "/scheduledevent/greet.js");
    const commandhandler = require(__dirname + "/commandhandler.js");

    api.listenMqtt(async (err, event) => {
      if (err) return console.error(err);

      if (event.type === 'message' || event.type === 'message_reply') {
        const parts = event.body.trim().split(" ");
        const args = parts.slice(1);
					   commandhandler.run({ args, event, api,prefix,config });
				
      } else if (event.type === 'event') {
        switch (event.logMessageType) {
          case 'log:subscribe':
		
						break;
          case 'log:unsubscribe':
            break;
          default:
            break;
        }
      }
    });
  },
};
