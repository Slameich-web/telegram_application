import * as dotenv from 'dotenv'
import Bot from 'node-telegram-bot-api'
dotenv.config()

const bot = new Bot(process.env.TOKEN, { polling: true })
const url = 'https://funny-kleicha-8671e1.netlify.app/'
bot.on('message', async (message) => {
    const chatId = message.chat.id
    const text = message.text
    if (text === '/start') {
        await bot.sendMessage(chatId, 'Привет, вот информация об авторе бота', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Приложение с краткой информацией", web_app: { url } }]
                ]
            }
        })
    }
})