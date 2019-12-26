const express = require("express")
const fs = require("fs")

const app = express()

const getFile = (n) => new Promise((resolve, reject) => {
    fs.readFile(n, (err, data) => {
        if(err) reject(err)
        else resolve(data)
    })
})

app.get("/content", async (req, res) => {
    try {
        const [chs, cht] = (await Promise.all([
            getFile("./chs.md"),
            getFile("./cht.md")
        ])).map(e => e.toString())

        res.send({chs, cht})
    } catch (err) {
        res.status(400).send(err)
    }
})

app.listen(20200)
