/*
💥 Codigo Realizado Por : 
• OfcDiego (https://github.com/OfcDiego)
✨️ Creado Para : 
• Ai Yaemori - MD
*/

//aun no funciona correctamente.

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) conn.reply(m.chat, '😊 *Responde al mensaje de la waifu enviada.*', m, fake)

// Función para reclamar la waifu
function reclamarWaifu() {
// Simulamos un roll de dados para determinar si ganamos la waifu
const roll = Math.floor(Math.random() * 100) + 1

// Si el roll es mayor o igual a 50, ganamos la waifu
if (roll >= 10) {
conn.reply(m.chat, '😊 ¡Felicidades! Has ganado la waifu 🌟', m, fake)
} else {
conn.reply(m.chat, '⭐️ Lo siento, no has ganado la waifu. ¡Inténtalo de nuevo!', m, fake)}}

// Llamamos a la función para reclamar la waifu
reclamarWaifu()}

handler.command = ['c', 'reclamar']
handler.help = ['c']
handler.tags = ['anime']
handler.premium = false
export default handler