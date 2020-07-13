const Discord = require("discord.js");
const fs = require("fs");
const ytdl = require("ytdl-core");
const request = require("request");
const client = new Discord.Client();
const prefix = '.';
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.dblapi, client);

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds", (err, files) => {

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) {
        return;
    }

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", () => {
   client.user.setActivity('за всеми учасниками Dairon Chat', { type: 'WATCHING' });
   const channel = client.channels.cache.get('731779489943519312');
   channel.send(`Бот запущен!`);
});

let notAllowedWords = new Array("сука", "пидор", "блять", "хуила", "хуй","мудила","шлюха","гей","чсв","бля","ска","cука",
"сюк","блет","блэт","гавно", "ахуеть","ахуел","чмо","пидр","дебил","даун","заебал","сук","соси","пососи","сосать", "жопа",
"сюк", "чмошник", "пох", "похуй", "тварь", "лох", "еблан", "хуйня","пидар", "пидарасина");

     
bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);
    
});

bot.login(process.env.BOT_TOKEN);
