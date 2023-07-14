//-----------------------------------start of module imports-----------------------------------------------------------
const express = require('express')
const cors = require('cors')
//-----------------------------------end of module imports-----------------------------------------------------------


//--------------------------------start of app configuartions ---------------------------------------------------------
const app = express()
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))
//--------------------------------end of app configuartions -------------------------------------------------------------


module.exports = app