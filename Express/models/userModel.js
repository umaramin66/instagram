const { models } = require("./index");
module.exports = {
  createUser: async (body) => {
    try {
      const createdUser = await models.Users.create({ ...body });
      return {
        response: createdUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  getUserByUserName: async (username) => {
    try {
      const user = await models.Users.findOne({
        where: {
          username: username,
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
