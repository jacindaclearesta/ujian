const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/berat", (req, res) => {
    let mg = Number(req.body.mg)
    
    let kilogram = mg / 1000000
    let hektogram = mg / 100000
    let dekagram = mg / 10000
    let gram = mg / 1000
    let desigram = mg / 100
    let centigram = mg / 10

    let response = {
            kilogram: kilogram,
            hektogram: hektogram,
            dekagram: dekagram,
            gram: gram,
            desigram: desigram,
            centigram: centigram
                }
    res.json(response)
})

app.listen(1813, () => {
    console.log("Server run on port 1813");
    })