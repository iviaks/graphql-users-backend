const Sequelize = require('sequelize');

const sequelize = require('./connect');

class User extends Sequelize.Model {}

const attributes = {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
};

const options = {
  sequelize,
  timestamps: true,
};

User.init(attributes, options);

module.exports = User;
