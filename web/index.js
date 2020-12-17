const express = require("express")

const app = express()
app.use(helmet());

const {core} = require("core")
const {infra} = require("infra")

app.get('/', (req, res) => {
    
    res.send(`Hello <p>${core()}</p><p>${infra()}</p>`)
})

app.listen(3000);