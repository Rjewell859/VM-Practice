const express = require('express');
const _ = require("underscore");
const app = express();
const header = '<style>body { background: lightblue; }</style>';

app.get('/', (req, res) => {
  message = header + '<h1>Hello Express app!</h1>';
  message += '<p><a href="/blastoff">Blast off</a></p>';
  message += '<p><a href="/diceroll">Roll a die</a></p>';
  //Create links to two more pages you've created here
  message += '<p><a href="/page1">My Page 1</a></p>';
  message += '<p><a href="/page2">My Page 2</a></p>';
  res.send(message);
});

app.get("/blastoff", (req, res) => {
  let message = header +'<h1>Count down begins now ...</h1>';

  for (let i = 10; i >= 0; i--) {
    message += '<p>' + i + ' ...</p>';
  }
  
  message += '<h2>Blast off!!!!</h2>';
  message += '<p><a href="/">Home</a></p>';
  res.send(message);
});

app.get('/diceroll', (req, res) => {
  let message = header + '<h1>Dice Roll results:</h1>';
  message += '<p>Dice roll goes here!</p>'
  message += '<p><a href="/">Home</a></p>';
  res.send(message);
});

app.get('/page1', (req, res) => {
  let message = header + '<h1>Meg Prescott Page 1</h1>';
  
  message += '<p>This is my first page!!!</p>'

  message += '<p><a href="/">Home</a></p>';
  res.send(message);
});

app.get('/page2', (req, res) => {
  let message = header + '<h1>Meg Prescott Page 2</h1>';
  
  message += '<p>This is my second page!!!</p>'

  message += '<p><a href="/">Home</a></p>';
  res.send(message);
});

app.listen(3000, () => {
  console.log('server started');
});
