import axios from 'axios'
let split = '|'
let handler = async (m, { conn, args: [effect], text: txt, usedPrefix, command, name }) => {
if (!effect) throw '*[❗𝐈𝐍𝐅𝐎❗] ★彡كيف تستخدم هذا الأمر؟彡★™*\n—◉ _#logo (effect) (text)_\n*◥ ツمثالツ ◤:*\n—◉ _#logo 3d-deep-sea-metal Elherd_\n\n*[❗] のعندما أخبرهم أن هناك حاجة إلى نص أخر ، فسيكون الاستخدام هكذاの:*\n—◉ _#logo (efecto) (texto1|texto2)_\n*★彡مثال彡★™:*\n—◉ _#logo Wolf-Logo-Galaxy Elherd|Bot_\n\n*<★彡قائمة التأثيرات彡★™/>*\n\n° ඬ⃟📝 #logo ' + effects.map(v => v.title).join('\n° ඬ⃟📝 #logo ')
effect = effect.toLowerCase()
if (!effects.find(v => (new RegExp(v.title, 'gi')).test(effect))) throw `*[❗𝐈𝐍𝐅𝐎❗] ★彡التأثير彡★™ ${effect} ★彡ليس في قائمة التأثيرات彡★™*`
let text = txt.replace(new RegExp(effect, 'gi'), '').trimStart()
if (text.includes(split)) text = text.split(split)
text = Array.isArray(text) ? text : [text]
let res = await textpro(effect, ...text)
if (typeof res == 'number') throw res == -1 ? `*[❗𝐈𝐍𝐅𝐎❗] ★彡التأثير彡★™ ${effect} ★彡ليس في قائمة التأثيرات彡★™*` : `*[❗𝐈𝐍𝐅𝐎❗] ★彡الاستخدام الصحيح للأمر彡★™ ${usedPrefix + command} ${effect} ${new Array(res).fill('texto').map((v, i) => v + (i ? i + 1 : '')).join('|')}*`
let result = await axios.get(res, {
responseType: 'arraybuffer'
})
await conn.sendFile(m.chat, result.data, 'Error.jpg', `*★彡خذ صورتك المخصصة !!彡★™*\n*★彡تأثير彡★™: ${effect}*`, m)
}
handler.help = ['logos']
handler.tags = ['nulis']
handler.command = /^(logo|logos)$/i
export default handler

import formData from 'form-data'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
var effects = [
  {
        "title": "among-us",
        "url": "https://en.ephoto360.com/create-a-banner-game-among-us-with-your-name-763.html"
  },
  {
        "title": "wing-3D",
        "url": "https://en.ephoto360.com/angel-wing-effect-329.html"
  }
]
async function textpro(effect, ...texts) {
  texts = texts.filter(v => v)
  let eff = effects.find(v => (new RegExp(v.title, 'gi')).test(effect))
  if (!eff) return -1
  let resCookie = await fetch(eff.url, {
    headers: {
      "User-Agent": "GoogleBot",
    },
  })
  let html = await resCookie.text()
  const $$$ = cheerio.load(html)
  let textRequire = [!!$$$('#text-0').length, !!$$$('#text-1').length, !!$$$('#text-2').length].filter(v => v)
  // console.log({ textRequire, texts, textRequireLength: textRequire.length, textsLength: texts.length })
  if (textRequire.length > texts.length) return textRequire.length
  let cookieParse = (cookie, query) => cookie.includes(query + '=') ? cookie.split(query + '=')[1].split(';')[0] : 'undefined'
  let hasilcookie = resCookie.headers
    .get("set-cookie")
  hasilcookie = {
    __cfduid: cookieParse(hasilcookie, '__cfduid'),
    PHPSESSID: cookieParse(hasilcookie, 'PHPSESSID')
  }
  hasilcookie = Object.entries(hasilcookie).map(([nama, value]) => nama + '=' + value).join("; ")
  const $ = cheerio.load(html)
  const token = $('input[name="token"]').attr("value")
  const form = new formData()
  for (let text of texts) form.append("text[]", text)
  form.append("submit", "Go")
  form.append("token", token)
  form.append("build_server", "https://en.ephoto360.com")
  form.append("build_server_id", 1)
  let resUrl = await fetch(eff.url, {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
      ...form.getHeaders(),
    },
    body: form.getBuffer(),
  })
  const $$ = cheerio.load(await resUrl.text())
  let token2 = JSON.parse($$('#form_value').eq(1).text())
  let encode = encodeURIComponent;
  let body = Object.keys(token2)
    .map((key) => {
      let vals = token2[key];
      let isArray = Array.isArray(vals);
      let keys = encode(key + (isArray ? "[]" : ""));
      if (!isArray) vals = [vals];
      let out = [];
      for (let valq of vals) out.push(keys + "=" + encode(valq));
      return out.join("&");
    })
    .join("&")
  let resImgUrl = await fetch(`https://en.ephoto360.com/effect/create-image?${body}`, {
    headers: {
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.9",
      "User-Agent": "GoogleBot",
      Cookie: hasilcookie,
    }
  })
  let results = await resImgUrl.json()
  return 'https://en.ephoto360.com' + results.fullsize_image
}
