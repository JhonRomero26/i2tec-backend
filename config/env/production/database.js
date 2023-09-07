module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'i2tec'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'i2tec'),
			user: env('DATABASE_USERNAME', 'i2tec'),
			password: env('DATABASE_PASSWORD', 'i2tecUNL1859'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
