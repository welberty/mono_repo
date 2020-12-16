const express = require("express")
const app = express()
const {core} = require("core")
const {infra} = require("infra")

app.get('/', (req, res) => {
    
    res.send(`Hello <p>${core()}</p><p>${infra()}</p>`)
})

app.listen(3000);