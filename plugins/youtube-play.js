import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Not found'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*🔮 Title:* ${title}
🔻 *Published:* ${publishedTime}
🍃 *Duration:* ${durationH}
🎐 *Views:* ${viewH}

🔗 *Url:* ${url}
💫 *Description:* ${description}
  `.trim(), wm, thumbnail, '', '', '', '', [
    ['Audio', `${usedPrefix}yta ${url} yes`], 
    ['Video', `${usedPrefix}ytv ${url} yes`]
  ], m, {asLocation: 1})
}
handler.help = ['play', 'play2'].map(v => v + ' <name>')
handler.tags = ['downloader']
handler.command = /^(play|yt|song)$/i

handler.exp = 0
handler.limit = false

export default handler

