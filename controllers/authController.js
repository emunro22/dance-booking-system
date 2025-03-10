const { usersDB } = require('../models/db');

const adminUsername = 'euanmunro1';
const adminPassword = 'password';

exports.getLogin = (req, res) => {
  res.render('login');
};

exports.postLogin = (req, res) => {
  const { username, password } = req.body;

  if (username === adminUsername && password === adminPassword) {
    req.session.admin = true;
    return res.redirect('/admin');
  }

  usersDB.findOne({ username, password }, (err, user) => {
    if (err || !user) {
      return res.send("Invalid credentials");
    }
    req.session.admin = true;
    req.session.user = user;
    return res.redirect('/admin');
  });
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect('/');
};

exports.getSignup = (req, res) => {
  const captchaCode = Math.random().toString(36).substring(2, 8).toUpperCase();
  req.session.captcha = captchaCode;
  res.render('signup', { captcha: captchaCode });
};

exports.postSignup = (req, res) => {
  const { username, password, captcha } = req.body;
  if (captcha !== req.session.captcha) {
    return res.send("Captcha mismatch! Please go back and try again.");
  }
  req.session.captcha = null; 

  usersDB.insert({ username, password, isAdmin: true }, (err, newUser) => {
    if (err) {
      return res.send("Error creating user");
    }
    req.session.admin = true;
    req.session.user = newUser;
    res.send("User created successfully! <a href='/admin'>Click here to go to the Admin Dashboard.</a>");
  });
};
