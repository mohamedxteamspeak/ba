import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '*[โ๐๐๐๐โ] ใฎุฃุฏุฎู ุงูุฃูุฑ ุจุงูุฅุถุงูุฉ ุฅูู ุงุณู ูุณุชุฎุฏู ูุณุชุฎุฏู ุชูู ุชููใฎ*', m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=9b817532fadff8fc7cb86862`)
let res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=9b817532fadff8fc7cb86862`
let json = await res.json()
if (res.status !== 200) throw await res.text()
if (!json.status) throw json
let thumb = await (await fetch(json.result.user_picture)).buffer()
let Mystic = `
*๐๐๐๐ฐ๐๐ธ๐พ:* ${json.result.username}
*๐ฝ๐ฐ๐ผ๐ด:* ${json.result.nickname}
*๐ต๐พ๐ป๐ป๐พ๐๐ด๐๐:* ${json.result.followers}
*๐ต๐พ๐ป๐ป๐พ๐๐ด๐ณ:* ${json.result.followings}
*๐ป๐ธ๐บ๐ด๐:* ${json.result.likes}
*๐๐ธ๐ณ๐ด๐พ๐:* ${json.result.video}
*๐ณ๐ด๐๐ฒ๐๐ธ๐ฟ๐ฒ๐ธ๐พ๐ฝ:* ${json.result.bio}
`.trim()
conn.sendFile(m.chat, res2, 'error.jpg', Mystic, m, false)
} catch (e) {
throw '*[โ๐๐๐๐โ] ERROR, โๅฝกูู ูุชู ุงูุนุซูุฑ ุนูู ุงุณู ุงููุณุชุฎุฏู ุงูุฐู ุชู ุฅุฏุฎุงููๅฝกโโข*'
}}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['stalk']
handler.command = /^(tiktokstalk|ttstalk)$/i
export default handler
