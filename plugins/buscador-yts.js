import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[âđđđđâ] âćœĄŰŁŰŻÙŰźÙÙÙ Ű§ŰłÙ ÙÙÙÙŰŻÙÙÙÛ ŰŁÛ ÙÙŰ§Ű© ÙÙŰȘÙÙŰšćœĄââą*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
đ *${v.title}* (${v.url})
â đłđđđđđđđ: ${v.durationH}
âČïž đżđđđđđđđđ ${v.publishedTime}
đïž ${v.view} đđđđđđ
`.trim()
case 'channel': return `
đ *${v.channelName}* (${v.url})
đ§âđ€âđ§ _${v.subscriberH} đđđđđđđđđđđđ_
đ„ ${v.videoCount} đđđđđđ
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
