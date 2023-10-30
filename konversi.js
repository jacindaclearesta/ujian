app.post("/reamur", (req, res) => {
    let reamur = Number(req.body.reamur)
    let celcius = 5/4 * reamur
    let fahrenheit = 9/4 * reamur + 32
    let kelvin = 5/4 * reamur + 273

    let response = {
        reamur: reamur,
        "result: " : {
        celcius: celcius,
        fahrenheit: fahrenheit,
        kelvin: kelvin
        }
        }
    res.json(response)
})