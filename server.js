'use strict';


const express = require('express');

const app = express();

const cookieParser = require('cookie-parser');

const cookieName = 'abtest';

app.use(cookieParser());
app.use(express.static('public'));

const assignAB = () => ['a','b'][Math.floor(Math.random()*2)];

app.get('/', (req, res)=> {
  const cookie = req.cookies[cookieName];
if (cookie === undefined) {
  res.cookie(cookieName, assignAB(), {});
}
res.sendFile(__dirname + '/views/index.html')
})

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));
