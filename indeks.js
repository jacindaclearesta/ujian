const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.get("/test", (req,res) => {
    let response = {
    message: "Ini end-point pertama ku", 
    method: req.method, 
    code: res.statusCode 
    }
    res.json(response)
    })

    app.listen(1813, () => {
        console.log("Server run on port 1813");
        })
    