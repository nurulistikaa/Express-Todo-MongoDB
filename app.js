const express = require('express');
const cors = require('cors');

const allRoutes = require("./routes")
const db = require("./config/db")

const app = express();;

const PORT = process.env.PORT || 3000

db.then(() => {
    console.log("Berhasil Connect Ke MongoDB")
})
.catch(() => {
    console.log("Gagal Connect Ke MongoDB")
})

app.use(cors())
app.use(express.json())

app.use(allRoutes)

app.listen(PORT, () =>{
    console.log("server running on port " + PORT)
})