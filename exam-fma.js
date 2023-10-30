const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

    app.post("/seblak", (req, res) => {
    let f = Number(req.body.f)
    let m = Number(req.body.m)
    let a = Number(req.body.a)

    let gaya = m * a
    let massa = f / a
    let percepatan = f / m

    let response = {
        f: f,
        m: m,
        a: a,
        gaya: gaya,
        massa: massa,
        percepatan: percepatan
        }
        res.json(response)
    })

    app.listen(1813, () => {
        console.log("Server run on port 1813");
        })

        