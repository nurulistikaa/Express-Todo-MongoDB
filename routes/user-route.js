const express = require("express");
const {
  getAllUser,
  getUserById,
  createUser,
  getUserTodos
} = require("../controllers/user-controller");

const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/todos", verifyToken, getUserTodos);
route.post("/", createUser);

module.exports = route;