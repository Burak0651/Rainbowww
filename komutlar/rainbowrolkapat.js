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
message.channel.send(`Rainbow Rol Sistemi Sunucu için Databaseden Kaldırıldı.`)
db.delete(`rainbowrol_${message.guild.id}`)
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rainbowrolkapat','rainbowkapat',`Rainbowkapat`,`RAINBOWKAPAT`,`Rainbowrolkapat`,`RainbowRolKapat`,`RAINBOWROLKAPAT`],
  permLevel: 3
};

module.exports.help = {
  name: 'rainbowroleclose',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
