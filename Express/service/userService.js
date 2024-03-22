const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");

module.exports = {
  createUser: async (body) => {
    try {
      const user = {
        userId: uuid(),
        username: body.username,
        password: await hash(body.password, 10),
      };
      const createdUser = await userModel.createUser(user);
      if (createdUser.error) {
        return {
          error: createdUser.error,
        };
      }
      delete createdUser.response.dataValues.password;
      return {
        response: createdUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
