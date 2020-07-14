const Commando = require('discord.js-commando');
const request = require('request'); 
const Discord = require('discord.js');

module.exports = {
	name: 'cat',
	description: 'котики.',
	execute(message, args) {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let emb = new Discord.MessageEmbed()
                     .setImage(body)
                     .setColor("#00ff00")
                     .setTitle("Вот твой рандомный кот");
                              
                   message.channel.send(emb)  
            }
        });
	},
};
