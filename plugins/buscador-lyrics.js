import fetch from 'node-fetch'
import { lyrics, lyricsv2 } from '@bochilteam/scraper'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
if (!teks) throw `*[โ๐๐๐๐โ] โๅฝกูุซุงู ุนูู ุงูุงุณุชุฎุฏุงู ุงูุตุญูุญ ููุฃูุฑๅฝกโโข: ${usedPrefix + command} Gangster's Paradise*`
try {
const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
title: result.author + result.title}))
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.thumbnail.genius) throw json


let letratexto =`
โๅฝกุงูุนููุงูๅฝกโโข: *${result.title}*
โๅฝกูุคููๅฝกโโข ${result.author}


${result.lyrics}


๐๐๐ ${result.link}
`.trim()
conn.sendHydrated(m.chat, letratexto, wm, json.thumbnail.genius, null, null, null, null, [
['โฅ ใูู ุจุชูุฒูู ุงูุตูุชใ โค', `/play.1 ${text}`],
['โๅฝกูู ุจุชูุฒูู ุงูุตูุชๅฝกโโข', `/play.2 ${text}`]
], m)
} catch (e) {
m.reply('*[โ๐๐๐๐โ] ุฎูุทูุฃ ุ ููุฑุฌูู ูฑููุญููฑูููุฉ ูุฑุฉ ุฃุฎูุฑู*')
console.log(e)
}}
handler.help = ['lirik','letra'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric|letra)$/i
export default handler
