const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
//language
const Language = require('../language');
const Lang = Language.getString('scrapers');

if (Config.WORKTYPE == 'private') {
Asena.addCommand({pattern: 'neotro', fromMe: true, desc: Lang.UP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/0d5425a8dd1b5ad3e3d81.jpg";
    r_text[1] = "https://telegra.ph/file/4efb53aba19b0f1ccad12.jpg";
    r_text[2] = "https://telegra.ph/file/7e18f85e60d0fe643c5d4.jpg";
    r_text[3] = "https://telegra.ph/file/7b068a15a9b0adb97064d.jpg";
    r_text[4] = "https://telegra.ph/file/b92174516f031df6ebd26.jpg";
    r_text[5] = "https://telegra.ph/file/b92174516f031df6ebd26.jpg";
    
        
     var i = Math.floor(6*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage (Buffer.from (respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*◁○Neutro ⚜pro ○▷*

 *╔═▣═══❖⦁⦁⦁👽⦁⦁⦁❖═══▣═╗*
*⦁⦁⦁⦁╍𝗡𝗘𝗨𝗧𝗥𝗢-𝗫 𝗣𝘂𝗯𝗹𝗶𝗰 𝗕𝗼𝗧╍⦁⦁⦁⦁*
*╚═══❖═══▣ ▣════❖═══╝*

*⚜විවිධාකාරයේ Logo සෑදීමට⚜*

*🌀විධානය* : .textimg
*💠විස්තරය* :  Logo ලැයිස්තුව පෙන්වයි
◁මෙම ලැයිස්තුවන්ගෙ විධාන ක්‍රියා නොකිරීම  බොට්ගෙ දෝශයක් නොවෙ.සේවාව ලබා ගත් site එකෙහි දෝශයකි.

*🌀විධානය:* .emoji✅
🧞‍♂️එය ඉමෝජි ඡායාරූප ලබාදෙයි.
▷උදාහරණ: .emoji 🤪

*⚜Media Download ⚜*

*🌀විධානය* : .song
*💠විස්තරය* : ඔබට අවශ්‍ය සින්දු ලබාදෙයි
_status:true✅_

*🌀විධානය* .dcsong:
*💠විස්තරය* : එය document ලෙස ගීත ලබා දෙයි.
▷Aplle phone  සදහාද ක්‍රියා කරයි.
_status:true✅_

🌀විධානය:*  .mmpack
💠එය ඔබේ අකුරු මීම් පවට හරවයි
_status:true✅_

*🌀විධානය* : .spotify *💠විස්තරය* : Spotify link download කරයි
🧞 .spotify <spotify link>
_status:false❌_

*🌀විධානය* : .yt
*💠විස්තරය* : Youtube search කර අදාල Links ලබා දෙයි
_status:true✅_

*🌀විධානය* : .video
*💠විස්තරය* : Youtube Video Download කරයි.
_status:true✅_

*🌀විධානය* : .fb 
*💠විස්තරය* : Facebook Video Download කරයි
_status:false❌_

🌀විධානය : .search
💠විස්තරය : වීඩියෝවක සිංදුව සොයයි 


*⚜වෙනත් විධාන⚜*

*🌀විධානය* : .cnlog
*💠විස්තරය* : Bot ගේ Changlog පෙන්වයි.

*🌀විධානය* : .version 
*💠විස්තරය* : Bot යතාවත්කාලින කර ඇති වර්ශන් පෙන්වයි.

*🌀විධානය* : .show
*💠විස්තරය* : එය TV series වල විස්තර ලබාදෙයි.

*🌀විධානය* .help :
*💠විස්තරය* : උපකාර ලැයිස්තුව පෙනවයි.

*🌀විධානය* : .nmedia
*💠විස්තරය* : පහසුවෙන් ඡායාරූප Edite කිරීමෙ ලැයිස්තුව පෙන්වයි

*🌀විධානය* : .ip
*💠විස්තරය* : ip ලිපිනයෙන් තොරතුරු සොයයි

*🌀විධානය* : .tiny
*💠විස්තරය* : Url කුඩා කරයි

*🌀විධානය* : .sticker
*💠විස්තරය* : ආදාල ඡායාරූපයෙ Sticker සාදයි

*🌀විධානය* : .photo
*💠විස්තරය* : Sticker එකක් ඡායාරූපයක් කරයි

*🌀විධානය* : .img
*💠විස්තරය* : අවශ්‍ය ඡායාරූප ලබාදෙයි

*🌀විධානය* : .wiki
*💠විස්තරය* : විකිපීඩියාහි search කරයි

*🌀විධානය* : .anime
*💠විස්තරය* : Anime ඡායාරූප ලබාදෙයි

*🌀විධානය* : apkmod
*💠විස්තරය* : මොඩ් ඇප් ලබාදෙයි

*🌀විධානය* : weather
*💠විස්තරය* :කාලගුණය පෙන්වයි

*🌀විධානය* : .ttp
*💠විස්තරය* : Text සරල image බවට පරිවර්තනය කරයි.

*🌀විධානය* : .wame
*💠විස්තරය* : Get a link to the user chat.

*🌀විධානය* :  .wallpaper
*💠විස්තරය* : එය high resolution wallpaper යවයි.

*🌀විධානය* : .animesay
*💠විස්තරය* : එය anime girl රඳවාගෙන සිටින banner තුළ text ලියයි

*🌀විධානය* : .trupsay
*💠විස්තරය* : Trumpගේ tweet එකට text පරිවර්තනය කරයි.

*🌀විධානය* : .trt
*💠විස්තරය* : එය ගූගල් පරිවර්තනය සමඟ පරිවර්තනය කරයි. ඔබ ඕනෑම පණිවිඩයකට mention දිය යුතුය.
*⌨️ උදාහරණයක්:* trt en si (From English to Sinhala)

*🌀විධානය* : .bot
*💠විස්තරය* : Chat with an AI Bot.Use .bot <message>

*🌀විධානය* : .tts
*💠විස්තරය* : එය වචන voice messageට පරිවර්තනය කරයි

*🌀විධානය* : .ss
*💠විස්තරය* : දී ඇති linkයේ website screenshot ගනී

*🌀විධානය* : .github
*💠විස්තරය* : දී ඇති පරිශීලක නාමයෙන් github තොරතුරු රැස් කරයි.⌨️ Example: .github neotrox

*🌀විධානය* : .covid 
*💠විස්තරය* : රටවල් කිහිපයක කොරෝනා වාර්ථා පෙන්වයි

*🌀විධානය* : .mp3
*💠විස්තරය* : ටැග් කල වීඩියෝව Mp3 ලෙස පරිවර්තනය කරයි

*🌀විධානය* : .movie
*💠විස්තරය* : චිත්‍රපට වල විස්තර ලබාදෙයි

*🌀විධානය* : .insta
*💠විස්තරය* : Instergrame පරිශීලකයාගෙ තොරතුරු ලබාදෙයි

*🌀විධානය* : .attp
*💠විස්තරය* : දේදුන්නක පාට Animation ස්ටිකර්ස් සාදයි

*🌀විධානය* : .2attp
*💠විස්තරය* : දේදුන්නක පාට වෙනස් අකුරු Animation ස්ටිකර්ස් සාදයි

*🌀විධානය* : .carbon
*💠විස්තරය* : Uses carbon.sh for Text-to-Image
*⚠️ Warn:* Please only type in en and tr character!

*🌀විධානය* : .joke
*💠විස්තරය* : විවිධ විහිලු සපයයි▷භාශාව◈English

*🌀විධානය* : meme
*💠විස්තරය* : ටැග් කල ඡාලාරූපයේ ටයිප් වෙ

*🌀විධානය* : .lyric
*💠විස්තරය* : ගීතයක lyrics ලබාදෙයි

*🌀විධානය* : .qr
*💠විස්තරය* : අකුරු qr කේතයක් බවට පරිවර්තනය කරයි

*⚜පරිපාලක වරුන්ගෙ විධාන⚜*

🙇මෙම විධාන Bot අයිතිකරුවාට පමණක් ක්‍රියාත්මක වේ

*🌀විධානය* : .install
*💠විස්තරය* : අමතර pluging එකතු කරයි

*🌀විධානය* : .remove
*💠විස්තරය* : Plugin ඉවත් කරයි

*🌀විධානය* : .pluging  *💠විස්තරය* : ඔබ install කර ඇති plugin පෙන්වයි

*🌀විධානය* : .ban 
*💠විස්තරය* : තෝරාගන්නා පුද්ගලයා සමූහයෙන් ඉවත් කරයි

*🌀විධානය* : .welcome
*💠විස්තරය* : පිළිගැනීමේ පණිවිඩය සකස් කරයි

*🌀විධානය* : .welcome delete
*💠විස්තරය* : පිළිගැනීමෙ පණිවිඩය සකස් කරයි

*🌀විධානය* : .goodbye
*💠විස්තරය* : සමුගැනීමෙ පණිවිඩය සකස් කරයි

*🌀විධානය* : .promote
*💠විස්තරය* : ඕනෑම පුද්ගලයෙකු පරිපාලකයෙකු කරයි

*🌀විධානය* : .demote
*💠විස්තරය* : ඕනෑම පරිපාලකයෙකුගේ බලය ගනී.

*🌀විධානය* : .add
*💠විස්තරය* : කණ්ඩායමට යමෙකුව එකතු කරයි.

*🌀විධානය* : .filter
*💠විස්තරය* : එය filters එක් කරයි. කවුරුහරි ඔබේ filters ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලියන්නේ නම්, එය ඔබගේ filters ලැයිස්තුව පෙන්වයි

*🌀විධානය* : mute
*💠විස්තරය* : කණ්ඩායම් chat නිශ්ශබ්ද කිරීමට. පණිවිඩයක් යැවිය හැක්කේ adminට පමණි. 🔳Example : .mute 10m

*🌀විධානය* : .unmute
*💠විස්තරය* : කණ්ඩායම් පණිවිඩ නැවත යතාතත්වෙට පත්වෙයි

*🌀විධානය* : .invite
*💠විස්තරය* : කණ්ඩායමේ invite සපයයි.

*🌀විධානය* : .stop
*💠විස්තරය* : ඔබ කලින් එකතු කල filter නවත්වයි.

*🌀විධානය* : .restart
*💠විස්තරය* : Neotro නැවත ආරම්භ කරයි

*🌀විධානය* : .shutdown
*💠විස්තරය* : Bot වසා දැමීමට

*🌀විධානය* : .dyno
💠විස්තරය* : Check heroku dyno usage

*🌀විධානය* : .speedtest
*💠විස්තරය* : Download කිරීම සහ Upload කිරීමේ වේගය මැනීම

*🌀විධානය* : .update
*💠විස්තරය* : Update තිබේදැයි පරීක්ෂා කරයි

*🌀විධානය* : .update now
*💠විස්තරය* : Update කිරීමට

*🌀විධානය* : .tagall
*💠විස්තරය* : කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි

*🌀විධානය* : .tagadmin
*💠විස්තරය* : කණ්ඩායමෙ සිටින පරිපාලකයින් ටැග් කරයි

*🌀විධානය* : .block
*💠විස්තරය* : පුද්ගලයෙකු අවහිර කරයි

*🌀විධානය* : .unblock *💠විස්තරය* : අවහිර කල පුද්ගලයා නැවත සම්බන්ධ කරයි

🔏විධානය* : .clear
*🧞විස්තරය* : එය Chat Clear කරයි.

*🔏විධානය* : .antispm
*🧞විස්තරය* : එය ඔබෙ සමූහයට හදිසි එල්ල වීමෙදි සමූහය නිශ්ශබ්ද කර දුරකතනය සිරවීම අවම කරයි.

*🌀විධානය* : .adon
*💠විස්තරය* : එය AIBOT විධානය ඇරඹීම අක්‍රිය කිරීම සිදු කරයි.
උදා: AIBOT Off කිරීමට අවශ්‍යනම් .adon AI_BOT:false ලෙස send කරන්න.නැවත සක්‍රිය කිරීමට .adon AI_BOT:true ලෙස send කරන්න

*⚜අලුතින් එක්කවන විධාන ලැයිස්තුව⚜*


*🔏විධානය:* .gn / .gm
*🧞විස්තරය:* එය Good morning හා Good night පණිවිඩ යවයි.

*━⚜NEUTRO PANEL⚜━*
`}) 

 }));
}