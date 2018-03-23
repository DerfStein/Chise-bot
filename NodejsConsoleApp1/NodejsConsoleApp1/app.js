const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const fs = require("fs");


client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    switch (command) {
        case "help":
            message.channel.send("Available commands: Who are you?(must put the question mark), and bffs");
            break;

        case "Who are you?":
            message.channel.send("I am a bot created by Derf Stein, based on the main character of The Ancient Magus Bride. It is also Derf´s first bot created.");
            break;

        case "bffs":
            message.channel.send("Ocarina, Cana, Twin Sis Kat, Skittles, Felix, Aiko, Umbra, Ryan, and some people I can´t remember rn (dammit derf XD).");
            break;
        case "prefix":
            let newPrefix = message.content.split(" ").slice(1, 2)[0];
            config.prefix = newPrefix;
            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
            break;
    }
});

client.login(config.token);