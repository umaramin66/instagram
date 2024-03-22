const { verify } = require("jsonwebtoken");
require("dotenv").config;

module.exports = {
  middleware: async (req, res, next) => {
    try {
      if (req.cookies.token == undefined || null) {
        return res.send({
          error: "unauthorised User",
        });
      }
      verify(req.cookies.token, process.env.SECRET, (error, user) => {
        console.log("user", user);
        if (error) {
          return res.send({
            error: "unauthorised User",
          });
        }
        console.log("user Data", user);
        next();
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
