const bcrypt = require('bcryptjs');

exports.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

exports.comparePassword = (inputPassword, hashedPassword) => {
  return bcrypt.compareSync(inputPassword, hashedPassword);
};