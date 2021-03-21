const User = require('../models/User');
const mailController = require('./mailController');

const create = async (req, res) => {
  res.render('users/create.njk');
};

const store = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = { name, email, password };

    await User.createAutoInc(newUser);

    await mailController.sendCreateUser(email);

    res.redirect('/');
  } catch (err) {
    console.error(err);
  }
};

module.exports = { create, store };
