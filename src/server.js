const path = require('path');

const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');

const UserModel = require('./database/user');

const resolvers = require('./graphql/resolvers');

const StartServer = async () => {
	const typeDefs = importSchema(
		path.join(__dirname, './graphql/schema.graphql'),
	);
	const schema = makeExecutableSchema({ typeDefs, resolvers });

	const server = new ApolloServer({ schema });

	await UserModel.sync({ force: true });

	return server.listen();
};

StartServer().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
