const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Signup extends Model {}

Signup.init(
  {
    SignupId: {
      primaryKey: true,
      type: DataTypes.STRING(255),
    },
    firstName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    email: {
      unique: false,
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(34),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);

module.exports = Signup;
