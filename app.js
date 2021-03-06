const http = require("http");
const path = require("path");
const fs = require("fs");
const request = require("request");
const express = require("express");

const app = express();
app.use(express.static(__dirname + ''));
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

httpServer.listen(3000, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

