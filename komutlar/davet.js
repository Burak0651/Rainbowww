const Discord = require('discord.js');
const moment = require('moment');
const efdb = require("efdb");
const db = new efdb({
  "databaseName": "database",
  "databaseFolder": "Data",
  "adapter":"YamlDB",
  "autoFile": true
});

module.exports.run = (client, message, args) => {

message.channel.send(`Davet linkini **DM**'ya Gönderdim 👋`)
message.author.send(`https://kenanpolatbot.com`)
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','Davet',`DAVET`,`Invite`,`INVITE`],
  permLevel: 0
};

module.exports.help = {
  name: 'invite',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
