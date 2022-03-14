let handler = async (m, { conn, text }) => {
    let yh = global.alice
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, 'Hello Honey How Can i Help You? 💞', '© Alice 🥀', '✨ 𝑀𝐸𝑁𝑈 ✨', '.menu', m)
  }
handler.help = ['alive']
handler.tags = ['tools']
handler.command = /^(alive)$/i

module.exports = handler
  
  global.alice = [
    "https://telegra.ph/file/89292e86386a9e55baf69.jpg",
      ]
