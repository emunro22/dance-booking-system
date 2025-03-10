const path = require('path');
const nedb = require('gray-nedb');

const coursesDB = new nedb({
  filename: path.join(__dirname, '..', 'database', 'courses.db'),
  autoload: true
});

const usersDB = new nedb({
  filename: path.join(__dirname, '..', 'database', 'users.db'),
  autoload: true
});

module.exports = { coursesDB, usersDB };
