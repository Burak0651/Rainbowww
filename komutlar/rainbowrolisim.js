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
    let rol = message.mentions.roles.first() 

    if(!rol) return message.reply(`Lütfen Renk değişicek Rolu etiketleyiniz.`)
if(!args[1]) return message.reply(`Lütfen Değişicek İsim (1) yazınız.`)
if(!args[2]) return message.reply(`Lütfen Değişicek İsim (2) yazınız.`)
if(!args[3]) return message.reply(`Lütfen Değişicek İsim (3) yazınız.`)
    message.channel.send(`Rainbow Rol İsim Sistemi aktif hale getirildi! `)
    db.set(`rainbowrolisim_${message.guild.id}`, rol.id)
    db.set(`rainbowrolisim1_${rol.id}`, args[1])
    db.set(`rainbowrolisim2_${rol.id}`, args[2])
    db.set(`rainbowrolisim3_${rol.id}`, args[3])
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Rainbowrolisim','RAINBOWROLISIM',`rainbowrolenick`,`Rainbowrolenick`,`RAINBOWROLENICK`],
  permLevel: 3
};

module.exports.help = {
  name: 'rainbowrolisim',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
