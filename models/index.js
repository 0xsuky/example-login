const { Sequelize } = require('sequelize');
const User = require('./user.js');

const db = {};
const sequelize = new Sequelize('sqlite::memory');

db.sequelize = sequelize;

db.User = User;

User.init(sequelize);

User.associate(sequelize);

module.exports = db;
