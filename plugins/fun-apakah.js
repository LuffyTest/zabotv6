let handler = async (m) => m.reply(`
*Question:* ${m.text}
*Answer:* ${['Ya', 'Maybe yes', 'Probably', 'Probably not', 'No', 'No way'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['is <teks>?']
handler.tags = ['']
handler.customPrefix = /(\?$)/
handler.command = /^is$/i

export default handler
