import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './audio/MNANAUK - GHTASBOH.mp3'
conn.sendFile(m.chat, vn, 'MNANAUK - GHTASBOH.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Chno w9a3 lwazir ta3lim|شنو وقع الوزير التعليم|شنو واقع الوزير التعليم/
handler.command = new RegExp
export default handler
