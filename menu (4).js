const {
  france
} = require(__dirname + "/../framework/france");
const {
  format
} = require(__dirname + "/../framework/mesfonctions");
const os = require('os');
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const runtime = function (_0x187d57) {
  _0x187d57 = Number(_0x187d57);
  var _0x51404e = Math.floor(_0x187d57 / 86400);
  var _0x58c8d1 = Math.floor(_0x187d57 % 86400 / 0xe10);
  var _0x57bf9d = Math.floor(_0x187d57 % 0xe10 / 0x3c);
  var _0x35ceb8 = Math.floor(_0x187d57 % 0x3c);
  var _0x3f79b4 = _0x51404e > 0x0 ? _0x51404e + (_0x51404e == 0x1 ? " day, " : " d, ") : '';
  var _0x5a1732 = _0x58c8d1 > 0x0 ? _0x58c8d1 + (_0x58c8d1 == 0x1 ? " hour, " : " h, ") : '';
  var _0x46f788 = _0x57bf9d > 0x0 ? _0x57bf9d + (_0x57bf9d == 0x1 ? " minute, " : " m, ") : '';
  var _0x58b7fc = _0x35ceb8 > 0x0 ? _0x35ceb8 + (_0x35ceb8 == 0x1 ? " second" : " s") : '';
  return _0x3f79b4 + _0x5a1732 + _0x46f788 + _0x58b7fc;
};
france({
  'nomCom': 'menu',
  'categorie': 'General'
}, async (_0x2af0de, _0x28cc0e, _0x22e922) => {
  var _0x3085ff = {};
  var _0xbafdb7 = 'public';
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0xbafdb7 = 'private';
  }
  _0x579468.map(async (_0x37d146, _0x55f207) => {
    if (!_0x3085ff[_0x37d146.categorie]) {
      _0x3085ff[_0x37d146.categorie] = [];
    }
    _0x3085ff[_0x37d146.categorie].push(_0x37d146.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  const _0x3f94de = moment().format("HH:mm:ss");
  const _0x3ad85b = moment().format("DD/MM/YYYY");
  let _0x466c1b =  `
┏━━━━━━༻❁༺━━━━━━━✾
┇    ┏━✦❘༻༺❘✦━━┓
┇        𝑩𝑴𝑾-𝑿𝑴𝑫
┇    ┗━✦❘༻༺❘✦━━┛
┗━━━━━━༻❁༺━━━━━━━✾
╔═══✿═══════════✿══✾
┇     𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼
┇💮┇ *User* : ${s.OWNER_NAME}
┇💮┇ *Mode* : ${mode}
┇💮┇ *Commands* : ${cm.length} 
┇💮┇ *Time* : ${temps} 
┇💮┇ *Ram* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
╚══❖══════════════❖═✾
┏━━━━━❂━━━━❂━━━━━┓
┇     𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑹
┇   𝑰𝑩𝑹𝑨𝑯𝑰𝑴 𝑨𝑫𝑨𝑴𝑺
┗━━━━━❂━━━━❂━━━━━┛
┗━━━━━༻❁༺━━━━━━━━✾ \n\n`;
 
    let menuMsg=`  
  ╔══❖═══════════════❖══╗
    ❄||||𝑩𝑴𝑾-𝑴𝑫 𝑿5||||❄
  ╚══❖═══════════════❖══╝`;

    for (const cat in coms) {
        menuMsg += `*╭───〘* *${cat}* *〙*`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*┇💮┇* ${cmd}`;
        }
        menuMsg += `
*┗━━━━━༻❁༺━━━━━━━✾* \n`
    }

    menuMsg += `

🎼ılılıll |̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅| llılılı🎼

  *┏━━━━━❂❂━━━━━┓
     𝑩𝑴𝑾 𝑿5 𝑾𝑨𝑩𝑶𝑻
   ┗━━━━━❂❂━━━━━┛*                                         
*┗━━━━━━━༻❁༺━━━━━━━━*
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Zokou-MD*, développé par Djalega++" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "*Ibrahim-tech*" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});
