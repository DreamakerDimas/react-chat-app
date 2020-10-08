'use strict';
const { Model } = require('sequelize');
const {
  transformKeys,
} = require('../../middlewares/validationSchemas/userSchema');
module.exports = (sequelize, DataTypes) => {
  const Chat = sequelize.define(
    'Chat',
    {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  Chat.associate = function (models) {
    Chat.belongsTo(models.User, {
      foreignKey: 'userId',
    });
  };
  return Chat;
};
