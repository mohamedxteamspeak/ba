import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './audio/timganin.mp3'
conn.sendFile(m.chat, vn, 'timganin.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /timganin|Timganin|tamgant|Tamgant|Bitch|bitch|L9hba|l9hba|القحبة|القحبة|تمڭانت|تمكانت/i
handler.command = new RegExp

handler.fail = null
handler.exp = 100
export default handler



