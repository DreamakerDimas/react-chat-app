const { User } = require('../db/models');
const bcrypt = require('bcryptjs');

const UserController = {
  createUser: async function (req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);

      const createdUser = await User.create(req.body);
      if (createdUser) {
        return res.status(201).send(createdUser);
      }
      throw new Error();
    } catch (e) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  getUser: async function (req, res, next) {
    try {
      const foundUser = await User.findByPk(req.params.id);
      if (foundUser) {
        delete foundUser.password;
        return res.status(200).send(foundUser);
      }
      return res.status(404).json({ message: 'User not found' });
    } catch (e) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  updateUser: async function (req, res, next) {
    try {
      req.body.password = await bcrypt.hash(req.body.password, 10);

      const [RowsCount, Rows] = await User.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });
      if (RowsCount) {
        const data = Rows[0].get();
        return res.status(200).send(data);
      }
      return res.status(404).json({ message: 'User not found' });
    } catch (e) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
  deleteUser: async function (req, res, next) {
    try {
      const deletedUser = await User.destroy({
        where: { id: req.params.id },
      });
      if (deletedProduct) {
        return res.status(200).send(deletedUser);
      }
      return res.status(404).json({ message: 'User not found' });
    } catch (e) {
      res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = UserController;
