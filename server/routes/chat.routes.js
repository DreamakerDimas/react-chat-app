const { Router } = require('express');
const { User, Chat, Sequelize } = require('../db/models');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { message, userId } = req.body;
    const createdMessage = await Chat.create({
      message,
      userId,
    });
    if (createdMessage) {
      res.status(201).send('Message created');
    }
    throw new Error();
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const chat = await Chat.findAll({
      include: {
        model: User,
        attributes: ['firstName', 'lastName'],
      },
    });

    if (chat) {
      res.json({ chat });
    }
    throw new Error();
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
