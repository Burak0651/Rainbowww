const Discord = require('discord.js');
const moment = require('moment');
const efdb = require("efdb");
const db = new efdb({
  "databaseName": "database",
  "databaseFolder": "Data",
  "adapter":"YamlDB",
  "autoFile": true
});
const os = require('os');
const { stripIndents } = require('common-tags');
require('moment-duration-format');

//çalda ananı ...
module.exports.run = (bot, message, args) => {
    const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.MessageEmbed()
    
        
    .setAuthor(`KPGOLD`, bot.user.avatarURL())
    .setTitle("Kenan Polat")
    .setURL("https://kenanpolatbot.com")
    .setDescription(`RzayevKenan.COM Tarafından Doğrulanmıştır!`)
    .addField(`Kullanılan RAM Miktarı`,`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,true)
    .addField(`Toplam RAM Miktarı`,`3 GB`,true)
    .addField(`Toplam sunucu sayısı`,bot.guilds.cache.size,true)
    
    .setColor("BLUE")
    
    .addField(`**Bilgi**`,`${bot.guilds.cache.size}, Sunucu. / ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}, Üye! **\n[Durum](https://kenanpolatbot.com/durum/)`)
    .setTimestamp()
    .addField(`**Kenan Polat System**`,`https://kenanpolatbot.com/durum/`)
    .setFooter(`RzayevKenan.COM`, bot.user.avatarURL())
   
    message.channel.send(embed)
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botbilgi','Botbilgi',`BOTBILGI`,`bilgi`,`Bilgi`,`BILGI`,`i`,`I`,`istatistik`],
  permLevel: 0
};

module.exports.help = {
  name: 'BotBilgi',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
