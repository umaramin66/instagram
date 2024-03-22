const sequelize = require("../bin/dbConnection");
const Users = require("./definitions/users");
const Signup = require("./definitions/signup");

//Relations Starts Here//

const models = {
  Users,
  Signup,
};

const db = {};
db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
