import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*[❗] أدخل نصًا للتحدث إلى سمسمي بوت*\n\n*مثال: ${usedPrefix + command} مرحبا كيف حالك*`
let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=ar`)
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi'] 
export default handler
