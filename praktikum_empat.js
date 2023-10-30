const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/bola", (req,res) => {
    
    let r = Number(req.body.r) 
    let luas_permukaan = 4 * 3.14 * r ** 2
    let volume = 4/3 * 3.14 * r ** 3
    let response = {
    r: r,
    luas_permukaan: luas_permukaan,
    volume: volume
    }
    res.json(response)
    })

app.listen(1813, () => {
    console.log("Server run on port 1813");
    })