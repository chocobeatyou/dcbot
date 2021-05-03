const discord = require("discord.js");
const botConfig = require ("./botconfig.json");
const fs = require("fs");

const client = new discord.Client();
client.login(botConfig.token);

client.on("ready", async () => {

    console.log(`${client.user.username} is online!`)
    client.user.setActivity("Testen", {type: "Playing"});

});

client.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    var prefix = botConfig.prefix;
    var messageArray = message.content.split(" ");
    var command = messageArray[0];

    if(command === `${prefix}hallo`){
        return message.channel.send("Hallo!");
    }

    if(command === `${prefix}rules`){
       
        var botEmbed = new discord.MessageEmbed()
        .setColor("#fff400")
        .setTitle("Rules")
        .setDescription("Server Rules")
        .addFields(
            {name: "Rule 1", value: "Be respectful to all users and staff"},
            {name: "Rule 2", value: "No racism or any form of discrimination allowed"},
            {name: "Rule 3", value: "No NSFW content allowed"},
            {name: "Rule 4", value: "No Files"},
            {name: "Rule 5", value: "No spamming or advertising of any kind"},
            {name: "Rule 6", value: "NO LEAKING, this will lead to a instant ban"},
            {name: "Rule 7", value: "Have fun!"},
            {name: "\u200b", value: "We take these rules seriously. Any direct breach of these rules could result in a mute or ban."}
        )
        .setFooter("Make sure to check every rule!", "https://wallpaperaccess.com/full/379970.jpg");
       
       return message.channel.send(botEmbed); 
    }




});

bot.login(process.env.token);