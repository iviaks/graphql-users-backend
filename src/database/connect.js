const Sequelize = require('sequelize');

const databaseUrl =
	process.env.DATABASE_URL ||
	'postgres://uyhphmqadkobuq:ed0b7acbf60b0e8af3009cac00c03a5b86696591fc385c8cab071b3c741a9aa6@ec2-184-73-216-48.compute-1.amazonaws.com:5432/dejk1311bulju';

module.exports = new Sequelize(databaseUrl);
