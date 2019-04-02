const UserModel = require('../../../database/user');

module.exports = async (_, { id, input }) => {
	const user = await UserModel.findByPk(id);

	if (user === null) {
		return {
			ok: false,
			error: `User with ID '${id}' is not defined`,
		};
	}

	await user.update(input);

	return {
		ok: true,
		user,
	};
};
