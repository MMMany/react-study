const express = require('express');
const app = express();
const port = 4000;

app.get('/good', (req, res) => {
  res.status(200).json({'a': 1});
});

app.get('/bad', (req, res) => {
  res.setHeader('content-type', 'application/json');
  res.send('many');
});

const server = app.listen(port, () => {
  console.log(`express test : http://localhost:${port}/good`);
});