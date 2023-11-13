const Todo = require("../models/todo");
const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json({
        message: "Berhasil mendapatkan user",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal Melihat All User",
      });
    }
  },

  getUserById: (req, res) => {
      
  },
  
  getUserTodos: async (req, res) => {
    try {
      const id = req.params.id;
      const todos = await Todo.find({ userId: id }).populate("userId", [
        "name",
        "email",
      ]);
      res.status(200).json({
        message: "Berhasil mendapatkan user todos",
        data: todos,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  createUser: async (req, res) => {
    try {
      let data = req.body;
      await User.create(data);
      res.status(200).json({
        message: "Berhasil membuat data user",
      });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  },
};