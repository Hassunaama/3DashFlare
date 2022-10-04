const express = require('express')
const app = express()
const port = 80
const bodyParser = require('body-parser')
const fs = require('fs');
const https = require('https');

app.engine("html", require("ejs").renderFile);
app.use(express.static("static"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('noice')
})

app.get('/3Dash/get_recent.php', (req, res) => {
  fs.readFile('recente.txt', 'utf8', function(err, data){
        
      // Display the file content
      console.log('sentrecentdata');
      res.send(data);
  });
  delugedropfun('recente.txt')
});

function delugedropfun() {
  https.get('https://delugedrop.com/3Dash/get_recent.php', res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);
  
    res.on('data', chunk => {
      data.push(chunk);
    });
  
    res.on('end', () => {
      console.log('Response ended: ');
      const delugedrop = Buffer.concat(data).toString()
      //JSON.parse(Buffer.concat(data).toString());
      fs.writeFile('recente.txt', delugedrop, function (err) {
        if (err) return console.log(err);
        console.log('downloaded');
      });
      
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
}

app.get('/obtenirded%C3%A9lugelol', (req, res) => {
  res.send('Bienvenue au sous-sol de Délugedrop.')
  delugedropfun()
  setInterval(delugedropfun, 1800000);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`http://localhost:${port}/api/`)
})