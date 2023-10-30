const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

    app.post("/fisika", (req, res) => {
    let kecepatan = Number(req.body.kecepatan)
    let jarak = Number(req.body.jarak)
    let waktu = Number(req.body.waktu)
    let v = jarak/waktu
    let s = kecepatan * waktu
    let t = jarak/kecepatan
    

    let response = {
        kecepatan: kecepatan,
        jarak: jarak,
        waktu: waktu,
        v: v,
        s: s,
        t: t,
        }
        res.json(response) 

    if(kecepatan){ 
        return jarak, waktu
    } else if (jarak){
        return kecepatan, waktu
    } else {
        return kecepatan, jarak
    }         
    })

    app.listen(1813, () => {
        console.log("Server run on port 1813");
        })