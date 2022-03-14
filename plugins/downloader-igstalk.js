import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
    if (!args[0]) throw `Example use ${usedPrefix}${command} <username>`
    const {
        username,
        name,
        description,
        followersH,
        followingH,
        postsH,
    } = await instagramStalk(args[0])
    m.reply(`
🔅 *Username:* ${username}
💫 *Nickname:* ${name}
🔹 *Followers:* *${followersH}*
🔸 *Following:* *${followingH}* 
✳️ *Posting:* *${postsH}*
🎗️ *Bio:* ${description}
📌 *Link:* https://instagram.com/${username.replace(/^@/, '')}
`.trim())
}

handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igstalk)$/i

export default handler
