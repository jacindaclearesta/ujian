const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/balok", (req,res) => {
    
    let panjang = Number(req.body.panjang) 
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)  
    let luas_permukaan = (2*panjang*lebar)+(2*panjang*tinggi)+(2*lebar*tinggi)
    let volume = panjang*lebar*tinggi
    let response = {
    panjang: panjang,
    lebar: lebar,
    tinggi: tinggi,
    luas_permukaan: luas_permukaan,
    volume: volume
    }
    res.json(response)
    })

app.listen(1813, () => {
    console.log("Server run on port 1813");
    })