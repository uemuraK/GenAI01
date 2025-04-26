const { User } = require('../models');
const { authService } = require('../services');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  // Business logic for user registration
  const newUser = await authService.register(req.body);
  res.status(201).send(newUser);
};

exports.login = async (req, res) => {
  // Business logic for user login
  const { user, token } = await authService.login(req.body);
  res.send({ user, token });
};