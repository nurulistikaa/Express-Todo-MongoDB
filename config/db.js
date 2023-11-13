const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://nurulistika:istika16@cluster0.fhbqwau.mongodb.net/my_app"

const db = mongoose.connect(DB_URL);

module.exports = db;