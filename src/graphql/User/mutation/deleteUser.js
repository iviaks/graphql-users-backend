const UserModel = require('../../../database/user');

module.exports = async (_, { id }) => {
	const user = await UserModel.findByPk(id);

	if (user === null) {
		return {
			ok: false,
			error: `User with ID '${id}' is not defined`,
		};
	}

	await user.destroy();

	return {
		ok: true,
	};
};
