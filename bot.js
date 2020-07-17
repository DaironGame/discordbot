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
//    client.channels.cache.get("731779489943519312").send(`Нажми на эмодзи, чтобы получить/убрать роль!`)
//     .then((message) => {
//       message.react("1⃣");
//       messageId = message.id;
//     });
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


//role give
// const events = {
// 	MESSAGE_REACTION_ADD: 'messageReactionAdd',
// 	MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
// };

// client.on('raw', async event => {
//   if (!events.hasOwnProperty(event.t)) return;
//   const { d: data } = event;
//   const user = client.users.cache.get(data.user_id);
//   const channel = client.channels.cache.get(data.channel_id) || await user.createDM();
//   if (channel.messages.cache.has(data.message_id)) return;
//   const message = await channel.messages.fetch(data.message_id);
//   const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
//   const reaction = message.reactions.cache.get(emojiKey);
//   client.emit(events[event.t], reaction, user);
// });

// client.on('messageReactionAdd', (reaction, user) => {
//   let member = client.guilds.cache.get("731531101721329735").members.find(x => x.id == user.id);
//       if (reaction.emoji.name === "1⃣") {
//         let role = client.guilds.cache.get("731531101721329735").roles.find(x => x.name === "Цвет");
//         member.role.add(role)
// 			.catch((e)=>{});
//       }      
// })

// client.on('messageReactionRemove', (reaction, user) => {
//   let member = client.guilds.first().members.find(x => x.id == user.id);
//     if (reaction.message.id == messageId) {
//       if (reaction.emoji.name === "1⃣") {
//         let role = client.guilds.first().roles.find(x => x.name === "Цвет");
//         member.removeRole(role)
// 			.catch((e)=>{});
//       }      
//     } 
// })

