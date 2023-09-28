const fs = require("fs");
const { spawn } = require("child_process");
const colors = require("colors");
const logger = console.log;
const express = require('express');
const app = express();
const env = require('replit-env');
env();
const port = process.env.PORT || 5000
    L0=console.log("Hello, world!"); 
const { botstart } = require("./login.js");
try{
	
app.listen(port, () =>
	logger(`Your app is listening a http://localhost:${port}`, "[ ONLINE ]")
     );      
app.use(express.json());

app.post("/updateAppstate", (req, res) => {
  const newstate = req.body.appstate;

  fs.writeFile("appstate.json", JSON.stringify(newstate, null, 2), (err) => {
    if (err) {
      console.error("Error writing to appstate.json:", err);
      res.status(500).json({ error: "Failed to update appstate" });
    } else {
      console.log("Updated appstate:", newstate);
      res.json({ success: true, appstate: newstate });
    }
  });
});

logger("Opened server site...", "[ Starting ]");
logger("[ ISOY DEV ] >>>>>> Bot Starting Please Wait".cyan);
botstart();
// Start sessions
logger("[ ISOY DEV ] >".red, "CODED BY: ISOY DEV".blue);
	logger("[ ISOY DEV ] Thanks For Using My BOT");
app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'))
}catch(error){
	
}
