const joi = require("joi");
const { login } = require("../service/authService");
const loginSchema = joi.object().keys({
  username: joi.string().min(1).required(),
  password: joi.string().min(6).required(),
  // numbers: joi.array().items(joi.number()).required(),
});
module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);

      const loginResponse = await login(validate);

      if (loginResponse.error) {
        return res.send({
          error: loginResponse.error,
        });
      }

      // const maxNumber = Math.max(...validate.numbers);
      res.cookie("token", loginResponse.response, {
        maxAge: 60000,
        httpOnly: true,
      });
      return res.send({
        response: loginResponse.response,
        // maxNumber: maxNumber,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  // logout: (req, res) => {
  //   return res.send({
  //     message: "logout",
  //     data: req.query,
  //   });
  // },
};
