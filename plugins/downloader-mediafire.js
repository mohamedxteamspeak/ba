import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[โ๐๐๐๐โ] โๅฝกุฃุฏูุฎููู ุฑูุงุจุทู ุงูููุฏูููุง ููุงููุฑู ุ ูุซุงููๅฝกโโข: ${usedPrefix + command} https://www.mediafire.com/file/xawl9327o0oc5m7/PicsArt_v19.8.1_MOD_2022_apkmody.com.apk/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*๐ฝ๐พ๐ผ๐ฑ๐๐ด:* ${filename}
*๐ฟ๐ด๐๐พ:* ${filesizeH}
*๐๐ธ๐ฟ๐พ:* ${ext}

*โๅฝกโณ ุฌุงุฑู ุชุญููู ุงูููู ุงุฑุณุงูู . . . .ๅฝกโโข* 
*_- โๅฝกูุฏ ูุง ูุชู ุฅุฑุณุงู ูููุงุช ุฃูุจุฑ ูู 100 ููุบุง ุจุงูุชๅฝกโโข_* 
`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'โๅฝกูู ุจุงูุชุญููู ูู ููุฏูุง ูุงูุฑๅฝกโโข',
body: 'สส แดสแด Elherd ๏นฃ สแดแด',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://www.instagram.com/dolipran_009/`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[โ๐๐๐๐โ] โๅฝกุฎุทุฃุ ุญุงูู ูุฑุฉ ุฃุฎุฑูๅฝกโโข*\n\n*- โๅฝกุชุฃูุฏ ูู ุฃู ุงูุฑุงุจุท ูุดุงุจู ููๅฝกโโข:*\n*โ https://www.mediafire.com/file/xawl9327o0oc5m7/PicsArt_v19.8.1_MOD_2022_apkmody.com.apk/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire|mf|)$/i
export default handler
