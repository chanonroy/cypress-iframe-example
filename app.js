const express = require('express')
const app = express()
const path = require('path');
const port = 4500;

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/index.html')));
app.get('/inner', (req, res) => res.sendFile(path.join(__dirname+'/inner.html')));
app.get('/form', (req, res) => res.sendFile(path.join(__dirname+'/form.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))