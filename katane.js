const Discord = require("discord.js");
const client = new Discord.Client();

const responseObj = {
    "k:bash": "Are you trying to bash air...",
    "k:kick": "What are you trying to kick...",
    "k:kiss": "Stop kissing yourself...",
    "k:kiss katane": "...*slaps*",
    "k:punch": "Tried to punch air huh..."
};

const ran_punch = [
    "*Falcon punches ",
    "*ONE PUUUUUUUUUUUUUUUNCHes ",
    "*AP punches ",
    "*Hyper punches ",
    "*Metallic punches ",
    "*Ten tons punches ",
    "*Oraoraroraoraoraoraoraora ",
    "*Mudamudamudamudamudamuda "
];

//ready
client.on("ready", () => {
  console.log("Everything loaded!");
  client.user.setActivity("k:help"); 
});

//message
client.on("message", (message) => {

    //hint
    if (message.content.toLowerCase().startsWith("k:help") || message.content.toLowerCase().startsWith("k:?")) {
        message.channel.send("```Available commands (starts with k:)\nintro, lan, currentlan, bite, pm, bash, kick, kiss, punch, shake, hug```");
    }

    //call out for her
    if (message.content.toLowerCase().startsWith("katane") || message.content.toLowerCase().startsWith("<@339342096366305283>")) {
        if (message.author.toString() == "<@339035003243593740>") {
            message.channel.send("Yes, Master?");
        }
        else {
            message.channel.send("What?");
        }
    }

    //private message
    if (message.content.toLowerCase().startsWith("k:pm")) {
        message.author.send("Hey there!");
    }

    //introduce
    if (message.content.toLowerCase().startsWith("k:intro")) {
    message.channel.send("I'm Powi's personal maid");
    }

    //language
    if (message.content.toLowerCase().startsWith("k:lan") || message.content.toLowerCase().startsWith("k:currentlan") || message.content.toLowerCase().startsWith("k:ngonngu")) {
        message.channel.send("Current language: __English__");
    }

    //bite
    if (message.content.toLowerCase().startsWith("k:bite") || message.content.toLowerCase().startsWith("k:biting")) {
        message.channel.send("Biting mode, activated.", { files: ["https://i.kym-cdn.com/entries/icons/mobile/000/023/459/angrydognoises.jpg"] });
    }

    //special bash
    if (message.content.toLowerCase().startsWith("*bash <@339342096366305283>") || message.content.toLowerCase().startsWith("bash <@339342096366305283>") || message.content.toLowerCase().startsWith("*<@339342096366305283> bash") || message.content.toLowerCase().startsWith("<@339342096366305283> bash") || message.content.toLowerCase().startsWith("<@339342096366305283> *bash") || message.content.toLowerCase().startsWith("<@339342096366305283> bash") || message.content.toLowerCase().startsWith("*bash* <@339342096366305283>") || message.content.toLowerCase().startsWith("*bash katane") || message.content.toLowerCase().startsWith("bash katane") || message.content.toLowerCase().startsWith("*bash* katane")
        || message.content.toLowerCase().startsWith("k:bash katane") || message.content.toLowerCase().startsWith("k:kick katane") || message.content.toLowerCase().startsWith("k:punch katane")) {
        message.channel.send("*bash " + message.author.toString() + "*");
    }

    //shake hand
    if (message.content.toLowerCase().startsWith("k:shake")) {
        if (message.author.toString() == "<@339035003243593740>" || message.author.toString() == "<@388571002143113216>" || message.author.toString() == "<@397338152403992578>") {
            message.channel.send("*shakes hand, shaky shaky*");
        }
        else {
            message.channel.send("no");
        }
    }

    //respondeObject stuffs
    if (responseObj[message.content]) {
        message.channel.send(responseObj[message.content]);
    }

    //targeted bash
    if (message.content.toLowerCase().startsWith("k:bash <@")) {
        var msg = message;
        try {
            var userid;
            msg = msg.content.split(' ');
            if (msg[1].startsWith("<@!")) {
                userid = client.users.get(msg[1].replace('<@!', '').slice(0, -1));
            }
            else {
                userid = client.users.get(msg[1].replace('<@', '').slice(0, -1));
            }
            //console.log(msg);
            console.log(msg[1].replace('<@!', '').slice(0, -1));
            console.log(userid);
            if (userid.id == 339342096366305283) {
                message.channel.send("*bash " + message.author.toString() + "*");
            }
            else {
                message.channel.send(("*bash <@" + userid.id + ">*"), { files: ["./gifs/tenor.gif"] });
            }
        }
        catch (e) {
            message.reply("k:bash [@a person]");
            console.error(e.toString());
        }
    }

    if (message.content.toLowerCase().startsWith("k:bash ") && !message.content.toLowerCase().startsWith("k:bash katane") && !message.content.toLowerCase().startsWith("k:bash <@")) {
        var msg = message;
        msg = msg.content.slice(6);
        //console.log(msg);
        //console.log(message.author.id);
        if (msg.toString() != "") {
            message.channel.send(message.author.toString() + " wanted me to bash**" + msg.toString() + "**");
        }
    }

    //targeted kick
    if (message.content.toLowerCase().startsWith("k:kick <@")) {
        var msg = message;
        try {
            var userid;
            msg = msg.content.split(' ');
            if (msg[1].startsWith("<@!")) {
                userid = client.users.get(msg[1].replace('<@!', '').slice(0, -1));
            }
            else {
                userid = client.users.get(msg[1].replace('<@', '').slice(0, -1));
            }
            //console.log(msg);
            console.log(msg[1].replace('<@!', '').slice(0, -1));
            console.log(userid);
            if (userid.id == 339342096366305283) {
                message.channel.send("*kick " + message.author.toString() + "*");
            }
            else {
                message.channel.send("*kick <@" + userid.id + ">*");
            }
        }
        catch (e) {
            message.reply("k:kick [@a person]");
            console.error(e.toString());
        }
    }

    if (message.content.toLowerCase().startsWith("k:kick ") && !message.content.toLowerCase().startsWith("k:kick katane") && !message.content.toLowerCase().startsWith("k:kick <@")) {
        var msg = message;
        msg = msg.content.slice(6);
        if (msg.toString() != "") {
            message.channel.send(message.author.toString() + " wanted me to kick**" + msg.toString() + "**");
        }
    }

    //targeted kiss
    if (message.content.toLowerCase().startsWith("k:kiss <@")) {
        var msg = message;
        try {
            var userid;
            msg = msg.content.split(' ');
            if (msg[1].startsWith("<@!")) {
                userid = client.users.get(msg[1].replace('<@!', '').slice(0, -1));
            }
            else {
                userid = client.users.get(msg[1].replace('<@', '').slice(0, -1));
            }
            //console.log(msg);
            console.log(msg[1].replace('<@!', '').slice(0, -1));
            console.log(userid);
            if (userid.id == 339342096366305283) {
                if (message.author.toString() == "<@339035003243593740>") {
                    message.channel.send("*blush~* :heart:");
                }
                else {
                    message.channel.send("b-baka! *slaps*");
                }
            }
            else if (userid.id = message.author.id) {
                message.channel.send(message.author.toString() + " did a self-kiss... weirdo...");
            }
            else {
                message.channel.send(message.author.toString() + " kissed <@" + userid.id + ">, omg!");
            }
        }
        catch (e) {
            message.reply("k:kiss [@a person]");
            console.error(e.toString());
        }
    }

    if (message.content.toLowerCase().startsWith("k:kiss ") && !message.content.toLowerCase().startsWith("k:kiss katane") && !message.content.toLowerCase().startsWith("k:kiss <@")) {
        var msg = message;
        msg = msg.content.slice(6);
        if (msg.toString() != "") {
            message.channel.send(message.author.toString() + " just kissed**" + msg.toString() + "**");
        }
    }

    //hug (self-TODO)
    if (message.content.toLowerCase().startsWith("k:hug")){
        message.channel.send(("*hug " + message.author.toString() + "*"), { files: ["https://media.giphy.com/media/CZpro4AZHs436/giphy.gif"] });
    }

    //targeted punch
    if (message.content.toLowerCase().startsWith("k:punch <@")) {
        var msg = message;
        try {
            var userid;
            msg = msg.content.split(' ');
            if (msg[1].startsWith("<@!")) {
                userid = client.users.get(msg[1].replace('<@!', '').slice(0, -1));
            }
            else {
                userid = client.users.get(msg[1].replace('<@', '').slice(0, -1));
            }
            //console.log(msg);
            console.log(msg[1].replace('<@!', '').slice(0, -1));
            console.log(userid);
            if (userid.id == 339342096366305283) {
                message.channel.send("*punch " + message.author.toString() + "*");
            }
            else {
                message.channel.send((ran_punch[Math.floor(Math.random() * ran_punch.length)]) + "<@" + userid.id + ">*");
            }
        }
        catch (e) {
            message.reply("k:punch [@a person]");
            console.error(e.toString());
        }
    }

    if (message.content.toLowerCase().startsWith("k:punch ") && !message.content.toLowerCase().startsWith("k:punch katane") && !message.content.toLowerCase().startsWith("k:punch <@")) {
        var msg = message;
        msg = msg.content.slice(6);
        if (msg.toString() != "") {
            message.channel.send(message.author.toString() + " wanted me to punch**" + msg.toString() + "**");
        }
    }
});

client.login("");