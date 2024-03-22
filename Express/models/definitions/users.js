const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Users extends Model {}
Users.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    username: {
      unique: true,
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Users;
