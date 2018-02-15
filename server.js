const express = require('express')
const os = require('os')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/status', (req, res) => res.json(os))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
