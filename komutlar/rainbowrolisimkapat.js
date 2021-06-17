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
message.channel.send(`Rainbow Rol Isim Sistemi Sunucu için Databaseden Kaldırıldı.`)
db.delete(`rainbowrolisim_${message.guild.id}`)

};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Rainbowrolisimkapat','RAINBOWROLISIMKAPAT',`rainbowrolenickclose`,`Rainbowrolenickclose`,`RAINBOWROLENICKCLOSE`],
  permLevel: 3
};

module.exports.help = {
  name: 'rainbowrolisimkapat',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
