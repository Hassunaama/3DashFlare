const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')
fs = require('fs');

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('u are in the wrong place, you should be at opendash.netlify.com or at /api/.')
})

app.get('/api/', (req, res) => {
    res.status(404).send('<h1>nope.</h1>')
})

app.

app.get('/', (req, res) => {
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`http://localhost:${port}/api/`)
})