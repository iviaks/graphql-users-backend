const UserModel = require('../../../database/user');

exports.users = (_, { filters = {} }) => UserModel.findAll({ where: filters });
exports.user = (_, { id }) => UserModel.findByPk(id);
