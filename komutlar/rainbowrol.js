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

    message.channel.send(`Rainbow Rol Sistemi aktif hale getirildi! `)
    db.set(`rainbowrol_${message.guild.id}`, rol.id)
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rainbowrol','rainbow',`Rainbow`,`RAINBOW`,`Rainbowrol`,`RainbowRol`,`RAINBOWROL`],
  permLevel: 3
};

module.exports.help = {
  name: 'rainbowrole',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
