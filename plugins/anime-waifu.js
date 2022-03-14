import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch('https://api.waifu.pics/sfw/waifu')
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
    conn.sendButton(m.chat, 'Waifu 🎋🎐', wm, json.url, [['𝓦𝓐𝓘𝓕𝓤', `${usedPrefix}waifu`]], m)
}
handler.help = ['waifu']
handler.tags = ['internet']
handler.command = /^(waifu)$/i
//MADE IN ERPAN 1140 BERKOLABORASI DENGAN BTS
export default handler
