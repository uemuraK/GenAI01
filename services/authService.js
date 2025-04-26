const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (payload) => {
  // Hash the password
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const newUser = new User({
    username: payload.username,
    email: payload.email,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};

exports.login = async (payload) => {
  const user = await User.findOne({ email: payload.email }).select('+password');

  if (!user) {
    return { user: null, token: null };
  }

  const isMatch = await bcrypt.compare(payload.password, user.password);
  if (!isMatch) {
    return { user: null, token: null };
  }

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user: user._doc, token };
};