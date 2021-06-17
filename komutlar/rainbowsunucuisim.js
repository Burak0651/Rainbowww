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
 
if(!args[0]) return message.reply(`Lütfen Değişicek İsim (1) yazınız.`)
if(!args[1]) return message.reply(`Lütfen Değişicek İsim (2) yazınız.`)
if(!args[2]) return message.reply(`Lütfen Değişicek İsim (3) yazınız.`)
    message.channel.send(`Rainbow Sunucu İsim Sistemi aktif hale getirildi! `)
    db.set(`rainbowsunucuisim_${message.guild.id}`, message.guild.id)
    db.set(`rainbowsunucuisim1_${message.guild.id}`, args[0])
    db.set(`rainbowsunucuuisim2_${message.guild.id}`, args[1])
    db.set(`rainbowsunucuisim3_${message.guild.id}`, args[2])
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rainbowsunucu','Rainbowsunucu',`RAINBOWSUNUCU`,`rainbowsv`,`rainbowsunucuisim`],
  permLevel: 3
};

module.exports.help = {
  name: 'Rainbowsv',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
