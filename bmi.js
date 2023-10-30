const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.post("/BMI", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
    

    let bmi = berat / (tinggi**2)
    let status = get_status(bmi)

    function get_status(bmi){
        if(bmi < 18.5){ 
            return 'Kekurangan berat badan'
        } else if (bmi >= 18.5 && bmi <25){
            return 'Normal (ideal)'
        } else if (bmi >= 25 && bmi <30){
            return 'Kelebihan berat badan'
        } else {
            return 'Kegemukan (Obesitas)'
        }        
    }

    
    let response = {
        berat_badan: berat,
        tinggi_badan: tinggi,
        bmi: bmi,
        status: status
    }

    res.json(response)
})

app.listen(1813, () => {
    console.log("Server run on port 1813");
    })