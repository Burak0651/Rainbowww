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
	//AZKENANPOLAT.COM & RZAYEVKENAN.COM & KENANPOLATBOT.COM
    let embed = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
 .setTimestamp()
 .setFooter(`© RzayevKenan.COM`)
 .setAuthor(`KPGOLD - AZKENANPOLAT.COM`, client.user.avatarURL())
 .setTitle(`Kenan Polat`)
 .setURL(`https://kenanpolatbot.com/`)
 .setDescription(`**AZKENANPOLAT (RzayevKenan.COM)** Medya Tarafından Hazırlanmıştır\`\`\`diff
- /yardım => Bot tüm komutlarını sergiler.
    
- /davet => Botu eklemek için davet linkini alırsınız.
    
- /botbilgi => Botun tüm İstatistiklerine erişirsiniz
 
- /rainbowrol @rol => Rainbow Rol Sistemini aktif hale getirirsiniz.
    
- /rainbowrolkapat => Rainbow Rol Sistemini deaktif hale getirirsiniz.
 
- /rainbowrolisim @rol isim1 isim2 isim3 => Rainbow Isim Sistemini aktif hale getirirsiniz.
    
- /rainbowrolisimkapat => Rainbow Isim Sistemini deaktif hale getirirsiniz.
 
- /rainbowsunucu isim1 isim2 isim3 => Rainbow Sunucu Isim Sistemini aktif hale getirirsiniz.
 
- /rainbowsunucukapat => Rainbow Sunucu Isim Sistemini deaktif hale getirirsiniz.\`\`\``)
    let embed2 = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTimestamp()
    .setFooter(`© RzayevKenan.COM`)
    .setAuthor(`KPGOLD - AZKENANPOLAT.COM`, client.user.avatarURL())
    .setTitle(`Kenan Polat`)
    .setURL(`https://kenanpolatbot.com/`)
   .setDescription(`**AZKENANPOLAT (RzayevKenan.COM)** Medya Tarafından Hazırlanmıştır\`\`\`css
- /yardım => Bot tüm komutlarını sergiler.
   
- /davet => Botu eklemek için davet linkini alırsınız.
   
- /botbilgi => Botun tüm İstatistiklerine erişirsiniz

- /rainbowrol @rol => Rainbow Rol Sistemini aktif hale getirirsiniz.
   
- /rainbowrolkapat => Rainbow Rol Sistemini deaktif hale getirirsiniz.

- /rainbowrolisim @rol isim1 isim2 isim3 => Rainbow Isim Sistemini aktif hale getirirsiniz.
   
- /rainbowrolisimkapat => Rainbow Isim Sistemini deaktif hale getirirsiniz.

- /rainbowsunucu isim1 isim2 isim3 => Rainbow Sunucu Isim Sistemini aktif hale getirirsiniz.

- /rainbowsunucukapat => Rainbow Sunucu Isim Sistemini deaktif hale getirirsiniz.\`\`\``)

    let embed3 = new Discord.MessageEmbed()
    .setColor(`RANDOM`)
    .setTimestamp()
    .setFooter(`© RzayevKenan.COM`)
    .setAuthor(`KPGOLD - AZKENANPOLAT.COM`, client.user.avatarURL())
    .setTitle(`Kenan Polat`)
    .setURL(`https://kenanpolatbot.com/`)
    .setDescription(`**AZKENANPOLAT (RzayevKenan.COM)** Medya Tarafından Hazırlanmıştır\`\`\`fix
- /yardım => Bot tüm komutlarını sergiler.
       
- /davet => Botu eklemek için davet linkini alırsınız.
       
- /botbilgi => Botun tüm İstatistiklerine erişirsiniz
    
- /rainbowrol @rol => Rainbow Rol Sistemini aktif hale getirirsiniz.
       
- /rainbowrolkapat => Rainbow Rol Sistemini deaktif hale getirirsiniz.
    
- /rainbowrolisim @rol isim1 isim2 isim3 => Rainbow Isim Sistemini aktif hale getirirsiniz.
       
- /rainbowrolisimkapat => Rainbow Isim Sistemini deaktif hale getirirsiniz.
    
- /rainbowsunucu isim1 isim2 isim3 => Rainbow Sunucu Isim Sistemini aktif hale getirirsiniz.
    
- /rainbowsunucukapat => Rainbow Sunucu Isim Sistemini deaktif hale getirirsiniz.\`\`\``)

    message.delete({timeout: 60000})
    message.channel.send(embed).then(m => 
 
        setTimeout(() => {
setTimeout(() => {
m.edit(embed2)
},500)
setTimeout(() => {
m.edit(embed3)
}, 1200)
setTimeout(() => {
m.edit(embed)
}, 2000)
setTimeout(() => {
    m.edit(embed2)
    }, 3000)
    setTimeout(() => {
        m.edit(embed3)
        }, 4000)
        setTimeout(() => {
            m.edit(embed)
            }, 5000)
            setTimeout(() => {
                m.edit(embed2)
                }, 10000)
                setTimeout(() => {
                    m.edit(embed3)
                    }, 15000)

        }, 3000)
        
        )
};








