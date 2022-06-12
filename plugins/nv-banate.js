import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './audio/hibhob.mp3'
conn.sendFile(m.chat, vn, 'hibhob.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /hibhob|Hibhob|Hip hop|hib hob|احواش نتمازيرت|Rap|HakakA7wach ntmazirt|Abadaz|/i
handler.command = new RegExp
handler.fail = null
handler.exp = 100
export default handler
