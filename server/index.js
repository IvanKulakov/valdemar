require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./db.js');
const path = require('path');
const { Reviews } = require('./models'); // Імпортуємо модель Reviews
const errorMiddleware = require('./middleWare/ErrorMiddleWare');
const TelegramBot = require('node-telegram-bot-api');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(errorMiddleware);

const bot = new TelegramBot(process.env.TG_TOKEN, { polling: true });

app.get('/reviews', async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const offset = (pageNumber - 1) * limitNumber;

    const reviews = await Reviews.findAndCountAll({
      limit: limitNumber,
      offset: offset,
    });

    const response = {
      totalItems: reviews.count, // Загальна кількість записів
      totalPages: Math.ceil(reviews.count / limitNumber), // Загальна кількість сторінок
      currentPage: pageNumber, // Поточна сторінка
      items: reviews.rows, // Відгуки на поточній сторінці
    };

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Щось пішло не так' });
  }
});

// Обробник для додавання відгуків
app.post('/reviews', async (req, res) => {
  try {
    console.log(req.body);
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: "Ім'я та опис є обов'язковими" });
    }

    const message = `Новий відгук від ${name}: ${description}\n\nСхвалити відгук?`;
    bot.sendMessage(process.env.TG_CHAT_ID, message, {
      reply_markup: {
        inline_keyboard: [
          [
            { text: 'Схвалити', callback_data: 'approve' },
            { text: 'Відхилити', callback_data: 'reject' },
          ],
        ],
      },
    });

    res.json({ message: 'Відгук надіслано на схвалення' });
  } catch (error) {
    res.status(500).json({ message: 'Щось пішло не так' });
  }
});

// Обробка відповіді від бота
bot.on('callback_query', async (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;

  const [_, name, description] = query.message.text.match(
    /Новий відгук від (.+): (.+)\n\nСхвалити відгук\?/
  );

  if (query.data === 'approve') {
    // Зберігаємо схвалений відгук в базу даних
    try {
      await Reviews.create({ name, description });
      bot.sendMessage(chatId, 'Відгук схвалено та додано до бази даних.', {
        reply_to_message_id: messageId,
      });
    } catch (error) {
      bot.sendMessage(chatId, 'Помилка при збереженні відгуку.', {
        reply_to_message_id: messageId,
      });
    }
  } else {
    bot.sendMessage(chatId, 'Відгук відхилено.', {
      reply_to_message_id: messageId,
    });
  }
});

// Запуск сервера
const PORT = process.env.PORT || 4444;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log('server started on port:' + PORT);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
