let handler = async (m, { conn }) => {
let emot = pickRandom(["🎃", "❤", "😘", "😍", "💕", "😎", "🙌", "⭐", "👻", "🔥", "🤖", "💀", "🫶🏻", "😎", "🤢", "🤧", "🤝🏻", "🧠", "📝", "📐", "🔍", "💔", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "❤️‍🔥", "❌", "♨️", "❌", "✅", "🚭", "🔞", "📛", "🏳️‍🌈", "🏳️‍⚧️", "🏳‍🟧‍⬛‍🟧", "🕌", "✈️", "🚒", "🚑", "🚓", "🏎️", "🚎", "🚌", "🚙", "🚕", "🚗", "🚐", "🛻", "🚚", "🚛", "🚜", "🦽", "🦼", "🛺", "🏍️", "🛵", "🚲", "🛴", "🚨", "🚖", "🚘", "🧩", "🎰", "🎮", "🎳", "🎯", "♟️", "🎲", "🎹", "🥁", "🪘", "🎷", "🎺", "🪗", "🎸", "🪕", "🎻", "🎼", "🎧", "🎭", "🏄🏼‍♀️", "🏄🏻", "🧘🏼‍♂️", "🏇🏼", "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", "🎱", "🪀", "🏓", "🏸", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑", "🌒", "🌓", "🌔", "🌙", "🌎", "🌍", "🌏", "🌝", "🐲", "🐉", "☘️", "🍀", "🍄", "🌱", "🐉", "🐿️", "🦔", "🌷", "💐", "🌹", "🥀", "🪷", "🌺", "🌸", "🌼", "🐴", "🥵", "🤯", "🤬", "😡", "🤩", "🥳", "🫠", "🤫", "🫡", "🤔", "🤗", "😓", "🤓", "🧐", "🤪", "🥰", "🥹", "😅", "😂", "🤣", "😍", "😌", "😝", "😜", "🥳", "🤩", "🥸", "👽", "👺", "👹", "👿", "😈", "😹"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
}})}
handler.customPrefix = /(elherd|ELHERD|maza kiyi|Maza kiyi|Cc|cc|slm|Slm|Hi|hi|walo|Walo)/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
