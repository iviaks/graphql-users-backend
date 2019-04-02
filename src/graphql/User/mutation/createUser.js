const bcrypt = require('bcrypt');

const UserModel = require('../../../database/user');
const config = require('../../../config');

const generatePassword = password =>
	bcrypt.hash(password, config.password.salt);

module.exports = async (
	_,
	{ input: { username, password: pwd, ...input } },
) => {
	if (await UserModel.count({ where: { username } })) {
		return {
			ok: false,
			error: `User with username '${username}' already exists`,
		};
	}

	const password = await generatePassword(pwd);

	const user = await UserModel.create({ username, password, ...input });

	return {
		ok: true,
		user,
	};
};
