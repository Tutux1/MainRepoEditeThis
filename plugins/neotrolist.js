/* #teenhX
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const dd = "Tempory විධාන ලැයිස්තුව"
const ddd = "විධාන ලැයිස්තුව"


if (Config.WORKTYPE == 'private') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: Config.COMMAND + '?(.*)', fromMe: true, desc: dd }, (async (message, match) => {    

                await message.sendMessage('*▬▬▬▬▬▬▬👽▬▬▬▬▬*\n*⦁══⦁ ᴄᴜᴢɪᴇʀ 👽 ᴘʀɪᴠᴀᴛᴇ ⦁══⦁*\n +Config.MENUTEXT+ \n*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬*\n_powered By ɴᴇᴏᴛʀᴏ x_\n\n\n\n*♦විධානය* ❯.media\n*⭕විස්තරය* : ``` Media විධාන  ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.other\n*⭕විස්තරය* ❯ ```අනෙකුත් command ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.owner\n*⭕විස්තරය* ❯ ```Bot අයිතිකරුවාගෙ විධාන ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.mmpack\n*⭕විස්තරය* ❯```මීම් සාදන විධාන ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.textpic\n*⭕විස්තරය* ❯```logo සාදන විධාන ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.apkmod\n*⭕විස්තරය* ❯ ```Mod කරන ලද apk විධාන ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.admin\n*⭕විස්තරය* : ```Admin ගෙ විධාන ලැයිස්තුව පෙන්වයි.```\n\n )');

    }));
  }
    if (Config.LANG == 'SI') {

    Asena.addCommand({pattern: 'uhh', fromMe: true, desc: ddd }, (async (message, match) => {    

        await message.sendMessage('🆕සිංහල');

    }));
  }
}
else if (Config.WORKTYPE == 'public') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: Config.COMMAND + '?(.*)', fromMe: false, desc: dd}, (async (message, match) => {   

        await message.sendMessage( '▬▬▬▬▬▬▬👽▬▬▬▬▬*\n*⦁══⦁ ᴄᴜᴢɪᴇʀ 👽 ᴘʀɪᴠᴀᴛᴇ ⦁══⦁*\n +Config.MENUTEXT+ \n*▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬*\n_powered By ɴᴇᴏᴛʀᴏ x_\n\n\n\n*♦විධානය* ❯.media\n*⭕විස්තරය* : ``` Media විධාන  ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.other\n*⭕විස්තරය* ❯ ```අනෙකුත් command ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.owner\n*⭕විස්තරය* ❯ ```Bot අයිතිකරුවාගෙ විධාන ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.mmpack\n*⭕විස්තරය* ❯```මීම් සාදන විධාන ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.textpic\n*⭕විස්තරය* ❯```logo සාදන විධාන ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.apkmod\n*⭕විස්තරය* ❯ ```Mod කරන ලද apk විධාන ලැයිස්තුව පෙන්වයි.```\n\n*♦විධානය* ❯.admin\n*⭕විස්තරය* : ```Admin ගෙ විධාන ලැයිස්තුව පෙන්වයි.```\n\n )

          }));
  }
    if (Config.LANG == 'SI') {

    Asena.addCommand({pattern: '1test', fromMe: false, desc: ddd }, (async (message, match) => {    

        await message.sendMessage('*සිංහල*');

    }));
  }
}


