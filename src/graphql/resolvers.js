// Users

const UserQuery = require('./User/query');
const UserMutation = require('./User/mutation');

module.exports = {
	Query: {
		...UserQuery,
	},
	Mutation: {
		...UserMutation,
	},
};
