let config = require('./common');

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development';
}

config = { ...config, ...require(`./${process.env.NODE_ENV}`) };

module.exports = config;
