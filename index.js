'use strict'
const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 3002

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get('/webhook', (req, res) => {
    res.send('Ola mundo')
})

app.post('/webhook', (req, res) => {
    var data = req.body;
    res.send(data);
    console.log(data)
})

app.listen(port, () => {
    console.log(`servico ocorrendo na porta ${port}`);
})