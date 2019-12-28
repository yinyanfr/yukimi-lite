const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

const getFile = (n) => new Promise((resolve, reject) => {
    fs.readFile(n, (err, data) => {
        if(err) reject(err)
        else resolve(data)
    })
})

app.get("/content", async (req, res) => {
    try {
        const [chs, cht, newchs, newcht] = (await Promise.all([
            getFile(path.join(__dirname, "./chs.md")),
            getFile(path.join(__dirname, "./cht.md")),
            getFile(path.join(__dirname, "./newchs.md")),
            getFile(path.join(__dirname, "./newcht.md"))
        ])).map(e => e.toString())

        res.send({chs, cht, newchs, newcht})
    } catch (err) {
        res.status(400).send(err)
    }
})

app.use(express.static(path.join(__dirname, "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(20200)
