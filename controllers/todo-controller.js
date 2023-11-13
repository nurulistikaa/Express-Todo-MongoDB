const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const todos = await Todo.find().populate("userId", ["name", "email"]);

      res.status(200).json({
        message: "Berhasil mendapatkan todo",
        data: todos,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal Melihat All Todo",
      });
    }
  },
  getTodoById: async (req, res) => {
    try {
      const id = req.params.id;
      const todo = await Todo.findById(id).populate("userId");
      res.status(200).json({
        message: "Berhasil mendapatkan todo by id",
        data: todo,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  createTodo: async (req, res) => {
    try {
      let data = req.body;
      await Todo.create(data);
      res.status(200).json({
        message: "Berhasil membuat data todo",
      });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  },
  
};