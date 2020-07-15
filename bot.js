const fs = require('fs');
const Discord = require('discord.js');
const prefix = ".";

const client = new Discord.Client();
client.commands = new Discord.Collection();
//добавление бд
client.tokens = require ("./tokens.json");

client.login(process.env.BOT_TOKEN).catch((err) => {
    process.exit(0);
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
};

client.on("ready", () => {
   console.log("Бот запущен!");
   client.user.setActivity('за всеми учасниками Dairon Chat', { type: 'WATCHING' });
   const channel = client.channels.cache.get('731779489943519312');
   channel.send(`Бот запущен!`);
});

let notAllowedWords = new Array("сука", "пидор", "блять", "хуила", "хуй","мудила","шлюха","гей","чсв","бля","ска","cука",
"сюк","блет","блэт","гавно", "ахуеть","ахуел","чмо","пидр","дебил","даун","заебал","сук","соси","пососи","сосать", "жопа",
"сюк", "чмошник", "пох", "похуй", "тварь", "лох", "еблан", "хуйня","пидар", "пидарасина","окси","дурак","плохой","дебил","oкси","окcи");


client.on('message', message => {

     //антимат
    let arrayOfStrings = message.content.toLowerCase().split(' ');
    for (mat of notAllowedWords) {
        if (arrayOfStrings.includes(mat)) {
            message.delete();
            message.reply("такое говорить запрещено!");
            return;
        };
    };

    //проверка на комманду и т.п.
    if (!message.content.startsWith(prefix) || message.author.bot || message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let commandName = messageArray[0].slice(prefix.length).toLowerCase();
    let args = messageArray.slice(1);

    //say
    if (commandName === 'say' && message.author.id === '531116044794855425') {
        const channel = client.channels.cache.get(args[0]);
        channel.send(args.slice(1).join(" "));
    };

    if (commandName === 'dcfa') {
        function noticement() {
            let ranColor = "#" + Math.random().toString(16).slice(2, 8);
            let inviteEmb = new Discord.MessageEmbed()
             .setColor(ranColor)
             .setTitle('Уведомление')
             .setDescription('**Заходи на лучший сервер**\n**бравл старс в майнкрафте!**\n \nАйпи: `daironcraft.xyz`\nВерсия: `1.12.2 optifine`');
            message.channel.send(inviteEmb)
        };
    };

    if (commandName === 'bal' || commandName === 'balance') {
        clientInformation.tokens [message.author.username] = {
            tokens: ''
           }
           fs.writeFile ("./tokens.json", JSON.stringify [message, null, 4], err => {
               if (err) throw(err);
               message.channel.send('writen')
           })
    };

    if (!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);

    try {
	    command.execute(message, args);
    } catch (error) {
	    console.error(error);
};

});

//new member
client.on('guildMemberAdd', member => {
    const channel = client.channels.cache.get('666330099704004649');
    channel.send(`Здравствуй, ${member}, добро пожаловать на **Dairon Chat**!`);
  });
