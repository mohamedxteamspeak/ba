import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡أدِخـلُ رٍابطُ الُمدِيَا فَايَرٍ ، مثالُ彡★™: ${usedPrefix + command} https://www.mediafire.com/file/xawl9327o0oc5m7/PicsArt_v19.8.1_MOD_2022_apkmody.com.apk/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
*𝙽𝙾𝙼𝙱𝚁𝙴:* ${filename}
*𝙿𝙴𝚂𝙾:* ${filesizeH}
*𝚃𝙸𝙿𝙾:* ${ext}

*★彡⏳ جاري تحميل الملف ارساله . . . .彡★™* 
*_- ★彡قد لا يتم إرسال ملفات أكبر من 100 ميغا بايت彡★™_* 
`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '★彡قم بالتحميل من ميديا فاير彡★™',
body: 'ʙʏ ᴛʜᴇ Elherd ﹣ ʙᴏᴛ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://www.instagram.com/dolipran_009/`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] ★彡خطأ، حاول مرة أخرى彡★™*\n\n*- ★彡تأكد من أن الرابط مشابه لـ彡★™:*\n*◉ https://www.mediafire.com/file/xawl9327o0oc5m7/PicsArt_v19.8.1_MOD_2022_apkmody.com.apk/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire|mf|)$/i
export default handler
