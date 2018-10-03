const Discord = require("discord.js");
const client = new Discord.Client();

const responseObj = {
    "<@339342096366305283>": "Gì",
    "Katane": "Hmm?",
    "katane": "Có gì hok?",
    "k:bash": "Đang bash cái gì thế...",
    "k:kick": "Đá ko khí làm gì...",
    "k:da": "Đá ko khí làm gì...",
    "k:kiss": "Đừng tự kỉ...",
    "k:kiss katane": "...*tán ngay cit*",
    "k:hun": "Đừng tự kỉ...",
    "k:hun katane": "...*tán ngay cit*",
    "k:hon": "Đừng tự kỉ...",
    "k:hon katane": "...*tán ngay cit*"
};

//ready
client.on("ready", () => {
  console.log("Mọi thứ đã sẵn sàng!");
  client.user.setActivity("'k:' để nói chuyện với tôi"); 
});

//introduce
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("k:lan") || message.content.toLowerCase().startsWith("k:currentlan") || message.content.toLowerCase().startsWith("k:ngonngu")) {
        message.channel.send("Ngôn ngữ hiện tại: __Vietnamese__");
    }
});

//language
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("k:intro") || message.content.toLowerCase().startsWith("k:gioithieu") || message.content.toLowerCase().startsWith("k:gt")) {
    message.channel.send("Em là phụ việc cá nhân của Powi");
  }
});

//bite
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("k:bite") || message.content.toLowerCase().startsWith("k:biting") || message.content.toLowerCase().startsWith("k:can")) {
    message.channel.send("Chế độ cắn người đã được kích hoạt.", {files: ["https://i.kym-cdn.com/entries/icons/mobile/000/023/459/angrydognoises.jpg"]});
  }
});

//special bash
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("*bash <@339342096366305283>") || message.content.toLowerCase().startsWith("bash <@339342096366305283>") || message.content.toLowerCase().startsWith("*<@339342096366305283> bash") || message.content.toLowerCase().startsWith("<@339342096366305283> bash") || message.content.toLowerCase().startsWith("<@339342096366305283> *bash") || message.content.toLowerCase().startsWith("<@339342096366305283> bash") || message.content.toLowerCase().startsWith("*bash* <@339342096366305283>") || message.content.toLowerCase().startsWith("*bash katane") || message.content.toLowerCase().startsWith("bash katane") || message.content.toLowerCase().startsWith("*bash* katane")
        || message.content.toLowerCase().startsWith("k:bash katane") || message.content.toLowerCase().startsWith("k:kick katane") || message.content.toLowerCase().startsWith("k:da katane")) {
    message.channel.send("*bash "+ message.author.toString() + "*");
  }
});

client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("*đập <@339342096366305283>") || message.content.toLowerCase().startsWith("đập <@339342096366305283>") || message.content.toLowerCase().startsWith("*<@339342096366305283> đập") || message.content.toLowerCase().startsWith("<@339342096366305283> đập") || message.content.toLowerCase().startsWith("<@339342096366305283> *đập") || message.content.toLowerCase().startsWith("<@339342096366305283> đập") || message.content.toLowerCase().startsWith("*đập* <@339342096366305283>") || message.content.toLowerCase().startsWith("*đập katane") || message.content.toLowerCase().startsWith("đập katane") || message.content.toLowerCase().startsWith("*đập* katane")) {
        message.channel.send("*đập " + message.author.toString() + "*");
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("*dap <@339342096366305283>") || message.content.toLowerCase().startsWith("dap <@339342096366305283>") || message.content.toLowerCase().startsWith("*<@339342096366305283> dap") || message.content.toLowerCase().startsWith("<@339342096366305283> dap") || message.content.toLowerCase().startsWith("<@339342096366305283> *dap") || message.content.toLowerCase().startsWith("<@339342096366305283> dap") || message.content.toLowerCase().startsWith("*dap* <@339342096366305283>") || message.content.toLowerCase().startsWith("*dap katane") || message.content.toLowerCase().startsWith("dap katane") || message.content.toLowerCase().startsWith("*dap* katane")) {
        message.channel.send("*dap " + message.author.toString() + "*");
    }
});

