let handler = async (m, { conn, text}) => {
if (!text) throw '*[โ๐๐๐๐โ] โฅ ใุฃุฏุฎู ุนูุงูุฉ tag@ ูุฃู ูุณุชุฎุฏูใ โค*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[โ๐๐๐๐โ] โฅ ใุฃุฏุฎู ุนูุงูุฉ tag@ ูุฃู ูุณุชุฎุฏูใ โค*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[โ๐๐๐๐โ] โฅ ใุชู ุฅูุบุงุก ููู ุงููุณุชุฎุฏู ุจูุฌุงุญใ โค*\n*โโ โๅฝก  ูููู ูููุณุชุฎุฏู ุงูุขู ุงุณุชุฎุฏุงู ุงูุฑูุจูุชๅฝกโโข*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
