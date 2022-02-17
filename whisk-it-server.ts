const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.static(path.resolve(__dirname, './src/')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/public/index.html'))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
