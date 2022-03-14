let handler = async (m, { conn }) => {
  conn.sendFile(m.from, 'hello', m)
}
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
