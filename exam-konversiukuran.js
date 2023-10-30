const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/hayya", (req, res) => {
    let km = Number(req.body.km)
    let hm = Number(req.body.hm)
    let dam = Number(req.body.dam)
    let m = Number(req.body.m)
    let dm = Number(req.body.dm)
    let cm = Number(req.body.cm)
    let mm = Number(req.body.mm)
    
    let kilometer = mm / 1000000
    let hektometer = mm / 100000
    let dekameter = mm / 10000
    let meter = mm / 1000
    let desimeter = mm / 100
    let centimeter = mm / 10

    let response = {
            kilometer: kilometer,
            hektometer: hektometer,
            dekameter: dekameter,
            meter: meter,
            desimeter: desimeter,
            centimeter: centimeter
                }
    res.json(response)
})

app.listen(1813, () => {
    console.log("Server run on port 1813");
    })