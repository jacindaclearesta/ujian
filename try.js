const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/pucing", (req, res) => {
    let km = Number(req.body.km)
    let hm = Number(req.body.hm)
    let dam = Number(req.body.dam)
    let m = Number(req.body.m)
    let dm = Number(req.body.dm)
    let cm = Number(req.body.cm)
    let mm = Number(req.body.mm)
    
    let hektometer = km * 10
    let dekameter = km * 100
    let meter = km * 1000
    let desimeter = km * 10000
    let centimeter = km * 100000
    let milimeter = km * 1000000

    let response = {
            hektometer: hektometer,
            dekameter: dekameter,
            meter: meter,
            desimeter: desimeter,
            centimeter: centimeter,
            milimeter: milimeter
            
        }
    res.json(response)
})

app.listen(1813, () => {
    console.log("Server run on port 1813");
    })