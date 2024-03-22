const routes = require("express").Router();
const {
  createUser,
  // getAllUser,  
} = require("../controllers/userController");
// const { middleware } = require("../middleware");

routes.post("/createUser", createUser);
// routes.get("/getAllUser", middleware, getAllUser);
module.exports = routes;
