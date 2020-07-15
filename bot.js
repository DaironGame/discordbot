const fs = require('fs');
const Discord = require('discord.js');
const prefix = ".";

const client = new Discord.Client();
client.commands = new Discord.Collection();

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
   client.user.setActivity('за всеми участниками Dairon Chat', { type: 'WATCHING' });
   const channel = client.channels.cache.get('731779489943519312');
   channel.send(`Бот запущен!`);
});

let notAllowedWords = new Array("6ля");

client.on('message', message => {
     //антимат
    let arrayOfStrings = message.content.toLowerCase().split(' ');
    for (mat of notAllowedWords) {
        if (arrayOfStrings.includes(mat)) {
        if (message.author.id === '531116044794855425') return;
            // let muteRole = message.guild.roles.cache.find(val => val.name === "Muted");
            // let mutetime = '30m';
            // message.guild.member(tomute).roles.add(muteRole);
            message.delete();
            message.reply("такое говорить запрещено!");
            // setTimeout(function(){
            //     message.guild.member(message.author).roles.remove(muteRole)
            // }, ms(mutetime));
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

    const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
	    command.execute(message, args);
    } catch (error) {
	    message.channel.send(error);
};

});

//new member
client.on('guildMemberAdd', member => {
    const channel = client.channels.cache.get('666330099704004649');
    channel.send(`Здравствуй, ${member}, добро пожаловать на **Dairon Chat**!`);
  });


