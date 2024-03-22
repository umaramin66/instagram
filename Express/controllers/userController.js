const userService = require("../service/userService");
const joi = require("joi");

const createUserSchema = joi.object().keys({
  username: joi.string().required(),
  password: joi.string().required(),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const createdUser = await userService.createUser(validate);
      if (createdUser.error) {
        return res.send({
          error: createdUser.error,
        });
      }
      return res.send({
        response: createdUser.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
