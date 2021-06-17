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
message.channel.send(`Rainbow Sunucu Isim Sistemi Sunucu için Databaseden Kaldırıldı.`)
db.delete(`rainbowsunucuisim_${message.guild.id}`)

};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rainbowsunucukapat','Rainbowsunucukapat',`RAINBOWSUNUCUKAPAT`,`rainbowsvkapat`,`Rainbowsvkapat`],
  permLevel: 3
};

module.exports.help = {
  name: 'rainbowsunucuisimkapat',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
