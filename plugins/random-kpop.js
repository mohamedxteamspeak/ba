import  fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix }) => {
if (args.length == 0) return conn.reply(m.chat, `Usar ${usedPrefix}kpop\nPor favor escribe: ${usedPrefix}kpop [buscar]\◥ ツمثالツ ◤:: ${usedPrefix}kpop bts\n\nBusquedas disponibles:\nblackpink, exo, bts`, m)
if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
.then(res => res.text())
.then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m)
})
.catch(() => {
conn.reply(m.chat, '★彡حدث خطأ ، حاول مرة أخرى ، إذا استمر الخطأ ، أبلغ الخالق彡★™', m)
})
} else {
conn.reply(m.chat, `のعذرا ، البحث غير متوفر. اكتب رجاءاの ${usedPrefix}kpop のللاطلاع على قائمة عمليات البحث المتاحةの`, m)
}}
handler.help = ['kpop'].map(v => v + ' <query>')
handler.tags = ['image']
handler.command = /^(kpop)$/i
export default handler
