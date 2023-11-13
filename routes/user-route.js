const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  getUserTodos
} = require("../controllers/user-controller");

const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.get("/:id/todos", getUserTodos);
route.post("/", createUser);

module.exports = route;