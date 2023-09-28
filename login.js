const login = require("fca-unofficial");
const fs = require("fs");
const config = require("./config.json");
const prefix = config.prefix
function botstart() {
	try {
		const platform = process.platform; 
		let userAgent;

		login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {
			if (err) return console.error(err);

			if (platform === "win32") {
				userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36";
			} else if (platform === "android") {
				userAgent = "Mozilla/5.0 (Linux; Android 11; SM-G991U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.50 Mobile Safari/537.36";
			} else {
				userAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/95.0.4638.50 Mobile/15E148 Safari/604.1";
			}

			api.setOptions({
				forceLogin: true,
				listenEvents: true,
				logLevel: "silent",
				selfListen: false,
				userAgent: userAgent,
			});

			const eventhandler = require("./module/eventhandler.js");
			eventhandler.run({ api, config,prefix });
			console.log("test1");
		});
	} catch (error) {
		console.error(error);
	}
	
}

module.exports = {
	botstart,
};
