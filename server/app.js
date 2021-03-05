const http = require('http');
const path = require('path');
const express = require('express');

var app = express();
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

app.get("/*", (req, res) => {

    let url = path.join(__dirname, 'build', 'index.html');
    res.sendFile(url);

});

app.use('/', () => {

    console.log("🔥");;

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
