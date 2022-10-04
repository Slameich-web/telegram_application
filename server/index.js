import * as dotenv from 'dotenv'
import Bot from 'node-telegram-bot-api'
dotenv.config()

const bot = new Bot(process.env.TOKEN, { polling: true })
const url = 'https://funny-kleicha-8671e1.netlify.app/'
bot.on('message', async (message) => {
    const chatId = message.chat.id
    const text = message.text
    if (text === '/start') {
        await bot.sendMessage(chatId, 'Ниже появится кнопка', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Заполнить форму", web_app: { url } }]
                ]
            }
        })
    }
})