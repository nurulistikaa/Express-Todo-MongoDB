const express = require("express");
const route = express.Router();

const {
  getAllTodo,
  getTodoById,
  createTodo,
  editTodo,
  deleteTodo,
  deleteAllTodo
} = require("../controllers/todo-controller");
const verifyToken = require("../middleware/auth");

route.get("/", getAllTodo);
route.get("/:id", getTodoById);
route.post("/", createTodo);
route.put("/:id", verifyToken, editTodo);
route.delete("/:id", verifyToken, deleteTodo);
route.delete("/", deleteAllTodo);

module.exports = route;