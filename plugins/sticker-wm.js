import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '*[โ๐๐๐๐โ] โๅฝกุฑุฏ ุนูู ุงูููุตู ุงูุฐู ุชุฑูุฏ ุฅุถุงูุฉ ุญุฒูุฉ ูุงุณูๅฝกโโข*'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '*[โ๐๐๐๐โ] โๅฝกุฑุฏ ุนูู ุงูููุตู ุงูุฐู ุชุฑูุฏ ุฅุถุงูุฉ ุญุฒูุฉ ูุงุณูๅฝกโโข*'
let img = await m.quoted.download()
if (!img) throw '*[โ๐๐๐๐โ] โๅฝกุฑุฏ ุนูู ุงูููุตู ุงูุฐู ุชุฑูุฏ ุฅุถุงูุฉ ุญุฒูุฉ ูุงุณูๅฝกโโข*'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true })
else throw '*[โ๐๐๐๐โ] เผเทดโฟููุฃุณู ุ ููุงู ุฎุทุฃ ูุง ... ูุฑุฌู ุงูุชุญูู ูู ุฃูู ุฑุฏุฏุช ุนูู ููุตู ูุฃุถูุช ุงุณู ุญุฒูุฉ ูุงุณู ูุณุชุฎุฏูโฟใเฟ*'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^wm$/i
export default handler
