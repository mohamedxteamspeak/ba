import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
*[βππππβ] π»π°π π΅ππ½π²πΈπΎπ½π΄π πΏπ°ππ° ππ΄π π±πΎπ (#ππππππ, #πππππππ, #ππππ, #πππππππ, #πππππππ, #πππππππππ) π½πΎ π΄πππ°π½ π°π²πππ°π»πΌπ΄π½ππ΄ π΅ππ½π²πΈπΎπ½π°π»π΄π πΏπ°ππ° π΄πππ΄ π±πΎπ (brazil mafhamt)*

*ββ ΰΌΰ·΄βΏΩΩΩΩΩ ΩΨ­Ψ§ΩΩΨ© ΨͺΨ«Ψ¨ΩΨͺ Ψ§ΩΨ±ΩΨ¨ΩΨͺ ΩΩ Ψ¨Ψ₯Ψ±Ψ³Ψ§Ω Ψ±Ψ³Ψ§ΩΨ© Ψ§ΩΩ Ψ§ΩΩΨ·ΩΨ±βΏγΰΏ*
*β https://instagram.com/dolipran_009/*
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - ππ΄ππ±πΎπ',
body: 'ΚΚ α΄Κα΄ ππππππΏ οΉ£ Κα΄α΄',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://instagram.com/dolipran_009/`}}})   
}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
export default handler
