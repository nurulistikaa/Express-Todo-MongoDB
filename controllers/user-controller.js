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

  getUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      res.status(200).json({
        message: "Berhasil mendapatkan user by id",
        data: user,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
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

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (user) {
        res.status(200).json({
          message: "Berhasil menghapus data user by id",
          data: user,
        });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  
  deleteAllUser: async (req, res) => {
    try {
      const user = await User.deleteMany();
      if (user.deletedCount > 0) {
        res.status(200).json({
          message: "Berhasil menghapus semua data user",
          data: user,
        });
      } else {
        res.status(404).json({ message: "No users to delete" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};