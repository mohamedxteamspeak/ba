import fetch from 'node-fetch'
import axios from 'axios'
let handler = async(m, { conn, args, usedPrefix, command }) => {
let res = await axios("https://meme-api.herokuapp.com/gimme/Christmas")
let json = res.data
let mystic = json.url
conn.sendButton(m.chat, `_Navidad 🧑‍🎄_`, author, mystic, [['🔄 الُـِـِِـِِِـِِـِـتـٌـٌٌـالُـِـِِـِِِـِِـِـي 🔄', `/${command}`]], m)
}
handler.help = ['navidad']
handler.tags = ['internet']
handler.command = /^(navidad)$/i
export default handler
