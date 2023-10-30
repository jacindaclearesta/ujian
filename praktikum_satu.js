const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/kubus", (req,res) => {
    
    let rusuk = Number(req.body.rusuk) 
    let luas_permukaan = 6 * rusuk ** 2
    let volume = rusuk ** 3
    
    let response = {
    rusuk: rusuk,
    luas_permukaan: luas_permukaan,
    volume: volume
    }
    res.json(response)
    })

app.listen(1813, () => {
    console.log("Server run on port 1813");
    })