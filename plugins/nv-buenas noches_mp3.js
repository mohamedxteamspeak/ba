import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './audio/lyn3l wldik lklb.mp3'
conn.sendFile(m.chat, vn, 'lyn3l wldik lklb.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Ana howa farouk|انا هو فاروق|نكي ايكان فاروق|Nki aygan farouk|Kinta|Farouk/
handler.command = new RegExp
export default handler
