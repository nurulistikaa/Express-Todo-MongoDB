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