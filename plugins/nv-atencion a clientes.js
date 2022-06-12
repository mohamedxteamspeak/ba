import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './audio/Cheb Larbi _Avec Le Temps Tibgheni.mp3'
conn.sendFile(m.chat, vn, 'Cheb Larbi _Avec Le Temps Tibgheni.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true
})
}
handler.customPrefix = /Avec le temps tibgheni|Avec Le Temps Tibgheni|Cheb Larbi|Cheb larbi|ماكنبغيكش|مكنبغيكش|makanbghikch|Makanbghikch|madidi ilan|madtgit b3da|mab3da tgit kiyi|madidi ilan|ماتكيت كي|ماتكيت بعدا|ممكن نعرف شكون معايا/
handler.command = new RegExp
export default handler
