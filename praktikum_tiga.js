const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/tabung", (req,res) => {
    
    let r = Number(req.body.r) 
    let tinggi = Number(req.body.tinggi)  
    let luas_permukaan = 2 * 3.14 * r * tinggi + 2 * 3.14 * r ** 2
    let volume = 3.14 * r ** 2 * tinggi
    let response = {
    r: r,
    tinggi: tinggi,
    luas_permukaan: luas_permukaan,
    volume: volume
    }
    res.json(response)
    })

app.listen(1813, () => {
    console.log("Server run on port 1813");
    })