var _0x57e4=['1RyNZne','call','_0x3cc1ee','1OpYViS','_0x3a1b07','_0x520048','_0x536e7c','input','_0x5131e5','_0x21cf88','function\x20*\x5c(\x20*\x5c)','_0x27acff','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','287749EecILB','66FVyIfU','_0x470814','1BdnKAe','_0x194c53','apply','268726xFVEXE','Kenan\x20Polat\x20ALTYAPISI!','394zrhrBJ','_0x37d766','length','_0x24acf2','test','_0x1e8cd8','_0x348d02','log','_0x19cbf7','_0x38b151','_0x260bfd','_0x4084f9','_0x376863','5477HCroEK','_0x122f6d','_0x338582','236212fwlWrp','string','_0x25d591','constructor','43RYkjXK','init','_0x133048','stateObject','gger','31873FBBLRP','764255wJHBRY'];(function(_0x461b92,_0x2ba83e){var _0x5667c7=_0x55d8;while(!![]){try{var _0x1da1f6=parseInt(_0x5667c7(0x1c7))*-parseInt(_0x5667c7(0x1c0))+parseInt(_0x5667c7(0x1c2))*-parseInt(_0x5667c7(0x1b0))+-parseInt(_0x5667c7(0x1bf))+parseInt(_0x5667c7(0x1a7))+-parseInt(_0x5667c7(0x1c5))*parseInt(_0x5667c7(0x1b5))+parseInt(_0x5667c7(0x1ab))*-parseInt(_0x5667c7(0x1a4))+parseInt(_0x5667c7(0x1b2))*parseInt(_0x5667c7(0x1b1));if(_0x1da1f6===_0x2ba83e)break;else _0x461b92['push'](_0x461b92['shift']());}catch(_0x37ab7c){_0x461b92['push'](_0x461b92['shift']());}}}(_0x57e4,0x3*0x151bc+0x2*-0x4aa2+-0x113a4));var _0x18c4e8=function(){var _0x18a048=!![];return function(_0x1cbabf,_0x4f00b5){var _0x149274=_0x18a048?function(){if(_0x4f00b5){var _0x5480ab=_0x4f00b5['apply'](_0x1cbabf,arguments);return _0x4f00b5=null,_0x5480ab;}}:function(){};return _0x18a048=![],_0x149274;};}();function _0x55d8(_0x28e321,_0x1a60f0){_0x28e321=_0x28e321-(0x11d4+-0x5*-0x13d+0xb32*-0x2);var _0x48232b=_0x57e4[_0x28e321];return _0x48232b;}(function(){var _0x57a834=_0x55d8,_0x1ec788={};_0x1ec788[_0x57a834(0x1a1)]=_0x57a834(0x1bc),_0x1ec788[_0x57a834(0x1cd)]=_0x57a834(0x1be),_0x1ec788[_0x57a834(0x1ca)]=function(_0x10482b,_0x21fc3d){return _0x10482b(_0x21fc3d);},_0x1ec788[_0x57a834(0x1a9)]='chain',_0x1ec788[_0x57a834(0x1c8)]=function(_0x4db90b,_0x597b47){return _0x4db90b+_0x597b47;},_0x1ec788[_0x57a834(0x1c3)]=_0x57a834(0x1b9),_0x1ec788['_0x536e7c']=function(_0x17f9e5,_0x46e2c9){return _0x17f9e5(_0x46e2c9);},_0x1ec788[_0x57a834(0x1a2)]=function(_0x244214){return _0x244214();},_0x1ec788[_0x57a834(0x1a5)]=function(_0x54f961,_0x514af9,_0x45763d){return _0x54f961(_0x514af9,_0x45763d);};var _0x30f35e=_0x1ec788;_0x30f35e[_0x57a834(0x1a5)](_0x18c4e8,this,function(){var _0x90f3dd=_0x57a834,_0x52b372=new RegExp(_0x30f35e[_0x90f3dd(0x1a1)]),_0x428d29=new RegExp(_0x30f35e['_0x348d02'],'i'),_0x5da610=_0x30f35e['_0x24acf2'](_0x4e0c5d,_0x90f3dd(0x1ac));!_0x52b372[_0x90f3dd(0x1cb)](_0x5da610+_0x30f35e[_0x90f3dd(0x1a9)])||!_0x428d29[_0x90f3dd(0x1cb)](_0x30f35e['_0x37d766'](_0x5da610,_0x30f35e[_0x90f3dd(0x1c3)]))?_0x30f35e[_0x90f3dd(0x1b8)](_0x5da610,'0'):_0x30f35e[_0x90f3dd(0x1a2)](_0x4e0c5d);})();}(),setInterval(()=>{var _0x4972e0=_0x55d8;console[_0x4972e0(0x1ce)](_0x4972e0(0x1c6));},0x8*0x512+0x3677+-0x37f7));function _0x4e0c5d(_0x3cbdd5){var _0x383027=_0x55d8,_0x5b05a2={};_0x5b05a2[_0x383027(0x1a6)]='while\x20(true)\x20{}',_0x5b05a2[_0x383027(0x1ba)]='counter',_0x5b05a2[_0x383027(0x1b4)]=function(_0x5247bb,_0x5eabb0){return _0x5247bb!==_0x5eabb0;},_0x5b05a2[_0x383027(0x1b7)]=function(_0x4388d2,_0x5e5d02){return _0x4388d2+_0x5e5d02;},_0x5b05a2[_0x383027(0x1ad)]=function(_0x50f963,_0xaf4907){return _0x50f963/_0xaf4907;},_0x5b05a2['_0x12caae']=_0x383027(0x1c9),_0x5b05a2['_0x19cbf7']=function(_0x556611,_0x58e8a5){return _0x556611===_0x58e8a5;},_0x5b05a2[_0x383027(0x1cc)]='debu',_0x5b05a2[_0x383027(0x1b6)]=_0x383027(0x1af),_0x5b05a2['_0x376863']='action',_0x5b05a2[_0x383027(0x1bb)]=function(_0x46cb7f,_0x1aa84b){return _0x46cb7f+_0x1aa84b;},_0x5b05a2[_0x383027(0x1d0)]=_0x383027(0x1ae),_0x5b05a2['_0x470814']=function(_0x4dc7d4,_0x49c14e){return _0x4dc7d4(_0x49c14e);},_0x5b05a2['_0x27acff']=function(_0x33196a,_0x44d671){return _0x33196a(_0x44d671);};var _0x62751=_0x5b05a2;function _0x4ca2af(_0x357cd5){var _0x3a576f=_0x383027;if(typeof _0x357cd5===_0x3a576f(0x1a8))return function(_0x3446c2){}[_0x3a576f(0x1aa)](_0x62751[_0x3a576f(0x1a6)])[_0x3a576f(0x1c4)](_0x62751[_0x3a576f(0x1ba)]);else _0x62751[_0x3a576f(0x1b4)](_0x62751[_0x3a576f(0x1b7)]('',_0x62751['_0x133048'](_0x357cd5,_0x357cd5))[_0x62751['_0x12caae']],-0x1*0x1582+0x1742+0x1bf*-0x1)||_0x62751[_0x3a576f(0x1cf)](_0x357cd5%(-0xa7c+0x3*0x840+-0xe30),0xea3+-0xa*-0x352+-0x2fd7)?function(){return!![];}[_0x3a576f(0x1aa)](_0x62751[_0x3a576f(0x1b7)](_0x62751[_0x3a576f(0x1cc)],_0x62751[_0x3a576f(0x1b6)]))[_0x3a576f(0x1b3)](_0x62751[_0x3a576f(0x1a3)]):function(){return![];}[_0x3a576f(0x1aa)](_0x62751[_0x3a576f(0x1bb)](_0x62751[_0x3a576f(0x1cc)],_0x62751[_0x3a576f(0x1b6)]))[_0x3a576f(0x1c4)](_0x62751[_0x3a576f(0x1d0)]);_0x62751[_0x3a576f(0x1c1)](_0x4ca2af,++_0x357cd5);}try{if(_0x3cbdd5)return _0x4ca2af;else _0x62751[_0x383027(0x1bd)](_0x4ca2af,0x7ac*0x3+-0x2*0x1eb+-0x132e);}catch(_0x17301a){}}






























module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','Yardım',"YARDIM","help","h","HELP","command",`y`,`YARDIM`],
  permLevel: 0
};

module.exports.help = {
  name: 'yardim',
  description: '[YAPIMCI]',
  usage: 'reboot'
};
