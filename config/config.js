const config = {
  db: {
    client: 'mongoose',
    connection: {
      url: process.env.DB_CONNECTION_URL,
    },
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  session: {
    secret: process.env.JWT_SECRET,
    expiresIn: '1h',
  },
};

module.exports = config;