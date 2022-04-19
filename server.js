'use strict';

const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 8080
const HOST = process.env.HOST

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World - NodeJS is running on Qoddi!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
