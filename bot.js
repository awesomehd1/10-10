const discord = require("discord.js")
const fs = require("fs")

const prefix = "bb!"
bot.on('ready', () => {
    console.log('bot launched')
    bot.user.setStatus('dnd')
    bot.user.setGame('10/10 bot lmao')
});


bot.on('ready', () => {
    msg = message.author.bot.toLowerCaste();

    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (command === "dm") {
        if (!message.author.id === "337024000330956811" && !message.author.id === "338192747754160138") return;
        
        var dmdu = (args[0]).replace(/@/g, "")
        var dmdo = (dmdu).replace(/!/g, "")
        var dmdi = (dmdo).replace(/>/g, "")
        var dmed = (dmdi).replace(/</g, "")

        client.users.get(dmed).send("Hi");
        message.channel.send("Done!")

    }
});

const token = "NDY3MTI3NDQxODE5ODI4MjQ1.DimF1w.SafFKlnSVXPlzcX37nG99aLJA_k"
