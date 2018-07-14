const discord = require("discord.js")
const fs = require("fs")

const prefix = "bb!"
client.on ("message", (message) => {

    msg = message.author.bot.toLowerCaste();

    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (msg.startWith (prefix + "Testdm")) {
        if (mention = null) { return; }
        message.delete();
        mentionMessage = Message.content.slice (8);
        mention.sendMessage (mentionMessage)
        message.channel.send ();
    }
});

const token = "NDY3MTI3NDQxODE5ODI4MjQ1.DimF1w.SafFKlnSVXPlzcX37nG99aLJA_k"
