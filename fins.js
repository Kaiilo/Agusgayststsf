require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const cheerio = require("cheerio");
const chalk = require("chalk");
const crypto = require("crypto");
const { exec, spawn, execSync } = require("child_process");
const axios = require("axios");
const moment = require("moment-timezone");
const fetch = require("node-fetch");
const Jimp = require("jimp");
const util = require("util");
const { sizeFormatter} = require("human-readable")
const format = sizeFormatter()
const { color, bgcolor, mycolor } = require('./lib/color')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, parseMention, getRandom } = require('./lib/functions')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')

module.exports = xd = async (xd, m, chatUpdate, store) => {
try {
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°#*+,.?=''():√%!¢£¥€π¤ΠΦ_&`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°#*+,.?=''():√%¢£¥€π¤ΠΦ_&!™©®Δ^βα¦|/\\©^]/gi) : '/\'
const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
const content = JSON.stringify(m.message)
const { type, quotedMsg, mentioned, now, fromMe } = m
const isCmd = body.startsWith(prefix)
const from = m.key.remoteJid
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await xd.decodeJid(xd.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const { chats } = m
const owner = JSON.parse(fs.readFileSync('./seller.json').toString())
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const isGroup = m.key.remoteJid.endsWith('@g.us')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await xd.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const jangan = m.isGroup ? pler.includes(m.chat) : false	
const fnsstickwait = () => {
  let FnsStikRep = fs.readFileSync('./FnsMedia/wait.webp')
  xd.sendMessage(from, { sticker: FnsStikRep }, { quoted: m })
  }
if (!xd.public) {
if (!m.key.fromMe) return
}
// auto read
if (isCmd && m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); }
if (isCmd && !m.isGroup) { console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); }
		
  global.db = JSON.parse(fs.readFileSync('./database/database.json'))
  if (global.db) global.db = {
  sticker: {},
  database: {}, 
  game: {},
  others: {},
  users: {},
  chats: {},
  settings: {},
  ...(global.db || {})
  }
  let vote = db.others.vote = []

try {
ppuser = await xd.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

const generateProfilePicture = async(buffer) => {
const jimp_1 = await Jimp.read(buffer);
const resz = jimp_1.getWidth() > jimp_1.getHeight() ? jimp_1.resize(550, Jimp.AUTO) : jimp_1.resize(Jimp.AUTO, 650)
const jimp_2 = await Jimp.read(await resz.getBufferAsync(Jimp.MIME_JPEG));
return {
img: await resz.getBufferAsync(Jimp.MIME_JPEG)
}
}
	  //TIME
        const xtime = moment.tz('Asia/Makassar').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Makassar').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Makassar').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN: Ren\n' // full name
            + 'ORG:Ren;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=6285697886101:+62 856 9788 6101\n' // WhatsApp ID + phone number
            + 'END:VCARD'
             prit = [
                {buttonId: 'daftar', buttonText: {displayText: 'DAFTAR RESELLER'}, type: 2}
              ]
              
               pritprit = {
                  text: 'sepertinya kamu belum daftar resseler',
                  footer: '©Kaii',
                  buttons: prit,
                  headerType: 1
              }
switch (command) {
 case 'waktu':{
menu =`
 ┅═┅═❏ *Self bloy* ❏═┅═┅
 _*${xeonytimewisher}*_
❏➭ Creator: *${global.own}*
❏➭ Runtime: *${runtime(process.uptime())}*
❏➭ waktu: *${xtime}*
❏➭ tanggal: *${xdate}*
 ┅═┅═❏ *Self bloy* ❏═┅═┅
 `
 
m.reply(menu)
}
  break
// tambahan fitur
case 'wanumber': case 'searchno': case 'searchnumber':{
  if (!text) return m.reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]

m.reply(`Searching for WhatsApp account in given range...`)
function countInstances(string, word) {
 return string.split(word).length - 1
}
var number0 = inputnumber.split('x')[0]
var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
var random_length = countInstances(inputnumber, 'x')
var randomxx
if (random_length == 1) {
 randomxx = 10
} else if (random_length == 2) {
 randomxx = 100
} else if (random_length == 3) {
 randomxx = 1000
}
var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
for (let i = 0; i < randomxx; i++) {
 var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
 var status1 = nu[Math.floor(Math.random() * nu.length)]
 var status2 = nu[Math.floor(Math.random() * nu.length)]
 var status3 = nu[Math.floor(Math.random() * nu.length)]
 var dom4 = nu[Math.floor(Math.random() * nu.length)]
 var random21
 if (random_length == 1) {
     random21 = `${status1}`
 } else if (random_length == 2) {
     random21 = `${status1}${status2}`
 } else if (random_length == 3) {
     random21 = `${status1}${status2}${status3}`
 } else if (random_length == 4) {
     random21 = `${status1}${status2}${status3}${dom4}`
 }
 var anu = await xd.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
 var anuu = anu.length !== 0 ? anu : false
 try {
     try {
         var anu1 = await xd.fetchStatus(anu[0].jid)
     } catch {
         var anu1 = '401'
     }
     if (anu1 == '401' || anu1.status.length == 0) {
         nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
     } else {
         text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
     }
 } catch {
     nowhatsapp += `${number0}${i}${number1}\n`
 }
}
m.reply(`${text66}${nobio}${nowhatsapp}`)
}
break
case 'spotifysearch': {
let anu = await fetchJson(`https://spotifyku.my.id/search?query=${text}`)
let teks = `search from ${text}\n\n`
for (let i of anu.data) {
teks += `⭔ title: ${i.title}\n⭔ duration: ${i.duration}\n⭔ popularity: ${i.popularity}\n⭔ preview: ${i.preview}\n⭔ url: ${i.url}\n⭔ artist: ${i.artist}\n\n─────────────────\n\n`
}
xd.sendMessage(m.chat, { image: { url: anu.data[0].thumbnail }, caption: `${teks}` }, { quoted: fkontak })
}
break
case 'spotify':
if (!text) return m.reply(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return m.reply(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await xd.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await xd.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 's': case 'sticker': case 'stiker': {
  if (!quoted) return m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await xd.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
  let media = await quoted.download()
  let encmedia = await xd.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  
  } else {
  m.reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
  }
  }
  break
case 'tiktok':{ 
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
xd.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudio':{
if (!text) return m.reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return m.reply(`Link Invalid!!`)
m.reply(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
xd.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'mediafire':
if (!q) return m.reply(`Where is the link?`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('The link you sent is not a mediafire link or the link is invalid!')
m.reply(mess.wait)
let medfr = await scp1.mediafire(q)
await xd.sendMessage(from, {document:{url:medfr.link},jpegThumbnail : defaultpp, fileName:`Downloaded By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:m})
  break
case 'google': {
if (!q) return m.reply(`Example : ${prefix + command} ${global.bot}`)
fnsstickwait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
        //batas fitur costum
case "join": {
if (!text) return m.reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await xd.groupAcceptInvite(result).then((res) => m.reply(util.format(res))).catch((err) => m.reply(util.format(err)))
}
break
case 'demote': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!args[0]) return m.reply(`mana targetnya? tag/reply orangnya\njika reply kasih reason`)
let result = args[0].split('reason')[1]
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xd.groupParticipantsUpdate(from, [users], 'demote').then (m.reply('done demote user'))
}
break
case 'play':  case 'song': case 'ytmp3': {
if (!text) return m.reply(`Example : ${prefix + command} anime whatsapp status`)
const xdplaymp3 = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/myfunc2")
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xdplaymp3.mp3(anup3k.url)
await xd.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'lgc': case 'linkgc': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
let response = await xd.groupInviteCode(from)
xd.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'runtime':
m.reply(`*Runtime :* ${runtime(process.uptime())}`)
break
case 'risetlink':
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
xd.groupRevokeInvite(from)
break
case 'h':
case 'hidetag': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
xd.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'promote': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!args[0]) return m.reply(`mana targetnya? tag/reply orangnya\njika reply kasih reason`)
let result = args[0].split('reason')[1]
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xd.groupParticipantsUpdate(from, [users], 'promote').then (m.reply('done promote user'))
}
break
case 'k':
case 'kick': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!args[0]) return m.reply(`mana targetnya? tag/reply orangnya\njika reply kasih reason`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await xd.groupParticipantsUpdate(from, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

default:
}
if (budy.startsWith('>')) {
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
} catch (err) {
m.reply(util.format(err))
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})