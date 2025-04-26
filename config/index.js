config/index.js
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from file
dotenv.config({ path: path.join(__dirname, '..', '.env') });

// Export environment-specific configurations
const { env } = process.env;

const config = {
  development: {
    env,
    databaseUrl: process.env.DB_CONNECTION_URL_DEV,
    port: process.env.PORT,
  },
  production: {
    env,
    databaseUrl: process.env.DB_CONNECTION_URL_PROD,
    port: process.env.PORT,
  },
};

module.exports = config[env];
