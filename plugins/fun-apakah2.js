let handler = async (m, { command, text }) => m.reply(`
*Question:* ${command} ${text}
*Answer:* ${['Ya', 'Probably yes', 'Probably', 'Maybe not', 'No', 'No way'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <text>?']
handler.tags = ['kerang']
handler.command = /^apakah$/i

export default handler
