import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡رد على الملصق الذي تريد إضافة حزمة واسم彡★™*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡رد على الملصق الذي تريد إضافة حزمة واسم彡★™*'
let img = await m.quoted.download()
if (!img) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡رد على الملصق الذي تريد إضافة حزمة واسم彡★™*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[❗𝐈𝐍𝐅𝐎❗] ༊෴✿للأسف ، هناك خطأ ما ... يرجى التحقق من أنك رددت على ملصق وأضفت اسم حزمة واسم مستخدم✿〄࿐*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler
