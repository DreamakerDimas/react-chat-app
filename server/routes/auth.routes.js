const { Router } = require('express');
const bcrypt = require('bcryptjs');
const { User } = require('../db/models');
const validateUser = require('../middlewares/user/validateUser');

const router = Router();

router.post('/register', validateUser, async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    if (createdUser) {
      return res.status(201).send(createdUser);
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ where: { email } });

    if (!foundUser) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong password' });
    }

    res.json({ foundUser });
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
});