//shake hand
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("k:shake") || message.content.toLowerCase().startsWith("k:battay")) {
	if (message.author.toString() == "<@339035003243593740>" || message.author.toString() == "<@388571002143113216>" || message.author.toString() == "<@397338152403992578>") {
		message.channel.send("*bắt tay, vinh dự thật*");
	}
	else {
		message.channel.send("no");
	}
  }
});

//notify (annoying, unused)
/*client.on("message", (message) => {
  if (message.content.includes("<@339035003243593740>") && message.author.toString() != "<@339035003243593740>") {
    message.channel.send("Hey! Someone is calling you! Powi-sama! ");
  }
});*/

//only call out for her
client.on("message", (message) => {
  if(responseObj[message.content]) {
    message.channel.send(responseObj[message.content]);
  }

});

//targeted bash
client.on("message", (message) => {
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
                message.channel.send("*bash <@" + userid.id + ">*");
            }
        }
        catch (e) {
        message.reply("k:bash [@a person]");
        console.error(e.toString());
    }
    }
});

client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("k:bash ") && !message.content.toLowerCase().startsWith("k:bash katane") && !message.content.toLowerCase().startsWith("k:bash <@")) {
        var msg = message;
        msg = msg.content.slice(6);
        //console.log(msg);
        //console.log(message.author.id);
        if (msg.toString() != "") {
            message.channel.send(message.author.toString() + " muốn tui bash**" + msg.toString() + "**");
        }
    }
});

//targeted kick
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("k:kick <@") || message.content.toLowerCase().startsWith("k:da <@")) {
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
                message.channel.send("*đá " + message.author.toString() + "*");
            }
            else {
                message.channel.send("*đá <@" + userid.id + ">*");
            }
        }
        catch (e) {
            message.reply("k:kick [@a person]");
            console.error(e.toString());
        }
    }
});

client.on("message", (message) => {
    if ((message.content.toLowerCase().startsWith("k:kick ") || message.content.toLowerCase().startsWith("k:da ")) && (!message.content.toLowerCase().startsWith("k:kick katane") && !message.content.toLowerCase().startsWith("k:kick <@") && !message.content.toLowerCase().startsWith("k:da <@") && !message.content.toLowerCase().startsWith("k:da katane")) ) {
        var msg = message;
        msg = msg.content.slice(6);
        if (msg.toString() != "") {
            message.channel.send(message.author.toString() + " muốn tui đá**" + msg.toString() + "**");
        }
    }
});

//targeted kiss
client.on("message", (message) => {
    if (message.content.toLowerCase().startsWith("k:kiss <@") || message.content.toLowerCase().startsWith("k:hon <@") || message.content.toLowerCase().startsWith("k:hun <@")) {
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
                    message.channel.send("*đỏ mặt~* :heart:");
                }
                else {
                    message.channel.send("đ-đồ ngốc! *tán*");
                }
            }
            else if (userid.id = message.author.id) {
                message.channel.send(message.author.toString() + " vừa tự hun bản thân......");
            }
            else {
                message.channel.send(message.author.toString() + " vừa mới hun <@" + userid.id + ">, quao!");
            }
        }
        catch (e) {
            message.reply("k:kiss [@a person]");
            console.error(e.toString());
        }
    }
});

client.on("message", (message) => {
    if ((message.content.toLowerCase().startsWith("k:kiss ") || message.content.toLowerCase().startsWith("k:hun ") || message.content.toLowerCase().startsWith("k:hon "))
        && (!message.content.toLowerCase().startsWith("k:kiss katane") && !message.content.toLowerCase().startsWith("k:kiss <@") && !message.content.toLowerCase().startsWith("k:hun katane") && !message.content.toLowerCase().startsWith("k:hun <@") && !message.content.toLowerCase().startsWith("k:hon katane") && !message.content.toLowerCase().startsWith("k:hon <@"))) {
        var msg = message;
        msg = msg.content.slice(6);
        if (msg.toString() != "") {
            message.channel.send(message.author.toString() + " just kissed**" + msg.toString() + "**");
        }
    }
});

client.login("MzM5MzQyMDk2MzY2MzA1Mjgz.DpTk8g.sopGDWLrAypzTAUwE1rfDlxVGGA");