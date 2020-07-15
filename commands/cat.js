const Discord = require('discord.js');
const superagent = require('superagent');
const sf = require("snekfetch");

exports.run = async (client, message, args) => {
    const { body } = await superagent
    .get("http://aws.random.cat/meow");

    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Вот твой котик")
    .setImage(body.file) 
    .setFooter(`DaironChat','https://cdn.discordapp.com/attachments/698215230114889759/730748859084570674/pack.png`);
    message.channel.send({embed});
};
//    aliases: [],
   